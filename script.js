const URL="https://dog.ceo/api/breeds/image/random";
const main=document.querySelector(".blog");
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
const fetchPromise=fetch(URL);
console.log(fetchPromise);
fetchPromise.then(function(response){
    return response.json();//converting into json format
}).then(data=>{
    console.log(data);
    let pic=data.message;//getting the value of message key from the response object
    main.innerHTML=`<img class="neededPic" src=${pic} alt="dogimage">`;
}).catch(error=>console.log(error))})
