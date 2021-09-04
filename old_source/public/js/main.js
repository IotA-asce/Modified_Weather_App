const submitBtn = document.getElementById('submission');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const day = document.getElementById('day');
const date = document.getElementById('date');

const getInfo = async(event) =>{
    event.preventDefault();
    // alert('surprise madafaqa');
    let cityVal = cityName.value;   
    
    // console.log(cityVal.length);
    if(cityVal === ""){
        city_name.innerText = 'Names cannot be empty';
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=446188b7b3239b20d5329b74afcb2e0d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = cityVal;
            temp.innerHTML = `<span>${arrData[0].main.temp}</span><sup>o</sup>C` ;
            temp_status.innerText = arrData[0].weather[0].main;
        }
        catch(error){
            city_name.innerText = '!Invalid Name';
        }

    }
}

submitBtn.addEventListener('click', getInfo);

day.innerText = "Thursday";
date.innerText = String(new Date().getDate());