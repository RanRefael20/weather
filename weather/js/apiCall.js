/* import axios from "./../node_modules/axios"; */

export const callApi = async (url, headers) =>{
 const result = await axios.get(url,{
    headers,
    contentType: 'application/json'
 })
 return result.data
}



export const WaitForHeThailand=(data)=> {
   return new Promise((resolve, reject) => {
       // פעולה אסינכרונית כאן
       const Thailand =  data
   // console.log( data);
       setTimeout(() => {
           resolve(Thailand);
       }, 1000);
   });
 }
 
 
