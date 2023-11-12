const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
  }
  function firstPageAnim(){
    var t1=gsap.timeline();
    t1.from('#nav',{
      y:'-10',
      opacity:0,
      duration:2,
      ease:Expo.easeInOut
    })
    .to('.boundingelm',{
      y:0,
      duration:2,
      ease:Expo.easeInOut,
      delay:-1,
      stagger:.2
    })
    .from('#herofooter',{
      y:'-10',
      opacity:0,
      duration:2,
      delay:-1,
      ease:Expo.easeInOut
    })
  }
  firstPageAnim();
  circleMouseFollower();

  document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mousemove",function(dets){
      var diff=dets.clientY - elem.getBoundingClientRect().top;
      diffrot=dets.clientX - rotate;
      rotate=dets.clientX
      gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrot),
      });
    });
  });

  document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){
      var diff=dets.clientY - elem.getBoundingClientRect().top;
      gsap.to(elem.querySelector("img"),{
        opacity: 0,
        ease: Power1,
        top: diff,
        left: dets.clientX
      });
    });
  });