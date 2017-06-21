﻿$(document).ready(function () {
    var sub = $('#sub');
    var activeRow;
    var activeMenu;
    var timer;
    var mouseInSub = false;
    sub.on('mouseenter', function (e) {
        mouseInSub = true;
    }).on('mouseleave', function (e) {
        mouseInSub = false;
    })

    var mouseTrack = [];
    var moveHandler = function (e) {
        mouseTrack.push({
            x: e.pageX,
            y: e.pageY
        })
        if (mouseInSub.length > 3) {
            mouseTrack.shift();
        }
    }
    $('#test').on('mouseenter', function (e) {
        sub.removeClass('none');

        $(document).bind('mousemove', moveHandler);

    }).on('mouseleave', function (e) {
        sub.addClass('none');


        if (activeRow) {
            activeRow.removeClass('active');
            activeRow = null;
        }
        if (activeMenu) {
            activeMenu.addClass('none');
            activeMenu = null;
        }
        $(document).unbind('mousemove', moveHandler)
    }).on('mouseenter', 'li', function (e) {
        if (!activeRow) {
            activeRow = $(e.target).addClass('active');
            activeMenu = $('#' + activeRow.data('id'));
            activeMenu.removeClass('none');
            return;
        }
        if (timer) {
            clearTimeout(timer);
        }
        var currMousePos = mouseTrack[mouseTrack.length - 1];;
        var leftCorner = mouseTrack[mouseTrack.length - 2];

        var delay = needDelay(sub, leftCorner, currMousePos);

        if (delay) {
            timer = setTimeout(function () {
                if (mouseInSub) {
                    return;
                }
                activeRow.removeClass('active');
                activeMenu.addClass('none');

                activeRow = $(e.target);
                activeRow.addClass('active');
                activeMenu = $('#' + activeRow.data('id'));
                activeMenu.removeClass('none');
            }, 300)
        } else {
            var prevActiveRow = activeRow;
            var prevActiveMenu = activeMenu;

            activeRow = $(e.target);
            activeMenu = $('#' + activeRow.data('id'));

            prevActiveRow.removeClass('active');
            prevActiveMenu.addClass('none');

            activeRow.addClass('active');
            activeMenu.removeClass('none');
        }
    })
})

function sameSign(a, b) {
    return (a ^ b) >= 0
}

function vector(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y

    }
}


function vectorProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
}

function isPointInTrangle(p, a, b, c) {
    var pa = vector(p, a);
    var pb = vector(p, b);
    var pc = vector(p, c);
    var t1 = vectorProduct(pa, pb);
    var t2 = vectorProduct(pb, pc);
    var t3 = vectorProduct(pc, pa);
    var a = sameSign(t1, t2) && sameSign(t2, t3)
    return sameSign(t1, t2) && sameSign(t2, t3);
}

function needDelay(elem, leftCorner, currMousePos) {
    var offset = elem.offset()
    var topLeft = {
        x: offset.left,
        y: offset.top
    }
    var bottomLeft = {
        x: offset.left,
        y: offset.top + elem.height(),
    }
    return isPointInTrangle(currMousePos, leftCorner, topLeft, bottomLeft)
}