package com.soldesk.mp;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.soldesk.mp.login.LoginDAO;


@Controller
public class HomeController {
	
	@Autowired
	private LoginDAO LDAO;
	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.autoLogin(req, res);
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "content/main.jsp");
		return "index";

	}
	
	@RequestMapping(value = "go.main", method = RequestMethod.GET)
	public String goMain(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.autoLogin(req, res);
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "content/main.jsp");
		return "index";
		
	}
	
}
