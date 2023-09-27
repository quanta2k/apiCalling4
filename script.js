console.log('hello')
//https://dog.ceo/api/breeds/image/random

const dogImageDiv=document.getElementById('dogImage')
const newImage=document.getElementById('newDog')
const image=()=>{fetch('https://dog.ceo/api/breeds/image/random')
  .then(response=>response.json())
  .then(json=>{
    
    dogImageDiv.innerHTML=`<img src='${json.message}' height=300 width=300/>` 
  });
}
image();
newImage.onclick=()=>image()

