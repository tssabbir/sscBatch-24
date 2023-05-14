


// nav ber responsive start 
let menuBer = document.querySelector(".menu");
let closeBer = document.querySelector(".close");
let nav = document.querySelector(".nav");

let navCount = 0;

menuBer.addEventListener("click",()=>{
    nav.style.display = "block";
    menuBer.style.display= "none";
    closeBer.style.zIndex= "19999"
    closeBer.style.display= "block";
})
closeBer.addEventListener("click",()=>{
    nav.style.display = "none";
    menuBer.style.display= "block";
    closeBer.style.zIndex= "19999"
    closeBer.style.display= "none";

})



// nav ber responsive end
const selectTypeText = document.querySelector(".type-text");
let typeText =selectTypeText.innerText

let textLength = typeText.length;
let textCount = 0;

setInterval(()=>{
    textCount++;
    selectTypeText.innerText = typeText.substring(0,Math.abs(textCount));

    if(textCount > textLength){
        textCount *= -1;
    }

},100)


// nav ber responsive end


// nav link active  start
let navLink = document.querySelectorAll(".nav li a");

let a = navLink.href;

// if(window.location.hash){

// }


// nav link active  end


// home bg srart 
const selectBg = document.querySelector(".h-bg");
const images = new Array(
    "images/h-bg1.jpeg",
    "images/h-bg2.jpg"
);

let countBg = 0;
let imgLen = images.length;
setInterval(()=>{
    countBg++;
    if(countBg>imgLen -1){
        countBg = 0;
        selectBg.style.background =`linear-gradient(#0000006e,#0000005d), url(${images[countBg]})`;
        selectBg.style.backgroundRepeat = "no-repeat";
        selectBg.style.backgroundSize = "cover";
        selectBg.style.bjectFit = "cover";

    }else{
        selectBg.style.background =`linear-gradient(#0000006e,#0000005d), url(${images[countBg]})`;
        selectBg.style.backgroundRepeat = "no-repeat";
        selectBg.style.backgroundSize = "cover";
        selectBg.style.bjectFit = "cover";
    }

},5000)




// home bg end



// avout btn srtart



const innerT = `
We are a group of students enrolled in Vocational wing of Gopal Dighi KP Union High School, and we are proud to be a part of 2024 batch.  Our classes are a perfect blend of learning and fun, and we study together in an encouraging and friendly environment.
As classmates, we treat each other like family and we share a sense of camaraderie that strengthens us as a community.  We believe in supporting each other, and whenever someone needs help, we are always there to help them.



  Our school's tight-knit community has made our academic journey much more enjoyable and memorable.  In addition to learning from our teachers, we also learn from our classmates, and this collaborative approach has helped us grow academically and personally.




  Overall, we feel privileged to be a part of this dynamic and caring school community, and look forward to creating many more cherished memories as we learn and grow together. `


  const TEXT = `We are a group of students enrolled in Vocational wing of Gopal Dighi KP Union High School, and we are proud to be a part of 2024 batch.  Our classes are a perfect blend of learning and fun, and we study together in an encouraging and friendly environment.
  As classmates, we treat each other like family and we share a sense of camaraderie that strengthens us as a community.  We believe in supporting each other, and whenever someone needs help, we are always there to help them.
 `;


document.querySelector(".about-btn").addEventListener("click",()=>{

    const aboutP= document.querySelector(".about-right p");
    if(aboutP.innerHTML == TEXT){
        aboutP.innerHTML=innerT
    }
    else if(aboutP.innerHTML == innerT){
        aboutP.innerHTML= TEXT
    }
    else{
        aboutP.innerHTML=TEXT;
    }
})