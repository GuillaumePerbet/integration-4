const button=document.getElementById('menu-button');
const menu=document.getElementById('menu');

button.addEventListener('click',()=>{
    switch(window.getComputedStyle(menu).display){
        case 'flex':
            menu.style.display='none';
            break;
        case 'none':
            menu.style.display='flex';
            break;
    }
});