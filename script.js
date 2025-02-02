var navbar = document.querySelector('.navbar');
var coverPhoto = document.querySelector('.cover-photo');
var coverPhotoHeight = coverPhoto.getBoundingClientRect().height;

if (window.innerWidth < 992 && window.scrollY < coverPhotoHeight) {
    navbar.style.display = 'none';
}

window.addEventListener('scroll', function() {
    var navbarMenusList = navbar.querySelector('.navbar-nav');
    var navbarLinks = navbar.querySelectorAll('.nav-link');
    var navbarToggler = navbar.querySelector('.custom-toggler');
    var navbarDate = navbar.querySelector('.navbar-date');
    var buttonsWhite = navbar.querySelectorAll('.btn-white');

    // Récupérer la hauteur de la photo de couverture
    var navbarHeight = navbar.getBoundingClientRect().height;

    if (window.innerWidth < 992 && (window.scrollY >= (coverPhotoHeight*0.2 - navbarHeight)) && (window.scrollY < coverPhotoHeight*0.8 - navbarHeight)) {
        navbar.style.display = 'none';
    }
    // Vérifier si l'utilisateur a fait défiler jusqu'au bas de la photo de couverture
    else if ((window.scrollY >= (coverPhotoHeight*0.2 - navbarHeight)) && (window.scrollY < coverPhotoHeight*0.8 - navbarHeight)) {
        setTimeout(function() {
            navbarMenusList.style.visibility = 'hidden';
            navbarToggler.style.visibility = 'hidden';
        }, 40);
    }
    else if (window.scrollY >= coverPhotoHeight - navbarHeight) {
        setTimeout(function() {
            navbar.style.display = 'flex';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbarMenusList.style.visibility = 'visible';
            navbarToggler.style.visibility = 'visible';
            navbarDate.style.color = 'black';
            for(var i=0 ; i<navbarLinks.length ; i++) {
                navbarLinks[i].style.color = 'black';
            }
            for(var i=0 ; i<buttonsWhite.length ; i++) {
                buttonsWhite[i].style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                buttonsWhite[i].style.color = 'white';
            }
        }, 40);
    }
    else {
        setTimeout(function() {
            //navbar.style.display = 'flex';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            navbar.style.backdropFilter = 'blur(0px)';
            navbarMenusList.style.visibility = 'visible';
            navbarToggler.style.visibility = 'visible';
            navbarDate.style.color = 'white';
            for(var i=0 ; i<navbarLinks.length ; i++) {
                navbarLinks[i].style.color = 'white';
            }
            for(var i=0 ; i<buttonsWhite.length ; i++) {
                buttonsWhite[i].style.backgroundColor = 'white';
                buttonsWhite[i].style.color = 'black';
            }
        }, 40);         
    }        
});

let imageReceptionNumber = 1;

let imagesReception = [
    "https://mariage-paul-pauline-media.s3.eu-west-3.amazonaws.com/ressources/IMG_9529.webp",
    "https://mariage-paul-pauline-media.s3.eu-west-3.amazonaws.com/ressources/IMG_9150.webp",
    "https://mariage-paul-pauline-media.s3.eu-west-3.amazonaws.com/ressources/IMG_6777.webp",
    "https://mariage-paul-pauline-media.s3.eu-west-3.amazonaws.com/ressources/IMG_8478.webp"
];

function changeImage() {
    if (imageReceptionNumber >= imagesReception.length) {
        let randomNumber = Math.floor(Math.random() * imagesReception.length);
        document.getElementById("imgReception").src = imagesReception[randomNumber];
    }
    else {
        document.getElementById("imgReception").src = imagesReception[imageReceptionNumber];
        imageReceptionNumber = imageReceptionNumber + 1;
    }
}