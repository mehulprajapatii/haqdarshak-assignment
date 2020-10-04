var Configurations = (function() 
{ 
	function _config() 
	{
		this.baseUrl = BASE_URL;

		this.api = 
        {
        	url: "https://haqdarshak.com/",
        	services:
            {
            	'save-contact': {id:1001, url:'contact/save'},
                'user-login': {id:1002, url:'login'},
                'user-registration': {id:1003, url:'register'},
                'get-scheme-list': {id:1004, url:'scheme/list'},
                'get-scheme-details': {id:1005, url:'scheme/get'},
                'get-state-list': {id:1006, url:''},
                'get-city-list': {id:1007, url:'data/getCities'},
                'get_person': {id:1008, url:'user/getPerson'},
                'save-user': {id:1009, url:'user/save'},
                'logout': {id:1010, url:'logout'},
                'user-forgotPassword': {id:1011, url:'forgotPassword'},
                'sub-caste': {id:1012, url:'forgotPassword'},
                'save-profile': {id:1013, url:'user/profile'},
                'get-profile': {id:1014, url:'user/getProfiles'},
                'get-eligible-scheme-list': {id:1015, url:'getEligibleSchemes'}, 
                "save-questionnaire": {id:1016,url:"user/saveQuestionnaire"},
                'mark-profile': {id:1017, url:'user/markProfile'},
                'user-otpVerify': {id:1018, url:'otpVerify'},
                'user-updatePassword': {id:1019, url:'updatePassword'},
                'user-fileUpload': {id:1020, url:'fileUpload'},
                'bookHaqdarshak': {id:1021, url:'bookHaqdarshak'},
                'verify-registration': {id:1022, url:'verifyRegistration'},
                'verify-booking': {id:1023, url:'verifyBooking'},
                'get-booking-details': {id:1024, url:'getBookingdetails'},
                'get-booking-summary': {id:1025, url:'getBookingsummary'},
                'get-booking-list': {id:1026, url:'getBookinglist'},
                'mb-resend-otp': {id:1027, url:'mbresendotp'},
                'reg-resend-otp': {id:1028, url:'reg-resend-otp'},
                'forget-resend-otp': {id:1029, url:'forget-resend-otp'},
                'state-session': {id:1030, url:'scheme/state-session'},
				"org-registration": {id:1031, url:"orgRegister"},
				"save_org_payment": {id:1032, url:"saveOrgPayment"},
				"get-video-list": {id:1033, url:"scheme/videolist"},
				"login-otp-verify": {id:1034, url:"loginOTP"},
				"resend-login-otp": {id:1035, url:"resend-login-otp"},
				"new-get-video-list": {id:1036, url:"scheme/newvideolist"},
				"get-all-videos": {id:1037, url:"scheme/allvideos"}
				
            }
        };

		this.video = 
        {
        	url: "https://haqdarshak.com/assets/schemes/"
        };
		this.video1 = 
        {
        	url: "https://haqdarshak.com/assets/schemes1/"
        };
	}

	return _config;
})();

var CONFIG = new Configurations();