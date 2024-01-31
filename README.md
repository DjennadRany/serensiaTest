
Serensia test 31/01/2024
Ce projet est une application Angular créée dans le cadre du test de l'entreprise Serensia. Les composants principaux inclus sont AppComponent, IndexComponent, Child1Component, et Child2Component. Le but du projet est de démontrer la structure de base d'une application Angular, y compris l'utilisation de routes, de composants et de tests unitaires.

Installation
Assurez-vous d'avoir Node.js et Angular CLI installés. Clonez le projet et exécutez les commandes suivantes :

bash
Copy code
npm install
ng test --watch=false --code-coverage
Tests Unitaires
Les tests unitaires sont un élément crucial de ce projet pour garantir le bon fonctionnement des différents composants. Ces tests sont écrits en utilisant le framework de test Jasmine, intégré à Angular.

Pour exécuter les tests unitaires, utilisez la commande :


Copy code
ng test
Couverture de Code
Une fois les tests unitaires exécutés, un rapport de couverture de code est généré. Vous pouvez le consulter en ouvrant le fichier coverage/index.html dans un navigateur web.

La couverture de code permet de mesurer l'étendue des tests par rapport au code source. Les résultats affichent des pourcentages pour les statements, les branches, les fonctions, et les lignes.

Structure du Projet
src/app: Contient les fichiers source de l'application.
src/app/app.component.spec.ts: Tests unitaires pour AppComponent.
src/app/index/index.component.ts: Définition du composant IndexComponent avec des tests unitaires.
src/app/child1.component.ts: Définition du composant Child1Component avec des tests unitaires.
src/app/child2.component.ts: Définition du composant Child2Component avec des tests unitaires.
Contribution
Les contributions sont les bienvenues. Si vous trouvez des problèmes ou si vous avez des suggestions d'amélioration, n'hésitez pas à ouvrir une issue ou à créer une pull request.

© 2024 Réalisé par Djennad Rany pour Serensia Test.