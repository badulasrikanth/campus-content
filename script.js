// Typing animation

const text="Welcome to Campus Connect";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}
}

typing();


// Dark mode toggle

const btn=document.getElementById("darkBtn");

btn.onclick=function(){
document.body.classList.toggle("dark");
}