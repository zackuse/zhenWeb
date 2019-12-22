$(function () {
    var AJAXURL = "https://qizhen-design.cn/api.php/";
    $.ajax({
        type: "GET",
        url: AJAXURL + "Pc/get_pc_detail",
        data: {
            type: 3
        },
        dataType: "json",
        success: function (res) {
            console.log(res.data)
            var img=document.createElement('img')
            img.className='bannerImg' 
             img.src=res.data.img
            $('.banner').html(img)
            }
    })
})