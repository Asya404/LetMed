$(window).on('scroll', function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;
    console.log(scrollPercent);

    document.querySelectorAll('.tools-btn').forEach(el => {
        el.style.background = '#fff';
    })

    if (scrollPercent < 50) {
        document.querySelector('.discussion-box-wrapper').style.display = "block";
        document.querySelector('.health-box-wrapper').style.display = "none";

        document.querySelector('.discussion__text').style.display = "block";
        document.querySelector('.health__text').style.display = "none";

        document.querySelectorAll('.tools-btn')[0].style.background= "linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%), linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%)";
        
    }
    else if (scrollPercent < 60 && scrollPercent > 50) {
        document.querySelector('.discussion-box-wrapper').style.display = "none";
        document.querySelector('.health-box-wrapper').style.display = "block";

        document.querySelector('.discussion__text').style.display = "none";
        document.querySelector('.health__text').style.display = "block";

        document.querySelectorAll('.tools-btn')[1].style.background= "linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%), linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%)";
    }
    else if (scrollPercent > 60) {
        // document.querySelector('.discussion-box-wrapper').style.display = "none";
        // document.querySelector('.health-box-wrapper').style.display = "block";

        document.querySelector('.health__text').style.display = "none";
        document.querySelector('.follow__text').style.display = "block";

        document.querySelectorAll('.tools-btn')[2].style.background= "linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%), linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%)";
    }

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll <= 500) {
            $(".section-tools").addClass("sticky");
        } else {
            $(".section-tools").removeClass("sticky");
        }
    });

})
