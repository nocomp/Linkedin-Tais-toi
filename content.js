// Listes de mots-clés par niveau de filtrage
const filterLevels = [
  [], // Désactivé
  [ // Léger
    /\btu\b/i,
    /\bfais\b/i,
    /\bvas[- ]y\b/i
  ],
  [ // Modéré
    /\btu\b/i,
    /\bfais\b/i,
    /\barrête\b/i,
    /\bcommence\b/i,
    /\bessaie\b/i,
    /\bdois\b/i,
    /\bpeux\b/i,
    /\bvas[- ]y\b/i,
    /\bn'oublie\b/i,
    /\bpense\b/i,
    /\bimagine\b/i
  ],
  [ // Agressif
    /\btu\b/i,
    /\bfais\b/i,
    /\barrête\b/i,
    /\bcommence\b/i,
    /\bessaie\b/i,
    /\bdois\b/i,
    /\bpeux\b/i,
    /\bvas[- ]y\b/i,
    /\bn'oublie\b/i,
    /\bpense\b/i,
    /\bimagine\b/i,
    /\bdois\b/i,
    /\bprends\b/i,
    /\bose\b/i,
    /\barrête de\b/i,
    /\bcesse\b/i,
    /\bchange\b/i,
    /\barrête de\b/i,
    /\bsois\b/i
  ]
];

let currentLevel = 0;

// Fonction pour vérifier si un texte contient un mot-clé
function containsKeyword(text, keywords) {
  return keywords.some(regex => regex.test(text));
}

// Fonction pour masquer les posts
function filterPosts() {
  const keywords = filterLevels[currentLevel];
  const posts = document.querySelectorAll('div.feed-shared-update-v2');
  posts.forEach(post => {
    const postText = post.innerText || "";
    if (keywords.length > 0 && containsKeyword(postText, keywords)) {
      post.style.display = "none";
    } else {
      post.style.display = "";
    }
  });
}

// Récupère le niveau de filtre et lance le filtrage
function initFilter() {
  chrome.storage.sync.get(['filterLevel'], (result) => {
    currentLevel = result.filterLevel ?? 0;
    filterPosts();
  });
}

// Observe les changements dans le feed
const observer = new MutationObserver(filterPosts);
observer.observe(document.body, { childList: true, subtree: true });

// Met à jour le filtre quand le niveau change
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.filterLevel) {
    currentLevel = changes.filterLevel.newValue;
    filterPosts();
  }
});

// Initialisation
initFilter();
