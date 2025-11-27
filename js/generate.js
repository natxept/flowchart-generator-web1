let data_mermaid = ""; // ตัวแปรที่เก็บโค้ด Mermaid ที่ได้จาก OpenAI API

document
  .getElementById("flowchartForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const textInput = document.getElementById("prompt-input").value;
    const flowchartContainer = document.getElementById("display-area");
    const downloadButton = document.getElementById("download-svg");

    // ส่งข้อมูลไปยัง OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer YOUR_API_KEY_HERE",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: `Generate a new Mermaid code for: ${textInput}. Ensure the flowchart uses the correct symbols: Start and End with oval shapes, processes with rectangle shapes, decisions and loops with diamond shapes, and input/output with parallelogram shapes. Ensure the flow direction is from top to bottom. Ignore any previous data and focus only on the current input. Provide only the code without any explanations...
`,
          },
        ],
      }),
    });

    const data = await response.json();
    data_mermaid = data.choices[0].message.content.trim(); // เก็บโค้ดในตัวแปร data_mermaid

    // ลบส่วนหัวและส่วนท้ายที่ไม่ต้องการออก
    if (data_mermaid.startsWith("```mermaid")) {
      data_mermaid = data_mermaid.replace("```mermaid", "").trim();
    }
    if (data_mermaid.endsWith("```")) {
      data_mermaid = data_mermaid.replace("```", "").trim();
    }

    // อัพเดตตัวแปร mermaidCode เพื่อแสดงผล
    updateMermaidCode(data_mermaid);

    // แสดงปุ่มดาวน์โหลด
    downloadButton.style.display = "block";
  });

function updateMermaidCode(mermaidCode) {
  const flowchartContainer = document.getElementById("display-area");
  flowchartContainer.innerHTML = `<div class="mermaid">${mermaidCode}</div>`;
  mermaid.init();
}

document.getElementById("download-svg").addEventListener("click", function () {
  // รอจนกว่า Mermaid จะสร้าง SVG
  setTimeout(function () {
    const svgElement = document.querySelector("#display-area .mermaid svg");

    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "flowchart.svg"; // ชื่อไฟล์ที่ต้องการดาวน์โหลด
      a.click();

      URL.revokeObjectURL(url); // ทำลาย URL หลังจากการดาวน์โหลด
    } else {
      alert("ไม่พบ SVG สำหรับดาวน์โหลด");
    }
  }, 1000); // รอ 1 วินาทีเพื่อให้แน่ใจว่า SVG ถูกสร้างขึ้นแล้ว
});
