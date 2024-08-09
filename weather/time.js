export const Time= () =>{  
// יצירת אובייקט תאריך
const now = new Date();
// קבלת שעה ודקות
const hours = now.getHours();
const minutes = now.getMinutes();
// פורמט לתצוגה בפורמט "שעה:דקות"
const currentTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes;

return currentTime

}





export const changeBackGroungWeather= () =>{  
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
    if(hours>res.sunset){
        content.style.backgroundColor="black"
    
      }
      return content    
    }




