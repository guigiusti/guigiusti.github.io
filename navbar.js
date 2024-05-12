const httpsHost = "https://" + window.location.hostname;
$.get(httpsHost+"/nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$.get(httpsHost+"/footer.html", function(data){
    $("#footerDiv").replaceWith(data);
});