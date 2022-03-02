var i = 0

var img = []
var img2 =[]
var img3 = []
var img4 =[]
var img5 = []


var time =3000


img[0] ="pics/5.jpg"
img[1] ="pics/2.jpg"
img[2] ="pics/8.jpg"
img[3] ="pics/6.jpg"
img[4] ="pics/7.png"

img2[0] ="proj/11.jpg"
img2[1] ="proj/111.jpg"
img2[2] ="proj/111.jpg"


img3[0] ="proj/12.jpg"
img3[1] ="proj/121.jpg"
img3[2] ="proj/121.jpg"

img4[0] ="proj/13.jpg"
img4[1] ="proj/131.jpg"
img4[2] ="proj/131.jpg"

img5[0] ="proj/14.png"
img5[1] ="proj/141.jpg"
img5[2] ="proj/141.jpg"


function changeImg(){
    document.slide.src = img[i]
    document.img2.src = img2[i]
    document.img3.src = img3[i]
    document.img4.src = img4[i]
    document.img5.src = img5[i]

    if (i < img.length -1) {
        i++
    } else {
        i=0
    }

    if (i < img2.length -1) {
        i++
    } else {
        i=0
    }

    if (i < img3.length -1) {
        i++
    } else {
        i=0
    }

    if (i < img4.length -1) {
        i++
    } else {
        i=0
    }
    if (i < img5.length -1) {
        i++
    } else {
        i=0
    }

    setTimeout("changeImg()",time)
}

window.onload = changeImg
//
const intro =document.querySelector(".intro")
const video=intro.querySelector("video")
const text =intro.querySelector("h1")

//end section 
const section =document.querySelector("section") 
const end =section.querySelector("h1")

const controller = new ScrollMagic.Controller()

let scene =  new ScrollMagic.Scene({
   duration:12000,
   triggerElement:intro,
   triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller)


const textAnim = TweenMax.fromTo(text,3, {opacity:1}, {opacity:0})
let scene2 = new ScrollMagic.Scene({
   duration:3000,
   triggerElement:intro,
   triggerHook:0
})

.setTween(textAnim)
.addTo(controller);


//video anim
let accelamount = 1
let scrollpos =0
let delay =0

scene.on("update", e => {
   scrollpos =e.scrollPos/1000
})

setInterval(() =>{
   delay +=(scrollpos - delay) *accelamount
   console.log(scrollpos,delay)

   video.currentTime =delay
},33.3)