document.addEventListener('DOMContentLoaded', function() {
    var summaryTable = document.getElementById('summaryTable');
    var total = document.getElementById('total');
    var backBtn = document.getElementById('backBtn');
    var logoutBtn = document.getElementById('logoutBtn');
  
    // Retrieve orderItems from local storage
    var orderItems = JSON.parse(localStorage.getItem('orderItems'));
  
    // Clear orderItems from local storage
    localStorage.removeItem('orderItems');
  
    if (orderItems && orderItems.length > 0) {
      var grandTotal = 0;
  
      // Populate the order summary table
      for (var i = 0; i < orderItems.length; i++) {
        var item = orderItems[i];
        var subtotal = item.quantity * item.price;
        grandTotal += subtotal;
  
        var row = summaryTable.insertRow();
        row.insertCell().textContent = item.product;
        row.insertCell().textContent = item.price;
        row.insertCell().textContent = item.quantity;
        row.insertCell().textContent = subtotal;
      }
  
      // Update the total amount
      total.textContent = 'Total: Rs ' + grandTotal;
    }
  
    backBtn.addEventListener('click', function() {
      // Redirect back to the products page
      window.location.href = 'products.html';
    });
  
    logoutBtn.addEventListener('click', function() {
      // Clear any stored data and redirect to the login page
      localStorage.clear();
      window.location.href = 'index.html';
    });
  });
  