function goMyDataPage() {

	location.href="go.myDataPage";
	
}

function ChangePw() {
	
	var check = 1;

	$("#pwChange span").click(function() {
	
		if (check == 1) {
		
		$("#memberDelete").css("display","none");
		$("#myDataPage").css("margin-left","120px");
		$("#changePw").fadeToggle();
		check = 0;
	
		}else {
			
			$("#memberDelete").css("display","table-cell");
			$("#myDataPage").css("margin-left","290px");
			$("#changePw").hide();
			check = 1;
		}
		
	});

	
	
}
