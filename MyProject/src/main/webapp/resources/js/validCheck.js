/*
 * <input>�� �־��� �� 
 * 
 * �� input�� ��������� true
 * �� input�� �������� false
 */

function isEmpty(field) {

	// if (!field.value) {

	// return true;

	// }

	// return false;

	return (!field.value) ? true : false;
	// ���� if���� ����ϴ��� return ���׿����ڸ� ����ϴ���

}

// <input>, ���� ���� �־��� ��
// �� input�� �� ������ �� ���ڼ����� ������ true
// �� input�� �� ������ �� ���ڼ����� ������ false

function equal(field,count){
	
	return (field.value.length = count);
	
}

function lessThan(field, charCount) {

	return (field.value.length < charCount);
	// ���� ���� ����(���ڼ�)�� charCount ���� �۳�?

}

// <input>�� �־��� ��
// <input>�� �ѱ��� ������ true
// <input>�� �ѱ��� ������ false

function containsHangul(field) {

	var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i = 0; i < field.value.length; i++) {

		if (t.indexOf(field.value.toLowerCase()[i]) == -1) {

			return true;

		}
	}
	return false;
}

//	<input>, ���ڿ� ��Ʈ ������
//	�� <input>, ���ڿ��� �ִ� ���ڰ� ������ true
//	�� <input>, ���ڿ��� �ִ� ���ڰ� ������ false

function notContains(field,charSet){
	
//	var n = "1234567890"; 	��� charSet ���
	var oK = false;

	for (var i = 0; i < charSet.length; i++) {

		if (field.value.indexOf(charSet[i]) != -1) {
			
			return false;
			
		}
	}
	
	return true;
	
}

//	<input> 2�� �־ �ٸ��� true
//	<input> 2�� �־ ������ false

function notEquals(field1, field2){
	
	return (field1.value != field2.value);
	
	
}

//<input> �־��� �� ���ڸ� ������ false
//<input> �־��� �� ���ڰ� �ƴѰ� ������ true

function isNotNumber(field){
	
	return isNaN(field.value);
	//	isNaN ���� �ƴѰ� ������ true
	
}

//	<input type ="file">, ���� Ȯ���ڸ� �־��� ��
//	�� ������ ������ true
//	�� ������ ������ false
	
function isNotType(field,type){
	
//	field.value	//	���ε� �Ϸ��� ���ϸ� xxx.PNG���� ���� �� �ֱ� ������
	return (field.value.toLowerCase().indexOf(type) == -1);
	//	������ �ҹ��ڷ�
	
}



