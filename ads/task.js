const texts = document.getElementsByClassName("rotator")[0].getElementsByClassName("rotator__case")
let currentIndex = 0;
function rotateText() {
  const rotator = document.querySelector(".rotator__case_active");
  rotator.classList.remove("rotator__case_active");
  
  currentIndex = (currentIndex + 1) % texts.length;
  
  const nextText = document.querySelectorAll(".rotator__case")[currentIndex];
  nextText.classList.add("rotator__case_active");
}

setInterval(rotateText, 1000);