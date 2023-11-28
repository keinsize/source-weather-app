export function ForecastCard({ weatherInfo }) {
    return (
        <div className="forecast_card">
            <p className="card_date">{weatherInfo.date}</p>
            <img
                alt="Иконка погоды"
                src={`https://yastatic.net/weather/i/icons/funky/dark/${weatherInfo.icon}.svg`}
                className="card_img"
            />
            <p className="card_temp">{weatherInfo.temp}</p>
            <p className="card_description">{weatherInfo.condition}</p>
        </div>
    );
}
