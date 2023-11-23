import { useState } from 'react';
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(0);
  const [convertion, setConversion] = useState('fahrenheit');

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('Temperature', temperature);
  }

  function handleTemperatureChange(event: any) {
    const value = event.target.value;

    if (!value)
      return;

    setTemperature(parseInt(event.target.value, 10));
  }

  function handleConversionChange(event: any) {
    setConversion(event.target.value);
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

        <select className='dropdown' defaultValue={convertion} onChange={handleConversionChange}>
          <option value="fahrenheit">Celsius to Fahrenheit</option>
          <option value="celsius">Fahrenheit to Celsius</option>
        </select>

        <button className='button' type='submit'>Convert</button>
      </form>
    </>
  )
}

export default App
