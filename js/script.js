const navBtn=document.getElementById('navbar-toggler')
const navDiv=document.getElementById('Tomi')
let dark=document.getElementById("dark");


navBtn.addEventListener('click', () =>{
navDiv.classList.toggle("show");
});


// resizeliner sectio //
let resizeliner;
window.addEventListener('resize', ()=>{
    document.body.classList.add.apply('resize-animation-stopper');
    clearTimeout(resizeliner);
    resizeliner.setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    },400);
})


// dark them ////
let localdata=localStorage.getItem('theme');
if(localStorage.getItem("theme")==null){
  localStorage.setItem("theme","light")
}
if(localdata=="dark"){
  dark.src="image/moon.png";
  document.body.classList.add("light-them"); 
}
else if(localdata=="light"){
  dark.src="image/sun.png"; 
  document.body.classList.remove("light-them"); 
}




dark.onclick=function(){
    document.body.classList.toggle("light-them");
    if(document.body.classList.contains("light-them")){
      dark.src="image/moon.png";
      localStorage.setItem("theme","dark")
    }else{
      dark.src="image/sun.png"; 
      localStorage.setItem("theme","light")
    }
  }
 
 



  
  // #Preloader  
 var loader=document.getElementById("Preloader");
 window.addEventListener("load",function(){
  loader.style.display="none"
 }) ;


 