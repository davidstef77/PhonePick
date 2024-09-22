document.getElementById('search').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let phoneCards = document.querySelectorAll('.phone-card');

  phoneCards.forEach(function(card) {
      let phoneName = card.querySelector('h3').textContent.toLowerCase();
      if (phoneName.includes(filter)) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
});
