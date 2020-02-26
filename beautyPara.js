// 2020/02/26 BY https://github.com/ouoholly
// *************************************************************
// References:
// 1. https://regex101.com/
// 2. https://blog.csdn.net/Lemostic/article/details/70148287
// 3. https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// 4. https://larry850806.github.io/2016/06/23/regex/
// 5. http://ccckmit.wikidot.com/regularexpression

function delEmptyLine() {
    var boxvalue = $("#box").val();
    var new_boxvalue = boxvalue.replace(/\n*(\n)/g, "\n");
    $("#box").val(new_boxvalue);
}

function addEmptyLine() {
    var boxvalue = $("#box").val();
    var new_boxvalue = boxvalue.replace(/\n+/g, "\n\n");
    $("#box").val(new_boxvalue);
}

function addParaTab() {
    var boxvalue = $("#box").val();
    var new_boxvalue = boxvalue.replace(/(\s+)/g , "\n    ");
    $("#box").val(new_boxvalue);
}

function delParaTab() {
    var boxvalue = $("#box").val();
    var new_boxvalue = boxvalue.replace(/(\s\s\s\s+)/g, "\n");
    $("#box").val(new_boxvalue);
}