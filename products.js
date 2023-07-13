document.addEventListener('DOMContentLoaded', function() {
    var productTable = document.getElementById('productTable');
    var placeOrderBtn = document.getElementById('placeOrderBtn');
    var logoutBtn = document.getElementById('logoutBtn');
  
    placeOrderBtn.addEventListener('click', function() {
      var orderItems = [];
  
      // Iterate over the table rows and gather order details
      var rows = productTable.getElementsByTagName('tr');
      for (var i = 1; i < rows.length; i++) {
        var product = rows[i].cells[0].textContent;
        var quantity = parseInt(rows[i].querySelector('td:last-child input').value);
        var price = parseInt(rows[i].cells[1].textContent);
        var subtotal = quantity * price;
  
        if (quantity > 0) {
          orderItems.push({
            product: product,
            quantity: quantity,
            price: price,
            subtotal: subtotal
          });
        }
      }
  
      // Store orderItems in local storage
      localStorage.setItem('orderItems', JSON.stringify(orderItems));
  
      // Redirect to the order summary page
      window.location.href = 'order-summary.html';
    });
  /*
    logoutBtn.addEventListener('click', function() {
      // Clear any stored data and redirect to the login page
      localStorage.clear();
      window.location.href = 'index.html';
    });*/
  });
  