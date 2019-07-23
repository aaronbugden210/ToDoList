$("li").click(function()
{
    //Code can change the style of the elements with jQuery

    // if($(this).css("color") === "rgb(128, 128, 128)")
    // {
    //     $(this).css({
    //         color: "rgb(0, 0, 0)",
    //         textDecoration: "none"
    //     });
    // }
    // else
    // {
    //     $(this).css({
    //         color: "rgb(128, 128, 128)",
    //         textDecoration: "line-through"
    //     });
    // }

    //but can also be done with CSS easier
    $(this).toggleClass("completed");
});
