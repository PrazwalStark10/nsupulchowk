// for modal of feedback and donation

const sidemenu= document.querySelector(".sidemenu");
const btnopen = document.querySelector(".fa-sharp.fa-solid.fa-bars");
const btnclose = document.querySelector(".fa-sharp.fa-solid.fa-xmark");
const fb = document.querySelector(".nav-btn.feedback");
const dnt = document.querySelector('.fas.fa-hand-holding-usd');
const fbclose = document.querySelector('.feedbackclose');
const confb = document.querySelector('.con-feedback');
const dntclose = document.querySelector('.donationclose');
const dntfb = document.querySelector('.con-donation');
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");
const btnmanifesto = document.querySelector(".manifesto");
  btnmanifesto.addEventListener("click", function() {
    window.location.href = "manifesto.html";
  });
let imageIndex = 1,
  intervalId;
btnopen.addEventListener('click',function(){
  if(!sidemenu.classList.contains(".show-sidemenu")){
  sidemenu.classList.add("show-sidemenu");
}
});
btnclose.addEventListener('click',function(){
  if(sidemenu.classList.contains("show-sidemenu")){
  sidemenu.classList.remove("show-sidemenu");
}
});
const nav = document.querySelector('.nav');
window.addEventListener('scroll',() => {
  if (window.scrollY === 0) {
    nav.classList.remove('scrolled');
  }
  else{
    nav.classList.add('scrolled');
  }
});
fb.addEventListener('click',function(){
    console.log("feedback button pressed");
    console.log(confb.classList);
    if(!confb.classList.contains('show-con-feedback')){
        confb.classList.add('show-con-feedback');
        console.log(confb.classList);
    }
});
fbclose.addEventListener('click',function(){
    if(confb.classList.contains('show-con-feedback')){
        confb.classList.remove('show-con-feedback');
    }
});
// .container-feedback


dnt.addEventListener('click',function(){
    console.log("Donation button pressed");
    console.log(dntfb.classList);
    if(!dntfb.classList.contains('show-con-donation')){
        dntfb.classList.add('show-con-donation');
        console.log(dntfb.classList);
    }
});
dntclose.addEventListener('click',function(){
    if(dntfb.classList.contains('show-con-donation')){
        dntfb.classList.remove('show-con-donation');
    }
});
//.container- for slider
// Get the DOM elements for the image carousel


// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
