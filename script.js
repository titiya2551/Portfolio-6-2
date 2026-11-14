// ฟังก์ชันสลับหน้าดู Portfolio ของแต่ละคน
function switchTab(personId, btnElement) {
    // ซ่อนเนื้อหาทั้งหมด
    document.querySelectorAll('.portfolio-section').forEach(sec => {
        sec.classList.remove('active');
    });

    // เอาสถานะ active ออกจากปุ่มทั้งหมด
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // แสดงข้อมูลของคนที่เลือกและไฮไลต์ปุ่ม
    document.getElementById(personId).classList.add('active');
    btnElement.classList.add('active');
}

// ฟังก์ชันเปิดหน้าต่างขยายดูรูปภาพขนาดเต็ม
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imageSrc;
    modal.classList.add('open');
}

// ฟังก์ชันปิดหน้าต่างขยายรูปภาพ
function closeModal() {
    document.getElementById('imageModal').classList.remove('open');
}

// ปิดหน้าต่างขยายรูปภาพเมื่อกดปุ่ม Esc บนคีย์บอร์ด
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
