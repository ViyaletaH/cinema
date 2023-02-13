import React from 'react'
import './myStyles.css'
import FiltersSeries from './FiltersSeries'

const Functional = () => {
  return (
    <div className='functional'>
      <div className="search-login">
        <div className="logo-name">
          <img src={require("./images/logo.png")} alt="logo" width="120px"/>
          <span className="name">The art of Love Asia</span>
        </div>
      <input type="text" placeholder="   Введите название..." className="searcher"/>
      <button className="entry">Вход в админку</button>
      </div>
      <div className="donate-popular"></div>
      <FiltersSeries/>
    </div>
  ) 
}

export default Functional
