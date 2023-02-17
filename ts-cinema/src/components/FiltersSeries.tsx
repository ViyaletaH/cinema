import React, {FormEvent} from 'react'
import './myStyles.css'

// import { FormEvent } from 'react';

function handleYearInputChange(event: FormEvent<HTMLInputElement>) {
  const yearInput = event.currentTarget;
  const yearOutput = document.getElementById('ynum');
  if (yearOutput) {
    yearOutput.textContent = yearInput.value;
  }
}

const FiltersSeries = () => {
  return (
    <div className="filters-series"><div className="filters">
    <div className="type">
      <button type="button" className="rent">htmlFor a rent</button>
      <button type="button" className="buy">To buy</button>
    </div>
    <div className="city">
      <div className="bang">
        <div className="bang-choice"><input type="radio" name="cities" id="bangCh"/></div>
        <div className="bang-name"><label htmlFor="bang">Bangkok</label></div>
      </div>
      <div className="saigon">
        <div className="saigon-choice"><input type="radio" name="cities" id="saigonCh"/></div>
        <div className="saigon-name"><label htmlFor="saigon">Ho Chi Min</label></div>
      </div>
      <div className="singapore">
        <div className="sing-choice"><input type="radio" name="cities" id="singCh"/></div>
        <div className="sing-name"><label htmlFor="sing">Singapore</label></div>
      </div>
    </div>
    <div className="rooms">
      <form className="roomsdropdown">
        <select className="roomsselect">
          <option value="0">All</option>
          <option value="1">Studio</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="arrow"></div>
      </form>
    </div>
    <div className="furniture">
      <legend>Furniture:</legend>
      <div className="fur-yes"><input type="radio" id="fur-y" name="furniture" value="fur-y" className="y-choice"/>
        <label htmlFor="fur-y" className="fur-y">Yes</label></div>
      <div className="fur-no"><input type="radio" id="fur-n" name="furniture" value="fur-n" className="n-choice"/>
        <label htmlFor="fur-n" className="fur-n">No</label></div>

    </div>
    <div className="year">
    <div className="y-range-num">
    <output className="y-num" id="ynum">all</output>
    <input type="range" name="year" min="2012" max="2021" className="year-range"  id="year" onInput={handleYearInputChange}/>
  </div>
  <label htmlFor="year" className="y-label">Year</label>
    </div>
    <div className="price">
      <div className="p-range-num">
        <div id="price"></div>
      </div>
      <label htmlFor="price" className="p-label">Price</label>
    </div>
    <div className="clear">
      <button type="button" className="clear-btn">Clear filters</button>
    </div>
  </div>
    <div className="variants">
      <div className="subfilters">
        <div className="subparams">
          <div className="view">
            <img src="./images/icons/grid.png" alt="grid view" width="20px" height="20px" className="grid" id="grid-view"/>
              <img src="./images/icons/list (1).png" alt="list view" width="20px" height="20px" className="list" id="list-view"/>
              </div>
              <div className="number"></div>
          </div>
          <div className="line"></div>
          <div className="subsorter">
            <div className="sort">Sort by</div>
            <div className="criteria">
              <form>
                <select className="sortselect">
                  <option value="default" selected disabled>Default</option>
                  <option value="lowest">Price(Lowest)</option>
                  <option value="highest">Price(Highest)</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="apartments">

        </div>

    </div>
</div>
      
        )
}
export default FiltersSeries
