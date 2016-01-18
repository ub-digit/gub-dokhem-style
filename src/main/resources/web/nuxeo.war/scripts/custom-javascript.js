// this script is designed to be overloaded by third-party projects
// it is included by includes.xhtml

//window.location = "https://doku.ub.gu.se/nuxeo/nxsearch/default@search";

jQuery(function() {
  var path = window.location.pathname;

  //if   (path.indexOf('/nxhome') !== -1 || path.indexOf("view_home.faces") !== -1)  {
  if (path.indexOf('/nuxeo/nxpath/default/Filsystem/workspaces@view_documents') !== -1 ||
      path.indexOf('/nuxeo/nxpath/default/Filsystem@view_documents') !== -1 ||
      path.indexOf('/nuxeo/nxpath/default@view_documents') !== -1 ||
      path.indexOf('@view_servers') !== -1 ||
      path.indexOf('@view_domains') !== -1 ||
      path.indexOf('/default-domain@view_documents') !== -1 ||
      path.indexOf('/default-domain/workspaces@view_documents') !== -1 ||
      path.indexOf('/nuxeo/view_domains.faces') !== -1) {
    window.location = "/nuxeo/nxpath/default/Filsystem/workspaces/P@view_documents";
    // window.location = "https://doku.ub.gu.se/nuxeo/nxsearch/default@search";
    // /nuxeo/nxpath/default/default-domain@view_documents?tabIds=%3A&conversationId=0NXMAIN21
    // /nuxeo/nxpath/default/default-domain/UserWorkspaces/xanjoo@view_documents?mainTabId=MAIN_TABS%3Adocuments&conversationId=0NXMAIN21&tabIds=MAIN_TABS%3Adocuments%2CTREE_EXPLORER%3Anavtree_CONTENT_TREE%2CNUXEO_ADMIN%3ASystemInfo%3AHostInfo
  } else {
    setTimeout(function() {
      jQuery("body").css("opacity", "1");
    }, 100);
  }

  //var urlFragmentsToHide = ["nxhome", "nxpath" , 'nxcollab'];
  var urlFragmentsToHide = ['nxcollab'];

  jQuery.each(urlFragmentsToHide, function(index, value) {
    jQuery('.nxHeader a[href*="'+ value +'"]').parent().addClass("hidden");
  });

  jQuery(".siteLogo").click(function() {
    //window.location = "/nuxeo/";
    window.location = "/nuxeo/nxpath/default/Filsystem/workspaces/P@view_documents";
  });
});
