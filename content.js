// Liste des mots/expressions à filtrer
const keywords = [
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
];

// Fonction pour vérifier si un texte contient un mot-clé
function containsKeyword(text) {
    return keywords.some(regex => regex.test(text));
}

// Fonction pour masquer les posts
function filterPosts() {
    // Sélecteur des posts LinkedIn (peut évoluer selon la structure du site)
    const posts = document.querySelectorAll('div.feed-shared-update-v2');
    posts.forEach(post => {
        const postText = post.innerText || "";
        if (containsKeyword(postText)) {
            post.style.display = "none";
        }
    });
}

// Exécute le filtrage au chargement
filterPosts();

// Relance le filtrage si le feed se recharge (scroll infini)
const observer = new MutationObserver(filterPosts);
observer.observe(document.body, { childList: true, subtree: true });
