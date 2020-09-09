(function ($) {

    $('#menu li').eq(0).addClass('on')
    $('html, body').animate({
        scrollLeft: '0'
    }, 800)


    // 왼쪽에 메뉴를 클릭하면 해당 섹션으로 가로스크롤로 이동하게 하시오.


    $('#menu li a').on('click', function (e) {
        var ind = $(this).parent().index()
        var ww = $(window).width()
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        $('html, body').stop().animate({
            scrollLeft: ind * ww
        }, 800)
        return false
    })




    // 마우스휠 이벤트 발생시 휠의 방향이 위쪽이면 이전섹션으로 이동하게 하고,
    // 휠의 방향이 아래쪽이면 다음섹션으로 이동하게 구현하시오.

    var secIndex;
    $('section').on('mousewheel', function (e, wh) {

        if (wh > 0) { // 이전섹션(왼쪽)으로 이동
            secIndex = $(this).prev().index()
            console.log(secIndex)
            if (secIndex < 0) {
                secIndex = 0
            }

        } else if (wh < 0) { // 다음섹션(오른쪽)으로 이동
            secIndex = $(this).next().index()
            console.log(secIndex)
            if (secIndex < 0) {
                secIndex = 3
            }

        }
        $('html, body').stop().animate({
            scrollLeft: secIndex * $(window).width()
        }, 800)
        $('#menu li').eq(secIndex).addClass('on')
        $('#menu li').eq(secIndex).siblings().removeClass('on')

    })


    $('section').on('mousemove', function (e) {
        var posX = e.pageX //현재 마우스 위치의 x 좌표값
        var posY = e.pageY
        $('section').eq(0).find('img:nth-of-type(1)').css({
            right: 20 - (posX / 30),
            bottom: 20 - (posY / 30)
        })
        $('section').eq(0).find('img:nth-of-type(2)').css({
            right: 130 - (posX / 20),
            bottom: -40 - (posY / 20)
        })
    })


})(jQuery)