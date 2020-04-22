//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {
	let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  return days;
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function (days) {
  let reponse = days[2];
  return reponse;
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (days) {
  let reponse = days[3];
  return reponse;
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (languages) {
    languages.splice(1, 1, 'php');
  return languages;
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (languages) {
  languages.push('ruby', 'python');
  return languages;
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (languages) {
  languages.unshift('html', 'css');
  return languages;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (languages) {
  languages.shift();
  return languages;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (languages) {
  languages.pop();
  return languages;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function () {
  let person = new Array();
  person['name'] = 'Jean';
  person['age']  = 45;
  person['city']  = 'Paris';
  return person;
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (person) {
  let reponse = person['name'];
  return reponse;
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (person) {
  var nom = person['name'];
  var age = person['age'];
  var ville = person['city'];
  let reponse = 'Bonjour, je suis ' + nom + '. J\'ai ' + age + ' ans et j\'habite ' + ville + '.';
  return reponse;
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  let reponse = string.split(',');
  return reponse;
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  array.sort();
  return array;
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  let reponse = array.toString();
  return reponse;
}
