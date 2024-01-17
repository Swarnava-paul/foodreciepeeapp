let storage=JSON.parse(localStorage.getItem("reciepee"));

let name=document.getElementById("recname").innerText=storage.name;
let rec=document.getElementById("resdetails").innerText=storage.reciepee;



