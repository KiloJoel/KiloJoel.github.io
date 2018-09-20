console.log("test1!");
var hidden = false;
$("#hide-button").click(function() {
    hidden = !hidden;
    console.log("test2!");
    if (hidden)
    {
        $("#block-of-text").show();
    }
    else
    {
        $("#block-of-text").hide();
    }
});

function HarryFunction (){
    console.log("We did it!");
}