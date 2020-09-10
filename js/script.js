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

	$.getJSON('videos.txt', 
	function (data, textStatus, jqXHR){
		$.each(data, function(index, value){
			$('#cv-videos').append(' <div class="row"> <div class="col-12 col-lg-5 "> <iframe width="100%" height="280" src="'+value.src+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> <div class="col-12 col-lg-7 px-5 "> <dl> <dt> <h3>'+value.title+'</h3> </dt> <dd> <p>'+value.desc+'</p> </dd> </dl> </div> </div> ');
		});
	});

});