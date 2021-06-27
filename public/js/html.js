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
	"Quelle balise utilisera-t-on de préférence pour le titre principal d'une page html:",
	" < h1 >",
	' < head > ',
	'< heading >',
	'< h6 >',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	"Quel est le doctype d'un document HTML5 ?",
	'< !doctype html5 >',
	'< !doctype html >',
	'< !doctype html PUBLIC "-//W3C//DTD HTML5.0 Strict//EN" >',
	"Je vais demander à quelqu'un",
	2,
	0
);

// Question 3
var q3 = new CQuiz(
	'Quels éléments sont nécessaires pour créer une liste dont les items ne sont pas numérotés ?',
	'ol et li',
	'ul et li',
	'ul et ol	',
	'ul et nb',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	"Laquelle de ces syntaxes est correcte pour embarquer une image dans la page html?",
	'< img src="mon-image.jpg" alt="Une image"< /img>',
	'< img href="mon-image.jpg" alt="Une image">',
	'< img href="mon-image" alt="Une image">	',
	'< img src="mon-image.jpg" alt="Une image">',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?',
	'text',
	'id',
	'class',
	'name',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'Que veut dire HTML ?',
	'HyperText Make Language',
	'HyperText Make Link',
	'HyperText Markup Language',
	'HyperText Markup Link',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'Que veut dire CSS ?',

	'Cascading Style Shape',
	'Cascade Science Sheets',
	'Cascading Space Sheets',
	'Cascading Style Sheets',
	4,
	0
);

// Question 8
var q8 = new CQuiz(
	"À quoi sert la balise < tt > en HTML?",
	"La balise <tt> fait partie des balises de mise en forme du texte.",
	"La balise <tt> fait partie des balises de mise en forme d’image.",
	"La balise <tt> fait partie des balises de mise en forme de tableau.",
	"Aucune de ces réponses",
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	' Quelle propriété CSS est utilisée pour contrôler la taille du texte d’un élément?',
	' font-style',
	' text-size',
	' font-size',
	' text-style',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'Lequel des éléments suivants n’est pas un exemple de navigateur?',
	'Mozilla Firefox',
	'Netscape',
	' Microsoft Bing',
	'Opéra',
	3,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
