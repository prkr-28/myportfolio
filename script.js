
gsap.to("#page2 p",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:
            "#page2",
            scroller:"body",
            start:"top 0%",
            end:"top -100%",
            scrub:3,
            pin:true,
            
    },
   
})
var tl=gsap.timeline()

tl.from("#name1",{
    y:-30,
    opacity:0,
    duration:0.8,
    delay:0.2
})
tl.from("li",{
    y:-30,
    opacity:0,
    duration:0.8,
    stagger:0.1
})
tl.from("#button",{
    y:-30,
    opacity:0,
    duration:0.8,
    
})

// let cursor=document.getElementById("circle");
// let body=document.getElementById("body")
// body.addEventListener("mousemove",function(dets){
//     cursor.style.left=dets.x +"px";
//     cursor.style.top=dets.y +"px";
// })

