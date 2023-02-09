$(document).ready(function () {
    var txtbox_1 = $('#textBox');
    // Setup the event

    function placeOrder() {
        //var last = $.data(txtbox_1, "last");
        if ($('#textBox').val().match("vegan"))
            alert("Warning: Cheesecake contains Dairy.");
        else{
            //Hides a buncha stuff.
            $(this).hide();
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
    }
    
    $('#Order').click(placeOrder);

    function changeMonth(){
        document.getElementById("dropFace").innerHTML = this.innerHTML;
    }
    

    $('.btn').click(changeMonth);



});