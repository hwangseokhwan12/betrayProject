package com.soldesk.mp.login;

import java.math.BigDecimal;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class member {

	private String id;
	private String pw;
	private String name;
	private String address;
	private BigDecimal innate;
	private BigDecimal innate2;
	
	public member() {
		// TODO Auto-generated constructor stub
	}

	public member(String id, String pw, String name, String address, BigDecimal innate, BigDecimal innate2) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.address = address;
		this.innate = innate;
		this.innate2 = innate2;
	}

	@XmlElement
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	@XmlElement
	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}
	@XmlElement
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	@XmlElement
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	@XmlElement
	public BigDecimal getInnate() {
		return innate;
	}

	public void setInnate(BigDecimal innate) {
		this.innate = innate;
	}
	@XmlElement
	public BigDecimal getInnate2() {
		return innate2;
	}

	public void setInnate2(BigDecimal innate2) {
		this.innate2 = innate2;
	}
	
	
}
