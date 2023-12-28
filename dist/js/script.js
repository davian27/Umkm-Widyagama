const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

function openBatikPopup(title, description, imagePath) {
  var popup = document.getElementById("popupBatik");
  document.getElementById("popupBatikTitle").innerText = title;
  document.getElementById("popupBatikDescription").innerText = description;
  document.getElementById("popupImage").src = imagePath;
  popup.style.display = "block";
}

function closeBatikPopup() {
  try {
    var popup = document.getElementById("popupBatik");
    popup.style.display = "none";
} catch (error) {
    console.error("Terjadi kesalahan:", error);
}
}





