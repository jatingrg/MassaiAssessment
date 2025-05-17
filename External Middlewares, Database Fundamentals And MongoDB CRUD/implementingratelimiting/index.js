const express = require('express');
const rateLimit = require('express-rate-limit');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

const limitedRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 5,
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json());

app.use('/api/public', apiRoutes);

app.use('/api/limited', limitedRateLimiter, apiRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
