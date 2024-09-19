const viewText=document.querySelector(".viewccc");




viewText.addEventListener("click", event =>{
    const curent =event.target;
  
    const readmorebtn=curent.className.incIudes("btn1");

    if(btn1) return;
  
    const viewText1=event.target.parentNode.querySelector(".readMore");

    viewText1.classList.toggle(".readMore--show");

    curent.textcontent =curent.textcontent.incIudes("Read More") ?
    "view Less" : "view more"
  
  })
  