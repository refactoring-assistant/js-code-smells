window.onload = function () {
  const itemForm = document.getElementById('item-form');
  const itemName = document.getElementById('item-name');
  const itemPrice = document.getElementById('item-price');
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');

  const state = {
    cart: [],
    cartListElement: cartList,
    totalPriceElement: totalPriceElement,
  };

  function addItem(name, price, state) {
    const newItem = {
      name: name.trim(),
      price: parseFloat(price),
      id: new Date().getTime(),
    };
    state.cart.push(newItem);
    renderCart(state);
  }

  function deleteItem(itemId, state) {
    const index = state.cart.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      state.cart.splice(index, 1);
      renderCart(state);
    }
  }

  function renderCart(state) {
    state.cartListElement.innerHTML = '';
    let totalPrice = 0;
    state.cart.forEach((item) => {
      totalPrice += item.price;
      const li = document.createElement('li');
      li.innerHTML = `
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button onclick="deleteItem(${item.id}, state)">Delete</button>
        `;
      state.cartListElement.appendChild(li);
    });
    state.totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  itemForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addItem(itemName.value, itemPrice.value, state);
    itemName.value = '';
    itemPrice.value = '';
  });

  renderCart(state);

  window.deleteItem = deleteItem;
};
