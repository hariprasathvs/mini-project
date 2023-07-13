document.addEventListener('DOMContentLoaded', function() {
    var productTable = document.getElementById('productTable');
    var addProductBtn = document.getElementById('addProductBtn');
    var logoutBtn = document.getElementById('logoutBtn');
  
    productTable.addEventListener('click', function(event) {
      if (event.target.classList.contains('updateBtn')) {
        var quantityInput = event.target.parentNode.previousElementSibling.querySelector('input');
        var newQuantity = quantityInput.value;
        var productName = event.target.parentNode.parentNode.cells[0].textContent.toLowerCase();
  
        // Update the product quantity in the inventory
        updateProductQuantity(productName, newQuantity);
      }
    });
  
    addProductBtn.addEventListener('click', function() {
      // Redirect to the page to view the total number of product quantities
      window.location.href = 'total-items.html';
    });
  
    logoutBtn.addEventListener('click', function() {
      // Clear any stored data and redirect to the login page
      localStorage.clear();
      window.location.href = 'index.html';
    });
  
    function updateProductQuantity(product, quantity) {
      // Update the product quantity in the inventory or perform any other required action
      // For this example, we'll store the quantity in the browser's local storage
      localStorage.setItem(product, quantity);
      alert('Product quantity updated: Total number of ' + product + ' available is now ' + quantity + '.');
    }
  });
  