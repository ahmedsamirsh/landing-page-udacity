/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Build menu 

// Scroll to anchor ID using scrollTO event
let navList = document.getElementById('navbar__list');
let sectionList=document.getElementsByClassName('landing__container');
let frag = document.createDocumentFragment() ;
    for(let i = 1 ; i<=sectionList.length; i++)
    {
        let elem = document.createElement('a');
        elem.textContent = "Section "+ i;
        elem.classList.add('navigationItem');
        elem.addEventListener('click',function(event){
        event.preventDefault() ;
        sectionList[i-1].scrollIntoView() ;
        sectionList[i-1].scrollIntoView({behavior:'smooth',block:'end'});
        })
        frag.appendChild(elem) ;
    }
    navList.appendChild(frag) ;

    
// Hide fixed navigation bar when not scrolling for 10 seconds
let timeoutId = setTimeout(function(){navList.classList.add('hide');},10000) ;

document.addEventListener('scroll',function(){
clearTimeout(timeoutId);
navList.classList.remove('hide');
navList.classList.add('visible');
timeoutId =setTimeout(function(){navList.classList.add('hide');},10000) ;
});



// Set sections as active when section is on top of viewport

function isSectionViewed(element)
{
  let bound = element.getBoundingClientRect();
  if(bound.top<=100 && bound.bottom>=200)
  {
      return true;
  }
  else {
      return false;
  }
}
document.addEventListener('scroll',function(){ 
    for(let i=0;i<sectionList.length;i++){
    if(isSectionViewed(sectionList[i])){
sectionList[i].classList.add('active');
     }
     else{
        sectionList[i].classList.remove('active')};
     }});
  
//top button when clicked go top
let goTopButton = document.querySelector("#topButton");
goTopButton.addEventListener('click',function(){
    document.body.scrollTop = 0;
});

//only show top button when user scroll down fold of the page
let pageHead = document.querySelector('.main__hero');
let pagePosition = pageHead.getBoundingClientRect() ;
if(pagePosition.bottom>=50){
    goTopButton.classList.add('hide');
    goTopButton.classList.remove('visible');
}
else{
    goTopButton.classList.add('visible');
    goTopButton.classList.remove('hide');
}
document.addEventListener('scroll',function(){
     pagePosition = pageHead.getBoundingClientRect() ;
    if(pagePosition.bottom>=50){
        goTopButton.classList.add('hide');
        goTopButton.classList.remove('visible');
    }
    else{
        goTopButton.classList.add('visible');
        goTopButton.classList.remove('hide');
    }
});

