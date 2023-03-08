import './myStyles.css'
import { mainCards } from './data/mainCards';


const Series = () => {
  return (
    <div>
      {mainCards.map((item) => (
        <div className='card' key={item.cardId}>
          {/* <h2>{item.name}</h2>
          <p>{item.description}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Series
