$(document).ready(function(){
    
    $(".page-loader").hide();
    
    $("#header_search_btn").click(function(){
        if($("#header-search-web").val()==""){
            $(this).closest(".input-group").toggleClass("search_active");
        }
        else{
            window.location=CONFIG.baseUrl+"gallery?q="+$("#header-search-web").val();
        }
       });
    
    $("#serach_section #search_input").focus(function(){
        if($(this).val() != ""){
            $("#serach_section .clear").show();
        }
        else{
            $("#serach_section .clear").hide();
        }
    }).keyup(function(){
        if($(this).val() != ""){
            $("#serach_section .clear").show();
        }
        else{
            $("#serach_section .clear").hide();
        }
    }).blur(function(){
        if($(this).val() != ""){
            $("#serach_section .clear").show();
        }
        else{
            $("#serach_section .clear").hide();
        }
    });
    $("#serach_section .clear").click(function(){
        $("#serach_section #search_input").val("");
        $(this).hide();
    });
    
    $(".mobile-navigation li a:not(.go-to-chk-eligibility)").on("touchend", function(e) {
        var el = $(this);
        var link = el.attr("href");
        if(link)
        {
            window.location = link;
        }
    });
});

function openComingSoonSection(){
    $(".coming-soon-section").slideDown();
}
function closeComingSoonSection(){
    $(".coming-soon-section").slideUp();
}
function showPopup(){
}