import { Cards } from './cards.js';
import { Footer } from './Footer.js';

window.onload = () => {
    const animaCards = new Cards();
    document.addEventListener("scroll", animaCards.scrollCard.bind(animaCards));

    const footer = new Footer();
    footer.efeitoOnda();
}