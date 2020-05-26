const button=document.getElementById('menu-button');
const nav=document.getElementById('nav');
const topBar=document.getElementById('topbar');
const menuButton=document.getElementById('menu-button');
let isOpen=false;

// Initialize
topBarState();
menuButton.style.color='#2C3E50';
// Test if window is resized
window.onresize = topBarState;

// Show/Hide topBar
function topBarState(){
    if(window.innerWidth<992){
        nav.style.paddingBottom='0';
        if(!isOpen){
            topBar.style.maxHeight='0px';
        }
        else{
            topBar.style.maxHeight='54px';
        }
    }
    else{
        topBar.style.maxHeight='54px';
        nav.style.paddingBottom='1.5rem';
    }
}
// Open/Close Menus when clicked
button.addEventListener('click',()=>{
    if(window.innerWidth<992){
        if (isOpen){
            nav.style.maxHeight='99px';
            nav.style.paddingBottom='1.5rem';
            topBar.style.maxHeight='0px';
            menuButton.style.color='#2C3E50';
        }
        else{
            nav.style.maxHeight='300px';
            nav.style.paddingBottom='0';
            topBar.style.maxHeight='54px';
            menuButton.style.color='#1ABC9C';
        }
        isOpen = !isOpen;
    }
});
