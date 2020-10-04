(function($)
{
	$.fn.ymloader = function(config)
	{
		var $element = $(this);

		$element.children(".page-loader").remove();

		if(config == "destroy")
		{
			return false;
		}

		$element.append("<div class=\"page-loader\"> <div class=\"loader\"></div> </div>");
	};
	
})(jQuery);
