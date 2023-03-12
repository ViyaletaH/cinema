import './myStyles.css'
import { mainCards } from './data/mainCards';


const Series = () => {

  return (
    <div className='series-container'>
      {mainCards.map((item) => (
        <div className='card' key={item.cardId}>
          <div className='poster' style={{  
  backgroundImage: `url( posters/${item.poster}.png)`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
            <div className='age'>{item.adult}</div>
            <div className='stage'>{item.done}</div>
          </div>
         <div className='card-data'>
            <div className='names'>
              {item.runame} | {item.engname} 
            </div>
            <div className='episodes'>Количество серий: {item.episodes}</div>
            <div className='card-genre'>{item.genre}</div>
            <div className='card-genres'>{item.genres}</div>
            <div className='card-country'>{item.country}</div>
            <div className='card-year'>{item.year}</div>
            {item.popularity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Series
