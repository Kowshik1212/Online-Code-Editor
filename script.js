$(document).ready(function () {
    function hide() {
        $("#html-text").hide();
        $("#css-text").hide();
        $("#js-text").hide();
        $("#result-text").hide();
    }
    hide();
    function image() {
        if (html == false && css == false && js == false && result == false) {
            $("img").show();
        }
        else {
            $("img").hide();
        }
    }
    function size() {
        let numberOfInputs = 0;
        if (html)
            numberOfInputs++;
        if (css)
            numberOfInputs++;
        if (js)
            numberOfInputs++;
        if (result)
            numberOfInputs++;
        if (numberOfInputs == 4) {
            $("textarea").css("width", "45vh");
        }
        if (numberOfInputs == 3) {
            $("textarea").css("width", "55vh");
        }
        if (numberOfInputs == 2) {
            $("textarea").css("width", "80vh");
        }
        if (numberOfInputs == 1) {
            $("textarea").css("width", "100vh");
        }
    }
    let html = false;
    let css = false;
    let js = false;
    let result = false;
    $("#html").click(function () {
        if (html) {
            html = false;
            $("#html-text").hide();
            if (css == false && js == false) {
                result = false;
                $("#result-text").hide();
            }
        }
        else {
            html = true;
            $("#html-text").show();
            if (!result) {
                result = true;
                $("#result-text").show();
            }
        }
        image();
        size();
    })

    $("#css").click(function () {
        if (css) {
            css = false;
            $("#css-text").hide();
            if (html == false && js == false) {
                result = false;
                $("#result-text").hide();
            }
        }
        else {
            css = true;
            if (!html) {
                html = true;
                $("#html-text").show();
            }
            $("#css-text").show();
            if (!result) {
                result = true;
                $("#result-text").show();
            }
        }
        image();
        size();
    })

    $("#js").click(function () {
        if (js) {
            js = false;
            $("#js-text").hide();
            if (html == false && css == false) {
                result = false;
                $("#result-text").hide();
            }
        }
        else {
            js = true;
            if (!html) {
                html = true;
                $("#html-text").show();
            }
            $("#js-text").show();
            if (!result) {
                result = true;
                $("#result-text").show();
            }
        }
        image();
        size();
    })

    $("#result").click(function () {
        if (result) {
            result = false;
            $("#result-text").hide();
        }
        else {
            result = true;
            $("#result-text").show();
        }
        image();
        size();
    })

    let isResizing = false;
    $("#css-text").mousedown(function (e) {
        isResizing = true;
        let startX = e.pageX;
        let initialWidth = $("#html-text").width();
        $("document").mousemove(function (e) {
            if (isResizing) {
                let newWidth = initialWidth + e.pageX - startX;
                $("#html-text").width(newWidth);
            }
        });
        $("document").mouseup(function () {
            isResizing = false;
            $("document").off("mousemove");
            $("document").off("mouseup");
        });
    })
});

