// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // การกำหนดการคลิกให้กับปุ่ม Clear
    document.getElementById('clear-btn').addEventListener('click', function() {
        document.getElementById('prompt-input').value = '';
    });
});