import { useEffect, useState } from "react";
import axios from "axios";

export function useWeather(coordinates) {
    const [error, setError] = useState("");
    const [loader, setLoading] = useState("");
    const [weatherInfo, setWeatherStat] = useState("");

    async function fetchWeather() {
        try {
            setError("");
            setLoading(true);
            const response = await axios.get(
                `http://84.252.73.107:3000/api/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`
            );
            setWeatherStat(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    }

    useEffect(() => {
        fetchWeather();
    }, []);

    return { weatherInfo, error, loader };
}
