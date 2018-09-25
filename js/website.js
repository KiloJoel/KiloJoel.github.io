console.log("test1!");
var hidden = false;
$("#hide-button").click(function() {
    console.log("test2!");
    if (hidden)
    {
        $("#block-of-text").show();
        $("#hide-button").text("Hide");
        hidden = false;
    }
    else
    {
        $("#block-of-text").hide();
        $("#hide-button").text("Show");
        hidden = true;
    }
});

function HarryFunction (){
    console.log("We did it!");
}