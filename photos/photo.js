photo ={
    page: 1,
    offset: 12,
    init: function () {
        var that = this;
       $.getJSON("../images/output.json", function (data) {
           console.log("初始化....");
           console.log("data.length: "+data.length);
            that.render(that.page, data);
            //that.scroll(data);
        });
    },
    render: function (page, data) {
        var begin = (page - 1) * this.offset;
        var end = page * this.offset;
        if (begin >= data.length) return;
        var html, imgNameWithPattern, imgName, imageSize, imageX, imageY, li = "";
        for (var i = begin; i < end && i < data.length; i++) {
            console.log("循环："+i);
           //imgNameWithPattern = data[i].split(' ')[1];
           //imgName = imgNameWithPattern.split('.')[0]
           //imageSize = data[i].split(' ')[0];
           //imageX = imageSize.split('.')[0];
           //imageY = imageSize.split('.')[1];
            li += '<div class="card" style="width:330px">' +
                    '<div class="ImageInCard" style="height:'+ 330  + 'px">' +  
                    //* imageY / imageX
                    //   '<a data-fancybox="gallery" href="https://github.com/fengshana/fengshana.github.io/blob/master/images/' + imgNameWithPattern + '?raw=true" data-caption="' + imgName + '">' +
                    '<a data-fancybox="gallery" href="http://r.photo.store.qq.com/psc?/V13IdniL3IuSOB/TCfiP1YaPeRT4Jil9RANX34S*QbchuJWVdBNWC2FqdByIV7*UJMU1EsmwGvMVRHWcUUvPIr7NyobrRIy0eg2I2eQq2TVCqWo6SiP0spyA0g!/r">' +    
                    // '<img src="https://github.com/fengshana/fengshana.github.io/blob/master/images/' + imgNameWithPattern + '?raw=true">' +
                        '<img src="http://r.photo.store.qq.com/psc?/V13IdniL3IuSOB/TCfiP1YaPeRT4Jil9RANX34S*QbchuJWVdBNWC2FqdByIV7*UJMU1EsmwGvMVRHWcUUvPIr7NyobrRIy0eg2I2eQq2TVCqWo6SiP0spyA0g!/r?raw=true">' +
                      '</a>' +
                    '</a></div>' +
                  '</div>'
        }

        console.log("li: "+li);
        //添加上一页、下一页
        $(".ImageGrid").append(li);
        $(".ImageGrid").lazyload();
        this.minigrid();
    },
    minigrid: function() {
        var grid = new Minigrid({
            container: '.ImageGrid',
            item: '.card',
            gutter: 12
        });
        grid.mount();
        $(window).resize(function() {
           grid.mount();
        });
    }
}
photo.init();