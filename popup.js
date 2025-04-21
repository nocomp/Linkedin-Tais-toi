const slider = document.getElementById('filterLevel');
const label = document.getElementById('levelLabel');

const levels = [
  "Désactivé",
  "Léger",
  "Modéré",
  "Agressif"
];

// Charger le niveau de filtre actuel
chrome.storage.sync.get(['filterLevel'], (result) => {
  const level = result.filterLevel ?? 0;
  slider.value = level;
  label.textContent = levels[level];
});

// Mettre à jour le niveau de filtre
slider.addEventListener('input', () => {
  const level = parseInt(slider.value, 10);
  label.textContent = levels[level];
  chrome.storage.sync.set({ filterLevel: level });
});
