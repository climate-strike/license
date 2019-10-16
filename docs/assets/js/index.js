console.log("Lets save this planet.")

$(document).ready(function() {
  var license_url = "https://raw.githubusercontent.com/climate-strike/license/master/LICENSE"
  if ( window.location.pathname == '/' ){
    $.ajax({
      url: license_url,
      success: function(data) { 
        $("code").html(data.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      } 
    });
  }
});
