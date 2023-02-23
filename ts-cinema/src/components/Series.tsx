import './myStyles.css'
import { mainCards } from './data/mainCards';
import useCardsRender from './hooks/useCardsRender';

const Series = () => {
  return (
    <>
    <div className='series'>
      <>
      {useCardsRender(mainCards, document.querySelector('.series')!)}
      </>
    </div>
    </>
  )
}

export default Series
