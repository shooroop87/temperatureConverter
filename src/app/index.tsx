import { useState } from "react";
import { TemperatureInput } from "../components/temperature-input";
import { TemperatureScale } from "../types";
import { tryConvert, toCelsius, toFahrenheit } from "../utils";
import "./styles.css";

export const App = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState<TemperatureScale>(TemperatureScale.CELCIUS);

  const handleCelsiusChange = (newTemperature: string) => {
    setTemperature(newTemperature);
    setScale(TemperatureScale.CELCIUS);
  };

  const handleFahrenheitChange = (newTemperature: string) => {
    setTemperature(newTemperature);
    setScale(TemperatureScale.FAHRENHEIT);
  };

  const celsius = 
    scale === TemperatureScale.FAHRENHEIT
      ? tryConvert(temperature, toCelsius)
      : temperature;
      
  const fahrenheit = 
    scale === TemperatureScale.CELCIUS
      ? tryConvert(temperature, toFahrenheit)
      : temperature;

  return (
    <div className="page">
      <h1>Конвертер температуры</h1>
      <div className="content">
        <TemperatureInput 
          scale={TemperatureScale.CELCIUS} 
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput 
          scale={TemperatureScale.FAHRENHEIT} 
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};