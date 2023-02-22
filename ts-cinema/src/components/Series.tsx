import './myStyles.css'
import { mainCards } from './data/mainCards';
import useCardsRender from './hooks/useCardsRender';

const Series = () => {
  const cont = document.querySelector('.series')!;
  return (
    <>
    <div className='series'>
      <>lol {useCardsRender(mainCards, cont)}</>
    </div>
    </>
  )
}

export default Series
