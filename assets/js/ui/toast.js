const toast = document.getElementById('cartToast');
const toastMsg = document.getElementById('toastMsg');

function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function showToastContact() {
  showToast('¡Mensaje recibido! Te contactaremos pronto 🌿');
}
