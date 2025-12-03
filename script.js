//your JS code here. If required.
let select=document.getElementById("colorSelect");
let button=document.querySelector("input");

button.addEventListener("click",()=>{
	select.remove(select.selectedIndex);
})