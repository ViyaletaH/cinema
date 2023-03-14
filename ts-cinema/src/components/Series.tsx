import './myStyles.css'
import { mainCards } from './data/mainCards';


const Series = () => {

  return (
    <div className='series-container'>
      {mainCards.map((item) => (
        <div className='card' key={item.cardId}>
          <div className='poster' style={{  
  backgroundImage: item.poster !== '' ? `url( posters/${item.poster}.png)` : `url(./logo.png)`,
  backgroundPosition: 'center',
  backgroundSize:  item.poster !== '' ? 'cover' : 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundColor:  item.poster !== '' ? undefined : '#fff',
}}>
            <div className='age' style={{
              boxShadow: item.adult !== true ? 'inset 0px 0px 2px 2px #74dbe1, inset 0px 0px 5px 5px #ff55f4, inset 0px 0px 20px 20px #ff93e2' : 'inset 0px 0px 2px 2px #ff7e2e, inset 0px 0px 5px 5px #fced45, inset 0px 0px 20px 20px #ff9d15'
            }}>{item.adult === true ? '18+' : '16+'}</div>
            <div className='stage' style={{ backgroundColor: item.done ? "#4bce09" : "#c83eef" }}>{item.done === true ? 'переведено' : 'в процессе' }</div>
          </div>
         <div className='card-data'>
            <div className='names'>
              {item.runame} | {item.engname} 
            </div>
            <div className='episodes'><span className='incard-category'>Количество серий:</span> {item.episodes}</div>
            <div className='card-genre'><span className='incard-category'>Категория:</span> {item.genre}</div>
            <div className='card-genres'><span className='incard-category'>Жанры:</span> {item.genres}</div>
            <div className='card-country'><span className='incard-category'>Страна производства:</span> {item.country}</div>
            <div className='card-year'><span className='incard-category'>Год выпуска:</span> {item.year}</div>
            {item.popularity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Series
