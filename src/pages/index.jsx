import { SearchForm } from "../components/searchForm";
import { Widget } from "../components/widget";
import { Weekforecast } from "../components/weekforecast";
import { Hourforecast } from "../components/hourforecast";
import { ErrorMessage } from "../components/errorMessage";
import { Loader } from "../components/loader";
import { useSearchParams } from "react-router-dom";
import { getQueryParams } from "../hooks/getQueryParams";
import { useWeather } from "../hooks/weatherInfoLoad";

export function Index() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { weatherInfo, error, loader } = useWeather(
        getQueryParams(searchParams)
    );

    return (
        <div>
            <section id="LEFT_section">
                <div className="LEFT_container">
                    <div className="LEFT_block">
                        <p className="TF_title">
                            Прогнозы погоды для тысяч мест по всему миру
                        </p>
                        <SearchForm />
                    </div>
                    <div className="RIGHT_block">
                        {loader && <Loader />}
                        {weatherInfo && <Widget weatherInfo={weatherInfo} />}
                    </div>
                </div>
                <button
                    className="scroll"
                    id="right_scroll_sections"
                    onClick={() => {
                        document.querySelector(
                            "body"
                        ).style.transform = `translateX(-${window.innerWidth}px)`;
                    }}
                ></button>
            </section>
            <section id="RIGHT_section">
                <button
                    className="scroll left"
                    id="left_scroll_sections"
                    onClick={() => {
                        document.querySelector("body").style.transform = ``;
                    }}
                ></button>
                <div className="RIGHT_container">
                    {weatherInfo && <Weekforecast weatherInfo={weatherInfo} />}
                    {weatherInfo && <Hourforecast weatherInfo={weatherInfo} />}
                </div>
            </section>
            {error && <ErrorMessage message={error} />}
        </div>
    );
}
