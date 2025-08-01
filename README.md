Yellow Haven Desktop App

A desktop-based reporting and stock management system for Yellow Haven Bar. Built with HTML, JavaScript, Node.js, and Express, it enables bar staff to record, export, and email daily sales reports easily.

🚀 Features

📊 Sales Tracking UI: Clean HTML interface for tracking stock (beers, sodas, spirits).

📁 Export Options: Export reports to Excel and PDF.

📧 Auto Emailing: Automatically emails the latest report to configured recipients using Nodemailer.

🕑 Daily Auto-send: Automatically sends email at 2PM every day.

🔐 Secure Credentials: Uses .env for protecting sensitive credentials.

🛠️ Setup Instructions

1. Clone the repository

git clone https://github.com/your-username/yellowhaven-desktop-app.git
cd yellowhaven-desktop-app

2. Install dependencies

npm install

3. Create a .env file

SMTP_USER=you@example.com
SMTP_PASS=your_smtp_key_here
SMTP_TO=recipient@example.com
SMTP_NAME=Your Name

4. Run the server

node server.js

Server will start at: http://localhost:3000

📄 How to Use

Open index.html in a browser.

Input your daily stock and sales.

Use buttons to export as PDF/Excel.

Click "📧 Send Report Now" to manually send the report.

Or wait until 2PM — it auto-sends.

📦 Packaging for Desktop (Electron Coming Soon)

Want to turn this into a real desktop app? We'll soon add:

Electron bundling

Auto-launch on boot

Tray icon support

Stay tuned!

🧠 Author

Peter Wacha, Yellow Haven Bar

🛡️ License

MIT License