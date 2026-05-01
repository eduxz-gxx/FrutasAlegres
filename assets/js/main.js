const grid = document.getElementById('productsGrid');

products.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.transitionDelay = `${i * 0.08}s`;
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" loading="lazy"/>
    <div class="product-card-info">
      <span class="product-card-name">${p.name}</span>
      <span class="product-card-cat">${p.category}</span>
      <span class="product-card-price">${p.price}</span>
    </div>
  `;
  card.addEventListener('click', () => openModal(i));
  grid.appendChild(card);
  card.classList.add('reveal');
  observer.observe(card);
});