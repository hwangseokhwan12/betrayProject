function check(){
	
	var idField = document.myForm.id;
	var pwField = document.myForm.pw;
	var pwChkField = document.myForm.pwChk;
	var ageField = document.myForm.age;
	var imgField = document.myForm.img;
	
	if (isEmpty(idField) || lessThan(idField, 4) || containsHangul(idField)) {		
		//isEmpty함수는 validCheck에 있음
		
		alert("ID 똑바로 써");
		idField.value = "";
		idField.focus();
		return false;
													
	}else if (isEmpty(pwField) || lessThan(pwField, 4) ||
			notEquals(pwField,pwChkField) ||
			notContains(pwField,"1234567890") ||
			notContains(pwField,"abcdefghijklmnopqrstuvwxyz") ||
			notContains(pwField,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
			) {
			
		alert("pw 똑바로 써");
		pwField.value = "";
		pwChkField.value = "";
		pwField.focus();
		
		return false;
	
	}else if (isEmpty(ageField) || isNotNumber(ageField)) {
		
		alert("나이 똑바로 써");
		ageField.value = "";
		ageField.focus();
		
		return false;
	}else if (isEmpty(imgField) || (isNotType(imgField,".png") &&
			isNotType(imgField,".gif") && isNotType(imgField,".jpg"))) {
		
		alert("사진 똑바로 첨부해");
		imgField.value = "";
		imgField.focus();
		
		return false;		
		
	}
	
	
	return true;
	
}

	



