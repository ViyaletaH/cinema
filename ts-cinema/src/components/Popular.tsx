import './myStyles.css'
import { sliderCards } from './data/sliderCards';

function Popular() {

  return (
    <div className='popular'>
      {sliderCards.map((item) => (
        <div className='card' key={item.id}>
          {/* <h2>{item.name}</h2>
          <p>{item.description}</p> */}
        </div>
      ))}
    </div>
  )
}

export default Popular
