var BlogIndex = 0;
var BlogsNum = 0;
$(document).ready(function () {

    $(".container-r").find(".panel").each(function () {
        if (BlogIndex < 5) {
            $(this).show();
            BlogIndex++;
            
        } else {
            $(this).hide();
        }
        BlogsNum++;
    })
});
function prevlist() {
    if (BlogIndex<=5) {
        swal("没有更多可以加载了", "╮（╯＿╰）╭");
        return;
    }
    var BlogIndexTemp = 0;
    $(".container-r").find(".panel").each(function () {
        if (BlogIndexTemp >= BlogIndex - 10 && BlogIndexTemp < BlogIndex-5) {
            $(this).show();

        } else {
            $(this).hide();
        }
        BlogIndexTemp++;
    });
    BlogIndex -= 5;
}

function nextlist() {
    if (BlogIndex >=BlogsNum) {
        swal("没有更多可以加载了", "╮（╯＿╰）╭");
        return;
    }
  
    var BlogIndexTemp = 0;
    $(".container-r").find(".panel").each(function () {
        if (BlogIndexTemp < BlogIndex + 5 && BlogIndexTemp >= BlogIndex) {
            $(this).show();

        } else {
            $(this).hide();
        }
        BlogIndexTemp++;
    });
    BlogIndex+=5;
}