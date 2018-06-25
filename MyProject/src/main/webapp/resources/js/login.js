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
								
								txt = $("<span></span>").attr("class", "check").text("�ʼ��Դϴ�.");
								$("#idCheck").append(txt);
								
							}else if (id == loginId) {
								
								txt = $("<span></span>").attr("class", "check").text("�ߺ��� ���̵� �ֽ��ϴ�.");
								$("#idCheck").append(txt);
																
							}else if (id != null) {
								
								if (containsHangul(idField) || lessThan(idField, 5)) {
																		
									txt = $("<span></span>").attr("class", "check").text("5~15���� ���� �ҹ���, �빮��, ���ڸ� ��� �����մϴ�.");
									$("#idCheck").append(txt);
									
								}else if (notContains(idField,"abcdefghijklmnopqrstuvwxyz") && notContains(idField,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
									
									txt = $("<span></span>").attr("class", "check").text("���� �ҹ��� Ȥ�� �빮�ڰ� �����մϴ�.");
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
			
			txt = $("<span></span>").attr("class", "check").text("�ʼ��Դϴ�.");
			$("#pwCheck").append(txt);
			
		}else if (pw != null) {
			
			if (containsHangul(pwField) || lessThan(pwField, 5)) {
				
				txt = $("<span></span>").attr("class", "check").text("5~15���� ���� �ҹ���, �빮��, ���ڸ� ��� �����մϴ�.");
				$("#pwCheck").append(txt);
				
				
				
			}else if (notContains(pwField,"abcdefghijklmnopqrstuvwxyz") && notContains(pwField,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
				
				txt = $("<span></span>").attr("class", "check").text("���� �ҹ��� Ȥ�� �빮�ڰ� �����մϴ�.");
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
			
			txt = $("<span></span>").attr("class", "check").text("��й�ȣ�� �Է��ϼ���");
			$("#pw2Check").append(txt);
			
		}else if (pw2 != null) {
			
			if (notEquals(pwField,pw2Field) || lessThan(pw2Field, 5) || notContains(pw2Field,"abcdefghijklmnopqrstuvwxyz") && notContains(pw2Field,"ABCDEFGHIJKLMNOPQRSTUVWXYZ") || containsHangul(pw2Field)) {
				
				
				txt = $("<span></span>").attr("class", "check").text("��й�ȣ�� ��ġ���� �ʽ��ϴ�.");
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
		
			txt = $("<span></span>").attr("class", "check").text("�ʼ��Դϴ�.");
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
		
			txt = $("<span></span>").attr("class", "check").text("�ʼ��Դϴ�.");
			$("#innateCheck").append(txt);
			
		}else if (isNotNumber(innateField) || isNotNumber(innate2Field)) {
			
			txt = $("<span></span>").attr("class", "check").text("���ڸ� �Է� �����մϴ�.");
			$("#innateCheck").append(txt);			
			
		}else if (lessThan(innateField, 6)) {
			
			txt = $("<span></span>").attr("class", "check").text("�ֹι�ȣ ���ڸ��� �ٽ� Ȯ���ϼ���.");
			$("#innateCheck").append(txt);			
					
		}else if (lessThan(innate2Field, 7)) {
			
			txt = $("<span></span>").attr("class", "check").text("�ֹι�ȣ ���ڸ��� �ٽ� Ȯ���ϼ���.");
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
