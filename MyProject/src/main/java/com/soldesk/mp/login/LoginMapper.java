package com.soldesk.mp.login;

import java.util.List;

public interface LoginMapper {

	public abstract int joinMember(member m);
			
	public abstract List<member> idCheck(member m);
	
	public abstract member loginOk(member m);
	
	public abstract member findId(member m);
	
	public abstract member findPw(member m);
		
	public abstract List<member> checkPw(member m);
	
	public abstract int changePw(member m);
	
}
