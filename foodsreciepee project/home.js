import{showproductsonfeed}from "./mm/m.js";

window.addEventListener("load",checkprevious);
function checkprevious(){
  let sear=document.getElementById("s").value;
  if(sear!=""){
    apirequest(sear)
  }
}


let tid;
document.getElementById("s").addEventListener("input",search);

function search(){
    let q=document.getElementById("s").value;
    clearTimeout(tid);
    if(q!=""){
      tid=setTimeout(()=>{
       apirequest(q)
      },600)
    }
}

// above add event listener to searchinput tag
// catch the inputed value and apply debouncing & throtling and call apirequest function

async function apirequest(q){
  try{
    let r=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`)
    let item= await r.json();
    showproductsonfeed(item.meals)
  }catch(err){
   console.log(`Failed to fetch ${err}`)
  }
}
// above this function get response by the search inputed name from server
// convert into json then call showproductsonfeed function and pass the item name to it

