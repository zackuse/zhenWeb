
$(function () {
    //自适应移动端比例
    function rem(size) {
        var clientW = document.documentElement.clientWidth;
        var bili = clientW / size;
        var fontSize = bili * 100;
        document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px"
    }
    rem(750);

    var AJAXURL = "https://qizhen-design.cn/api.php/";

        $.ajax({
            type: "GET",
            url: AJAXURL + "Pc/get_pc_banner",
            data: {

            },
            dataType: "json",
            success: function (res) {
                if (res.code == 0) {
                    var banner=res.data
                    for (let i = 0; i < res.data.length; i++) {
                        let div = document.createElement('div')
                        div.className = 'swiper-slide'

                        let img = document.createElement('img')
                        img.src = res.data[i].banner_img
                        div.appendChild(img)

                        let swiper = document.getElementsByClassName('swiper-wrapper')[0]
                        swiper.appendChild(div)
                    }

                    // dom渲染完毕 初始化swiper
                    let mySwiper = new Swiper('.swiper-container', {
                        autoplay: 2000, //可选选项，自动滑动
                        loop: true,
            
                        // 如果需要分页器
                        pagination: '.swiper-pagination',
            
                        // 如果需要前进后退按钮
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev'
                    })
                } else {
                    mui.toast(res.errmsg)
                }
            }
        });

  
})



