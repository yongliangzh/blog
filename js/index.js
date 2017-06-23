var BlogIndex ;
var BlogsNum ;
$(document).ready(function () {
    BlogIndex = 0;
    BlogsNum = 0;
    $(".container-r").find(".panel").each(function () {
        if (BlogIndex < 5) {
            $(this).show();
            BlogIndex++;
        } else {
            $(this).hide();
        }
        $(this).attr("isshow", "1");
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
        if ($(this).attr("isshow") == "1") {
            if (BlogIndexTemp < BlogIndex - 5 && BlogIndexTemp >= BlogIndex - 10) {
                $(this).show();
            } else {
                $(this).hide();
            }
            BlogIndexTemp++;
        } else {
            $(this).hide();
        }
        
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
        if ($(this).attr("isshow") == "1") {
            if (BlogIndexTemp < BlogIndex + 5 && BlogIndexTemp >= BlogIndex) {
                $(this).show();
            } else {
                $(this).hide();
            }
            BlogIndexTemp++;
        } else {
            $(this).hide();
        }

        
    });
    BlogIndex+=5;
}

$('#SearchText').bind('input propertychange', function () {
    BlogIndex = 0;
    BlogsNum = 0;
    $(".container-r").find(".panel").each(function () {
        if ($(this).html().replace(/<.*?>/ig, "").indexOf($('#SearchText').val()) != -1) {
            $(this).attr("isshow", "1");
            if (BlogIndex < 5) {
                $(this).show();

                BlogIndex++;
            } else {
                $(this).hide();
            }
            BlogsNum++;
        } else {
            $(this).attr("isshow", "0");
            $(this).hide();
        }
        
    })
   
});

function findupdate(time) {
    BlogIndex = 0;
    BlogsNum = 0;
    if (time == "FindAll") {
        $(".container-r").find(".panel").each(function () {
            if (BlogIndex < 5) {
                $(this).show();
                BlogIndex++;
            } else {
                $(this).hide();
            }
            $(this).attr("isshow", "1");
            BlogsNum++;
        })

    } else {
        $(".container-r").find(".panel").each(function () {
            if (time == $(this).attr("updatetime")) {
                $(this).attr("isshow", "1");
                if (BlogIndex < 5) {
                    $(this).show();
                    BlogIndex++;
                } else {
                    $(this).hide();
                }
                BlogsNum++;
            } else {
                $(this).attr("isshow", "0");
                $(this).hide();
            }

        });
    }
}

function selecttype(type) {
    BlogIndex = 0;
    BlogsNum = 0;
    $(".container-r").find(".panel").each(function () {

        if (type == $(this).attr("blogtype")) {
            
            $(this).attr("isshow", "1");
            if (BlogIndex < 5) {
                $(this).show();
                BlogIndex++;
            } else {
                $(this).hide();
            }
            BlogsNum++;
        } else {
            $(this).attr("isshow", "0");
            $(this).hide();
        }

    });
}