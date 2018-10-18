

//$("#defaultChecked2").click(function(){
//    $("#questLeftInfo").hide();
//})
var button1 = $("input[type='checkbox'][name='check1']");
var button2 = $("input[type='checkbox'][name='check2']");
$(button1).click(function() {
    if ($("input[type='checkbox'][name='check1']:checked").val() == "on") {
        $("#questLeftInfo").hide();
    }
    else {
        $("#questLeftInfo").show();
    }
})
$(button2).click(function() {
    if ($("input[type='checkbox'][name='check2']:checked").val() == "on") {
        $("#questRightInfo").hide();
    }
    else {
        $("#questRightInfo").show();
    }
})
//$("input[type='radio'][name='rate']:checked").val();

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

