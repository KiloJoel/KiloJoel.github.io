console.log("test1!");
var hidden = false;
$("#hide-button").click(function() {
    hidden = !hidden;
    console.log("test2!");
    if (hidden)
    {
        $("#block-of-text").show();
        $("#hide-button").text("Hide");
    }
    else
    {
        $("#block-of-text").hide();
        $("#hide-button").text("Show");
    }
});

function HarryFunction (){
    console.log("We did it!");
}