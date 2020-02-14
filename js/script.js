$(document).ready(function(){
	function putData(src, dest){
		$(dest).html(src);
	}

	function putAttrVal(attrName, src, dest){
		$(dest).attr(attrName, src);
	}

	$.getJSON('data.txt',
	function (data, textStatus, jqXHR){
		
		putData(data.fullName, '#cv-full-name');

		putAttrVal('src', data.ava, '#cv-ava');

		putAttrVal('href', data.linkYoutube, '#cv-social-youtube');

		putAttrVal('href', data.linkGithub, '#cv-social-github');

		putAttrVal('href', data.linkInstagram, '#cv-social-instagram');

		putAttrVal('href', data.linkLinkedin, '#cv-social-linkedin');

		putAttrVal('value', data.email, '#email');


	});

});