$(document).ready(function(){
	$.getJSON('partials/data.txt',
	function (data, textStatus, jqXHR){
		$('#cv-full-name').html(data.fullName);
	});
});