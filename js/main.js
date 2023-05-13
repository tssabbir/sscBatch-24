// nav ber responsive start 
let menuBer = document.querySelector(".menu");
let closeBer = document.querySelector(".close");
let nav = document.querySelector(".nav");

let navCount = 0;

menuBer.addEventListener("click",()=>{
    nav.style.display = "block";
    menuBer.style.display= "none";
    closeBer.style.display= "block";
})
closeBer.addEventListener("click",()=>{
    nav.style.display = "none";
    menuBer.style.display= "block";
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

if(navLink=== window.location.href){
    navLink.classlist.add("activ")
}



// nav link active  end


// avout btn srtart

document.querySelector(".about-btn").addEventListener("click",()=>{
    document.querySelector(".about-right p").innerText=`
    We are a group of students enrolled in Vocational wing of Gopal Dighi KP Union High School, and we are proud to be a part of 2024 batch.  Our classes are a perfect blend of learning and fun, and we study together in an encouraging and friendly environment.
    As classmates, we treat each other like family and we share a sense of camaraderie that strengthens us as a community.  We believe in supporting each other, and whenever someone needs help, we are always there to help them.


      Our school's tight-knit community has made our academic journey much more enjoyable and memorable.  In addition to learning from our teachers, we also learn from our classmates, and this collaborative approach has helped us grow academically and personally.


      Overall, we feel privileged to be a part of this dynamic and caring school community, and look forward to creating many more cherished memories as we learn and grow together.`
})