
$(function() {
    //点击导航条某一选项；滑动到相应页面并且该选项样式发生变化
    $("a.page-scroll").click(function (e) {
        console.log($(this).index());
        $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top) + 50}, 1000);
        $("a.page-scroll").removeClass('ac');
        $(this).addClass('ac');
        e.preventDefault();
    });
    //滚轮滑动使滚轮跳到相应位置时，导航条发生变化
    $(document).on('mousewheel', function () {
        wheel();
    });
    //鼠标拖动滚动条到相应位置，导航条发生变化
    $(window).scroll(function () {
        wheel();
    });
    function wheel() {
        $anchor = $(this).scrollTop() + 50;
        $('section').each(function () {
            var porTop = $(this).offset().top;
            var heightSelf = $(this).height();
           // console.log($anchor, porTop)
            //console.log(heightSelf)
            if ($anchor >= porTop && $anchor < porTop + heightSelf) {
                //console.log($(this).index())
                $("a.page-scroll").eq($(this).index() - 2).addClass('ac');
            }
            else {
                $("a.page-scroll").eq($(this).index() - 2).removeClass('ac');
            }
        })
    }


    //header中点击按钮；页面滑动到services
    $("button.services").click(function () {
        $('html,body').animate({scrollTop: $("#services").offset().top}, 1000);
    })

    //点击nav中的按钮  导航显示
    $('.navbar-toggle').click(function () {
        //$('.collapse').css('display','block');
        $('.collapse').toggle();
    });
    $("a.page-scroll").click(function (e) {
        $('.collapse').css('display', 'none');
        e.preventDefault();
    });
    $(".navbar-brand").click(function () {
        $('html,body').animate({scrollTop: -($(this).offset().top + 50)}, 1000);
    });
})


