// server.js
const express = require('express');
const cors = require('cors');
const sendReport = require('./send_report');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/send-report', (req, res) => {
  sendReport((err, msg) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }
    res.json({ success: true, message: msg });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
