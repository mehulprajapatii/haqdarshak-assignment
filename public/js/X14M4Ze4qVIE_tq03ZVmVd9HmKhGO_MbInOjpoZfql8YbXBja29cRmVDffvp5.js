hdApp.standAloneController(function ($scope, Api, Validate) 
{
	//$("#topBar").addClass("hide");
	if(CURRENT_PAGE == 'covid'){
		$(".covid-menu").removeClass('theme-color');
	}


	$("#covid-chk-eligibility").click(function(e) 
	{  
		e.preventDefault();
		var redirection_url = $(this).data("href");
		console.log("redirection_url");
		console.log(redirection_url);

		if (CURRENT_USER.userType == "auth") 
		{
			location.href = redirection_url;
		} 
		else 
		{
			$scope.redirection_url = redirection_url;
			$("#LogIn").modal("show");
			$("#ctn-btn").removeClass("hide");
		}
	});
});