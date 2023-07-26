
const incrementButtons = document.querySelectorAll('.increment-btn');
const decrementButtons = document.querySelectorAll('.decrement-btn');
const removeButtons = document.querySelectorAll('.remove-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const quantities = document.querySelectorAll('.quantity');

function updateTotalPrice() {
  let totalPrice = 0;
  quantities.forEach(quantityElement => {
    const quantity = parseInt(quantityElement.textContent);
    totalPrice += quantity * 10; 
  });
  document.getElementById('total-price').textContent = totalPrice;
}

incrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantityElement = quantities[index];
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  });
});

decrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const quantityElement = quantities[index];
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});

removeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.remove();
    updateTotalPrice();
  });
});

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.style.color === 'red') {
      button.style.color = 'black';
    } else {
      button.style.color = 'red';
    }
  });
});

updateTotalPrice();
