const QuickInfo = ({
  tempC,
  tempF,
  showC,
  icon,
  text,
  feelsLikeC,
  feelsLikeF,
  timeOfDayText,
  setShowC
}) => {

  const backgroundColor = '#5773ff';

  return (
    <div style={{ width: '90%', maxWidth: '30em', aspectRatio: "2.1", borderRadius: "2em", backgroundColor: `${backgroundColor}`, position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FCFCFC' }} onClick={() => { setShowC(!showC) }}>
      <div style={{ flex: '1', paddingLeft: '2.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '3em', height: '3em', backgroundImage: `url(${icon})`, backgroundSize: 'contain', zIndex: '2' }}></div>
        <div>
          <div style={{ fontSize: '1.5em', color: '#FCFCFC', fontWeight: 'bold', zIndex: '3' }}>{text}</div>
          <div style={{ zIndex: '3' }}>{timeOfDayText}</div>
        </div>
      </div>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ fontSize: '4em', color: '#FCFCFC', fontWeight: 'bold', zIndex: '1' }} >{showC ? `${tempC}°C` : `${tempF}°F`}</div>
        <div style={{ fontSize: '1.3em', color: '#FCFCFC', fontWeight: '400', zIndex: '2' }}>feels like {showC ? `${feelsLikeC}°C` : `${feelsLikeF}°F`}</div>
      </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  )
}



export default QuickInfo;