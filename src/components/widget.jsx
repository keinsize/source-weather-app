import { useSearchParams } from "react-router-dom";

export function Widget({ weatherInfo }) {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="widget_block">
            <button
                className="GPS_button"
                onClick={async (event) => {
                    navigator.geolocation.getCurrentPosition((pos) => {
                        setSearchParams({
                            lat: pos.coords.latitude,
                            lon: pos.coords.longitude,
                        });
                        window.location.reload();
                    });
                }}
            >
                <div className="SVG_gps">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2 38.8L11.2 34.8C10.3621 34.6341 9.59924 34.2044 9.02319 33.5737C8.44713 32.9429 8.08812 32.1444 7.9987 31.2949C7.90928 30.4454 8.09415 29.5896 8.52624 28.8527C8.95834 28.1159 9.61497 27.5367 10.4 27.2L49.2 10.4C49.7756 10.119 50.4222 10.0171 51.0563 10.1076C51.6904 10.1981 52.2827 10.4768 52.7566 10.9077C53.2306 11.3385 53.5643 11.9017 53.7147 12.5243C53.865 13.1469 53.8251 13.8003 53.6 14.4L36.8 53.6C36.7475 54.1253 36.592 54.6351 36.3424 55.1003C36.0929 55.5655 35.7542 55.977 35.3456 56.3113C34.937 56.6456 34.4666 56.8961 33.9612 57.0486C33.4558 57.2011 32.9253 57.2525 32.4 57.2C31.8747 57.1475 31.3649 56.992 30.8997 56.7424C30.4345 56.4929 30.023 56.1542 29.6887 55.7456C29.3544 55.337 29.1039 54.8666 28.9514 54.3612C28.7989 53.8558 28.7475 53.3253 28.8 52.8L25.2 38.8Z" />
                    </svg>
                </div>
            </button>
            <div className="main_wrap">
                <div className="weather_center_wrap">
                    <div className="weather_image_wrap">
                        <img
                            src={`https://yastatic.net/weather/i/icons/funky/dark/${weatherInfo.fact.icon}.svg`}
                            className="weather_image"
                        />
                    </div>
                    <div className="weather_info">
                        <div className="city_name">{weatherInfo.city}</div>
                        <div className="weather_description">
                            {weatherInfo.fact.condition}
                        </div>
                    </div>
                    <div className="weather_temp_wrap">
                        <span className="weather_temp">
                            {weatherInfo.fact.temp}°
                        </span>
                    </div>
                </div>
                <div className="weather_info_wrap">
                    <div className="weather_info_point sunrise">
                        <div className="weather_info_label">Восход</div>
                        <div className="weather_info_value">
                            {weatherInfo.fact.sunrise}
                        </div>
                    </div>
                    <div className="weather_info_point sunset">
                        <div className="weather_info_label">Закат</div>
                        <div className="weather_info_value">
                            {weatherInfo.fact.sunset}
                        </div>
                    </div>
                    <div className="weather_info_point humidity">
                        <div className="weather_info_label">Влажность</div>
                        <div className="weather_info_value">
                            {weatherInfo.fact.humidity}
                        </div>
                    </div>
                    <div className="weather_info_point wind">
                        <div className="weather_info_label">Ветер</div>
                        <div className="weather_info_value">
                            {weatherInfo.fact.wind_speed} м/c
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
