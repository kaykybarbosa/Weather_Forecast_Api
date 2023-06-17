const key = "eb451fdfd3e37d6a3e3e34bbbff5809b"

function DataPreview(data){
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
}

async function SearchCity(city){
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`).then(response => response.json())
  
  DataPreview(data)
}

function SearchButton(){
  const city = document.querySelector(".input-city").value

  SearchCity(city)
}
