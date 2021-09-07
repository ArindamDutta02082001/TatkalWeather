import { useState } from 'react'
import Fa from './fontawesome-free-5.13.1-web/css/all.css'
function W () {
  const [City, UserCity] = useState('Mumbai')
  const [desc, Desc] = useState({})
  function searchAPI () {
    // console.log(City)
    async function FetchApi () {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=740857a220614055cc6f1db9838f7f65`
      const data = await (await fetch(url)).json()
      console.log(data)

      if (data.cod === 200) {
        const P = {
          name: `${data.name}`,
          cloud: (`${data.weather[0].description}`).toUpperCase(),
          temp: `${Math.round(`${data.main.temp}` - 273.15)}` + ' C',
          humidity: `${data.main.humidity}` + ' % Humidity',
          code: `${data.cod}`
        }
        Desc(P)
      } else {
        const P = {
        //   name: '',
          name: 'Enter Valid City'

        }
        Desc(P)
      }
    }

    FetchApi()
  }
  return (
    <div id='weather'>
      <h1>TATKAL WEATHER INFO</h1>

      <li style={{ listStyle: 'none' }}> <input
        type='text' placeholder='Write City Name' onChange={(e) => {
          UserCity(e.target.value)
        }}
      />
      </li>
      <button type='button' onClick={() => searchAPI()}>Search <i class='fas fa-search' /></button>

      {desc.code == 200 ? <div><h1><i className='fas fa-city' /> {desc.name}</h1>
        <h1><i className='fas fa-temperature-low' />  {desc.temp} </h1>
        <h1><i className='fas fa-tint' /> {desc.humidity}</h1>
        <h1><i className='fas fa-cloud' /> {desc.cloud}</h1>
                          </div>
        : <h1>{desc.name}</h1>}

    </div>
  )
}

export default W
