//slide functions
function slideRight(slider){
    const image=slider.querySelector('div');
    image.style.right=parseInt(window.getComputedStyle(image).right, 10)-330+'px';
}
function slideLeft(slider){
    const image=slider.querySelector('div');
    image.style.right=parseInt(window.getComputedStyle(image).right, 10)+330+'px';
}

//boucle sur les sliders
const sliders=document.getElementsByClassName('slider');
for (let slider of sliders){

    //bouton droit
    const rightButton=slider.lastElementChild;
    rightButton.addEventListener('click', ()=>{
        slideRight(slider);
    });

    //bouton gauche
    const leftButton=slider.lastElementChild.previousElementSibling;
    leftButton.addEventListener('click', ()=>{
        slideLeft(slider);
    });
}