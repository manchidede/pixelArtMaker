
// Select size input
$( document ).ready(function() {
// When size is submitted by the user, execute
$("form").submit(function(e){
    let gridH = $("#inputHeight").val();
    let gridW = $("#inputWeight").val();
    //Clear content
    $("#pixelCanvas").html('');

    for(x=0; x < gridH; x++){
    var tr = document.createElement("tr"); 
    for(i=0; i < gridW; i++){
        var td = document.createElement("td");
        tr.append(td); 
    }
    $("#pixelCanvas").append(tr);
    }
    e.preventDefault();
});

// Select color input
$("#pixelCanvas").click(function(e){

    var clicks = $(e.target).data('clicks');
    if (clicks) {
        $(e.target).css("background-color", "");        
    } else {
        $(e.target).css("background-color", $("#colorPicker").val());
    }
    $(e.target).data("clicks", !clicks);

  });


});