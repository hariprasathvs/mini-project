document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var errorMessage = document.getElementById('errorMessage');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = loginForm.username.value;
      var password = loginForm.password.value;
      var role = loginForm.role.value;
  
      if (role === 'salesperson') {
        if (username === 'salesperson' && password === '123') {
          // Successful login for salesperson
          redirectToProductsPage();
        } else {
          errorMessage.textContent = 'Invalid username or password.';
        }
      } else if (role === 'admin') {
        if (username === 'admin' && password === 'admin') {
          // Successful login for admin
          redirectToAdminPage();
        } else {
          errorMessage.textContent = 'Invalid username or password.';
        }
      } else {
        errorMessage.textContent = 'Invalid role selected.';
      }
    });
  
    function redirectToProductsPage() {
      window.location.href = 'products.html';
    }
  
    function redirectToAdminPage() {
      window.location.href = 'admin.html';
    }
  });
  