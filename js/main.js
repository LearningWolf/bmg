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


// pagination


document.addEventListener('DOMContentLoaded', () => {
    const itemsPerPage = 10; // Number of items to show per page
    const accordionContainer = document.getElementById('accordion-container');
    const items = accordionContainer.querySelectorAll('.accordion-item');
    const totalPages = Math.ceil(items.length / itemsPerPage);
    let currentPage = 1;

    const pageNumberElement = document.getElementById('pageNumber');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        items.forEach((item, index) => {
            item.style.display = (index >= start && index < end) ? 'block' : 'none';
        });

        pageNumberElement.textContent = page;
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initialize the first page
    showPage(currentPage);
});
