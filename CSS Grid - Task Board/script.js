$(document).ready(function(){
  $(".add-card").on("click", function(){
	  var description = $(".new-card-task").val();
		var today = new Date();
		var dateStr = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
		var newCard = $(`<div class="card"><div class="rectangle yellow"></div><div class="rectangle green"></div><div class="rectangle blue"></div><div class="rectangle orange"></div><p class="task-description">${description}</p><img class="list-icon" src="https://s3.amazonaws.com/codecademy-content/courses/learn-css-grid/project-ii/Resources/list_icon.svg"><p class="task-date">${dateStr}</p></div>`);
			$(".add-card-container").before(newCard);
	});
});
