import React, { useState, useEffect } from 'react'
import './style/weather.css'

let fetchWeatherInfo = async (cityName) => {
    try {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=446188b7b3239b20d5329b74afcb2e0d`
        const response = await fetch(url);
        const data = await response.json();
        // const arrData = [data];
        console.log(cityName);
        return [data];
    } catch (error) {
        return null;
    }
}



const Weather = () => {

    const [cityName, setCityName] = useState('');
    const [url, setUrl] = useState('https://source.unsplash.com/1600x900/?nature,weather');
    const [wthrType, setWthrType] = useState('');
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0)
    const [maxTemp, setMaxTemp] = useState(0)
    const [humid, setHumid] = useState(0)
    const [visibility, setVisibility] = useState(0)
    const [wind, setWind] = useState(0)

    const callContactPage = async () => {

        try {

            const res = await fetch('/weather', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data1 = await res.json();
            console.log(data1);

            if (data1) {
                setCityName(data1.location);
                let data;
                data = await fetchWeatherInfo(data1.location);
                console.log("data", data[0].main.temp, data[0].weather[0].main);
                setUrl(`https://source.unsplash.com/1600x900/?${data[0].weather[0].main},weather`)
                // setCityName('');
                setWthrType(data[0].weather[0].main);
                setTemp(data[0].main.temp);
                setMinTemp(data[0].main.temp_min);
                setMaxTemp(data[0].main.temp_max);
                setHumid(data[0].main.humidity);
                setVisibility(data[0].visibility);
                setWind(data[0].wind.speed);
            }

            if (!res.status === 200) {
                throw new Error(res.error);

            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callContactPage();
    }, [])



    const [isValid, setIsValid] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let data;
            data = await fetchWeatherInfo(cityName);
            console.log("data", data[0].main.temp, data[0].weather[0].main);
            setUrl(`https://source.unsplash.com/1600x900/?${data[0].weather[0].main},weather`)
            // setCityName('');
            setWthrType(data[0].weather[0].main);
            setTemp(data[0].main.temp);
            setMinTemp(data[0].main.temp_min);
            setMaxTemp(data[0].main.temp_max);
            setHumid(data[0].main.humidity);
            setVisibility(data[0].visibility);
            setWind(data[0].wind.speed);

            setIsValid(true)
        } catch (error) {
            setIsValid(false);
            console.log(error, isValid);
        }
    }


    return (
        <>
            <div className="main_cont">
                <div className="img_side">
                    <img src={url} alt="" />
                </div>
                <div className="desc_side">
                    {/* search another city */}
                    <form class="Input" onSubmit={handleSubmit}>
                        <input type="text" id="input" value={cityName} onChange={event => { setCityName(event.target.value) }} class="Input-text" placeholder="Type city name and press enter" autoComplete="off" />
                        <label for="input" class="Input-label">First name</label>
                    </form>

                    {/* lattitude and longitude */}
                    <div className="lat-lon">
                        {/* <h2>Coordinates : {lat},{lon}</h2> */}
                    </div>

                    {/* weather */}
                    <div className="weather_cond">
                        <div className="temp">
                            <h1 className="tempI">{temp}<sup>°</sup><span className="tempIc">C</span> </h1>
                        </div>
                        <div className="type">
                            <h3> {wthrType}</h3>
                        </div>
                        <div className="max_min">
                            <h3>Max : {maxTemp}</h3>
                            <h3>Min : {minTemp}</h3>
                        </div>
                        <div className="fet_r">
                            <div className="c_">
                                <h3>{wind}</h3>
                                <h3>Wind</h3>
                            </div>
                            <div className="c_">
                                <h3>{humid}</h3>
                                <h3>Humidity</h3>
                            </div>
                            <div className="c_">
                                <h3>{visibility}</h3>
                                <h3>Visibility</h3>
                            </div>
                        </div>
                    </div>


                    {/* wind  speed */}


                    {/* sunrise, sunset */}
                    {/* <div className="rise-set">
                        <h3>Sunrise : {sunrise}</h3>
                        <h3>Sunset : {sunset}</h3>
                    </div> */}
                </div>
            </div>
        </>
    )
}


export default Weather
