# 🚧 La-Cuadrilla-Construction-Tracker

**📅 04/26/2026 – 05/26/2026**

A full-stack construction material tracking system built to help crews, supervisors, and project managers manage inventory, monitor material movement, and reduce delays on job sites.

La-Cuadrilla combines **real-time inventory tracking, QR code scanning, automated alerts, and secure authentication** into one modern platform. 🏗️

---

## 📌 Overview

Construction projects often lose time and money because of:

- Missing materials  
- Poor inventory visibility  
- Manual spreadsheets  
- Delayed restocking  
- Miscommunication between teams  

La-Cuadrilla solves these problems with a centralized system where teams can:

✅ Track materials across job sites  
✅ Scan QR codes instantly  
✅ Monitor stock levels in real time  
✅ Request supplies digitally  
✅ Receive automated alerts  
✅ Improve project efficiency  

Notes: 
https://docs.google.com/document/d/1I1piScX-2qLxasfd3GNMmS-hCGYds-UtUPRUZKh0kWQ/edit?usp=sharing

---


## ✨ Features

### 📦 Inventory Management
- Add, edit, and remove materials  
- Track quantities and locations  
- Real-time stock updates  

### 📱 QR Code Scanning
- Scan materials using device camera  
- Fast check-in / check-out process  
- Reduce manual errors  

### 📝 Material Requests
- Workers request materials directly  
- Supervisors approve requests quickly  

### 🚨 Automated Alerts
- Low stock notifications  
- Material movement alerts  
- Email notifications for urgent updates  

### 🔐 Authentication & Security
- Secure login system  
- Role-based access control  
- Protected user sessions  

### 📊 Dashboard & Reporting
- Current inventory status  
- Material activity logs  
- Request tracking  

---

## 🛠️ Tech Stack

## 🎨 Frontend
- Next.js  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  

## ⚙️ Backend
- Next.js Server Actions  
- API Route Handlers  
- Supabase Auth  
- Supabase Storage  
- Supabase Edge Functions  

## 🗄️ Database
- PostgreSQL  
- Prisma ORM  

## 🚀 Extras
- React Hook Form  
- Zod Validation  
- Resend (Email Alerts)  
- html5-qrcode  

---

## 🧱 Database Design

Core entities include:

- 👤 Users  
- 📦 Materials  
- 🔄 Inventory Transactions  
- 📝 Material Requests  
- 🚨 Alerts  
- 🏗️ Job Sites  

---

## 🔍 Example Workflow

1️⃣ Worker scans a material QR code  
2️⃣ System instantly identifies the item  
3️⃣ Quantity updates after checkout  
4️⃣ If stock is low, manager gets alerted  
5️⃣ Replacement request is submitted automatically  

---

## 💡 Why This Project Matters

Many construction companies still rely on paper logs or spreadsheets.

La-Cuadrilla modernizes operations through automation and live inventory visibility, helping companies:

✅ Reduce shortages  
✅ Prevent delays  
✅ Improve accountability  
✅ Save time  
✅ Increase productivity  

---

## 🔮 Future Improvements

- 📱 Mobile app version  
- 📡 RFID / Barcode support  
- 🤖 AI inventory forecasting  
- 📈 Advanced analytics dashboard  
- 📍 GPS delivery tracking  

---

## 💻 Installation

```bash
git clone https://github.com/yourusername/La-Cuadrilla-Construction-Tracker.git
cd La-Cuadrilla-Construction-Tracker
npm install
npm run dev

