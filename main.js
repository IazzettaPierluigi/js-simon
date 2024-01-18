// Descrizione:
// fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Variabile per memorizzare la data e l'orario attuali
let now = new Date();

// Variabile per memorizzare la data e l'orario del countdown
let target = new Date();
target.setDate(now.getDate() + 1);
target.setHours(9);
target.setMinutes(30);

// Funzione per aggiornare il timer
function updateTimer(target) {
  // Recupera l'orario attuale ogni volta che la funzione è chiamata
  let now = new Date();

  // Calcola il tempo rimanente in millisecondi
  let remainingTime = target.getTime() - now.getTime();

  // Calcola il tempo rimanente in secondi
  const seconds = remainingTime / 1000;

  // Formatta il tempo in un formato leggibile
  const formattedTime = `${seconds} secondi`;

  // Imposta il testo del timer
  document.querySelector("#timer").textContent = formattedTime;

  // Se il tempo è scaduto, genera un alert
  if (seconds <= 0) {
    alert("Il countdown è scaduto!");
  }
}

// Avvia il timer
setInterval(function() {
  updateTimer(target);
}, 1000);
