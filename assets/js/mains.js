//the entire 'ul' needs a listener for this project,
//at least for new todos that are dynamically created
$("ul").on("click", "li", function()
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

//click on 'X' to delete To-Do
$("ul").on("click", "span", function(event) 
{
    $(this).parent().fadeOut(500, function() 
    {
        $(this).remove();
    });
    event.stopPropagation();
});

//adds new todo to list
$("input[type='text']").keypress(function(event)
{
    if(event.which === 13)
    {
        var newToDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
    }
});

$(".fa-plus").click(function()
{
    $("input[type='text']").fadeToggle();
});