import './myStyles.css'
import { mainCards } from './data/mainCards';


const Series = () => {
  return (
    <div>
      {mainCards.map((item) => (
        <div className='card' key={item.cardId}>
          {item.popularity}
        </div>
      ))}
    </div>
  );
}

export default Series
