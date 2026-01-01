Exercice 1 : Back-End de la Plateforme d'Analyse E-sport

Pitch du Projet
Dans cet exercice, vous développerez la logique principale (le back-end) d'une plateforme d'analyse e-sport nommée « Esport Vision ». Vous apprendrez à structurer des données avec des classes et à les manipuler avec des méthodes de tableau modernes pour gérer un calendrier de matchs.

Contexte / Scénario
Vous rejoignez la startup « Esport Vision » en tant que développeur. Votre première mission est de construire le prototype du système qui gérera et analysera les matchs à venir des ligues françaises de League of Legends (LFL) et de Valorant (VCT) pour l'année 2025. La fiabilité des données et la pertinence de l'analyse sont cruciales pour le succès de la plateforme.

Données de Départ
Copiez-collez le tableau suivant au début de votre fichier JavaScript. Il représente le calendrier des matchs à venir que votre système devra gérer.

const matchSchedule = [
{
id: 'LFL_KC_SLY',
game: 'League of Legends',
competition: 'LFL',
teamA: 'Karmine Corp',
teamB: 'Solary',
probabilityA: 0.65, // 65% de chances pour KC
status: 'Upcoming'
},
{
id: 'VCT_VIT_M8',
game: 'Valorant',
competition: 'VCT EMEA',
teamA: 'Team Vitality',
teamB: 'Mandatory',
probabilityA: 0.55, // 55% de chances pour Vitality
status: 'Upcoming'
},
{
id: 'LFL_GO_BDS',
game: 'League of Legends',
competition: 'LFL',
teamA: 'Gentle Mates',
teamB: 'BDS Academy',
probabilityA: 0.48, // 48% de chances pour M8, donc BDS est favori
status: 'Upcoming'
},
{
id: 'LFL_KC_M8',
game: 'Valorant',
competition: 'VCT EMEA',
teamA: 'Karmine Corp',
teamB: 'Mandatory',
probabilityA: 0.52,
status: 'Upcoming'
}
];

->> Etapes à Réaliser

- Étape 1 : Modéliser les données avec la classe Match
  L'objectif est de créer une classe pour nos objets match afin d'assurer une structure de données cohérente.

Créez une classe Match.
Son constructeur doit accepter et initialiser les propriétés suivantes : id, game, competition, teamA, teamB, probabilityA et status.
Ajoutez une méthode getFavorite() à cette classe. Cette méthode ne prend aucun paramètre et doit retourner le nom de l'équipe ayant la plus grande probabilité de gagner. Si probabilityA est supérieure à 0.5, elle retourne teamA ; sinon, elle retourne teamB.

- Étape 2 : Créer le gestionnaire avec la classe Platform
  Cette classe sera le cœur de notre système ; elle gérera tous les matchs.

Créez une classe Platform.
Son constructeur doit accepter un name et initialiser une propriété matches avec un tableau vide.
Implémentez la méthode loadMatches(matchesToLoad). Cette méthode prend en paramètre un tableau d'objets (comme matchSchedule), et pour chaque objet, elle doit créer une nouvelle instance de la classe Match et l'ajouter au tableau this.matches.
Implémentez la méthode displaySchedule(). En utilisant une boucle (forEach), cette méthode doit afficher le résumé de chaque match dans la console dans un format lisible. Par exemple :
[LFL] Karmine Corp vs. Solary - Jeu : League of Legends

- Étape 3 : Implémenter les fonctionnalités d'analyse
  Maintenant, ajoutez des méthodes à la classe Platform pour permettre l'analyse des données.

getMatchesByGame(game) :

Utilisez la méthode .filter() sur le tableau this.matches.
Cette méthode doit retourner un nouveau tableau contenant uniquement les matchs correspondant au jeu passé en paramètre (ex: "Valorant").
getRiskyMatches() :

Utilisez la méthode .filter().
Cette méthode doit retourner les matchs considérés comme « serrés », cest-à-dire ceux où la probabilité de victoire du favori est faible. Retournez les matchs où probabilityA est comprise entre 0.45 et 0.55.
getMatchById(id) :

Utilisez la méthode .find().
Cette méthode doit trouver et retourner l'instance de match correspondant à l'ID fourni.

- Étape 4 : Mise en pratique
  À la fin de votre fichier, écrivez le script qui utilisera vos classes pour faire fonctionner le système.

Créez une instance de votre classe Platform nommée esportVision.
Utilisez loadMatches() pour y ajouter les données de matchSchedule.
Appelez displaySchedule() pour vérifier que tout est bien chargé.
Testez chacune de vos méthodes danalyse (getMatchesByGame, getRiskyMatches, getMatchById) et affichez leurs résultats dans la console avec des console.log clairs pour voir ce que chaque méthode retourne. 6. Pour Aller Plus Loin (Bonus)
Si vous avez terminé et souhaitez aller plus loin, essayez d'iplémenter ces fonctionnalités :

Ajoutez une méthode simulateResult(matchId) à la Platform. Elle doit trouver le match, utiliser Math.random() et les probabilités pour déterminer un vainqueur, puis changer le statut du match en « Terminé » et ajouter une propriété result avec le nom du gagnant.
Ajoutez une méthode getTeamStats(teamName). Elle doit retourner un objet contenant le nombre de matchs joués par l'équipe et son taux de victoire (basé sur les matchs simulés).
