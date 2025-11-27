# 🌟 Flowchart Generator from Text  
สร้างผังงานอัตโนมัติจากข้อความธรรมดา (Mermaid.js + JavaScript)

โปรเจกต์นี้เป็นเว็บแอปที่ช่วยให้ผู้ใช้สามารถพิมพ์ “ข้อความอธิบายการทำงานของระบบ”  
แล้วระบบจะสร้าง **Flowchart แบบอัตโนมัติ** ด้วย Mermaid.js  

เหมาะสำหรับ  
- นักศึกษา  
- คนทำงานที่ต้องทำเอกสาร  
- System analyst / Implement  
- ผู้ที่ต้องการสร้างผังงานรวดเร็ว

---

## 🚀 ฟีเจอร์หลัก

### ✔ 1. แปลงข้อความเป็น Flowchart อัตโนมัติ  
ผู้ใช้กรอกข้อความ → ระบบประมวลผล → แสดง flowchart ทันที

### ✔ 2. ใช้ Mermaid.js ในการวาด Diagram  
แสดงผลเร็ว ไหลลื่น ไม่ต้องติดตั้งอะไรเพิ่ม

### ✔ 3. UI ใช้งานง่าย  
หน้าเว็บแบ่งเป็น 4 ส่วน:
- หน้าแรก (index)
- หน้า Generate Flowchart
- หน้า Manual คู่มือการใช้งาน
- หน้า Contact

### ✔ 4. มีตัวอย่างการใช้งานให้ผู้ใช้เข้าใจได้ง่าย
ภายในเว็บมี ตัวอย่างข้อความ ที่ป้อนเข้าไปเพื่อสร้าง Flowchart
ช่วยให้ผู้ใช้เริ่มใช้งานได้ทันที

---

## 🧰 เทคโนโลยีที่ใช้

| ส่วน | เทคโนโลยี |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Diagram Engine | Mermaid.js |
| UI/UX | Custom design + Background Video |
| Assets | รูปภาพ / วิดีโอพื้นหลัง |

---

## 📁 โครงสร้างโปรเจกต์
project/
│── index.html
│── generator.html
│── manual.html
│── contact.html
│
├── css/
│    └── style.css
│
├── js/
│    └── app.js
│
├── images/
│
├── videos/     ← ใช้สำหรับวิดีโอพื้นหลังของหน้าเว็บ
│     └── background.mp4
│
└── README.md

