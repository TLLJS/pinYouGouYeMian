window.addEventListener("load", function() {
        var ul = document.querySelector("#ul1");
        var div = document.querySelector(".focus");
        var span = document.querySelectorAll(".as");
        var ol = document.querySelector("ol");

        div.addEventListener("mouseover", function() {
            span[0].style.display = 'block';
            span[1].style.display = "block";
            clearInterval(time);
        })
        div.addEventListener("mouseout", function() {
            span[0].style.display = 'none';
            span[1].style.display = "none";
            time = setInterval(function() {
                span[1].click();
            }, 2000)
        })
        for (var i = 0; i < ul.children.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("index", i)
            li.className = "circle";
            ol.appendChild(li);
            li.addEventListener("click", function() {
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].style.backgroundColor = "";
                }
                this.style.backgroundColor = "#fff";
                var index = this.getAttribute("index");
                num = index;
                circle = index;
                animate(ul, -index * ul.children[0].offsetWidth);
            })
        }
        ol.children[0].style.backgroundColor = "#fff";
        var li = ul.children[0].cloneNode(true);
        ul.appendChild(li);
        var num = 0;
        var circle = 0;
        var flag = true
        span[1].addEventListener("click", function() {
            if (flag) {
                flag = false;
                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                animate(ul, -num * ul.children[0].offsetWidth, function() {
                    flag = true;
                });
                circle++;
                if (circle == ol.children.length) {
                    circle = 0;
                }
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].style.backgroundColor = "";
                }
                ol.children[circle].style.backgroundColor = "#fff";
            }
        })
        span[0].addEventListener("click", function() {
            if (flag) {
                flag = false;
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * (ul.children[0].offsetWidth) + "px";
                }
                num--;
                animate(ul, -num * ul.children[0].offsetWidth, function() {
                    flag = true;
                });
                circle--;
                if (circle < 0) {
                    circle = ol.children.length - 1;
                }
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].style.backgroundColor = "";
                }
                ol.children[circle].style.backgroundColor = "#fff";
            }
        })
        var time = setInterval(function() {
            span[1].click();
        }, 2000)
    })
    // 固定导航栏
$(function() {
    var flag = true;
    $(".fixtool").hide();
    // 显示隐藏导航栏
    $(document).on("scroll", function() {
        if ($(document).scrollTop() >= $(".recommend").offset().top) {
            $(".fixtool").fadeIn();
        } else {
            $(".fixtool").fadeOut();
        }
        if (flag) {

            $(".floor .w").each(function(i, delme) {
                if ($(document).scrollTop() >= $(delme).offset().top) {
                    $(".fixtool li").eq(i).css({
                        color: "#fff",
                        backgroundColor: "#c81623",
                    }).siblings().css({
                        color: "#666",
                        backgroundColor: "#fff",
                    });
                }

            })

        }
    })





    $(".fixtool li").on("click", function() {
        flag = false;
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current,
        }, function() {
            flag = true;
        })
        $(this).css({
            color: "#fff",
            backgroundColor: "#c81623",
        }).siblings().css({
            color: "#666",
            backgroundColor: "#fff",
        })
    })


})