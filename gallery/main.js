// 1. Nasłuchujemy na zdarzenie kliknięcie w obrazki
// 2. Pobieramy aktualny URL do klikniętego obrazka
// 3. Zmieniamy URL na docelowy (większa rozdzielczość obrazka)
// 4. Renderujemy duży obrazek pod listą miniaturek

const images = document.querySelectorAll("img");
// console.log(images);

const bigPhotoContainer = document.querySelector("#big-photo");

function renderPhoto(photo) {
  // Usunięcie pierwszego elementu (dziecka) z kontenera
  bigPhotoContainer?.firstElementChild?.remove();
  // Renderowanie obrazka `photo` w elemencie `bigPhotoContainer`
  bigPhotoContainer?.append(photo);
}

function handleClickOnImage() {
  // Pobranie atrybutu "src" z element <img>
  const currentUrl = this.src;
  // Zamiana rozdzielczości obrazka
  const bigPhotoUrl = currentUrl.replace("300", "900").replace("200", "600");
  // Stworzenie elementu typu obrazek
  const photo = document.createElement("img");
  photo.src = bigPhotoUrl;
  renderPhoto(photo);
}

images.forEach(function (image) {
  // console.log('to jest "image" z pętli "forEach"', image);
  image.addEventListener("click", handleClickOnImage);
});

// 1 images[0].addEventListener("click", handleClickOnImage);
// 2 images[1].addEventListener("click", handleClickOnImage);
// 3 images[2].addEventListener("click", handleClickOnImage);