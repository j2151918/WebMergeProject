/*window.onload=function(){
    //this.document.write("Hello JavaScript!");
};*/
$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem =$("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        //Math.random():0~0.9999~
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pics[randomChildNumber]);
    });
});