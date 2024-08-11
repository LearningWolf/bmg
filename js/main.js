const elements = ["hosting", "offering", "service", "profile", "friends", "request", "general"];
const faqs = elements.reduce((acc, el) => {
    acc[el] = document.getElementById(`${el}Faq`);
    acc[`${el}Btn`] = document.getElementById(`${el}FaqBtn`);
    acc[`${el}Img`] = document.getElementById(`${el}Img`);
    return acc;
}, {});

const setFaq = (active) => {
    elements.forEach(el => {
        faqs[el].style.display = el === active ? "block" : "none";
        faqs[`${el}Btn`].classList.toggle("faqBtnActive", el === active);
        faqs[`${el}Img`].src = `./assets/faq${el.charAt(0).toUpperCase() + el.slice(1)}${el === active ? "Color" : ""}.png`;
    });
};

elements.forEach(el => {
    faqs[`${el}Btn`].onclick = () => setFaq(el);
});

setFaq("general");
// let hosting = () => {

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navigaMenu a');
    var navToggler = document.getElementById('navToggler');
    var navCollapse = document.getElementById('navbarSupportedContent');

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
        if (navToggler.getAttribute('aria-expanded') === 'true') {
          navToggler.click(); // Simulate the click to collapse the navbar
        }
      });
    });
  });

//  Clear Forum

window.onload = function() {
  document.getElementById('myForm').reset();
  console.log("reset form")
};

document.getElementById('myForm').addEventListener('submit', function(event) {
  console.log("Form submitted!");
  this.reset(); // Reset the form after submission
});


let backToTopButton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});