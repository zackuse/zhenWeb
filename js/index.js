
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
                console.log(res.data)
                if (res.code == 0) {
                    var banner=res.data
                    for (var i = 0; i < res.data.length; i++) {
                        $('.swiper-wrapper .img1').attr("src", res.data[0].banner_img)
                        $('.swiper-wrapper .img2').attr("src", res.data[1].banner_img)
                    }

                } else {
                    mui.toast(res.errmsg)
                }
            }
        });

        var type=$("#type").val()
    $.ajax({
        type: "GET",
        url: AJAXURL + "Pc/get_pc_detail",
        data: {
            type:type
        },
        dataType: "json",
        success: function (res) {
            console.log(res)
            if (res.errcode == 0) {
                time();
                mui.toast("发送成功")
            } else {
                mui.toast(res.errmsg);
                $("#daojishi").hide();
                $("#sendBtn").show();
            }
        }
    });
})



