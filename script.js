// ========== DATA LỜI CHÚC ==========
const lettersData = [
  {
    sender: "Kylie",
    role: "bestie 1/4",
    label: "from Kylie",
    message: `Lam ơii 🫶
Cảm ơn vì đã ở trong nhóm tụi mình nha.
Chúc Lam tuổi mới chill hơn, ít tự gây áp lực cho mình hơn và làm được mấy goal bí mật á.
Bọn t ở đây, lúc nào cần thì gõ nha 💗`
  },
  {
    sender: "Michael",
    role: "đại diện hội 4 đứa",
    label: "from Michael",
    message: `Happy birthday Lam!
Tuổi mới mong mày cứ tự tin chọn cái mày muốn, tụi này sẽ support.
Đi ăn đi chơi nhớ rủ nhaaa 🍣`
  },
  {
    sender: "Sweet",
    role: "đứa ngọt nhất team",
    label: "from Sweet",
    message: `Lam bé ơiii 💗
Chúc mừng sinh nhật!!
Mong c luôn thấy mình đáng yêu, đáng nhận love như tụi này nhìn c nha.
Cứ vui nè, còn drama để tụi này xử 🤭`
  },
  {
    sender: "Naan",
    role: "năng lượng nữ chính",
    label: "from Naan",
    message: `Lammm 🥹
Cảm ơn vì ở lại chơi chung với tụi t, nhóm thiếu c là tụi t hụt mood liền.
Tuổi mới hiền với bản thân hơn xíu, ngủ sớm hơn xíu và gặp toàn người dễ thương nha 💕`
  }
];

// ========== DOM ELEMENTS ==========
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const btnOpen = document.getElementById("btn-open");
const lettersGrid = document.getElementById("letters-grid");
const modal = document.getElementById("letter-modal");
const modalFrom = document.getElementById("modal-from");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

// ========== STEP CHANGE ==========
btnOpen.addEventListener("click", () => {
  step1.classList.remove("active");
  step2.classList.add("active");
});

// ========== RENDER LETTER CARDS ==========
lettersData.forEach((item) => {
  const card = document.createElement("article");
  card.className = "letter-card";
  card.innerHTML = `
    <div class="tiny-envelope"></div>
    <p class="letter-meta">Letter</p>
    <h3 class="letter-name">${item.sender}</h3>
    <p class="letter-role">${item.role || ""}</p>
  `;
  card.addEventListener("click", () => openLetter(item));
  lettersGrid.appendChild(card);
});

// ========== OPEN / CLOSE MODAL ==========
function openLetter(letter) {
  modalFrom.textContent = letter.label;
  modalText.textContent = letter.message;
  modal.classList.add("show");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  // click ra ngoài để tắt
  if (e.target === modal) {
    modal.classList.remove("show");
  }
  // ===== Balloons (Úc style) =====
document.addEventListener("DOMContentLoaded", () => {
  createBalloons(15); // tweak count if you want
});

function createBalloons(count) {
  const host = document.getElementById('balloon-layer');
  const colors = ['#e94560', '#f0e68c', '#00d8d6', '#8e44ad', '#3498db'];
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

});
