// ========== STEP SWITCH ==========
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const btnOpen = document.getElementById('btn-open');

if (btnOpen && step1 && step2) {
  btnOpen.addEventListener('click', () => {
    // Ẩn step 1, hiện step 2 + kéo lên đầu trang
    step1.classList.remove('active');
    step1.style.display = 'none';
    step2.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== MODAL ELEMENTS ==========
const modal = document.getElementById('letter-modal');
const modalFrom = document.getElementById('modal-from');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

// ========== OPEN / CLOSE MODAL ==========
function openLetter(fromLabel, message) {
  if (!modal || !modalFrom || !modalText) return;
  modalFrom.textContent = fromLabel || '';
  modalText.textContent = message || '';
  modal.classList.add('show');
}

// Gán event cho từng lá thư (từ Ly / Linh / My trong index.html)
document.querySelectorAll('.letter-card-xl').forEach(card => {
  card.addEventListener('click', () => {
    const fromLabel = card.dataset.from || '';
    const message = card.dataset.message || '';
    openLetter(fromLabel, message);
  });
});

// nút đóng modal
if (modalClose && modal) {
  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // click ra ngoài để tắt
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// ========== BALLOONS (warm Hà Nội palette) ==========
document.addEventListener('DOMContentLoaded', () => {
  createBalloons(15); // có thể tăng/giảm số lượng nếu muốn
});

function createBalloons(count) {
  const host = document.getElementById('balloon-layer');
  if (!host) return;

  // màu vàng/cam ấm cho hợp theme
  const colors = ['#FFC85C', '#FF9F45', '#FF7F50', '#FFCD94', '#FFD369'];

  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 6 + 8}s`; // 8–14s
    balloon.style.animationDelay = `${Math.random() * 5}s`;
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    host.appendChild(balloon);
  }
}
