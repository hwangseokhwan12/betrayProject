package com.soldesk.mp.login;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class members {

	List<member> members;
	
	public members() {
		// TODO Auto-generated constructor stub
	}
	
	public members(List<member> members) {
		super();
		this.members = members;
	}

	@XmlElement
	public List<member> getMembers() {
		return members;
	}

	public void setMembers(List<member> members) {
		this.members = members;
	}

	
}
