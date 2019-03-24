
 jQuery(document).ready(function($){
    // var timeline = new TimelineMax();
    // // timeline.from("h1", 0.3, {y:300,opacity:0})
    //   //.to("h1", 1, {y:200,opacity:1});
    //   timeline.from("h1", 0.3, {y:300,opacity:0});

    initialLoad = new TimelineMax();

    
    initialLoad.from(".grid", 0.8, {ease: Expo.easeOut,opacity:0},"+=0.5")
    initialLoad.from("#threed-holder", 0.8, {ease: Expo.easeOut,opacity:0},"+=0.5")
    
    tlFirstPage = new TimelineMax();
    
    tlFirstPage.from(".firstpagecontent", 0.8, {ease: Expo.easeOut,y:50,opacity:0})
    //tlFirstPage.from(".subcontent",1,{ease: Expo.easeOut,y:100,opacity:0})
    tlFirstPage.from(".contentbox", 1, {
        //ease: Expo.easeOut,
        ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 10, points: 80, taper: "out", randomize: true, clamp: false}),
        opacity:0,
        css:{
          backgroundColor: "rgba(0,0,0,0.26)"
        }
        });

    tlSecondPage = new TimelineMax();
    
    tlSecondPage.from(".secondpagecontent", 0.8, {ease: Expo.easeOut,y:100,opacity:0},"+=.5").stop();
    tlSecondPage.to(".grid",0.8,{ease:Expo.easeOut,css:{
        gridTemplateColumns: "0fr 10fr 100fr 0fr",
        gridTemplateRows: "0fr 100fr 20fr"
    }})

    // $(document).on("click",".contentbox",function(){
    //     TweenMax.to(".grid",0.8,{ease:Expo.easeOut,css:{gridTemplateColumns: "0fr 20fr 100fr 0fr"}})
    // })
    });