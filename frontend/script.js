// Initialize EmailJS
(function() {
  emailjs.init("YOUR_USER_ID"); // Înlocuiește cu ID-ul tău de utilizator EmailJS
})();

// Adaugă un listener pentru trimiterea formularului
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previi comportamentul implicit de trimitere a formularului

  // Trimite formularul folosind EmailJS
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Înlocuiește cu ID-urile tale
      .then(function() {
          alert('Mesajul a fost trimis cu succes!');
          document.getElementById('contact-form').reset(); // Resetează formularul
      }, function(error) {
          alert('Eroare la trimiterea mesajului: ' + JSON.stringify(error));
      });
});
