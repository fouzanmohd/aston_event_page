let lightBoxContainer = document.querySelectorAll(".lightbox");
let detailsButton = document.querySelectorAll(".details");
let image = document.querySelectorAll(".image");
let overlay = document.querySelector("#overlay");

//open popup when clicked on images
image.forEach((img) => {
  img.onclick = () => {
    let name = img.getAttribute("data-name");
    lightBoxContainer.forEach((lightbox) => {
      let target = lightbox.getAttribute("data-target");

      if (name == target) {
        lightbox.classList.add("active");
        overlay.classList.add("active");
      }
    });
  };
});

//open popup when 'more details' button is clicked
detailsButton.forEach((button) => {
  button.onclick = () => {
    let name = button.getAttribute("data-name");
    lightBoxContainer.forEach((lightbox) => {
      let target = lightbox.getAttribute("data-target");

      if (name == target) {
        lightbox.classList.add("active");
        overlay.classList.add("active");
      }
    });
  };
});

//close the pop up if clicked on 'X' button

lightBoxContainer.forEach((closebtn) => {
  closebtn.querySelector(".fa-times").onclick = () => {
    closebtn.classList.remove("active");
    overlay.classList.remove("active");
  };
});

//close the pop up if clicked anywhere else outside the popup
window.onclick = (e) => {
  if (e.target.id == "overlay") {
    lightBoxContainer.forEach((box) => {
      box.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
};

//Search box for filtering events implementation
document.querySelector(".search_input").addEventListener("input", filterSearch);
function filterSearch() {
  const searchBox = document.querySelector(".search_input");
  const searchQuery = searchBox.value.toLowerCase();
  const eventBoxes = document.querySelectorAll(".event");

  eventBoxes.forEach((event) => {
    let eventTitle = event.querySelector("h1").textContent.toLowerCase();
    if (eventTitle.includes(searchQuery)) {
      event.style.display = "";
    } else {
      event.style.display = "none";
    }
  });
}

// function to toggle love button
function likeButton(x) {
  x.classList.toggle("fa-solid");
}
