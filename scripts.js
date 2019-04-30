(function myPortfolio(){
    M.AutoInit();

    var instance = M.Tabs.init('.tabs', {duration:4000});
    var eachInstance = M.Tabs.getInstance('.tabs');

    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration:1000,
        fullWidth: true,
        // padding: 200,
        indicators: true
    });


    window.addEventListener('scroll',function(){
        if(window.scrollY){
            document.getElementById('nav').className = "active";
            document.getElementById('link-one').className = "links";
            document.getElementById('link-two').className = "links";
            document.getElementById('link-three').className = "links";
        }
        else{
            document.getElementById('nav').className= "";
            document.getElementById('link-one').className = "";
            document.getElementById('link-two').className = "";
            document.getElementById('link-three').className = "";
        }
    })

    // var element = document.getElementById('content-one').offsetHeight;
    // document.getElementById('background-one').style.height = `${element}px`;

    console.log("done")
})()

