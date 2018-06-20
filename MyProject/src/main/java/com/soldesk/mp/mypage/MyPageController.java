package com.soldesk.mp.mypage;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.soldesk.mp.login.LoginDAO;

@Controller
public class MyPageController {

	@Autowired
	private LoginDAO LDAO;
	
	@RequestMapping(value = "go.myPage", method = RequestMethod.GET)
	public String goMyPage(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "myPage/myPage.jsp");
		return "index"; 
		
	}
	
	@RequestMapping(value = "go.change.myData", method = RequestMethod.GET)
	public String goChangeMyData(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "myPage/changeMyData.jsp");
		return "index"; 
		
	}
	
	
	
}
