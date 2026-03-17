const gallery = document.querySelector(".gallery");
const upload = document.getElementById("upload");

// upload foto
upload.addEventListener("change", function(){
  const files = this.files;

  for(let i = 0; i < files.length; i++){
    const reader = new FileReader();

    reader.onload = function(e){
      const img = document.createElement("img");
      img.src = e.target.result;
      gallery.appendChild(img);
    }

    reader.readAsDataURL(files[i]);
  }
});

// viewer fullscreen (tetap ada)
document.addEventListener("click", function(e){
  if(e.target.tagName === "IMG"){
    const viewer = document.createElement("div");

    viewer.style.position = "fixed";
    viewer.style.top = "0";
    viewer.style.left = "0";
    viewer.style.width = "100%";
    viewer.style.height = "100%";
    viewer.style.background = "rgba(0,0,0,0.9)";
    viewer.style.display = "flex";
    viewer.style.alignItems = "center";
    viewer.style.justifyContent = "center";

    const bigImg = document.createElement("img");
    bigImg.src = e.target.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";

    viewer.appendChild(bigImg);

    viewer.addEventListener("click", () => viewer.remove());

    document.body.appendChild(viewer);
  }
});
