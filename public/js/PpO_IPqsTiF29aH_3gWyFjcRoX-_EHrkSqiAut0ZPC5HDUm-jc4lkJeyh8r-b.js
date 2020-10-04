/*! yMap v0.0.7 | (c) YantraMind Technology Solutions LLP */
hdApp.service("Validate", function () 
{
	function _validate() {}
	
	var EMAIL_REGEXP = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	var MOB_REGEXP = /^[6789]\d{9}$/;
	var PIN_CODE_REGEXP = /^([1-9])([0-9]){5}$/;
	var PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	var PASSWORD_REGEXPORGP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

	_validate.prototype.email = function (email) 
	{
		if (EMAIL_REGEXP.test(email)) {
			return true;
		} else {
			return false;
		}
	};

	_validate.prototype.mobile = function (mob) 
	{
		if (MOB_REGEXP.test(mob)) 
		{
			return true;
		} 
		else
		{
			return false;
		}
	};

	_validate.prototype.pinCode = function (pin) 
	{
		if (PIN_CODE_REGEXP.test(pin)) 
		{
			return true;
		} 
		else 
		{
			return false;
		}
	};

	_validate.prototype.passwordAnalyze = function(pword) 
	{
		if (PASSWORD_REGEXP.test(pword)) 
		{
			return true;
		} 
		else 
		{
			return false;
		}
	};

	_validate.prototype.passwordAnalyzeOrgP = function(pword) 
	{
		if (PASSWORD_REGEXPORGP.test(pword)) 
		{
			return true;
		} 
		else 
		{
			return false;
		}
	};

	_validate.prototype.passwordVerify = function (pword1, pword2) 
	{
		if (pword1 === pword2) 
		{
			return true;
		} 
		else 
		{
			return false;
		}
	};

	return (new _validate());
});