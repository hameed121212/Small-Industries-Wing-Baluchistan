// Vercel Serverless Function: /api/sync
// Universal zero-CORS cloud synchronization engine with real-time CDN cache-busting & server-side union

const CLOUD_MASTER_BIN = 'https://extendsclass.com/api/json-storage/bin/adcaccb';

// In-memory fallback cache for cold-start resiliency
let inMemoryFallback = null;

async function fetchUpstreamWithRetry(url, options = {}, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return res;
      if (res.status === 404) return res;
    } catch (e) {
      if (i === retries) throw e;
    }
    await new Promise(r => setTimeout(r, 250));
  }
  return null;
}

async function handler(req, res) {
  // Universal zero-CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Real-time upstream URL with CDN cache-buster timestamp
  const getUrl = `${CLOUD_MASTER_BIN}?t=${Date.now()}`;

  // GET: Fetch master authoritative state
  if (req.method === 'GET') {
    try {
      const response = await fetchUpstreamWithRetry(getUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      if (response && response.ok) {
        const data = await response.json();
        inMemoryFallback = data;
        return res.status(200).json(data);
      }
    } catch (err) {
      console.error('[API/sync] GET upstream error:', err);
    }

    if (inMemoryFallback) {
      return res.status(200).json(inMemoryFallback);
    }
    return res.status(502).json({ error: 'Failed to fetch from master storage' });
  }

  // POST or PUT: Intelligent union merge & persist to master state
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      let bodyData = req.body;
      if (typeof bodyData === 'string') {
        try { bodyData = JSON.parse(bodyData); } catch (e) {}
      }
      if (!bodyData || typeof bodyData !== 'object') {
        return res.status(400).json({ error: 'Invalid payload' });
      }

      // 1. Fetch current remote master data to merge with (bypassing CDN cache)
      let currentMaster = null;
      try {
        const getRes = await fetchUpstreamWithRetry(getUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });
        if (getRes && getRes.ok) {
          currentMaster = await getRes.json();
        }
      } catch (e) {
        console.warn('[API/sync] Could not pre-fetch master before write:', e);
      }

      let finalData = bodyData;
      if (currentMaster && typeof currentMaster === 'object') {
        // A. Trainees Merge (Union by token so entries from different devices are NEVER lost)
        const traineeMap = new Map();
        // First add existing master trainees
        if (Array.isArray(currentMaster.trainees)) {
          currentMaster.trainees.forEach(t => {
            if (t && t.token) traineeMap.set(t.token, t);
          });
        }
        // Next, merge/update with incoming trainees
        if (Array.isArray(bodyData.trainees)) {
          bodyData.trainees.forEach(t => {
            if (t && t.token) traineeMap.set(t.token, t);
          });
        }
        // Handle explicit deletion if requested
        if (bodyData.deleteTraineeToken) {
          traineeMap.delete(bodyData.deleteTraineeToken);
        }

        // B. Admin Password Protection:
        // Never allow default 'admin123' to overwrite a customized admin password!
        let adminPassword = currentMaster.adminPassword || 'admin123';
        if (bodyData.isExplicitPasswordChange && bodyData.adminPassword) {
          adminPassword = bodyData.adminPassword;
        } else if (bodyData.adminPassword && bodyData.adminPassword !== 'admin123') {
          adminPassword = bodyData.adminPassword;
        }

        // C. Merge Estates (Union by token)
        const estateMap = new Map();
        if (Array.isArray(currentMaster.estates)) {
          currentMaster.estates.forEach(e => { if (e && e.token) estateMap.set(e.token, e); });
        }
        if (Array.isArray(bodyData.estates)) {
          bodyData.estates.forEach(e => { if (e && e.token) estateMap.set(e.token, e); });
        }

        // D. Merge E-files (Union by token)
        const efileMap = new Map();
        if (Array.isArray(currentMaster.efiles)) {
          currentMaster.efiles.forEach(f => { if (f && f.token) efileMap.set(f.token, f); });
        }
        if (Array.isArray(bodyData.efiles)) {
          bodyData.efiles.forEach(f => { if (f && f.token) efileMap.set(f.token, f); });
        }

        // E. Notices
        const notices = Array.isArray(bodyData.notices) && bodyData.notices.length > 0 
          ? bodyData.notices 
          : (currentMaster.notices || []);

        finalData = {
          ...currentMaster,
          ...bodyData,
          adminPassword,
          trainees: Array.from(traineeMap.values()),
          estates: Array.from(estateMap.values()),
          efiles: Array.from(efileMap.values()),
          notices,
          lastUpdated: new Date().toISOString()
        };
      }

      inMemoryFallback = finalData;

      // Persist merged authoritative dataset to master cloud storage
      const response = await fetchUpstreamWithRetry(CLOUD_MASTER_BIN, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        },
        body: JSON.stringify(finalData)
      });

      if (response && response.ok) {
        return res.status(200).json(finalData);
      } else {
        const text = response ? await response.text() : 'No response';
        console.warn('[API/sync] Upstream returned non-200:', text);
        return res.status(200).json(finalData);
      }
    } catch (err) {
      console.error('[API/sync] POST/PUT upstream error:', err);
      return res.status(200).json(inMemoryFallback || { success: true, error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

module.exports = handler;
module.exports.default = handler;