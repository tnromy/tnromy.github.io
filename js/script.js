$(document).ready(function(){
	function putData(src, dest){
		$(dest).html(src);
	}

	function putAttrVal(attrName, src, dest){
		$(dest).attr(attrName, src);
	}

	function progresBar(barName, valNow){
		var barHtml = '<div><label>'+barName+'</label></div><div class="progress mb-4"><div class="progress-bar" role="progressbar" style="width: '+valNow+'%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">'+valNow+'%</div></div>';

		return barHtml;
	}

	function eachBar(id, data){
		$.each(data, function(index, value){
			$(id).append(progresBar(value.name, value.value));
		});
	}

	$.getJSON('data.txt',
	function (data, textStatus, jqXHR){
		
		putData(data.fullName, '.cv-full-name');

		putData(data.born, '.cv-born');

		putAttrVal('src', data.ava, '#cv-ava');

		putAttrVal('href', data.linkYoutube, '#cv-social-youtube');

		putAttrVal('href', data.linkGithub, '#cv-social-github');

		putAttrVal('href', data.linkInstagram, '#cv-social-instagram');

		putAttrVal('href', data.linkLinkedin, '#cv-social-linkedin');

		putAttrVal('value', data.email, '#email');

		// skills & tools

		eachBar('#cv-electro-skills', data.electroSkills);

		eachBar('#cv-electro-tools', data.electroTools);

		eachBar('#cv-server-skills', data.serverSkills);

		eachBar('#cv-server-tools', data.serverTools);

		eachBar('#cv-programing-skills', data.programingLang);

		eachBar('#cv-programing-tools', data.programingFramework);


	});

});