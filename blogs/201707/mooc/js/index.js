$(".search-input").focus(function(){
  $("#prompt").css("display","none");
});

$(".search-input").blur(function(){
    if($(this).val()==""){
      $("#prompt").css("display","inline-block");
  }
});

function showcart(){
    $(".shop-panel").show();
}

function hidecart(){
    $(".shop-panel").hide();
}

function changebgd(thislabel){
    $(thislabel).css("background-color","#c9cdd1");
}

function changebgl(thislabel){
    $(thislabel).css("background-color","#d9dde1");
}
function showmypanel(){
    $(".my-panel").show();

}
function hidemypanel(){
    $('.my-panel').hide();
}

function search(){
    window.open("http://www.imooc.com/search/?words="+$("#search-text").val()); 
}

$(function () {


    var container = $('#container');
    var list = $('#list');
    var buttons = $('#buttons span');
    var prev = $('#prev');
    var next = $('#next');
    var index = 1;
    var len = 6;
    var interval = 5000;
    var timer1;

    function animate (offset) {
                var left = parseInt(list.css('left')) + offset;//获得最后的left
                //偏移量大于零向左，小于零向右
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 500, function () {
                    if(left > -200){
                        list.css('left', -1200 * len);
                    }//到最后一张重置样式
                    if(left < (-1200 * len)) {
                        list.css('left', -1200);
                    }//到第一张重置样式
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer1 = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);//设置一个定时器，模仿向右的点击事件，3秒一下
            }
            function stop() {
                clearTimeout(timer1);//清除定时器
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }//如果轮播图在动画中就不动
                if (index == 6) {
                    index = 1;
                }//到了第5张轮播图重置为第3张
                else {
                    index += 1;
                }  //当前轮播图加1
                animate(-1200);//轮播图的left-1200
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 6;
                }
                else {
                    index -= 1;
                }
                animate(1200);
                showButton();
            });

            buttons.each(function () {
               $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {//如果在动画中 或者是当前选中的就不动
                       return;
                   }
                   var myIndex = parseInt($(this).attr('index'));
                   var offset = -1200 * (myIndex - index);

                   animate(offset);
                     index = myIndex;//获得选中的按钮的index赋给当前
                     showButton();
                 })
           });

            container.hover(stop, play);//如果鼠标在轮播图上就停止，不在就显示

            play();//自动播放轮播图

        });