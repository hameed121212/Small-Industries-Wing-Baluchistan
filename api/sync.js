// Vercel Serverless Function: /api/sync
// Provides zero-CORS same-origin REST proxy for multi-device data replication

const CLOUD_MASTER_BIN = 'https://extendsclass.com/api/json-storage/bin/adcaccb';

// In-memory fallback cache in case of upstream network latency
let inMemoryFallback = null;

async function handler(req, res) {
  // Set universal CORS headers
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

  // GET: Fetch master state
  if (req.method === 'GET') {
    try {
      const response = await fetch(CLOUD_MASTER_BIN, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      if (response.ok) {
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

  // POST or PUT: Update master state
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      let bodyData = req.body;
      if (typeof bodyData === 'string') {
        try { bodyData = JSON.parse(bodyData); } catch (e) {}
      }

      inMemoryFallback = bodyData;

      const response = await fetch(CLOUD_MASTER_BIN, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        },
        body: JSON.stringify(bodyData)
      });

      if (response.ok) {
        const result = await response.json();
        return res.status(200).json({ success: true, result });
      } else {
        const text = await response.text();
        return res.status(200).json({ success: true, fallback: true, upstreamStatus: response.status, upstreamResponse: text });
      }
    } catch (err) {
      console.error('[API/sync] POST/PUT upstream error:', err);
      return res.status(200).json({ success: true, fallback: true, error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

module.exports = handler;
module.exports.default = handler;