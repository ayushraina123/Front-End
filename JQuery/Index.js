$("h1").addClass("big-title margin-50");

$("button");

$("a").attr("href", "https://in.yahoo.com/?p=us");
console.log($("a").attr("href"));


$("button").click(function ()
{
    $("h1").css("color","purple")
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
})

$("button").on("click", function()
{
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
});


