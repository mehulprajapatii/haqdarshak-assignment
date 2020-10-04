function showSearchPopup(){
    $("body").addClass("fixed-body");
    $("#serach_section").toggle(400,"linear");
    $("#serach_section input").focus();
    $(document).click(function (event) {
        var br_clickover = $(event.target);
        var br_opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
        if (br_opened === true && !br_clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
}
function hideSearchPopup(){
    $("body").removeClass("fixed-body");
   $("#serach_section").toggle(400,"linear");
}
$(document).ready(function(){
    
    $("#nav-icon1 , .action-btn").click(function(){
        $(".faq-search-btn-secondary").removeClass("search_active");
        
    });
});