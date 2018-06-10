$(window).on("load", start);

function start() {
    console.log("start");
$("#p1_txt").hide();
    $("#p2_txt").hide();
    $("#p3_txt").hide();

    ind();
}

function ind() {
    console.log("ind");
$("#p1_txt").delay(1000).fadeIn();
    $("#p2_txt").delay(2000).fadeIn();
    $("#p3_txt").delay(3000).fadeIn();
}
