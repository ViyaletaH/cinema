import React, { FormEvent } from "react";
import "./myStyles.css";

function handleYearInputChange(event: FormEvent<HTMLInputElement>) {
  const yearInput = event.currentTarget;
  const yearOutput = document.getElementById("ynum");
  if (yearOutput) {
    yearOutput.textContent = yearInput.value;
  }
}

const FiltersSeries = () => {
  return (
    <div className="filters-series">
      <div className="filters">
        <div className="type">
          <button type="button" className="gl">
            GL
          </button>
          <button type="button" className="bl">
            BL
          </button>
        </div>
        <div className="country">
          <div className="bang">
            <div className="bang-choice">
              <input type="radio" name="cities" id="bangCh" />
            </div>
            <div className="bang-name">
              <label htmlFor="bang">Bangkok</label>
            </div>
          </div>
          <div className="saigon">
            <div className="saigon-choice">
              <input type="radio" name="cities" id="saigonCh" />
            </div>
            <div className="saigon-name">
              <label htmlFor="saigon">Ho Chi Min</label>
            </div>
          </div>
          <div className="singapore">
            <div className="sing-choice">
              <input type="radio" name="cities" id="singCh" />
            </div>
            <div className="sing-name">
              <label htmlFor="sing">Singapore</label>
            </div>
          </div>
        </div>
        <div className="year">
          <div className="y-range-num">
            <output className="y-num" id="ynum">
              все
            </output>
            <input
              type="range"
              name="year"
              min="2015"
              max="2023"
              className="year-range"
              id="year"
              onInput={handleYearInputChange}
            />
          </div>
          <label htmlFor="year" className="y-label">
            Year
          </label>
        </div>
        <div className="clear">
          <button type="button" className="clear-btn">
            Clear filters
          </button>
        </div>
      </div>
      <div className="variants">
        <div className="subfilters">
          <div className="subparams">
            <div className="number"></div>
          </div>
          <div className="line"></div>
          <div className="subsorter">
            <div className="sort">Sort by</div>
            <div className="criteria">
              <form>
                <select className="sortselect">
                  <option value="default" selected disabled>
                    Default
                  </option>
                  <option value="lowest">YEAR(Newest)</option>
                  <option value="highest">YEAR(Oldest)</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="series"></div>
      </div>
    </div>
  );
};
export default FiltersSeries;
