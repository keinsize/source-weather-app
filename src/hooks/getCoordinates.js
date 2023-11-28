import axios from "axios";
import { useState } from "react";

export function useCoords() {
    const [error, setError] = useState("");
    async function getCoordByCity(city) {
        try {
            setError("");
            console.log(city);
            const coords = await axios.get(
                `http://84.252.73.107:3000/api/geocode?city=${city}`
            );
            return { lat: coords.data.lat, lon: coords.data.lon };
        } catch (e) {
            console.log(e);
            setError(e.response.data.message);
        }
    }
    return { getCoordByCity, error };
}
