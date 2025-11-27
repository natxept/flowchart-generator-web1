const editBtn = document.getElementById("edit-btn");
const editModal = document.getElementById("editModal");
const closeModal = document.getElementById("closeModal");
const mermaidCodeInput = document.getElementById("mermaidCodeInput");
const saveChangesBtn = document.getElementById("saveChanges");
const displayArea = document.getElementById("display-area");

// ฟังก์ชันเพื่อเปิด modal
editBtn.addEventListener("click", () => {
  // โหลดโค้ด Mermaid ปัจจุบันลงใน textarea จากตัวแปร data_mermaid
  mermaidCodeInput.value = data_mermaid;
  editModal.style.display = "block";
});

// ฟังก์ชันเพื่อปิด modal
closeModal.addEventListener("click", () => {
  editModal.style.display = "none";
});

// ฟังก์ชันเพื่อบันทึกการเปลี่ยนแปลง
saveChangesBtn.addEventListener("click", () => {
  const newMermaidCode = mermaidCodeInput.value.trim();

  // อัพเดตตัวแปร data_mermaid ด้วยโค้ดที่แก้ไขใหม่
  data_mermaid = newMermaidCode;

  // อัพเดตการแสดงผลด้วยโค้ดใหม่
  updateMermaidCode(data_mermaid);

  editModal.style.display = "none";
});

// ปิด modal เมื่อคลิกนอก modal
window.addEventListener("click", (event) => {
  if (event.target === editModal) {
    editModal.style.display = "none";
  }
});
