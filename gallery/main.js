

const images = document.querySelectorAll('img');
console.log(images);

const bigPhotoContainer = document.querySelector('#big-photo');

images[0].addEventListener('click', function () {
    const currentUrl = this.src;
    const bigPhotoUrl = currentUrl
        .replace('300', '900')
        .replace('200', '600');
    console.log(bigPhotoUrl)
    
    const photo = document.createElement('img');
    photo.src = bigPhotoUrl;
    
    bigPhotoContainer?.append(photo);
})
images[1] 
images[2] 