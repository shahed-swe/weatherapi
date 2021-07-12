const cityname = document.getElementById('cityname');

document.getElementById('search').addEventListener('click', function() {
    weatherdata(cityname.value).then(data => {
        showdata(data);
    })
})





weatherdata("tangail").then(data => {
    showdata(data);
})

async function weatherdata(cityname) {
    const appkey = "ec47c902d7798b639246714c56a0d4ef";
    const city = cityname;
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${appkey}`
    const response = await fetch(weather)
    const data = await response.json()
    return data
}



function showdata(data) {
    document.getElementById("city").innerHTML = data.name || "Unknown city";
    document.getElementById("temperature").innerHTML = (data.main.temp / 10).toFixed(2);
    document.getElementById("status").innerHTML = data.weather[0].main;
    document.getElementById("icon").setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

}