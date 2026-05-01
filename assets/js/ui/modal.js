const overlay     = document.getElementById('modalOverlay');
const modalClose  = document.getElementById('modalClose');
const modalImg    = document.getElementById('modalImg');
const modalTag    = document.getElementById('modalTag');
const modalName   = document.getElementById('modalName');
const modalDesc   = document.getElementById('modalDesc');
const modalPrice  = document.getElementById('modalPrice');
const modalBenefits = document.getElementById('modalBenefits');
const qtyNum      = document.getElementById('qtyNum');

let qty = 1;

function openModal(i) {
  const p = products[i];
  modalImg.src        = p.img;
  modalImg.alt        = p.name;
  modalTag.textContent  = p.tag + ' · ' + p.category;
  modalName.textContent = p.name;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = p.price;
  modalBenefits.innerHTML = p.benefits.map(b => `<span class="benefit-tag">${b}</span>`).join('');
  qty = 1;
  qtyNum.textContent = qty;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

document.getElementById('qtyMinus').addEventListener('click', () => {
  if (qty > 1) { qty--; qtyNum.textContent = qty; }
});

document.getElementById('qtyPlus').addEventListener('click', () => {
  qty++;
  qtyNum.textContent = qty;
});

document.getElementById('addToCart').addEventListener('click', () => {
  showToast(`${modalName.textContent} × ${qty} agregado`);
  closeModal();
});
