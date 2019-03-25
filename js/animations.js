
 jQuery(document).ready(function($){
    // var timeline = new TimelineMax();
    // // timeline.from("h1", 0.3, {y:300,opacity:0})
    //   //.to("h1", 1, {y:200,opacity:1});
    //   timeline.from("h1", 0.3, {y:300,opacity:0});

    initialLoad = new TimelineMax({
        paused:true
      });

    
    initialLoad.from(".grid", 0.8, {ease: Expo.easeOut,opacity:0},"+=1")
    initialLoad.from("#threed-holder", 0.8, {ease: Expo.easeOut,opacity:0},"+=1.0")

    //first story
    s1t1 = new TimelineMax({
        paused:true
      });
   
    s1t1.from(".firstpagecontent", 0.5, {ease: Expo.easeOut,y:50,opacity:0},"+=1.5")
    s1t1.from(".firstpagecontent .border",0.1,{autoAlpha:0,repeat:10,yoyo:true}) 
    s1t1.from(".firstpagecontent h1",0.4,{x:-300,opacity:0,delay:0.4})
    s1t1.from(".firstpagecontent .subcontent",1,{ease: Expo.easeOut,y:100,opacity:0})
    s1t1.from(".contentbox", 1, {
        //ease: Expo.easeOut,
        ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 10, points: 80, taper: "out", randomize: true, clamp: false}),
        opacity:0,
        css:{
          backgroundColor: "rgba(0,0,0,0.26)"
        }
        });


    s1t2 = new TimelineMax({paused:true});
    s1t2.to(".firstpagecontent .subcontent",0.2,{ease: Expo.easeOut,y:800,opacity:0},"0")
    s1t2.to(".firstpagecontent",0.5,{ease: Expo.easeOut,top:30},"0")
    
    s1t2.from(".wrapper", 0.5, {
        opacity:0,  ease:Power2.easeOut, y:200
    })

    s1t3 = new TimelineMax({paused:true});
    s1t3.to(".firstpagecontent ,.wrapper ",0.5,{ease: Expo.easeOut,y:30,opacity:0},"0")



    //second story

    s2t1 = new TimelineMax({
        paused:true
      });
    // s2t1.from(".secondpagecontent h1",0.4,{x:-300,opacity:0,delay:0.4})
    // s2t1.from("secondpagecontent .subcontent",1,{ease: Expo.easeOut,y:100,opacity:0})

    s2t1.from(".secondpagecontent", 0.5, {ease: Expo.easeOut,y:50,opacity:0},"+=1.5")
    s2t1.from(".secondpagecontent .border",0.1,{autoAlpha:0,repeat:10,yoyo:true}) 
    s2t1.from(".secondpagecontent h1",0.4,{x:-300,opacity:0,delay:0.4})
    s2t1.from(".secondpagecontent .subcontent",1,{ease: Expo.easeOut,y:100,opacity:0})

    


    //typing
    var tltype = new TimelineMax({
        paused:true
      });
      // letter animation
      tltype.fromTo(".anim-typewriter", 5, {
        width: "0",
      }, {
        width: "20.18em", /* same as CSS .line-1 width */
        ease:  SteppedEase.config(37)
      }, 0);
      // text cursor animation
      tltype.fromTo(".anim-typewriter", 0.3, {
        "border-right-color": "rgba(255,255,255,0.75)"
      }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease:  SteppedEase.config(37)
      }, 0);
      tltype.from(".line-2",0.2,{ease:Expo.easeOut,opacity:0,y:20,delay:6})
      tltype.play();

      $(document).on('keypress',function(e) {
        if(e.which == 13) {
            //alert('You pressed enter!');
            TweenMax.to(".typewritter",0.3,{ease:Expo.easeIn,opacity:0});
            initialLoad.play();
            s1t1.play();
        }
    });



    //tiny circles animation
    TweenMax.staggerTo(".circle-ver",20,{top:1200,yoyo:true,repeat:-1},4)
    TweenMax.staggerTo(".circle-hor",20,{left:1600,yoyo:true,repeat:-1},4)
      //
    });

