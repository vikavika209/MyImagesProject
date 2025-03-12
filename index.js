function checkRemoveButton() {
  const imageContainer = document.querySelector(".imageContainer");
  const images = imageContainer.querySelectorAll("img");

  if (images.length <= 1) {
    removeImageButton.disabled = true;
    removeImageButton.style.backgroundColor = "lightgray";
    removeImageButton.style.cursor = "not-allowed";
  } else {
    removeImageButton.disabled = false;
  }
}

function newImages() {
  const images = document.querySelectorAll(".imageContainer img");
  images.forEach((img, index) => {
    const cacheBuster = Date.now() + Math.random();
    img.src = `https://picsum.photos/300/200?random&t=${cacheBuster}`;
  });
}

function addImages() {
  const imageContainer = document.querySelector(".imageContainer");
  const newImages = document.createElement("img");

  const cacheBuster = Date.now() + Math.random();

  newImages.src = `https://picsum.photos/300/200?random&t=${cacheBuster}`;
  newImages.alt = "newImages";
  imageContainer.appendChild(newImages);
}

function removeLastImage() {
  checkRemoveButton();

  const imageContainer = document.querySelector(".imageContainer");
  imageContainer.removeChild(imageContainer.lastChild);
}

const buttonNewImages = document.getElementById("buttonNewImages");
buttonNewImages.addEventListener("click", newImages);

const addImagesButton = document.getElementById("addImages");
addImagesButton.addEventListener("click", addImages);

const removeImageButton = document.getElementById("removeImage");
removeImageButton.addEventListener("click", removeLastImage);

const modal = document.getElementById("imageModal");
const modalImage = modal.querySelector("img");

function openModal(event) {
  const src = event.target.src;
  modalImage.src = src;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

const allImages = document.querySelectorAll(".imageContainer img");
allImages.forEach((img) => {
  img.addEventListener("click", openModal);
});

modal.addEventListener("click", closeModal);

window.addEventListener("DOMContentLoaded", () => {
  checkRemoveButton();
});
