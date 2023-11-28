import { ForecastCard } from "./ForecastCard";
import { useScroll } from "../hooks/scroll";

export function Hourforecast({ weatherInfo }) {
    const { canScrollLeft, canScrollRight, containerRef, scrollContainerBy } =
        useScroll();

    return (
        <div className="HOURSFORECAST_block">
            <p className="RIGHT_titles">Почасовой прогноз на сегодня</p>
            <div className="hoursforecast_container">
                <button
                    className={`scroll_dh ${canScrollRight ? "" : "disabled"}`}
                    id="right_scroll_hours"
                    disabled={!canScrollRight}
                    onClick={() => scrollContainerBy(752)}
                ></button>
                <button
                    className={`scroll_dh left ${
                        canScrollLeft ? "" : "disabled"
                    }`}
                    id="left_scroll_hours"
                    disabled={!canScrollLeft}
                    onClick={() => scrollContainerBy(-752)}
                ></button>
                <div className="list_container hlscroll" ref={containerRef}>
                    <div className="hours_forecast_list">
                        {weatherInfo.hours.map((hour) => (
                            <ForecastCard weatherInfo={hour} key={hour.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
