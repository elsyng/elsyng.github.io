// hardcoded to test

for(i = 0; i < 9; i++) {
    var photopath = "photos/temp-";
    var extension = ".jpg";
    $(".test-single").append("<img class='photo' src="+photopath+i+extension+"/>");
}