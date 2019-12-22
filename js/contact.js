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
            console.log(res)
            let div=document.createElement('div')
            div.innerHTML=res.data.content
            $('.content').html(div)
        }
    })
})