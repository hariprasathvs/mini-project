document.addEventListener('DOMContentLoaded', function() {
    var backBtn = document.getElementById('backBtn');
    var logoutBtn = document.getElementById('logoutBtn');
  
    var coffeeQuantity = parseInt(localStorage.getItem('coffeeQuantity')) || 0;
    var teaQuantity = parseInt(localStorage.getItem('teaQuantity')) || 0;
    var biscuitsQuantity = parseInt(localStorage.getItem('biscuitsQuantity')) || 0;
  
    document.getElementById('coffeeQuantity').textContent = coffeeQuantity;
    document.getElementById('teaQuantity').textContent = teaQuantity;
    document.getElementById('biscuitsQuantity').textContent = biscuitsQuantity;
  
    var totalItems = coffeeQuantity + teaQuantity + biscuitsQuantity;
    document.getElementById('totalItems').textContent = totalItems;
  
    backBtn.addEventListener('click', function() {
      // Redirect back to the admin product configuration page
      window.location.href = 'admin.html';
    });
  
    logoutBtn.addEventListener('click', function() {
      // Clear any stored data and redirect to the login page
      localStorage.clear();
      window.location.href = 'index.html';
    });
  });
  