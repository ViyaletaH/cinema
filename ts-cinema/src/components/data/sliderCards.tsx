import { mainCards, Card } from './mainCards';

let sliderCards: Array<Card>;

sliderCards = mainCards.sort((a, b) => b.popularity - a.popularity).slice(0, 9);

export {sliderCards}