import { useEffect, useState } from 'react';
import { getAvailableLanguages } from '../components/ApiManager';
import FloatingButton from '../components/FloatingButton';
import './AppStyle.css';

const sad = require('../components/weatherData.json');

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  const api = "http://api.weatherapi.com/v1/current.json?key=dea2007a7bd9477fb6140709220907&q=kolkata";   //probably will need to hide the key

  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((_) => {
      setLatitude(_.coords.latitude);
      setLongitude(_.coords.longitude);
    })

  }, [])

  return (
    <div className='App'>
      <div>
        {sad.location.name}
        <div>{sad.current.cloud}</div>
        <div>{sad.current.condition.text}</div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
      </div>
      {/* <ul>
        {getAvailableLanguages().map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul> */}
      <FloatingButton />
    </div>
  );
}