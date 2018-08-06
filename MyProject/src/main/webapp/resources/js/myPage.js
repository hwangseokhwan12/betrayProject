function goMyDataPage(){

	location.href="go.myDataPage";
	
}

function ChangePw() {
	
	var check = 1;

	$("#pwChange span").click(function() {
	
		if (check == 1) {
		
		$("#memberDelete").css("display","none");
		$("#myDataPage").css("margin-left","120px");
		$("#changePw").fadeToggle();
		
		$("#changeBtn").click(function() {
			
			var id = $("#idHidden").val();
			var opw = $("#oldPw").val();
			
			$.ajax({
				
				url : 'check.pw',
				data : {id : id},
				success : function(json) {
					
					var ar = json.member;
					
					if (opw == (ar[0].pw)) {
						
						$("#changePwCheck").empty();
						
						var input = $("<input>").attr("placeholder","변경할 비밀번호를 입력하세요").attr("name","pw").attr("id","newPw");
						var span = $("<span></span>").html("<p>");
						
						$("#changePwCheck").append(input);
						$("#changePwCheck").append(span);
						
						$("#changePwForm").attr("onsubmit","return true;");
						
						
						
					}else {
					
							$("#pwchk").css("display","inline");
						
					} 
				
				}
			
			});
			
		});
		
		check = 0;
		
		
		}else {
			
			$("#memberDelete").css("display","table-cell");
			$("#myDataPage").css("margin-left","290px");
			$("#changePw").hide();
			check = 1;
		}
		
	});
	
}

function deleteMember() {
	
	$("#memberDelete").click(function() {
		
		$("#pwChange").css("display","none");
		$("#myDataPage").css("margin-left","120px");
		$("#deleteMember").fadeToggle();
		
		$("#deleteBtn").click(function() {
			
			var id = $("#idHidden").val();
			var innate = $("#deleteInnate").val();
			
			$.ajax({
				
				url : "check.innate",
				data : {id : id},
				success : function(json) {
					
					var ar = json.member;
					var di = $("#deleteInnate").val();
					
					if (di == (ar[0].innate)) {
						
						$("#deleteMember form").attr("onsubmit","return true;");
						
					}else {
						
						$("#innateChk").css("display","inline");
						
					}
					
				}
				
			});
			
			
		});
		
	});
	
	
}


