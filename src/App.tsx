import './App.css'

function App() {

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('Submitted', e.target.value);
  }

  return (
    <>
      <h1>Temperature Converter</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input className='temperature' type='number' placeholder="What's the temperature?"/>
        <select className='dropdown' defaultValue="celsius">
          <option value="fahrenheit">Celsius to Fahrenheit</option>
          <option value="celsius">Fahrenheit to Celsius</option>
        </select>
        <button className='button'>Convert</button>
      </form>
    </>
  )
}

export default App
