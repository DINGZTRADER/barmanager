// send_report.js
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const config = require('./config.json');

const REPORT_FOLDER = path.join(__dirname, 'daily_report');

function sendReport(callback) {
  const files = fs.readdirSync(REPORT_FOLDER).filter(f =>
    f.endsWith('.xlsx') || f.endsWith('.pdf')
  );

  if (files.length === 0) {
    const message = 'No report files found in daily_report.';
    console.error('❌', message);
    if (callback) callback(message);
    return;
  }

  const attachmentPath = path.join(REPORT_FOLDER, files[0]);

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: config.email,
      pass: config.password,
    },
  });

  const mailOptions = {
    from: `"Yellow Haven Bar" <${config.email}>`,
    to: ['yellowhaven@gmail.com', 'wachaexperience@gmail.com'],
    subject: `Yellow Haven Bar Report - ${new Date().toLocaleDateString()}`,
    text: `Hello,\n\nAttached is the latest Yellow Haven bar report.\n\n🟡 Sent from Yellow Haven System.`,
    attachments: [
      {
        filename: path.basename(attachmentPath),
        path: attachmentPath,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Failed to send:', error.message);
      if (callback) callback(error.message);
    } else {
      console.log('✅ Report sent:', info.response);
      if (callback) callback(null, 'Report sent successfully.');
    }
  });
}

module.exports = sendReport;

// Auto-send at 2:00PM daily
if (require.main === module) {
  console.log('⏳ Waiting for 2PM to auto-send report...');
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 14 && now.getMinutes() < 5) {
      sendReport((err, msg) => {
        if (err) console.error('Auto-send error:', err);
        else console.log('Auto-send success:', msg);
      });
    }
  }, 5 * 60 * 1000); // check every 5 minutes
}
