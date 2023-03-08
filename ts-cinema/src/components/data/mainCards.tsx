interface Card {
    cardId?: number,
    video: string,
    poster: string,
    genre: string,
    genres: string,
    country: string,
    year: number,
    episodes: number,
    length: number,
    done: boolean,
    popularity: number,
    adult: boolean,
    access: boolean,
    start?: string,
    day?: string,
}


const mainCards: Array<Card> = [    {
    video: '',
    poster: '',
    genre: '',
    genres: '',
    country: '',
    year: 2021,
    episodes: 0,
    length: 0,
    done: true,
    popularity: 0,
    adult: true,
    access: true,
},
{
    video: '',
    poster: '',
    genre: '',
    genres: '',
    country: '',
    year: 2021,
    episodes: 0,
    length: 0,
    done: true,
    popularity: 0,
    adult: true,
    access: true,
},

{
    video: '',
    poster: '',
    genre: '',
    genres: '',
    country: '',
    year: 2021,
    episodes: 0,
    length: 0,
    done: true,
    popularity: 0,
    adult: true,
    access: true,
},];

mainCards.forEach((card, index) => {
    card.cardId = index + 1;
  });

  export {mainCards}