$(document).ready(function () {
    $(".nav-tabs>li>a").click(function () {
        var value = $(".nav-tabs>li a:focus").attr("value");
        $(".tips").text(value);
        console.log(":" + value);
    });


});

