//slider objects
class Slider{
    constructor(slider){      
        this.slider=slider;
        this.position=1;
        this.max=slider.querySelectorAll('img').length;
    }

    slideRight(){
        if (this.position<this.max){
            this.position++;
            let images=this.slider.querySelector('div');
            images.style.left=parseFloat(window.getComputedStyle(images).left, 10)-parseFloat(window.getComputedStyle(images).width,10)+'px';
        }
        return
    }

    slideLeft(){
        if (this.position>1){
            this.position--;
            let images=this.slider.querySelector('div');
            images.style.left=parseFloat(window.getComputedStyle(images).left, 10)+parseFloat(window.getComputedStyle(images).width,10)+'px';
        }
        return
    }
}

let sliderTable=[];

//loop on slider sections
const sliders=Array.from(document.getElementsByClassName('slider'));

sliders.forEach((slider, index) =>{
    //add slider object to table
    sliderTable.push( new Slider(slider));

    //right button event
    const rightButton=slider.lastElementChild;
    rightButton.addEventListener('click', ()=>{
        sliderTable[index].slideRight();
    });

    //left button event
    const leftButton=slider.lastElementChild.previousElementSibling;
    leftButton.addEventListener('click', ()=>{
        sliderTable[index].slideLeft();
    });
});