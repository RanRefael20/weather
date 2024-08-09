const body = document.getElementById('body')
const content = document.getElementById('content')
const inputSearch = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')
const WEATHER_API_KEY='208bc2dc4d8bf43f798dce7068abc323'

const findLocationDetails = () =>{
  const search=inputSearch.value 
// URL של ה-API שאליו אתה רוצה לבצע את הבקשה

const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search},3166&limit=5&appid=208bc2dc4d8bf43f798dce7068abc323`;
console.log(apiUrl);
// ביצוע הבקשה
fetch(apiUrl)
  .then(response => {
    // בדיקה אם התשובה מהשרת תקינה
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // המרה של התשובה לפורמט JSON
    return response.json();
  })

  .then(data => {
    console.log(data[0]);
    const lat = data[0].lat;
    const  lon = data[0].lon;

/*     const handleWaitForHeThailand = async()=> {
      try {
          const result = await WaitForHeThailand(data[0].name);
          console.log(result); // מדפיס את "המידע הרצוי"
          return result
        } catch (error) {
          console.error(error); // מדפיס שגיאה אם ישנה
      }
  }
   handleWaitForHeThailand() */
    

    /* קריאה לAPI לצורך שקיעה וזריחה מקומית */ 
   const URL_GET_SUNRISE_SUNSET = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`
   fetch(URL_GET_SUNRISE_SUNSET)
   .then(res =>{
   if (!res.ok) {
     throw new Error('Network response was not ok');
   }
   // המרה של התשובה לפורמט JSON
   return res.json();
   }) 
   .then(res=>{
console.log(res);
  const sunrise = res.results.sunrise
const sunset = res.results.sunset 
const isDate = res.results.date 
 

    /* קריאה ל - API לצורך שעון השייך למקום החיפוש */
    const API_KEY_TIME_ZONE = '0a8598716bc944ad939680d7cfc1a653'
 const urlLocalTime = `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY_TIME_ZONE}&lat=${lat}&long=${lon}`
    fetch(urlLocalTime)
    .then(res =>{
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    // המרה של התשובה לפורמט JSON
    return res.json();
    })
    .then(res =>{
const localTime = res.time_24
console.log(localTime);



    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=208bc2dc4d8bf43f798dce7068abc323`
    fetch(url)
    .then(response => {
      // בדיקה אם התשובה מהשרת תקינה
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // המרה של התשובה לפורמט JSON
      return response.json();
    })
    .then(res => {
        console.log(res) 
      
         content.style.backgroundRepeat =`no-repeat`
         
       content.innerHTML=''
          content.innerHTML=`
           <div id="con" class=" con col-sm-12 p-2 border rounded shadow">
           <p class="p">${data[0].name} שעון<br>${localTime}</p>
           
           <h2>${isDate}</h2>
           <h1>${search}</h1>
           
           <h1 class="h1">${Math.floor(res.main.temp - 273.15)}°</h1>
           feels like: ${Math.floor(res.main.feels_like - 273.15)}°
           <p>max: ${Math.floor(res.main.temp_max - 273.15)}°    min: ${Math.floor(res.main.temp_min - 273.15)}°</p>
           the sunrise is: ${sunrise}  <br>
           the Sunset is: ${sunset} 
          
           </div>`
              
    
      const SecondsFrom1970 = Math.floor(Date.now() / 1000);
/* תמונת לילה */
if(SecondsFrom1970+3000/*>timestamptoSunset*/ || SecondsFrom1970<res.sys.sunrise ){
  content.style.backgroundImage =`URL(https://images.hdqwalls.com/download/night-road-blue-weather-forest-stars-4k-54-1242x2688.jpg)`
}
/* תמונת זריחה */
if(SecondsFrom1970>=res.sys.sunrise  && SecondsFrom1970<res.sys.sunrise +5400 ){
content.style.backgroundImage =`URL(https://w0.peakpx.com/wallpaper/207/461/HD-wallpaper-serene-waters-bright-calm-nature-ocean-peaceful-sun-sunrise-sunset-weather.jpg)`
}
/* תמונת יום */
if( SecondsFrom1970>res.sys.sunrise +5400 && SecondsFrom1970/*<timestamptoSunset*/  ){
content.style.backgroundImage =`URL(https://w0.peakpx.com/wallpaper/303/10/HD-wallpaper-sunny-day-bright-clouds-color-day-nature-new-nice-sky-sun-sunny.jpg)`
}

/* תמונת שקיעה */ 
if( SecondsFrom1970/*>=timestamptoSunset*/ && SecondsFrom1970/*<timestamptoSunset+3400*/  ){
content.style.backgroundImage =`URL(https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VucmlzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)`
}

})// סגירה של then של fetch api  של lan lot

})// סגירה של then של fetch api  של שנותן שעה מקומית 
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
  }) // קאץ של זריחה ושיקיעה 


.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
  })

    })   // קריאה לAPI לצורך שקיעה וזריחה מקומית סגירה then של 


  }) // סגירה של then API שמקבל search

  .catch(error => {
    // טיפול בשגיאות
    console.error('There has been a problem with your fetch operation:', error);
  });
}// findLocationDetails סגירה של   



         


searchBtn.addEventListener('click', findLocationDetails)
 

  