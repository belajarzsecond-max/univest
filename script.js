const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    lightboxImg.src = images[currentIndex].src;
});const uploadInput = document.getElementById("upload");
const gallery = document.querySelector(".gallery");

uploadInput.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

const img = document.createElement("img");
img.src = e.target.result;

gallery.appendChild(img);

}

reader.readAsDataURL(file);

}

});const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function(){

const filter = this.value.toLowerCase();
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

const name = img.alt ? img.alt.toLowerCase() : "";

if(name.includes(filter)){
img.style.display = "block";
}else{
img.style.display = "none";
}

});

});