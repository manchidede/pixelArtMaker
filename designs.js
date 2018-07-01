// Select color input
// Select size input
$( document ).ready(function() {
    // $("#pixelCanvas").css("height", $("#pixelCanvas").innerWidth()/2)
// When size is submitted by the user, call makeGrid()
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

// $(document).ready(function() {
//     $("#tblDatatr:has(td)").mouseover(function(e) {
//     $(this).css("cursor", "pointer");
//     });
//     $("#tblDatatr:has(td)").click(function(e) {
//     $("#tblData td").removeClass("highlight");
//     var clickedCell= $(e.target).closest("td");
//     clickedCell.addClass("highlight");
//     $("#spnText").html(
//     'Clicked table cell value is: <b> ' + clickedCell.text() + '</b>');
//     });
//    });