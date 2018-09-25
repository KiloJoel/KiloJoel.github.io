

$("#defaultChecked2").click(function(){
    $("#questLeftInfo").hide();
})
var button1 = $("input[type='checkbox'][name='check1']");
$(button1).click(function() {
    if ($("input[type='checkbox'][name='check1']:checked").val() == "on") {
        console.log($("input[type='checkbox'][name='check1']:checked").val());
        console.log("hiding");
        $("#questLeftInfo").hide();
    }
    else {
        console.log($("input[type='checkbox'][name='check1']:checked").val());
        console.log("showing");
        $("#questLeftInfo").show();
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

