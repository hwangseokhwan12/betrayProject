function goJoinIdMenu() {

	$("#joinId").click(function() {
		location.href = "go.joinIdMenu";
	});

	$("#joinId2").click(function() {
		location.href = "go.joinIdMenu";
	});

}

function idCheck() {

	$("#idJoin").focusout(function() {

				var id = $("#idJoin").val();
				var idField = document.myForm.id;
				var txt = null;
				
				
				$.ajax({

					url : "id.check",
					data : {
						id : id
					},
					success : function(xml) {

						$(xml).find("members").each(function(i,m) {
							
							var loginId = $(m).find("id").text();
							$("#idCheck").empty();
							
							if (id == "") {
								
								txt = $("<span></span>").attr("class", "check").text("필수입니다.");
								$("#idCheck").append(txt);
								
							}else if (id == loginId) {
								
								txt = $("<span></span>").attr("class", "check").text("중복된 아이디가 있습니다.");
								$("#idCheck").append(txt);
																
							}else if (id != null) {
								
								if (containsHangul(idField) || lessThan(idField, 5)) {
																		
									txt = $("<span></span>").attr("class", "check").text("5~15자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.");
									$("#idCheck").append(txt);
									
								}else if (notContains(idField,"abcdefghijklmnopqrstuvwxyz") && notContains(idField,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
									
									txt = $("<span></span>").attr("class", "check").text("영문 소문자 혹은 대문자가 들어가야합니다.");
									$("#idCheck").append(txt);
										
								}
							}
						});
					}
				});
			});
}

function pwCheck() {
		
	$("#pwJoin").focusout(function() {
		
		var pw = $("#pwJoin").val();
		var pwField = document.myForm.pw;
		var txt = null;
		
		
		
		$("#pwCheck").empty();
		
		if (pw == "") {
			
			txt = $("<span></span>").attr("class", "check").text("필수입니다.");
			$("#pwCheck").append(txt);
			
		}else if (pw != null) {
			
			if (containsHangul(pwField) || lessThan(pwField, 5)) {
				
				txt = $("<span></span>").attr("class", "check").text("5~15자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.");
				$("#pwCheck").append(txt);
				
				
				
			}else if (notContains(pwField,"abcdefghijklmnopqrstuvwxyz") && notContains(pwField,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
				
				txt = $("<span></span>").attr("class", "check").text("영문 소문자 혹은 대문자가 들어가야합니다.");
				$("#pwCheck").append(txt);
				
			}else {
				
				$("#pw2Join").removeAttr("readonly");
				
			}
		}
	
	});
	
	
	$("#pw2Join").focusout(function() {
		
		var pw2 = $("#pw2Join").val();
		var pwField = document.myForm.pw;
		var pw2Field = document.myForm.pw2;
		var txt = null;
		
		
		$("#pw2Check").empty();
		
		if (pw2 == "") {
			
			txt = $("<span></span>").attr("class", "check").text("비밀번호를 입력하세요");
			$("#pw2Check").append(txt);
			
		}else if (pw2 != null) {
			
			if (notEquals(pwField,pw2Field) || lessThan(pw2Field, 5) || notContains(pw2Field,"abcdefghijklmnopqrstuvwxyz") && notContains(pw2Field,"ABCDEFGHIJKLMNOPQRSTUVWXYZ") || containsHangul(pw2Field)) {
				
				
				txt = $("<span></span>").attr("class", "check").text("비밀번호가 일치하지 않습니다.");
				$("#pw2Check").append(txt);
								
			}
			
		}
		
	});
	
}

function nameCheck() {
	
	$("#nameJoin").focusout(function() {
	
		var name = $("#nameJoin").val();
		var txt = null;
		
		$("#nameCheck").empty();
		
		if (name == "") {
		
			txt = $("<span></span>").attr("class", "check").text("필수입니다.");
			$("#nameCheck").append(txt);
			
		}		
	});
}

function innateCheck() {
	
	$("#numJoin,#numJoin2").focusout(function() {
		
		var innate = $("#numJoin").val();
		var innate2 = $("#numJoin2").val();
		var innateField = document.myForm.innate;
		var innate2Field = document.myForm.innate2;
		
		
		$("#innateCheck").empty();
		
		if (innate == "" && innate2 == "") {
		
			txt = $("<span></span>").attr("class", "check").text("필수입니다.");
			$("#innateCheck").append(txt);
			
		}else if (isNotNumber(innateField) || isNotNumber(innate2Field)) {
			
			txt = $("<span></span>").attr("class", "check").text("숫자만 입력 가능합니다.");
			$("#innateCheck").append(txt);			
			
		}else if (lessThan(innateField, 6)) {
			
			txt = $("<span></span>").attr("class", "check").text("주민번호 앞자리를 다시 확인하세요.");
			$("#innateCheck").append(txt);			
					
		}else if (lessThan(innate2Field, 7)) {
			
			txt = $("<span></span>").attr("class", "check").text("주민번호 뒷자리를 다시 확인하세요.");
			$("#innateCheck").append(txt);			
			
		}
	});
	
}

function validCheck() {

	idCheck();
	pwCheck();
	nameCheck();
	innateCheck();
	
}

function loginBtnCheck() {
	
	
	
}
