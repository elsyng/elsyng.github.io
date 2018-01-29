// hardcoded to test

for(i = 0; i < 3; i++) {
    $(".test-grid").append("<div class='row' id='"+i+"'></div>");
    $(".row#"+i).append( " <div class='col'></div> <div class='col'></div> <div class='col'></div> " );
}

$(".col").each(function( index ) {
    $(this).css({
        "background-image": "url('photos/temp-"+index+".jpg')",
        "background-size": "cover",
        "background-position-x": "center"
    });
});