
export function showproductsonfeed(itemname){
    let container=document.getElementById("container");
    container.innerHTML="";

 for(let i=0;i<itemname.length;i++){
let ingred={};

    let parent=document.createElement("div");
    parent.setAttribute("class","parent");

    let child=document.createElement("div");
    child.setAttribute("class","child");

    let img=document.createElement("img");
    img.src=itemname[i].strMealThumb;

    let name=document.createElement("p").innerText=itemname[i].strMeal;
    let namee=itemname[i].strMeal;
   let recc=itemname[i].strInstructions;
    let category=document.createElement("p").innerText=itemname[i].strCategory;
  
    let origin=document.createElement("p").innerText=itemname[i].strArea;
    
    let reciepee=document.createElement("button");
    reciepee.innerHTML="View Reciepee"
  reciepee.addEventListener("click",showreciepee);

  function showreciepee(){
    let obj={
      name:namee,
      reciepee:recc
    }
    let storage=JSON.parse(localStorage.getItem("reciepee"));
    if(storage==null){
      localStorage.setItem("reciepee",JSON.stringify(obj))
    }
    else{
      localStorage.removeItem("reciepee");
      localStorage.setItem("reciepee",JSON.stringify(obj))
    }
    window.location.href="reciepee.html"
  }


    let ingre=document.createElement("p");

    let d1=document.createElement("div");
    let d2=document.createElement("div");
    let d3=document.createElement("div");
    let d4=document.createElement("div");
    let d5=document.createElement("div");

    let names1=document.createElement("p");
    names1.setAttribute("class","names");
    names1.innerText="Name :";
    let names2=document.createElement("p");
    names2.setAttribute("class","names");
    names2.innerText="Category :"
    let names3=document.createElement("p");
    names3.setAttribute("class","names");
    names3.innerText="Origin :";
    let names4=document.createElement("p");
    names4.setAttribute("class","names");
    names4.innerText="Reciepee :"
    let names5=document.createElement("p");
    names5.setAttribute("class","names");
    names5.innerText="Ingredients";

for(let j=1;j<=20;j++){
 let ind=j;
  let key="strIngredient"+ind;
  let key2="strMeasure"+ind;
  let ingredient=itemname[i][key];
  let masure=itemname[i][key2];
  if(ingredient!=" "&& masure!=" "){
    ingred[ingredient]=masure;
  }
  
  
}
let ingreandmasure="";
for(let h in ingred){
    ingreandmasure+=`${h} - ${ingred[h]}`
}
ingre.innerText=":"+ingreandmasure; // ingredients with masure stored in innertext


//below we startinmg appending
d1.append(names1);
d1.append(name);
d2.append(names2);
d2.append(category);
d3.append(names3);
d3.append(origin);
d4.append(names4);
d4.append(reciepee);
d5.append(names5);
d5.append(ingre);

child.append(d1,d2,d3,d4,d5);

parent.append(img);
parent.append(child);
container.append(parent);
 } 
}


