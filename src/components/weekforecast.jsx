import { useScroll } from "../hooks/scroll";
import { ForecastCard } from "./ForecastCard";

export function Weekforecast({ weatherInfo }) {
    const { canScrollLeft, canScrollRight, containerRef, scrollContainerBy } =
        useScroll();

    return (
        <div className="WEEKFORECAST_block">
            <p className="RIGHT_titles">Прогноз погоды на неделю</p>
            <div className="weekforecast_container">
                <button
                    className={`scroll_dh ${canScrollRight ? "" : "disabled"}`}
                    id="right_scroll_days"
                    disabled={!canScrollRight}
                    onClick={() => scrollContainerBy(188)}
                ></button>
                <button
                    className={`scroll_dh left ${
                        canScrollLeft ? "" : "disabled"
                    }`}
                    id="left_scroll_days"
                    disabled={!canScrollLeft}
                    onClick={() => scrollContainerBy(-188)}
                ></button>
                <div className="list_container dlscroll" ref={containerRef}>
                    <div className="days_forecast_list ">
                        {weatherInfo.days.map((day) => (
                            <ForecastCard weatherInfo={day} key={day.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
