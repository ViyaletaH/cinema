import './myStyles.css'
import FiltersSeries from './FiltersSeries'
import About from './About'
import Popular from './Popular'

const donateOnClickhandler = () => {
  window.open("https://yoomoney.ru/to/410011925709681/0", "_blank")
}

const Functional = () => {
  return (
    <div className='functional'>
      <div className="search-login">
        <div className="logo-name">
          <a href='#'><img src={require("./images/logo.png")} alt="logo" width="120px"/></a>
          <span className="name">The art of Love Asia</span>
        </div>
      <input type="text" placeholder="   Введите название..." className="searcher"/>
      <button className="entry">Вход в админку</button>
      </div>
      <div className='separator'></div>
      <div className="donate-popular">
      <div className='donate' onClick={donateOnClickhandler}>
          <div className='shine'></div>
          <img src={require("./images/donuts.png")} alt="donate" width="180px" className='donuts'/>
          <span className="donate-why">на аренду сервера</span>
        </div>
        <Popular/>
      </div>
      <FiltersSeries/>
      <About/>
    </div>
  ) 
}

export default Functional
