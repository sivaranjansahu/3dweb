
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
    
    tlFirstPage = new TimelineMax({
        paused:true
      });
    tlFirstPage.from("#titlebox .border",0.5,{y:-400,ease:Power1.easeOut,delay:2},"+=1.0");
    tlFirstPage.from("#titlebox h1",0.5,{x:-400,ease:Power1.easeOut},"+=1.0");
    tlFirstPage.from(".firstpagecontent", 0.5, {ease: Expo.easeOut,y:50,opacity:0},"+=1.5")
    
    //tlFirstPage.from(".subcontent",1,{ease: Expo.easeOut,y:100,opacity:0})
    tlFirstPage.from(".contentbox", 1, {
        //ease: Expo.easeOut,
        ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 10, points: 80, taper: "out", randomize: true, clamp: false}),
        opacity:0,
        css:{
          backgroundColor: "rgba(0,0,0,0.26)"
        }
        });

    tlSecondPage = new TimelineMax({
        paused:true
      });
    
    
    // tlSecondPage.to(".grid",0.5,{ease:Expo.easeOut,css:{
    //     gridTemplateColumns: "0fr 0fr 100fr 0fr",
    //     gridTemplateRows: "20fr 100fr 0fr"
    // }});

    tlSecondPage.to(".grid>div:nth-child(2)",0.5,{ease:Expo.easeOut,css:{
        gridColumn: "1/5",
    gridRow:"1/2"
    }});

    tlSecondPage.to(".firstpagecontent .subcontent",0.5,{opacity:0})
    
    //tlSecondPage.from("#child-content",1,{opacity:0})
    tlSecondPage.from(".wrapper", 0.5, {
        opacity:0,  ease:Power2.easeOut, y:200
    })

    tlThirdPage = new TimelineMax();
    tlThirdPage.from(".secondpagecontent", 0.5, {ease: Expo.easeOut,y:100,opacity:0},"+=.5").stop();
    // $(document).on("click",".contentbox",function(){
    //     TweenMax.to(".grid",0.8,{ease:Expo.easeOut,css:{gridTemplateColumns: "0fr 20fr 100fr 0fr"}})
    // })


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
            TweenMax.to(".typewritter",0.3,{left:-1000,opacity:0});
            initialLoad.play();
            tlFirstPage.play();
        }
    });

      //
    });

