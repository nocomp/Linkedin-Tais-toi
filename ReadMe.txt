LinkedIn Tais-toi
LinkedIn Tais-toi est une extension Chrome qui masque automatiquement les posts LinkedIn contenant du tutoiement ou des injonctions (ex : « tu », « fais », « arrête », etc.).
Cette extension est idéale pour les utilisateurs souhaitant épurer leur fil d’actualité des posts au ton trop familier ou directif.

Fonctionnalités
Filtrage automatique des posts LinkedIn contenant du tutoiement ou des injonctions.

Interface graphique accessible depuis l’icône de l’extension, permettant de régler le niveau de filtrage grâce à un curseur intuitif.

4 niveaux de filtrage :

Désactivé : Aucun filtrage.

Léger : Filtrage minimal (ex : « tu », « fais », « vas-y »).

Modéré : Filtrage étendu à d’autres formes d’injonctions courantes.

Agressif : Filtrage maximal, incluant un large éventail de mots et d’expressions impératives.

Filtrage en temps réel : le niveau de filtrage est appliqué instantanément à votre fil d’actualité LinkedIn, même lors du scroll infini.

Personnalisation facile : la liste des mots-clés pour chaque niveau peut être modifiée dans le code si besoin.

Installation
Téléchargez ou clonez ce repository :

bash
git clone https://github.com/nocomp/Linkedin-Tais-toi.git
Ouvrez Google Chrome et allez à :

text
chrome://extensions/
Activez le mode développeur (coin supérieur droit).

Cliquez sur « Charger l’extension non empaquetée » et sélectionnez le dossier du projet.

Rendez-vous sur LinkedIn et rechargez la page : l’extension est active !

Utilisation
Cliquez sur l’icône de l’extension dans la barre d’outils Chrome.

Ajustez le curseur dans la fenêtre popup pour choisir le niveau de filtrage souhaité :

Désactivé : aucun post masqué.

Léger : seuls les posts les plus directs sont filtrés.

Modéré : filtrage plus large des injonctions.

Agressif : la majorité des posts au ton impératif ou tutoyant sont masqués.

Le filtrage s’applique instantanément sur votre fil LinkedIn, y compris lors du scroll infini ou du rechargement de la page.

Personnalisation avancée
Pour modifier les mots-clés associés à chaque niveau de filtrage :

Ouvrez le fichier content.js.

Modifiez les listes dans la variable filterLevels selon vos préférences.

Limitations
Le filtrage repose sur la détection de mots-clés : certains posts peuvent être masqués à tort ou à raison.

L’extension fonctionne uniquement sur la page d’accueil du fil LinkedIn.

Peut nécessiter des ajustements si LinkedIn modifie la structure de son site.

Contribuer
Les contributions sont les bienvenues !
N’hésitez pas à ouvrir une issue ou une pull request pour proposer des améliorations (interface plus avancée, compatibilité Firefox, filtrage par IA, etc.).

Licence
MIT

Remerciements
Merci à la communauté des utilisateurs LinkedIn qui souhaitent un fil plus agréable et respectueux !
Extension inspirée par les besoins réels des utilisateurs francophones.

Profitez d’un feed LinkedIn qui vous ressemble ! 🚀
