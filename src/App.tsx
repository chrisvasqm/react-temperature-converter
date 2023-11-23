import { useState } from 'react';
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(0);
  const [convertion, setConversion] = useState('fahrenheit');
  const [result, setResult] = useState(undefined);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('Temperature', temperature);

    if (convertion === 'fahrenheit')
      setResult(celsiusToFahrenheit(temperature).toFixed(2));
    else
      setResult(fahrenheitToCelsius(temperature).toFixed(2));
  }

  function handleTemperatureChange(event: any) {
    const value = event.target.value;

    if (!value || isNaN(parseInt(value, 10)))
      return;


    setTemperature(parseInt(event.target.value, 10));
  }

  function handleConversionChange(event: any) {
    setConversion(event.target.value);
  }


  function celsiusToFahrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32;
  }


  function fahrenheitToCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
  }

  return (
    <>
      <h1>Temperature Converter</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='temperature'
          type='number'
          placeholder="What's the temperature?"
          onChange={handleTemperatureChange}
          value={temperature}
        />

        <select
          className='dropdown'
          defaultValue={convertion}
          onChange={handleConversionChange}
        >
          <option value="fahrenheit">Celsius to Fahrenheit</option>
          <option value="celsius">Fahrenheit to Celsius</option>
        </select>

        <button className='button' type='submit'>Convert</button>
      </form>

      {result && <h3>{result}</h3>}
    </>
  )
}

export default App
