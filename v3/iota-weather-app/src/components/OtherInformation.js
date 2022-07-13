import React, { useState } from 'react'

const OtherInformation = ({ 
  windK,
  windM,
  humidity,
  visibilityK,
  visibilityM
}) => {

  const [metric, setMetric] = useState(true);

  return (
    <div style={{cursor: 'pointer', width: '90vw', maxWidth: '30em', height: '40vw', maxHeight: '10em', borderRadius: "2em", backgroundColor: 'white', zIndex: '3', marginTop: '3em', display: 'flex' }} onClick={() => {setMetric(!metric)}}>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bolder', fontSize: '2em', color: '#9a9a9a' }}>Wind</div>
        <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{metric ? `${windK}kph` : `${windM}mph`}</div>
      </div>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bolder', fontSize: '2em', color: '#9a9a9a' }}>Humidity</div>
        <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{humidity}%</div>
      </div>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bolder', fontSize: '2em', color: '#9a9a9a' }}>Visibility</div>
        <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{metric ? `${visibilityK}km(s)` : `${visibilityM}mile(s)`}</div>
      </div>
    </div>
  )
}

export default OtherInformation