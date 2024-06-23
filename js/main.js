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
