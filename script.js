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
        let windowSize = $(window).width() - 15;
        $("textarea, iframe").css("width", `${windowSize / numberOfInputs}`);
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

    $(".run_button").click(function () {
        let user_html = $(".html").val();
        let user_css = $(".css").val();
        let user_js = $(".js").val();
        let combine = `
        <style>${user_css}</style>
        ${user_html}
        <script>${user_js}</script>
        `
        $("iframe")[0].contentWindow.document.open();
        $("iframe")[0].contentWindow.document.writeln(combine);
        $("iframe")[0].contentWindow.document.close();
    });
});

