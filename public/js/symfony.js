// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	' La classe « Request » dans symfony est une simple représentation « orientée objet » du message ____?',
	" HTTP request",
	' HTML request',
	' PHP request',
	'TCP request',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Dans Symfony, la configuration des routes peut être écrite en_____?',
	'YAML',
	'PHP',
	'XML',
	'Tout les réponses sont vrais',
	4,
	0
);

// Question 3
var q3 = new CQuiz(
	'Dans symfony, le code où vous interprétez la requête et créez une réponse est appelé _____?',
	'Interpreter',
	'Controller',
	'Router',
	'Router',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Lequel des éléments suivants renvoie l’objet « Response » à l’utilisateur?',
	'Bundle',
	'Fixture',
	'Kernel',
	'Controller',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Quelle commande utilisez-vous pour générer une nouvelle entité?',
	'php bin/console doctrine:database:make:entity',
	'php bin/console make:entity',
	'php bin/console make:doctrine:entity',
	'php bin/console generate:entity',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'Quelle est la syntaxe de commentaire dans Twig?',
	'{# Commentaire #}',
	'{[- Commentaire -]}',
	'{{# Commentaire #}}',
	' {{- Commentaire -}}',
	1,
	0
);

// Question 7
var q7 = new CQuiz(
	' Dans quel emplacement les ressources (css, javascript, images…) doivent être?',
	' web/',
	' app/',
	' A l’intérieur du bundle',
	' public/',
	4,
	0
);

// Question 8
var q8 = new CQuiz(
	'Dans Symfony où se trouve le fichier « Console »?',
	' src/',
	' bin/',
	' var/',
	' app/',
	2,
	0
);

// Question 9
var q9 = new CQuiz(
	' Quelle est la commande pour mettre à jour la base de données?',
	' php bin/console doctrine:schema:create',
	' php bin/console generate:doctrine:database',
	' php bin/console doctrine:generate:database',
	' php bin/console doctrine:database:create',
	4,
	0
);

// Question 10
var q10 = new CQuiz(
	'Quelle est l’extenstion d’un fichier de template dans Symfony?',
	'.twig.html',
	'.html.twig',
	' .json.twig',
	'.html.php',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
