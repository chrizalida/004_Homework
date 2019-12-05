 function fillColor(param) {
   var divi = document.getElementById(param);   
   var newcolor =  "rgb("+parseInt(Math.random()*254)+","+parseInt(Math.random()*254)+","+parseInt(Math.random()*254)+")";  
       divi.style.backgroundColor=newcolor;
   var color = divi.style.backgroundColor; 
       divi.innerHTML="NewColor:"+color;
 } 
