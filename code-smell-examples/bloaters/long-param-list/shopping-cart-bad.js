window.onload = function() {
    const itemForm = document.getElementById('item-form');
    const itemName = document.getElementById('item-name');
    const itemPrice = document.getElementById('item-price');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
  
    const cart = [];
  
    function addItem(name, price, cartArray, cartListElement, totalPriceElement) {
      const newItem = {
        name: name.trim(),
        price: parseFloat(price),
        id: new Date().getTime()
      };
      cartArray.push(newItem);
      renderCart(cartArray, cartListElement, totalPriceElement);
    }
  
    function deleteItem(itemId, cartArray, cartListElement, totalPriceElement) {
      const index = cartArray.findIndex(item => item.id === itemId);
      if (index !== -1) {
        cartArray.splice(index, 1);
        renderCart(cartArray, cartListElement, totalPriceElement);
      }
    }
  
    function renderCart(cartArray, cartListElement, totalPriceElement) {
      cartListElement.innerHTML = '';
      let totalPrice = 0;
      cartArray.forEach(item => {
        totalPrice += item.price;
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button onclick="deleteItem(${item.id}, cart, cartList, totalPriceElement)">Delete</button>
        `;
        cartListElement.appendChild(li);
      });
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    itemForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addItem(itemName.value, itemPrice.value, cart, cartList, totalPriceElement);
      itemName.value = '';
      itemPrice.value = '';
    });
  
    renderCart(cart, cartList, totalPriceElement);
  
    window.deleteItem = deleteItem;
  }
  