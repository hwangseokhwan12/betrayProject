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
						
						$("#changePwCheck").append(input);
						
						check = 3;
						
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
