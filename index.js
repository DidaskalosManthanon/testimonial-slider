const testimonials = [
    {
        name: "Amir",
        photo: "./pics/amir.webp",
        text: `<strong>Parfait !</strong>
        Top !`
    },
    {
        name: "Brieuc",
        photo: "./pics/brieuc.webp",
        text: `<strong>Parfait !</strong>
        Cours qui m'ont été très utiles, Laurent m'a aidé à comprendre les notions que je n'avais pas bien comprises en cours. 
        Top !`
    },
    {
        name: "Haya",
        photo: "./pics/haya.webp",
        text:  `Laurent est quelqu'un de très aimable et très à l'écoute, avec qui il est facile et agréable de parler. 
        Je le recommande vivement pour sa façon de travailler et sa disponibilité. 
        A la recherche d'un professeur digne de confiance pour progresser? 
        C'est lui!`
    },
    {
        name: "Jocelin",
        photo: "./pics/jocelin.webp",
        text:  `<strong>Parfait !</strong>
        Laurent connait bien son sujet et est tres pedagogue`
    },
    {
        name: "Laurent",
        photo: "./pics/laurent.webp",
        text:  `Excellent ! 
        Très bien!`
    },
    {
        name: "Lilea",
        photo: "./pics/lilea.webp",
        text:  `J’ai pris des cours avec Laurent pendant un peu plus d’un mois pour préparer mes partiels. 
        Il a été super pédagogue, m’a écoutée et a répondu à toutes mes questions. 
        Grâce à lui j’ai pu passer mes partiels beaucoup plus sereine. 
        Je le recommande à 100 pour cent ! 
        Merci encore Laurent !`
    },
    {
        name: "Lyla",
        photo: "./pics/lyla.webp",
        text:  `<strong>Parfait !</strong> 
        Mon fils, Nathan 19 ans est ravi. 
        En terminal Bac pro cette année avec les contexte particulier de cette année. 
        Il a trouvé Prof a l'écoute, il comprend enfin les cours.`
    },
    {
        name: "Marie",
        photo: "./pics/marie.webp",
        text:  `Laurent est un professeur à l'écoute. 
        Je recommande ses cours en ligne qui sont interactifs et bien menés.`
    },
    {
        name: "Mayssa",
        photo: "./pics/mayssa.webp",
        text:  `<strong>Parfait !</strong> 
        Laurent a été super ! 
        Patient et chaleureux, il a répondu à toutes mes attentes et a su faire preuve de pédagogie adaptée à mes problèmes. 
        Merci pour tout Laurent!`
    },
    {
        name: "Renaud",
        photo: "./pics/renaud.webp",
        text:  `<strong>Parfait !</strong> Quel enseignant !<br><br>
        <br><br>
        Après mon parcours littéraire et ma reconversion tardive dans le code informatique, je manquais de sérénité avec les mathématiques. Alors que je m’apprêtais à reprendre des études scientifiques, je devais m’assurer une solide base de niveau terminale S.<br><br>

Avec ses démonstrations, sa patience et de nombreux exercices, Laurent a changé en quelques mois mon rapport aux mathématiques en m’amenant vers toujours plus d’autonomie. De quoi me permettre d’envisager sereinement cette rentrée.<br><br>

Pour le résultat autant que pour le chemin, je recommande vivement les cours de Laurent.`
    },
    {
        name: "Romain",
        photo: "./pics/romain.webp",
        text:  `<strong>Parfait !</strong> 
        Bien`
    },
    {
        name: "Ruben",
        photo: "./pics/ruben.webp",
        text:  `<strong>Parfait !</strong> 
        Efficace`
    },
]


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
    imgEl.src = photo;
    textEl.innerHTML = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}