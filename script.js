var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  crsrBlur.style.left = dets.x-250+"px"
  crsrBlur.style.top = dets.y-250+"px"
})



gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        start : "top -10%",
        scrub: 3
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller :"body",
        // markers:true,
        start:"top -30%",
        end : "top -80%",
        scrub:"2"
    }
})