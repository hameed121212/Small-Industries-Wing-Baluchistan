module.exports = async (req, res) => {
  const url = 'https://extendsclass.com/api/json-storage/bin/adcaccb';
  try {
    const upstreamRes = await fetch(url, {
      method: req.method === 'POST' ? 'PUT' : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: req.method === 'POST' ? JSON.stringify({ debug: true, time: Date.now() }) : undefined
    });
    const text = await upstreamRes.text();
    return res.status(200).json({
      status: upstreamRes.status,
      statusText: upstreamRes.statusText,
      headers: Object.fromEntries(upstreamRes.headers.entries()),
      body: text
    });
  } catch (err) {
    return res.status(500).json({ error: err.message, stack: err.stack });
  }
};
