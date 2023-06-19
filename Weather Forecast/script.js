const key = "eb451fdfd3e37d6a3e3e34bbbff5809b"

function DataPreview(data){

  document.querySelector(".city").innerHTML = `Tempo em ${data.name}`
  document.querySelector(".humidity").innerHTML = `Umidade ${data.main.humidity}%`
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
  document.querySelector(".text-preview").innerHTML = data.weather[0].description
  document.querySelector(".img-preview").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function SearchCity(city){
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
  
  DataPreview(data)
}

function SearchButton(){
  const city = document.querySelector(".input-city").value

  SearchCity(city)
}
