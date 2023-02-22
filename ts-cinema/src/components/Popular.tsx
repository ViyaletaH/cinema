import './myStyles.css'
import useCardsRender from './hooks/useCardsRender';
import { sliderCards } from './data/sliderCards';

function Popular() {
    const cont = document.querySelector('.popular')!;

  return (
    <div className='popular'>
              <>lol{useCardsRender(sliderCards, cont)}</>
    </div>
  )
}

export default Popular
