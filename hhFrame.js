module.exports = function(targetID, userConfig){

	var hhConnect = require('hhConnect');
	var config = {
		server: userConfig.server || "https://hackhands.com/mini/"
	}

	var iframe = document.createElement('iframe');
	iframe.frameBorder=0;
	iframe.width="100%";
	iframe.height="100%";
	iframe.id="HH_EMBEDDED_IFRAME";
	iframe.setAttribute("src", config.server);
	document.getElementById(targetID).appendChild(iframe);

	var connection = hhConnect({
		target: iframe.contentWindow
	});

	return connection;
}