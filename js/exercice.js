// timer
var timeLeft = 30;
var timeLeftDefault = 30;
var timer = setInterval(function() {
    timeLeft--;
    if (timeLeft < 10) {
        document.getElementById("timer").innerHTML = "00:0" + timeLeft;
        if (timeLeft == 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "00:00";
        }
    } else {
        document.getElementById("timer").innerHTML = "00:" + timeLeft;
    }
}, 1000);


function start_timer() {
    timer = setInterval(function() {
        timeLeft--;
        if (timeLeft < 10) {
            document.getElementById("timer").innerHTML = "00:0" + timeLeft;
            if (timeLeft == 0) {
                clearInterval(timer);
                document.getElementById("timer").innerHTML = "00:00";
            }
        } else {
            document.getElementById("timer").innerHTML = "00:" + timeLeft;
        }
    }, 1000);
}

// pause / play button
var pauseButton = document.querySelector(".pause-button");  // select the pause button
var pause = false;
pauseButton.addEventListener("click", function() {
    if (pause) {
        pause = false;
        pauseButton.innerHTML = "PAUSE";    // change the button text
        pauseButton.style.backgroundImage = 'url(../img/exercice/pause.png)';   // change the button image
        if (timeLeft == 0) {
            timeLeft = timeLeftDefault;
            document.getElementById("timer").innerHTML = "00:30";
        }
        start_timer();
    } else {
        pause = true;
        pauseButton.innerHTML = "REPRENDRE";    // change the button text
        pauseButton.style.backgroundImage = 'url(../img/exercice/play.png)';    // change the button image
        clearInterval(timer); 
    }
});

// function to reset counter and timer
function reset_timer() {
    clearInterval(timer);
    timeLeft = timeLeftDefault;
    if (timeLeft < 10) {
        document.getElementById("timer").innerHTML = "00:0" + timeLeft;
    } else {
        document.getElementById("timer").innerHTML = "00:" + timeLeft;
    }
    pause = false;
    pauseButton.innerHTML = "PAUSE";    // change the button text
    pauseButton.style.backgroundImage = 'url(../img/exercice/pause.png)';   // change the button image
    start_timer();
}


// when the "?" button is clicked (id infos_button), display the information
var infosButton = document.getElementById("infos_button");
var infos = document.getElementById("infos");

infos.style.pointerEvents = 'none';

infosButton.addEventListener("click", function() {
    // infos.style.display = "block";
    // infos.style.animation = "fadein 0.5s";
    infos.classList.remove('fadeOut');
    infos.classList.add('fadeIn');

    infos.style.pointerEvents = 'auto';
    
    // // Add an event listener for animationend
    // infosButton.addEventListener('animationend', function() {
    //     infos.style.pointerEvents = 'auto';
    //     infos.style.display = 'block';
    // }, { once: true });
}
);

// when the "X" button is clicked (id close), hide the information
var close = document.getElementById("close_infos");

close.addEventListener("click", function() {
    // infos.style.display = "none";
    // infos.style.animation = "fadeout 0.5s";
    infos.classList.remove('fadeIn');
    infos.classList.add('fadeOut');

    infos.style.pointerEvents = 'none';

    // // Add an event listener for animationend
    // infosButton.addEventListener('animationend', function() {
    //     infos.style.pointerEvents = 'none';
    //     infos.style.display = 'none';
    // }, { once: true });
}
);


// manage the different pages
// dict of titles, descriptions and paths of images :
var dict = {
    "0": {
        "title": "LE CRUNCH CLASSIQUE",
        "path": "../img/exercice/crunch-classique.jpg",
        "duration": 30,
        "description": "Le crunch classique est un exercice abdominal visant principalement à renforcer les muscles de la région abdominale, en mettant particulièrement l'accent sur les muscles droits de l'abdomen. \
        <br><br> \
        <b>Position de départ :</b> Allongez-vous sur le dos, genoux pliés, pieds à plat. Placez vos mains derrière votre tête sans intercaler les doigts. \
        <br><br> \
        <b>Activation des muscles :</b> Contractez les abdominaux pour stabiliser le tronc. \
        <br><br> \
        <b>Mouvement :</b> Soulevez légèrement les épaules et la tête du sol en contractant les abdominaux, sans relever complètement le dos. \
        <br><br> \
        <b>Point culminant :</b> Atteignez le point le plus haut de la contraction, maintenez pendant une seconde. \
        <br><br> \
        <b>Retour à la position de départ :</b> Redescendez lentement en contrôlant le mouvement."
    },
    "1": {
        "title": "LA PLANCHE",
        "path": "../img/exercice/la-planche.jpg",
        "duration": 45,
        "description": "La planche est un exercice de renforcement du tronc qui cible les muscles abdominaux, le dos, et les muscles stabilisateurs. C'est un exercice efficace pour développer la force et l'endurance. \
        <br><br> \
        <b>Position de départ :</b> Placez-vous face au sol, en appui sur les avant-bras et les orteils. Les coudes doivent être directement sous les épaules, et le corps doit former une ligne droite de la tête aux talons. \
        <br><br> \
        <b>Activation des muscles :</b> Contractez les abdominaux, les fessiers et les muscles du dos pour maintenir une position stable et éviter de creuser le dos ou de relever les hanches. \
        <br><br> \
        <b>Mouvement :</b> Restez dans cette position en maintenant une contraction constante des muscles. Évitez de laisser le bas du dos s'affaisser ou de monter les fesses. \
        <br><br> \
        <b>Point culminant :</b> Il n'y a pas de point culminant dans cet exercice, il s'agit de maintenir la position de la planche aussi longtemps que possible tout en gardant une bonne forme. \
        <br><br> \
        <b>Retour à la position de départ :</b> Pour terminer l'exercice, abaissez lentement vos genoux au sol et reposez-vous."
    },
    "2": {
        "title": "LES CISEAUX",
        "path": "../img/exercice/les-ciseaux.jpg",
        "duration": 20,
        "description": "Les ciseaux sont un exercice pour les abdominaux et les muscles des jambes qui vise à renforcer ces groupes musculaires tout en améliorant la flexibilité des hanches. \
        <br><br> \
        <b>Position de départ :</b> Allongez-vous sur le dos, les bras le long du corps. Levez les jambes à environ 45 degrés du sol. \
        <br><br> \
        <b>Activation des muscles :</b> Contractez les muscles abdominaux pour stabiliser le bas du dos contre le sol. \
        <br><br> \
        <b>Mouvement :</b> Alternez en croisant une jambe au-dessus de l'autre. Gardez les jambes tendues et maintenez-les légèrement surélevées du sol. \
        <br><br> \
        <b>Point culminant :</b> Le point culminant de chaque mouvement est lorsque vous avez croisé une jambe au-dessus de l'autre. \
        <br><br> \
        <b>Retour à la position de départ :</b> Continuez d'alterner les jambes de manière contrôlée. Cela peut être fait pendant un nombre défini de répétitions ou pendant une certaine période de temps."
    }
}
var dict_len = Object.keys(dict).length;

// change exercice button
var previousButton = document.getElementById("previous_exercice");
var nextButton = document.getElementById("next_exercice");

// image
var image = document.getElementById("exercice_image");

// description
var description = document.getElementById("description");

// title
var title = document.getElementById("title_exercice");

// current page
var currentPage = 0;

// load the actual page
function load_page() {
    image.src = dict[currentPage]["path"];
    description.innerHTML = dict[currentPage]["description"];
    title.innerHTML = dict[currentPage]["title"];
    timeLeftDefault = dict[currentPage]["duration"];
    reset_timer();
    if (currentPage == 0) previousButton.classList.add("button-grayed");
    if (currentPage == dict_len - 1) nextButton.classList.add("button-grayed");
    
    if (currentPage != 1) arButton.classList.add("button-grayed");
    else arButton.classList.remove("button-grayed");
}

// when the previous button is clicked
previousButton.addEventListener("click", function() {
    if (currentPage > 0) {
        currentPage--;
        load_page();
        nextButton.classList.remove("button-grayed");
    } 
});

// when the next button is clicked
nextButton.addEventListener("click", function() {
    if (currentPage < dict_len - 1) {
        currentPage++;
        load_page();
        previousButton.classList.remove("button-grayed");
    }
});




var arButton = document.getElementById("vr_button");

// var wait_for_landscape = false;
// var state = "PORTRAIT";
var ar_link = "https://sketchfab.com/models/1643f24070c34e6ca82b59a5145b949a/embed?autostart=1&cardboard=0&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0"

var full_div = document.getElementById("div_ra");
var main_div = document.getElementById("main");

arButton.addEventListener("click", function() {
    if (currentPage == 1) {
        full_div.style.display = "block";
        main_div.style.display = "none";
    } else {
        alert("Disponible uniquement pour l'exercice : LA PLANCHE.");
    }
});

// return
var returnButton = document.getElementById("retour_ra");

returnButton.addEventListener("click", function() {
    full_div.style.display = "none";
    main_div.style.display = "block";
});
