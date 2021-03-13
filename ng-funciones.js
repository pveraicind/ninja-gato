$(document).ready(function () {
    $('img').click(function () { 
        $(this).attr("src-temp", $(this).attr("src"));
        $(this).attr('src',$(this).attr('src2'));
        $(this).attr("src2", $(this).attr("src-temp"));
        
    });
});