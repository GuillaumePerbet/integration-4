const button=document.getElementById('menu-button');
const menu=document.getElementById('menu');

button.addEventListener('click',()=>{
    console.log (window.getComputedStyle(menu).display);
    switch(window.getComputedStyle(menu).display){
        case 'flex':
            menu.style.display='none';
            break;
        case 'none':
            menu.style.display='flex';
            break;
    }
});