$(document).ready(function () {
    var txtbox_1 = $('#textBox');
    // Setup the event
    txtbox_1.focusout(function () {
        //var last = $.data(txtbox_1, "last");
        if ($(this).val().match("vegan"))
            alert("Warning: Cheesecake contains Dairy.");
        else{
            //Hides a buncha stuff.
            $("#Order").hide();
            $("#textBox").hide();
            $("#textBox").hide();
            $("#numcakes").hide();
            $("#toppingForm").hide();
            $("#id1").hide();
            $("#id2").hide();
            //Sets up the dialoge to report after an order is submitted.
            var topping = $('input[name="toppingType"]:checked').val();
            var Quantity =  $("#numcakes").val();
            var Instructions = $ ("#textBox").val();
            var DisplayTxt = "Order placed! Quantity:" + Quantity + "  __Topping Selected:" + topping + "  __Special Instructions:" + Instructions;
            $("#OrderSummary").text(DisplayTxt).show();
        }
    });

    $(".btn").click(function(){
        document.getElementById("dropFace").innerHTML = this.innerHTML;
    });
});


 //Bug: if ANY button is hit, is does this. How do i fix?
//This script detects when a dropdown button is selected. When it is, it sets the text of the main box to that month.
//$(document).ready(function(){
    
//});