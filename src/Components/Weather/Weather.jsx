import React, {useState} from 'react';
import Display from '../Display/Display';

import './Weather.styles.css';

const Weather = () => {

    const APIKEY = 'd50760e90e3d3bf52286d69202bee032';

    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState ([]);

    async function weatherData(e) {
        e.preventDefault();
        if(form.city === "") {
            alert("Ingresa Ciudad")
        }else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&units=metric&appid=${APIKEY}`)
            .then(res => res.json())
            .then(data => data)

            setWeather({data: data});
        }
    }
    
    const handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setForm({...form, city:value})
        }
        if(name === "country"){
            setForm({...form, country:value})
        }
    }
    return (
        <div className="weatherHeader">
            <h1 className="title">Weather APP</h1>
            <form action="" className="form">
                <input type="text" name="city" placeholder="Ciudad" onChange={e => handleChange(e)}/>
                {/* <input type="text" name="country" placeholder="País" onChange={e => handleChange(e)}/> */}
                <button className="btnSearch" onClick={e => weatherData(e)}>Buscar</button>
            </form>
            {weather.data !== undefined ? (
                <div>
                    <Display data={weather.data} />
                </div>
      )     : null}
        </div>
    )
}

export default Weather
