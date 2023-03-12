import './myStyles.css'
import { sliderCards } from './data/sliderCards';

function Popular() {

  return (
    <div className='popular'>
      {sliderCards.map((item) => (
        <div className='card-popular' key={item.cardId}>
          {item.popularity}
        </div>
      ))}
    </div>
  )
}

export default Popular
