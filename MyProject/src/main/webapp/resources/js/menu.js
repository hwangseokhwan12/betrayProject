function showSubMenu() {
	
	$("#mainMenu1").click(function() {
		$("#subMenuList").css("display","inline");
		$("#mainMenu").css("display","none");
	});
	
	$("#back").click(function() {
		$("#mainMenu").css("display","inline");
		$("#subMenuList").css("display","none");
	});
	

}
	
	


function showContent() {
	
	$("#subList1").click(function() {
		$("#content").css("display","inline");
	});
	
}

function goMain() {
	
	$.ajax({
	
		url : "go.main",
		success : function() {
	
			$("#mainRogo").click(function() {
				location.href="go.main"; 
			});
			
		}
		
	});
}


function goLogin() {
	
	$("#login").click(function() {

		location.href="go.login";
		
	});
	
}

