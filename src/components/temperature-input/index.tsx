import "./styles.css";
import { TemperatureScale } from "../../types";

type TTemperatureInputProps = {
  scale: TemperatureScale;
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
};

export const TemperatureInput = ({ 
  scale, 
  temperature, 
  onTemperatureChange 
}: TTemperatureInputProps) => {
  return (
    <fieldset className="card">
      <label className="label">
        Введите температуру в {scale}:
        <input
          className="input"
          name="name"
          type="text"
          inputMode="numeric"
          value={temperature}
          onChange={(e) => onTemperatureChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};