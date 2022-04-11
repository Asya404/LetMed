$(window).on('scroll', function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();

    var scrollPercent = (s / (d - c)) * 100;
    console.log(scrollPercent);

    document.querySelectorAll('.tools-btn').forEach(el => {
        el.style.background = '#fff';
    })

    $('.discussion-box-wrapper')[0].style.display = "none";
    $('.health-box-wrapper')[0].style.display = "none";
    $('.follow-box-wrapper')[0].style.display = "none";
    
    $('.discussion__text')[0].style.display = "none";
    $('.health__text')[0].style.display = "none";
    $('.follow__text')[0].style.display = "none";

    if (scrollPercent < 60) {
        $('.discussion-box-wrapper')[0].style.display = "block";
        $('.discussion__text')[0].style.display = "block";
        $('.tools-btn')[0].style.background= "linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%), linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%)";
    }
    else if (scrollPercent < 70 && scrollPercent > 60) {
        $('.health-box-wrapper')[0].style.display = "block";
        $('.health__text')[0].style.display = "block";
        $('.tools-btn')[1].style.background= "linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%), linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%)";
    }
    else if (scrollPercent > 70) {
        $('.follow-box-wrapper')[0].style.display = "block";
        $('.follow__text')[0].style.display = "block";
        $('.tools-btn')[2].style.background= "linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%), linear-gradient(53.37deg, rgba(5, 133, 225, 0.94) 0%, #374EC6 136.26%)";
    }
})
