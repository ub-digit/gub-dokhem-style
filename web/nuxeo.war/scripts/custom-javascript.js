// this script is designed to be overloaded by third-party projects
// it is included by includes.xhtml


jQuery(function() {
	var path = window.location.pathname;
	if   (path.indexOf('/nxhome') !== -1 || path.indexOf("view_home.faces") !== -1 || path.indexOf("nxpath") !== -1)  {
		window.location = "https://doku.ub.gu.se/nuxeo/nxsearch/default@search";
	} 

	var urlFragmentsToHide = ["nxhome", "nxpath" , 'nxcollab'];

	jQuery.each(urlFragmentsToHide, function( index, value ) {
	  jQuery('a[href*="'+ value +'"]').parent().addClass("hidden");
	});
});