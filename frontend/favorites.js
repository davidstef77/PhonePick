document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    alert('Te rog să te autentifici.');
    window.location.href = 'index.html'; // Redirect la pagina de autentificare
    return;
  }

  const response = await fetch('http://localhost:5000/api/favorites', {
    method: 'GET',
    headers: {
      'Authorization': token,
    },
  });

  const favorites = await response.json();
  const favoritesList = document.getElementById('favorites-list');

  if (favorites.length === 0) {
    favoritesList.innerHTML = '<p>Nu ai adăugat niciun telefon la favorite.</p>';
  } else {
    favorites.forEach(phone => {
      const item = document.createElement('div');
      item.className = 'favorite-item';
      item.textContent = phone;
      favoritesList.appendChild(item);
    });
  }

  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html'; // Redirect la pagina de autentificare
  });
});
