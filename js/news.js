$(function () {
    var AJAXURL = "https://qizhen-design.cn/api.php/";
    $.ajax({
        type: "GET",
        url: AJAXURL + "Pc/get_pc_news_list",
        data: {

        },
        dataType: "json",
        success: function (res) {
            for (let i = 0; i < res.data.length; i++) {
                //title
                let li = document.createElement('li')
                li.className='new_title'
                let news = document.getElementsByClassName('news_list')[0]
                news.appendChild(li)
                $('.new_title').html(`${res.data[i].title}`)
                console.log(res.data)
                //img
                let img = document.createElement('img')
                li.className='new_img'
                img.src=res.data[i].img
                let new_title = document.getElementsByClassName('new_title')[0]
                news.appendChild(img)
               
            }


        }
    })
})