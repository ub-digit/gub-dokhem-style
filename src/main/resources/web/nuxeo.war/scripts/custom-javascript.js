// this script is designed to be overloaded by third-party projects
// it is included by includes.xhtml

//window.location = "https://doku.ub.gu.se/nuxeo/nxsearch/default@search";

jQuery(function() {
	var path = window.location.pathname;

	if   (path.indexOf('/nxhome') !== -1 || path.indexOf("view_home.faces") !== -1)  {
		window.location = "https://doku.ub.gu.se/nuxeo/nxsearch/default@search";
	} 
	else {
		setTimeout(function(){
			jQuery("body").css("opacity", "1");
		 }, 100);
	}


	var urlFragmentsToHide = ["nxhome", "nxpath" , 'nxcollab'];

	jQuery.each(urlFragmentsToHide, function( index, value ) {
	  jQuery('.nxHeader a[href*="'+ value +'"]').parent().addClass("hidden");
	});

	jQuery(".siteLogo").click(function() {
		window.location = "/nuxeo";
	})
});