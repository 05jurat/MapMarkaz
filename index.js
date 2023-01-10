
window.addEventListener('DOMContentLoaded', () => {
  const copy = document.querySelector('.copy')
  const copied = document.querySelector('.copied')
  copy.addEventListener('click', () => {
    copied.classList.toggle('active')
    copy.classList.toggle('active')
  })


  // $(function(){
  //   $('.trans').click(function(){
  //     var lang = $(this).attr('id')
  
  //     $(".langs").each(function(i, e){
  //       $(this).text.arrLang([lang][$(this).attr('key')])
  //     })
  //   })
  // })










  const myBtn = document.querySelector('.myBtn')
  myBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  const scroll = document.querySelector('.scroll')
  scroll.addEventListener('click', () => {
    document.body.scrollTop = 2090;
    document.documentElement.scrollTop = 2090;
  })

  const api = {
    key: '89c6edd00cdbc4065c8205a3c7323062',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
  }

  const selectMAP = document.querySelector('.selectMap')
  selectMAP.addEventListener("keypress", setQuery);

  function setQuery(e) {
    if (e.keyCode == 13) {
      getReseults(selectMAP.value)
      console.log(selectMAP.value);
    }
  }


  function getReseults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((weather) => {
        return weather.json();
      })
      .then(displayResults);
  }
  function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(' .city')
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let data = document.querySelector('.data')
    data.innerHTML = dateBuilder(now)

    //   let weatherTn = document.querySelector('.tntemp')
    // weatherTn.innerHTML = `${weather.main.tn_temp}`

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weatherEl = document.querySelector('.teps')
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.clouds')
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
  }


  function dateBuilder(now) {
    let monts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Aug', 'Sent', 'Oct', 'Nov', 'Dec']
    let days = ['Mo', 'Tu', 'Wen', 'Th', 'Fr', 'Sa', 'Su']
    let day = days[now.getDay()]
    let data = now.getDate();
    let month = monts[now.getMonth()];
    let year = now.getFullYear();

    return `${day} ${data} ${month} ${year}`

  }


  const btnLeft =document.getElementById('btnLeft')
  const btnRight =document.getElementById('btnRight')
  const slide = document.getElementById('slide')
  const imgs = [
      "https://img.freepik.com/free-photo/famous-eiffel-tower-in-paris-with-gorgeous-colors_268835-830.jpg?w=2000",
  
      "http://backend.mapmarkaz.uz/media/uslugi1_km6oWup.png"
   ]
  let active = 2;
  
  btnLeft .onclick = function() {
      active --
      if(active < 0) active=imgs.length - 2;
      slide.src = imgs[active]
  }
  btnRight .onclick = function() {
      active ++
  
      if(active >= imgs.length) active=0;
  
      slide.src = imgs [active]}

})

function myFunction() {
  alert("+998 71 233-17-37");
}
function send() {
  alert("Oтправлено");
}
function Pdf() {
  alert('Cоответствующая загрузка')
}
