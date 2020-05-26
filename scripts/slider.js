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
        leftButton.style.display='block';
        if (sliderTable[index].position==sliderTable[index].max){
            rightButton.style.display='none';
        }
    });

    //left button event
    const leftButton=slider.lastElementChild.previousElementSibling;
    leftButton.addEventListener('click', ()=>{
        sliderTable[index].slideLeft();
        rightButton.style.display='block';
        if (sliderTable[index].position==1){
            leftButton.style.display='none';
        }
    });
});