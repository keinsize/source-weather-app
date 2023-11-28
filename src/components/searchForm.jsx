import { useState } from "react";
import { useCoords } from "../hooks/getCoordinates";
import { ErrorMessage } from "../components/errorMessage";
import { useSearchParams } from "react-router-dom";

export function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cityInput, setCityInput] = useState("");
    const { getCoordByCity, error } = useCoords();

    return (
        <div className="TF_search_weather">
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    if (!(cityInput.trim().length === 0)) {
                        const coordinates = await getCoordByCity(cityInput);
                        setSearchParams({
                            lat: coordinates.lat,
                            lon: coordinates.lon,
                        });
                        window.location.reload();
                    }
                }}
                className="FORM_search_weather"
            >
                <label className="FORM_search_label">
                    <input
                        type="search"
                        className="INPUT_search_weather"
                        placeholder="Искать место..."
                        value={cityInput}
                        onChange={(event) => {
                            setCityInput(event.target.value);
                        }}
                    />
                </label>
                <button type="submit" className="BUTTON_search_weather">
                    <svg
                        viewBox="0 0 18 18"
                        fill="#222222"
                        className="SVG_search_submit_icon"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M18 16.7208L14.6193 13.3401C15.7157 11.9695 16.4467 10.1421 16.4467 8.22335C16.4467 3.65482 12.7919 0 8.22335 0C3.65482 0 0 3.65482 0 8.22335C0 12.7919 3.65482 16.4467 8.22335 16.4467C10.1421 16.4467 11.9695 15.8071 13.3401 14.6193L16.7208 18L18 16.7208ZM1.82741 8.22335C1.82741 4.6599 4.6599 1.82741 8.22335 1.82741C11.7868 1.82741 14.6193 4.6599 14.6193 8.22335C14.6193 11.7868 11.7868 14.6193 8.22335 14.6193C4.6599 14.6193 1.82741 11.7868 1.82741 8.22335Z"></path>
                    </svg>
                </button>
            </form>
            {error && <ErrorMessage message={error} />}
        </div>
    );
}
