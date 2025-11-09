// server.js (Node + Express) - simple SSE streamer
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch'); // or use global fetch in newer Node
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // serve your index.html from /public

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if(!OPENAI_KEY) {
  console.error('Set OPENAI_API_KEY in environment!');
  process.exit(1);
}

// Simple SSE endpoint: GET /api/ai/stream?prompt=...
app.get('/api/ai/stream', async (req, res) => {
  const prompt = req.query.prompt || '';
  if(!prompt) {
    res.status(400).send('Missing prompt');
    return;
  }

  // Set headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Flush headers
  res.flushHeaders?.();

  try {
    // Call OpenAI chat/completions (example using streaming) - below is a raw fetch to v1/chat/completions
    // Note: provider may differ; update model param accordingly.
    const openaiResp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // choose model you have access to
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 800,
        temperature: 0.2,
        stream: true
      })
    });

    if(!openaiResp.ok) {
      const errText = await openaiResp.text();
      res.write(`event: message\n`);
      res.write(`data: Error contacting AI provider: ${errText}\n\n`);
      res.end();
      return;
    }

    // openaiResp is a stream that emits chunks (SSE-like). We'll pipe chunks as SSE 'message' events.
    const reader = openaiResp.body.getReader();
    const decoder = new TextDecoder('utf-8');

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      // The provider typically sends lines prefixed "data: ..." - but chunk is raw.
      // We'll send each chunk as-is to the browser; browser appends to output.
      // For production, parse the provider's stream properly.
      // Send as SSE message:
      res.write(`event: message\n`);
      // escape newlines inside data as per SSE spec
      const safe = chunk.replace(/\n/g, '\\n');
      res.write(`data: ${safe}\n\n`);
    }

    // Signal finished
    res.write(`event: message\n`);
    res.write(`data: [DONE]\n\n`);
    res.end();

  } catch (err) {
    console.error('Stream error', err);
    res.write(`event: message\n`);
    res.write(`data: Error: ${err.message}\n\n`);
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
