/*
 * <input>을 넣었을 때 
 * 
 * 그 input이 비어있으면 true
 * 그 input이 차있으면 false
 */

function isEmpty(field) {

	// if (!field.value) {

	// return true;

	// }

	// return false;

	return (!field.value) ? true : false;
	// 위의 if문을 사용하던지 return 삼항연산자를 사용하던지

}

// <input>, 글자 수를 넣었을 때
// 그 input에 쓴 내용이 그 글자수보다 낮으면 true
// 그 input에 쓴 내용이 그 글자수보다 높으면 false

function equal(field,count){
	
	return (field.value.length = count);
	
}

function lessThan(field, charCount) {

	return (field.value.length < charCount);
	// 받은 값의 길이(글자수)가 charCount 보다 작냐?

}

// <input>을 넣었을 때
// <input>에 한글이 있으면 true
// <input>에 한글이 없으면 false

function containsHangul(field) {

	var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i = 0; i < field.value.length; i++) {

		if (t.indexOf(field.value.toLowerCase()[i]) == -1) {

			return true;

		}
	}
	return false;
}

//	<input>, 문자열 세트 넣으면
//	그 <input>, 문자열에 있는 글자가 없으면 true
//	그 <input>, 문자열에 있는 글자가 있으면 false

function notContains(field,charSet){
	
//	var n = "1234567890"; 	대신 charSet 사용
	var oK = false;

	for (var i = 0; i < charSet.length; i++) {

		if (field.value.indexOf(charSet[i]) != -1) {
			
			return false;
			
		}
	}
	
	return true;
	
}

//	<input> 2개 넣어서 다르면 true
//	<input> 2개 넣어서 같으면 false

function notEquals(field1, field2){
	
	return (field1.value != field2.value);
	
	
}

//<input> 넣었을 때 숫자만 있으면 false
//<input> 넣었을 때 숫자가 아닌게 있으면 true

function isNotNumber(field){
	
	return isNaN(field.value);
	//	isNaN 숫자 아닌게 있으면 true
	
}

//	<input type ="file">, 파일 확장자를 넣었을 때
//	그 파일이 맞으면 true
//	그 파일이 맞으면 false
	
function isNotType(field,type){
	
//	field.value	//	업로드 하려는 파일명 xxx.PNG같이 나올 수 있기 때문에
	return (field.value.toLowerCase().indexOf(type) == -1);
	//	파일을 소문자로
	
}



