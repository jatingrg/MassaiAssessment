const express = require('express');
const os = require('os');
const dns = require('dns');
const readDataFile = require('./read');

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.send("Test route is working!");
});

app.get('/readfile', (req, res) => {
  readDataFile((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get('/systemdetails', (req, res) => {
  const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB';
  const freeMem = (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB';
  const cpus = os.cpus();

  res.json({
    platform: os.platform(),
    totalMemory: totalMem,
    freeMemory: freeMem,
    cpuModel: cpus[0]?.model,
    cpuCores: cpus.length
  });
});

app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).json({ error: 'DNS resolution failed' });
    } else {
      const ipv4 = addresses.find(addr => addr.family === 4)?.address;
      const ipv6 = addresses.find(addr => addr.family === 6)?.address;

      res.json({
        hostname: 'masaischool.com',
        ipv4,
        ipv6
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
