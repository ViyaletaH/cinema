import "./myStyles.css";
import { sliderCards } from "./data/sliderCards";

function Popular() {
  return (
    <div className="popular">
      {sliderCards.map((item) => (
        <div
          className="card-popular"
          key={item.cardId}
          style={{
            backgroundImage:
              item.poster !== ""
                ? `url( posters/${item.poster}.png)`
                : `url(./logo.png)`,
            backgroundPosition: "center",
            backgroundSize: item.poster !== "" ? "cover" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: item.poster !== "" ? undefined : "#fff",
          }}
        >
          {/* {item.popularity} */}
        </div>
      ))}
    </div>
  );
}

export default Popular;
