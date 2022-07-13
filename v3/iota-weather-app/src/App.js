import { useState, useEffect } from 'react';

// [REQUEST HANDLER]...
import axios from 'axios'

// [REACT COMPONENTS]...
import LocationHeader from './components/LocationHeader';
import QuickInfo from './components/QuickInfo';
import OtherInformation from './components/OtherInformation';
// import AccountPersonalization from './components/AccountPersonalization';

// [STYLING COMPONENTS]...
import './assets/styles/App.css';
import TimeLineSlider from './components/TimeLineSlider';

// [ROOT APP COMPONENT]
// ... [APP]
//       .
//       .
//       ....[LOCATION HEADER]
//		 .			.
//		 .			.
//		 .			....Location changer option
//		 .			.
//		 .			.
//		 .			....local options (tentative)
//       .
//       .
// 		 ....[QUICK INFO]
//		 .	      .
//		 .		  .
//		 .	      ....SECTION ONE
//		 .	      .		   .
//		 .    	  .		   .
//		 .	      .		   ....image rep (icon)
//		 .	      .		   .
//		 .	      .		   .
//		 .	      .		   ....weather status text
//		 .	      .		   .
//		 .	      .		   .
//		 .	      .		   ....time of the day
//		 .	      .
//		 .	      .
//		 .	      ....SECTION TWO
//		 .			      .
//		 .			      .
//		 .			      ....current temparature
//		 .			      .
//		 .			      .
//		 .			      ....temperature feels
//		 .
//		 .
//		 .
//		 ....[OTHER INFORMATIONS]
//		 .	      .
//		 .	      .
//		 .	      ....wind speed
//		 .	      .
//		 .	      .
//		 .	      ....humidity
//		 .	      .
//		 .	      .
//		 .	      ....visibility etc
//		 .
//		 .
//		 .
//		 ....[TIMELINE SLIDER]
//		 .	      .
//		 .	      .
//		 .	      ....slider
//				 












function App() {

	const [api, setApi] = useState("http://api.weatherapi.com/v1/current.json?key=dea2007a7bd9477fb6140709220907&q=kolkata");
	// const [latitude, setLatitude] = useState(0.0);
	// const [longitude, setLongitude] = useState(0.0);


	const [APIData, setAPIData] = useState({});
	const [tempC, setTempC] = useState(0);
	const [tempF, setTempF] = useState(0);
	const [showC, setShowC] = useState(true);
	const [icon, setIcon] = useState('');
	const [showK, setShowK] = useState(true);
	const [text, setText] = useState('');
	const [showH, setShowH] = useState(true);
	const [feelsLikeC, setFeelsLikeC] = useState('');
	const [feelsLikeF, setFeelsLikeF] = useState('');
	const [timeOfDayText, setTimeOfDayText] = useState('');
	const [windK, setWindK] = useState(0);
	const [windM, setWindM] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [visibilityK, setVisibilityK] = useState(0)
	const [visibilityM, setVisibilityM] = useState(0)

	useEffect(() => {

		// navigator.geolocation.getCurrentPosition((position) => {
		// 	setLatitude(position.coords.latitude);
		// 	setLongitude(position.coords.longitude);
		// })

		axios.get(api)
			.then((_) => {
				setAPIData(_.data);
			})
			.catch((err) => {
				console.log(err);
			})

		setShowH(true);
		setShowK(true)

	}, [api]);


	useEffect(() => {

		if (
			APIData &&
			APIData.current && 
			APIData.current.temp_c && 
			APIData.current.temp_f && 
			APIData.current.feelslike_c &&
			APIData.current.feelslike_f &&
			APIData.current.condition.text &&
			APIData.current.condition.icon && 
			APIData.current.wind_kph && 
			APIData.current.wind_mph &&
			APIData.current.humidity &&
			APIData.current.vis_km &&
			APIData.current.vis_miles
		) {

			setTempC(APIData.current.temp_c);
			setTempF(APIData.current.temp_f);
			setFeelsLikeC(APIData.current.feelslike_c);
			setFeelsLikeF(APIData.current.feelslike_f);
			setText(APIData.current.condition.text);
			setIcon(APIData.current.condition.icon);
			setWindK(APIData.current.wind_kph);
			setWindM(APIData.current.wind_mph);
			setHumidity(APIData.current.humidity);
			setVisibilityK(APIData.current.vis_km);
			setVisibilityM(APIData.current.vis_miles);
		
		}

		var data = [
			[22, 'Working late'],
			[18, 'Good evening'],
			[12, 'Good afternoon'],
			[5, 'Good morning'],
			[0, 'Whoa, early bird']
		],
			hr = new Date().getHours();
		for (var i = 0; i < data.length; i++) {
			if (hr >= data[i][0]) {
				// console.log(data[i][1])
				setTimeOfDayText(data[i][1]);
				break;
			}
		}
	}, [APIData])

	return (
		<div className="App">
			<LocationHeader
				setApi={setApi}
				api={api}
/>								
			<QuickInfo
				setApi={setApi}
				api={api}
				tempC={tempC}
				tempF={tempF}
				showC={showC}
				setShowC={setShowC}
				icon={icon}
				showK={showK}
				text={text}
				showH={showH}
				feelsLikeC={feelsLikeC}
				feelsLikeF={feelsLikeF}
				timeOfDayText={timeOfDayText}
			/>
			<OtherInformation
				api={api}
				windK={windK}
				windM={windM}
				humidity={humidity}
				visibilityK={visibilityK}
				visibilityM={visibilityM}
			/>
			<TimeLineSlider />

			{/*  
			[ACCOUNT & PERSONALIZATION]
				.
				.
				....ADD LOCATION LIBRARY
				.
				.
				....ADD LANGFUAGE TO LIBRARY
			*/}
			{/*  */}
		</div>
	);
}

export default App;
