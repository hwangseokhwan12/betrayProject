package com.soldesk.mp.login;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class members {

	List<member> member;

	public members() {
		// TODO Auto-generated constructor stub
	}
	
	public List<member> getMember() {
		return member;
	}

	public void setMember(List<member> member) {
		this.member = member;
	}

	public members(List<com.soldesk.mp.login.member> member) {
		super();
		this.member = member;
	}

	

}
