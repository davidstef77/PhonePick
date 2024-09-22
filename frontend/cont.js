document.getElementById('register-btn').addEventListener('click', async () => {
  const name = document.getElementById('reg-name').value;
  const birthDate = document.getElementById('birth-date').value;
  const password = document.getElementById('reg-password').value;

  const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, birthDate, password }),
  });

  const result = await response.json();
  alert(result.message);
});

document.getElementById('login-btn').addEventListener('click', async () => {
  const name = document.getElementById('login-name').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
  });

  const result = await response.json();
  if (result.token) {
      localStorage.setItem('token', result.token);
      alert('Autentificare reușită!');
  } else {
      alert(result.message);
  }
});

// Adaugă favorite
document.querySelectorAll('.favorite-button').forEach(button => {
  button.addEventListener('click', async () => {
      const phoneName = button.getAttribute('data-phone-name');
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/api/favorites/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
          },
          body: JSON.stringify({ phoneName }),
      });

      const result = await response.json();
      alert(result.message);
  });
});

const toggleButton = document.getElementById('toggle-btn');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Inițializăm textul butonului de comutare
let isRegistering = true;
toggleButton.innerText = 'Comută la Autentificare';

toggleButton.addEventListener('click', () => {
    isRegistering = !isRegistering;
    registerForm.style.display = isRegistering ? 'block' : 'none';
    loginForm.style.display = isRegistering ? 'none' : 'block';
    toggleButton.innerText = isRegistering ? 'Comută la Autentificare' : 'Comută la Înregistrare';
});
