$(window).on('scroll', function(){
    if($(this).scrollTop() > 150){
        $("header").addClass("scrollHeader");
    }else{
        $("header").removeClass("scrollHeader")
    }
});
