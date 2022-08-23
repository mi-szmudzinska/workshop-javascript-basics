const images = document.querySelectorAll('img');
console.log(images);

const bigPhotoContainer = document.querySelector('#big-photo');

function renderPhoto(photo) {
    //Usunięcie pierwszego dziecka z kontenera
    bigPhotoContainer?.firstElementChild?.remove();
    //Renderowanie obrazka 'photo' w elemncie 'bigPhotoContainer'\
    bigPhotoContainer?.append(photo);
}

function handleClickOnImage() {
    //Pobranie atrybutu src z elementu 
    const currentUrl = this.src;
    //Zamiana rozdzielczosci obrazka
    const bigPhotoUrl = currentUrl.replace('300', '900').replace('200', '600');
    console.log(bigPhotoUrl)
    
    const photo = document.createElement('img');
    photo.src = bigPhotoUrl;
    renderPhoto(photo)
};

images.forEach(function (image) {
    //console.log("image z petli for each");
    image.addEventListener("click", handleClickOnImage);
})
