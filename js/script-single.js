// hardcoded to test

for(i = 0; i < 9; i++) {
    var photopath = "photos/temp-";
    var extension = ".jpg";
    var partA = "<img class='photo' src=";
    var partB = "/>";
    $(".test-single").append(partA+photopath+i+extension+partB);
}