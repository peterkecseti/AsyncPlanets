(()=>{"use strict";document.addEventListener("DOMContentLoaded",(async()=>{document.getElementById("osszesBtn").addEventListener("click",(async()=>{let e=await fetch("planets.json");console.log(e);let t=await e.json();t.planets.sort(((e,t)=>e.name.localeCompare(t.name)));let n=document.getElementById("osszesBolygo");n.textContent="";for(let e of t.planets){let t=document.createElement("li");n.appendChild(t),t.innerHTML="<q>"+e.planets+"</q> -"+e.name}}))}))})();