package com.soldesk.mp.mypage;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.soldesk.mp.login.LoginDAO;
import com.soldesk.mp.login.member;
import com.soldesk.mp.login.members;

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
	
	@RequestMapping(value = "go.myDataPage", method = RequestMethod.GET)
	public String goMyDataPage(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "myPage/myDataPage.jsp");
		return "index"; 
		
	}
	
	@RequestMapping(value = "check.pw", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody members checkPw(HttpServletRequest req, HttpServletResponse res, member m) {
		
		return LDAO.checkPw(req, res, m);
		
	}
	
	@RequestMapping(value = "change.pw", method = RequestMethod.GET)
	public String changePw(HttpServletRequest req, HttpServletResponse res, member m) {
		
		LDAO.loginCheck(req, res);
		LDAO.changePw(req, res, m);
		req.setAttribute("content", "myPage/resultPage.jsp");
		return "index"; 
		
	}
	
	
	
	
}
