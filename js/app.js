$(window).on('scroll', function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;
    console.log(scrollPercent); //Displaying scroll percentage in console


    if (scrollPercent < 60) {
        document.querySelector('.discussion-box-wrapper').style.display = "block";
        document.querySelector('.health-box-wrapper').style.display = "none";

        document.querySelector('.discussion__text').style.display = "block";
        document.querySelector('.health__text').style.display = "none";
       
    }
    else if (scrollPercent > 60) {
        document.querySelector('.discussion-box-wrapper').style.display = "none";
        document.querySelector('.health-box-wrapper').style.display = "block";

        document.querySelector('.discussion__text').style.display = "none";
        document.querySelector('.health__text').style.display = "block";

    }

})
