import './myStyles.css'
import { mainCards } from './data/mainCards';


const Series = () => {

  return (
    <div>
      {mainCards.map((item) => (
        <div className='card' key={item.cardId}>
          <div className='poster'>
            <div className='age'>{item.adult}</div>
            <img alt='poster' className='poster-itself' src={`posters/${item.poster }.png`} width='50px' height='50px'/>
            <div className='stage'>{item.done}</div>
          </div>
         <div className='card-data'>
            <div className='names'>
              {item.runame} | {item.engname} 
            </div>
            <div className='episodes'>Количество серий: {item.episodes}</div>
            <div className='genre'>{item.genre}</div>
            <div className='genres'>{item.genres}</div>
            <div className='country'>{item.country}</div>
            <div className='year'>{item.year}</div>
            {item.popularity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Series
