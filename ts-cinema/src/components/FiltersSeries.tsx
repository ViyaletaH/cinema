import React, { FormEvent } from "react";
import "./myStyles.css";
import Series from "./Series";

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
          <span>Страна производства</span>
          <div className="thailand">
            <div className="thai-choice">
              <input type="radio" name="countries" id="thaiCh" />
            </div>
            <div className="thai-name">
              <label htmlFor="thai">Таиланд</label>
            </div>
          </div>
          <div className="korea">
            <div className="kor-choice">
              <input type="radio" name="countries" id="korCh" />
            </div>
            <div className="kor-name">
              <label htmlFor="kor">Южная Корея</label>
            </div>
          </div>
          <div className="japan">
            <div className="jap-choice">
              <input type="radio" name="countries" id="japCh" />
            </div>
            <div className="jap-name">
              <label htmlFor="jap">Япония</label>
            </div>
          </div>
          <div className="thailand">
            <div className="thai-choice">
              <input type="radio" name="countries" id="thaiCh" />
            </div>
            <div className="thai-name">
              <label htmlFor="thai">Филиппины</label>
            </div>
          </div>
          <div className="thailand">
            <div className="thai-choice">
              <input type="radio" name="countries" id="thaiCh" />
            </div>
            <div className="thai-name">
              <label htmlFor="thai">Вьетнам</label>
            </div>
          </div>
          <div className="thailand">
            <div className="thai-choice">
              <input type="radio" name="countries" id="thaiCh" />
            </div>
            <div className="thai-name">
              <label htmlFor="thai">Сингапур</label>
            </div>
          </div>
          <div className="thailand">
            <div className="thai-choice">
              <input type="radio" name="countries" id="thaiCh" />
            </div>
            <div className="thai-name">
              <label htmlFor="thai">Тайвань</label>
            </div>
          </div>
          <div className="thailand">
            <div className="thai-choice">
              <input type="radio" name="countries" id="thaiCh" />
            </div>
            <div className="thai-name">
              <label htmlFor="thai">Китай</label>
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
            год выпуска
          </label>
        </div>
        <div className="clear">
          <button type="button" className="clear-btn">
            Сброс фильтров
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
        <Series/>
      </div>
    </div>
  );
};
export default FiltersSeries;
