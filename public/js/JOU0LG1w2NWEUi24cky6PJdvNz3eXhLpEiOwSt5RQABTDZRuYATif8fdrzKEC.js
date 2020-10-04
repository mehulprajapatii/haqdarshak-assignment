hdApp.rootController(function($scope, Validate, Api) 
{
	plyr.setup();
	var curr_page = CURRENT_PAGE.split("?")[0];

	$("."+curr_page+"-menu-mbl").addClass("active");
	$("."+curr_page+"-menu").addClass("hvr-rectangle-out-active");
	
	if(CURRENT_PAGE == 'gallery' || CURRENT_PAGE == 'book-haqdarshak-WOS' || CURRENT_PAGE == 'scheme-details' ||CURRENT_PAGE == 'eligible-schemes' || CURRENT_PAGE == 'eligible-scheme-details' || CURRENT_PAGE == 'video-gallery' || CURRENT_PAGE == 'all-videos' ||   CURRENT_PAGE == 'covid' ||  CURRENT_PAGE == 'gov-res' || CURRENT_PAGE == 'faq'){
			$("#statelocale").removeClass('hide');
	}else{
			$("#statelocale").addClass('hide');
	}

	//covid-19 changes
	if(CURRENT_PAGE == 'covid' || CURRENT_PAGE == 'gov-res' || CURRENT_PAGE == 'faq'){
		$(".covid-menu").removeClass('theme-color');
	//	$(".go-to-chk-eligibility").addClass('hide');
		$(".covid-gallery").removeClass('hide');
		$(".for-covid").removeClass('mobile-block visible-xs'); 
	    $(".mobile-navigation").addClass('hide');
	}

	if(CURRENT_PAGE == 'add-gov-res' || CURRENT_PAGE == 'delete-gov-res' || CURRENT_PAGE == 'delete-gov-res-cat' || CURRENT_PAGE == 'arrange-gov-res-cat' || CURRENT_PAGE == 'add-gov-res-cat' || CURRENT_PAGE == 'rename-gov-res-cat' || CURRENT_PAGE == 'list-gov-res' || CURRENT_PAGE == 'list-gov-res-cat' || CURRENT_PAGE == 'delete-gov-res-cat' || CURRENT_PAGE == 'save-gov-resources' || CURRENT_PAGE == 'anonimous-admn' || CURRENT_PAGE == 'add-impact-stories' || CURRENT_PAGE == 'delete-impact-stories' || CURRENT_PAGE == 'list-impact-stories' || CURRENT_PAGE == 'add-impact-stories-cat' || CURRENT_PAGE == 'delete-impact-stories-cat' || CURRENT_PAGE == 'rename-impact-stories-cat' || CURRENT_PAGE == 'arrange-impact-stories-cat'){
		  
		$("#cms-gov-li").removeClass('hide');
		$("#cms-impact-li").removeClass('hide');
		$("#eligibility-li").hide();
		$("#gallery-li").hide();
		$("#video-gallery-li").hide();
		$("#bk-haqdarshak-li").hide();
		$("#partner-li").hide();
		$("#cms-upload-app-li").removeClass();
	}

	//covid-19 changes end

	$("#regerror").hide();
	$("#wngcredentials").hide();
	$("#wngcredentials1").hide();
	var formData = new FormData();

	var state_list = 
	{
		"AP" : "Andhra Pradesh",  "AR" : "Arunachal Pradesh", "AS": "Assam", "BR": "Bihar", "CT": "Chhattisgarh", "GA": "Goa", "GJ": "Gujarat", "HR": "Haryana", "HP": "Himachal Pradesh", "JK": "Jammu and Kashmir", "JH": "Jharkhand", "KA": "Karnataka", "KL": "Kerala", "MP": "Madhya Pradesh", "MH": "Maharashtra", "MN": "Manipur", "ML": "Meghalaya", "MZ": "Mizoram", "NL": "Nagaland", "OR": "Odisha", "PB": "Punjab", "RJ": "Rajasthan", "SK": "Sikkim", "TN": "Tamil Nadu", "TG": "Telangana", "TR": "Tripura", "UT": "Uttarakhand", "UP": "Uttar Pradesh", "WB": "West Bengal", "AN": "Andaman and Nicobar Islands", "CH": "Chandigarh", "DN": "Dadra and Nagar Haveli", "DD": "Daman and Diu", "DL": "Delhi", "LD": "Lakshadweep", "PY": "Puducherry"
	};
	 
	var state_lang = {'AP':'en, te', 'AR':'en, hi', 'AS':'en, as', 'BR':'en, hi', 'CT':'en, hi', 'GA':'en,kok', 'GJ':'en,gu', 'HR':'en,hi', 'HP': 'en,hi', 'JK':'en,ur', 'JH':'en,hi', 'KA':'en,kn', 'KL':'en,ml', 'MP':'en,hi', 'MH':'en,mr', 'MN':'en,mni', 'ML':'en,hi', 'MZ':'en,lus', 'NL':'en,hi', 'OR':'en,or', 'PB':'en,pa', 'RJ':'en,hi', 'SK':'en,ne', 'TN':'en,ta', 'TG':'en,te', 'TR':'en,hi', 'UT':'en,hi', 'UP':'en,hi', 'WB':'en,bn', 'AN':'en,hi', 'CH':'en,hi', 'DN':'en,hi', 'DD':'en,hi', 'DL':'en,hi', 'LD':'en,hi', 'PY':'en,hi'}; 

	str = state_lang[CURRENT_USER.stateSession]
	locale = str.split(',');
	
	if (CURRENT_PAGE == 'all-videos'){
		$("#select-state").addClass('hide');
		locale = ['en', 'hi', 'as', 'bn', 'gu', 'kn', 'kok', 'lus', 'ml', 'mr', 'ne', 'pa', 'or', 'ta', 'te','all'];
	}
 
	for(var i = 0; i < locale.length; i++) {
		// Trim the excess whitespace.
		locale[i] = locale[i].replace(/^\s*/, "").replace(/\s*$/, "");
		
		$("#setLocale").append('<li><a tabindex="-1" href="'+CONFIG.baseUrl+'locale/'+locale[i]+'"> '+ locale[i]+'</a></li>');
	}

	$('#locale').text(CURRENT_USER.locale);

 	$("#header-search-web").keyup(function(e)
	{
		if((e.keyCode == 13) && ($(this).val()))
		{
			location.href = CONFIG.baseUrl+"gallery?q="+$(this).val();
		}
	});

	$("#search_input").keyup(function(e)
	{
		if((e.keyCode == 13) && ($(this).val()))
		{
			location.href = CONFIG.baseUrl+"gallery?q="+$(this).val();
		}
	});
	
	$("#reg_agree").click(function()
	{
		if($(this).is(":checked"))
		{
			$("#reg_submit").prop("disabled",false);
		}
		else
		{
			$("#reg_submit").prop("disabled",true);
		}
	});

	$("#password").keyup(function(e)
	{
		if((e.keyCode == 13) && ($(this).val()))
		{
			$("#login").trigger("click");
		}
	});

	$("#login_click").click(function(){
		
		$("#ctn-btn").addClass("hide");
		$("#LogIn").modal("show");
	});
 
	$("#login").click(function()
	{	
		var otherData = $("#login-form").serializeArray();

		var uname = $("#uname").val();
		var pwd = $("#password").val();
		if(uname == "")
		{
			$("#wngcredentials").show();
			$("#wngcredentials").text("Please enter Email id or Mobile Number");
			return;
		}
		if(pwd == "")
		{
			$("#wngcredentials").show();
			$("#wngcredentials").text("Please enter password");
			return;
		}
		var filter = /^[0-9]+$/;
		if (filter.test(uname)) 
		{ 
			formData.append("type","mobile");
		}
		else
		{
			formData.append("type","email");
		}
		var username= $("#uname").val().toLowerCase();

		$(".modal-dialog").ymElementLoader();
		$.each(otherData,function(key,input)
		{
			formData.append(input.name,input.value);
		});
		formData.append("username",username);
		var opt = 
		{
			user_id: CURRENT_USER.userID || Api.generateGuid(),
			shard_field: "noShard",
			service_id: CONFIG.api.services["user-login"].id,
			service_url: CONFIG.api.services["user-login"].url,
			data: formData
		};
		Api.post(opt, function(res)
		{		 
			if(res.status == "success")
			{				 
				if($scope.redirection_url)
				{
					location.href = $scope.redirection_url;
				}
				else
				{
					location.href = CONFIG.baseUrl+res.payload["redirect"];
				}
			}
			else
			{
				$("#wngcredentials").show();
				$("#wngcredentials").text(res.message); 
			}

			$(".modal-dialog").ymElementLoader("destroy");

		}, function (err) 
		{
			$(".modal-dialog").ymElementLoader("destroy");
			ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again. out"});
		});
	});

	$("#signin").click(function()
	{
		$("#logindiv").removeClass("hide");
		$("#pwddiv").removeClass("hide");
		$("#otropt").removeClass("hide");
		$("#signinopt").addClass("hide");
		$("#nextdiv").addClass("hide");
		$("#wngcredentials").hide();
	});	

	$("#nextOTP").click(function()
	{	
	 
		var uname = $("#uname").val();
	 
		if(uname == "")
		{
			$("#wngcredentials").show();
			$("#wngcredentials").text("Please enter Email id or Mobile Number");
			return;
		}
	 
		var filter = /^[0-9]+$/;
		if (filter.test(uname)) 
		{ 
			formData.append("type","mobile");
			formData.append("mode","online");
		}
		else
		{
			formData.append("type","email"); 
		}
		var username= $("#uname").val().toLowerCase(); 
		 
		formData.append("username",username);
		var opt = 
		{
			user_id: CURRENT_USER.userID || Api.generateGuid(),
			shard_field: "noShard",
			service_id: CONFIG.api.services["login-otp-verify"].id,
			service_url: CONFIG.api.services["login-otp-verify"].url,
			data: formData
		};
		Api.post(opt, function(res)
		{
			
			if(res.status == "success")
			{				 
				if(res.payload["type"] == "email"){
					$("#nextdiv").addClass('hide');
					$("#logindiv").removeClass('hide'); 
					$("#pwddiv").removeClass('hide');
					$("#otropt").removeClass('hide');
					$("#wngcredentials").hide();
				//	$("#uname").prop("disabled", true);
					$("#signinopt").addClass('hide');
				} else{				
					ymap.toast({type:'success', message:res.message});
					//Remove username text box and replace with text with number	
					$("#unamediv").addClass('hide');

					$("#nextdiv").addClass('hide');
					$("#signinopt").addClass('hide');

					//show otp text box verify and login 
					$("#textdiv").removeClass('hide');
					$("#logindiv").removeClass('hide');
					$("#pwddiv").removeClass('hide');
					$("#resendopt").removeClass('hide');

					//Fetch mobile to text label
					$("#mobiletext").html('Enter 6 digit Verification code sent to '+res.payload["mobile"]);
					$("#otplable").text("Enter your OTP here");
					$("#wngcredentials").hide();
				}
			}
			else
			{ 				 
				$("#wngcredentials").show();
				$("#wngcredentials").text(res.message); 
			}

			$(".modal-dialog").ymElementLoader("destroy");

		}, function (err) 
		{
			$(".modal-dialog").ymElementLoader("destroy");
			ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again. out"});
		});
	});

	$("#resendloginotp").click(function(){

		var formData = new FormData(); 
		var mobile = $('#uname').val();
				
		formData.append("type","mobile"); 
		formData.append("mobile",mobile);	

		options = {
			
			service_id: CONFIG.api.services["resend-login-otp"].id,
			service_url: CONFIG.api.services["resend-login-otp"].url,
			data: formData
		};
		Api.post(options, function (res) 
		{            
			if (res.status == "success") 
			{	
				ymap.toast({
					type: "success",
					message: res.message
                }); 
			} 
			else if(res.status == "failure") {
				ymap.toast({
					type: "error",
					message: res.message
				});
			} else {
				var msg = Object.values(res.payload["errors"])[0] || "Server error. ";
				ymap.toast({
					type: "error",
					message: msg
				});
			}
		}, function (err) 
		{
			ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again. Out"});
		});     

	});

	$("#close-email,.cls-pop.reset-pop-close").click(function(){   
        
		$("#registeredId").val(""); 
		$("#otpuser").val("");      
		$("#register-id").addClass("hide");
		$("#email-link").addClass("hide");
		$("#otp-pop").addClass("hide");
		$("#resetSuccess").addClass("hide");     
		$("#resetPassErr").addClass("hide");     
		$("#email-link").addClass("hide");    
		 
	});
  
	$(".close").click(function(){   
		 
		location.reload();
	 
	});

	$("#forgotpass").click(function()
	{
		$("#register-id").removeClass("hide");      
	});

	$("#verify").click(function()
	{
		var formData = new FormData();
	//	var otherData = $('#verify-form').serializeArray();
		var uname = $("#registeredId").val();
       
		if(uname == "")
		{
			$("#wngcredentials").show();
			$("#wngcredentials").text("Please enter Email id or Mobile Number");
			return;
		}  
		var filter = /^[0-9]+$/;
		if (filter.test(uname)) 
		{ 
			formData.append("type","mobile");
		}
		else
		{
			formData.append("type","email");
		}
		var username= $("#registeredId").val().toLowerCase();
		var checkfield = fieldcheck(username);
	   
		if (checkfield) {
			formData.append("username",username);
			
			var opt = 
            {
                user_id: CURRENT_USER.userID || Api.generateGuid(),
            	shard_field: "noShard",
            	service_id: CONFIG.api.services["user-forgotPassword"].id,
            	service_url: CONFIG.api.services["user-forgotPassword"].url,
            	data: formData
            };
			Api.post(opt, function(res)
			{
				
				if(res.status == "success")
				{                
					 
					$("#register-id").addClass("hide");
					$("#email-link").removeClass("hide");
					//    ymap.toast({type:'success', message:res.message});
					//location.href = CONFIG.baseUrl+res.payload["redirect"];
				} else if(res.status == "success1"){
					 
					$("#register-id").addClass("hide");
					$("#otp-pop").removeClass("hide");
					$("#otpuser").val();              
					$("#otpsess").val(res.payload["otp"]);              
				}
				else
				{
					//    ymap.toast({type:'error', message:res.message});
					$("#wngcredentials1").show();
					$("#wngcredentials1").text(res.message); 
				}

				$("body").ymElementLoader("destroy");

			}, function (err) 
			{
				$("body").ymElementLoader("destroy");
				ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again."});
			}); 
		}
	});

	$("#otpverify").click(function()
	{
		var otpuser = $("#otpuser").val();
		var otpsess = $("#otpsess").val();
		if(otpuser != ""){
			formData.append("otpuser",otpuser);
		}else{            
			$("#wrongOtp").show();
			$("#wrongOtp").text("Please enter OTP Number");
			return;            
		}
    
		formData.append("sessionOtp",otpsess);
		var opt = 
        {
        //    user_id: CURRENT_USER.userId || Api.generateGuid(),
        	shard_field: "noShard",
        	service_id: CONFIG.api.services["user-otpVerify"].id,
        	service_url: CONFIG.api.services["user-otpVerify"].url,
        	data: formData
        };
        
		Api.post(opt, function(res)
		{
			if(res.status == "success")
			{
				$("#otp-pop").addClass("hide");
				 
				location.href = CONFIG.baseUrl+res.payload["redirect"];
			 
			} 
			else
			{             
				$("#wrongOtp").show();
				$("#wrongOtp").text(res.message); 
			}

			$("body").ymElementLoader("destroy");

		}, function (err) 
		{
			$("body").ymElementLoader("destroy");
			ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again."});
		}); 
	});
    
	$("#resetOk").click(function()
	{
		$("#newPass").val();
		$("#confPass").val();
		$("#resetSuccess").addClass("hide");	
		location.href = CONFIG.baseUrl+"home";
         
	});     

	$("#resetErrbtn").click(function()
	{
		$("#newPass").val();
		$("#confPass").val();
		$("#resetSuccess").addClass("hide");	
		location.href = CONFIG.baseUrl+"home";
	});     	

	$("#continue-without-login").click(function() 
	{		
		if($scope.redirection_url)
		{
			if($scope.redirection_url == CONFIG.baseUrl+"profile")
			{			
				$("#Messeage-box").modal('show');
				return false;			
			}else{
				location.href = $scope.redirection_url;
			}
		} 
		else
		{
			location.href = CONFIG.baseUrl+"gallery";
		}

	});
	
	$("#tandcagree").click(function() 
	{  	
		location.href = CONFIG.baseUrl+"profile";
		$("#Messeage-box").modal('hide');
	});
	
	//covid-19 changes
	$(".go-to-chk-eligibility,.covid-chk-eligibility").click(function(e) 
	{  
		e.preventDefault();
		var redirection_url = $(this).data("href");

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

	$("#my-account-mobile").click(function(e) 
	{  
		e.preventDefault();
		
		if(CURRENT_USER.userType == "auth")
		{
			location.href = CONFIG.baseUrl+"my-account";
		}
		else
		{
			$scope.redirection_url = CONFIG.baseUrl+"my-account";
			$("#LogIn").modal("show");
		}          
	});

	$("#mobile-share > li").click(function(e) 
	{  
		if($(this).data("name") == "facebook"){
			window.open("https://www.facebook.com/sharer/sharer.php?u="+CONFIG.baseUrl+"scheme-details?id="+$scope.share_link_id);		 
		}
		else if($(this).data("name") == "WhatsApp"){
			window.open("whatsapp://send?text="+CONFIG.baseUrl+"scheme-details?id="+$scope.share_link_id);		 
		}
		else if($(this).data("name") == "linkedin"){
			window.open("https://www.linkedin.com/shareArticle?mini=true&url="+CONFIG.baseUrl+"scheme-details?id="+$scope.share_link_id+"&title="+$scope.schemeName+"&summary="+$scope.schemeMinidesc);		 
		}
		else if($(this).data("name") == "twitter"){
			window.open("https://twitter.com/home?status="+$scope.schemeName+"%20"+CONFIG.baseUrl+"scheme-details?id="+$scope.share_link_id);		 
		}else{
			location.href = CONFIG.baseUrl+"gallery";
		}
		
	});
	
	function fieldcheck(value) 
	{
		var filter = /^[0-9]+$/;
		if (filter.test(value)) 
		{
			if(Validate.mobile(value))
			{
				$("#regerror").hide();
				$("#wngcredentials").hide();
				formData.append("type","mobile");
				return true;
			}
			else
			{
				$("#regerror").show();
				$("#wngcredentials").show();
				$("#regerror").text("Enter valid mobile number");
				$("#wngcredentials").text("Enter valid mobile number");
				$("#wngcredentials1").show();
				$("#wngcredentials1").text("Enter valid mobile number");
				return false;
			}
		}
		 
		if(Validate.email(value))
		{
			$("#regerror").hide();
			$("#wngcredentials").hide();
			formData.append("type","email");
			return true;
		}
		else
		{
			$("#regerror").show();
			$("#wngcredentials").show();
			$("#regerror").text("Enter valid email address");
			$("#wngcredentials").text("Enter valid email address");
			$("#wngcredentials1").show();
			$("#wngcredentials1").text("Enter valid email address");
			return false;
		}
		 
	}

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	
	if( isMobile.Android() && isMobile.any()){
			
		$(".pops").delegate(".forgot-input", "focus", function(){
			$("body").addClass("rest_pass_fixed_div");				 
		});
		
		$(".pops").delegate(".forgot-input", "blur", function(){
			$("body").removeClass("rest_pass_fixed_div");				
		});
	}

	$("#book-wos").click(function() {		 
		var schemedtls = $('#schemes').val();
		if(schemedtls != ''){
			location.href = CONFIG.baseUrl+"book-haqdarshak?id="+schemedtls;
		}else{
			location.href = CONFIG.baseUrl+"gallery";
		}
	});	

	$("#frgt-resend-otp").click(function(){

		var formData = new FormData(); 
		var mobile = $('#registeredId').val();
		
		var filter = /^[0-9]+$/;
		if (filter.test(mobile)) 
		{
			if(! Validate.mobile(mobile))
			{
				$("#wrongOtp").show();
				$("#wrongOtp").text("Enter valid mobile number");
				$("#otp-pop").addClass("hide");
				$("#register-id").removeClass("hide");
			} 
		}

		formData.append("type","mobile"); 
		formData.append("mobile",mobile);	

		options = {
			
			service_id: CONFIG.api.services["forget-resend-otp"].id,
			service_url: CONFIG.api.services["forget-resend-otp"].url,
			data: formData
		};
		Api.post(options, function (res) 
		{            
			if (res.status == "success") 
			{	
				ymap.toast({
					type: "success",
					message: res.message
                });
                
			} 
			else if(res.status == "failure") {
				ymap.toast({
					type: "error",
					message: res.message
				});
			} else {
				var msg = Object.values(res.payload["errors"])[0] || "Server error. ";
				ymap.toast({
					type: "error",
					message: msg
				});
			}
		}, function (err) 
		{
			ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again. Out"});
		});     

	});	
	
	$("#pass-toggle").click(function(){
	 
		var res =	$(this).is(':checked')?'yes':'no';
	 
		if(res == 'yes')
		{ 
			$('#password').attr('type','password');  
		} else { 
			$('#password').attr('type','text');
		}
	});

	$(window).load(function(){         
		if(CURRENT_USER.stateSession){
			$('#stateModel').modal('hide');
			$('#current-state').removeClass('hide');
			$('#current-state').text(state_list[CURRENT_USER.stateSession]);
			$('#select-loc').addClass('hide'); 
			$('#loc-ic').removeClass('hide');
			 
		}else{
			$('#stateModel').modal('show');
			$('#current-state').addClass('hide');
			$('#select-loc').removeClass('hide');
			$('#loc-ic').addClass('hide');
			$('#modal-close').addClass('hide');
		}
			 
	}); 

	$("#select-state").click(function(){
		$('#stateModel').modal('show');
	});

	$("#scheme-state").change(function(e,ste_data){
		
	    if(ste_data != undefined) var state = ste_data.state_id1;
		else var state = $("#scheme-state").val();

		var formData = new FormData(); 
		   
		formData.append("state",state);	

		options = {
			
			service_id: CONFIG.api.services["state-session"].id,
			service_url: CONFIG.api.services["state-session"].url,
			data: formData
		};
		Api.post(options, function (res)
		{            
			if (res.status == "success") 
			{	 
				if(CURRENT_PAGE == 'gallery' || CURRENT_PAGE == 'book-haqdarshak-WOS' || CURRENT_PAGE == 'scheme-details' || CURRENT_PAGE == 'video-gallery' || CURRENT_PAGE == 'all-videos' || CURRENT_PAGE == 'covid' || CURRENT_PAGE == 'gov-res' || CURRENT_PAGE == 'faq'){
					if(CURRENT_PAGE == 'scheme-details') {
						CURRENT_PAGE = 'gallery';					
						location.href = CONFIG.baseUrl+CURRENT_PAGE;
					}
					location.reload();
				} 
				
				if(res.payload["session"]){
					$('#stateModel').modal('hide');
					$('#current-state').removeClass('hide');
					$('#current-state').text(state_list[res.payload["session"]]);
					$('#select-loc').addClass('hide'); 
					$('#loc-ic').removeClass('hide');
					
				}else{
					$('#stateModel').modal('show');
					$('#current-state').addClass('hide');
					$('#select-loc').removeClass('hide');
					$('#loc-ic').addClass('hide');
				}
			  
			}
			else if(res.status == "failure") {
				ymap.toast({
					type: "error",
					message: res.message
				});
			} else {
				var msg = Object.values(res.payload["errors"])[0] || "Server error. ";
				ymap.toast({
					type: "error",
					message: msg
				});
			}
		}, function (err) 
		{
			ymap.toast({type:"error", message:"Oops! Something went wrong. Please try again. Out"});
		});      
	});
  
});