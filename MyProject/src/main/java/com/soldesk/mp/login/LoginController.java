package com.soldesk.mp.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
	
	@Autowired
	private LoginDAO LDAO;
	
	@RequestMapping(value = "go.joinIdMenu", method = RequestMethod.GET)
	public String goJoinIdMenu(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "login/joinIdMenu.jsp");
		return "index";
		
	}
	
	@RequestMapping(value = "go.login", method = RequestMethod.GET)
	public String goLogin(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "login/loginMenu.jsp");
		return "index";
		
	}
	
	@RequestMapping(value = "join.id", method = RequestMethod.GET)
	public String joinId(HttpServletRequest req, HttpServletResponse res, member m) {
		
		LDAO.joinMember(req, res, m);
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "content/main.jsp");
		
		return "index";
		
	}
	
	@RequestMapping(value = "id.check", method = RequestMethod.GET, produces = "application/xml; charset=utf-8")
	public @ResponseBody members idCheck(HttpServletRequest req, HttpServletResponse res, member m) {
		
		return LDAO.checkId(req, res, m);
		
	}

	@RequestMapping(value = "login.ok", method = RequestMethod.POST)
	public String loginOk(HttpServletRequest req, HttpServletResponse res, member m) {
		
		LDAO.loginOk(req, res, m);
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "content/main.jsp");
		
		return "index";
		
	}
	
	@RequestMapping(value = "logout.ok", method = RequestMethod.GET)
	public String logOut(HttpServletRequest req, HttpServletResponse res, member m) {
		
		LDAO.logout(req, res);
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "content/main.jsp");
		
		return "index";
		
	} 
	
	@RequestMapping(value = "find.login", method = RequestMethod.GET)
	public String findMember(HttpServletRequest req, HttpServletResponse res) {
		
		req.setAttribute("sideMenu", "sidemenu/sideMenu.jsp");
		req.setAttribute("content", "login/loginFind.jsp"); 
	
		return "index"; 
	}
	
	@RequestMapping(value = "go.findId", method = RequestMethod.GET)
	public String goFindId(HttpServletRequest req, HttpServletResponse res) {
		
		req.setAttribute("sideMenu", "none.jsp");
		req.setAttribute("content", "login/findId.jsp"); 
		
		return "index"; 
	}
	
	@RequestMapping(value = "go.findPw", method = RequestMethod.GET)
	public String goFindPw(HttpServletRequest req, HttpServletResponse res) {
		
		req.setAttribute("sideMenu", "none.jsp");
		req.setAttribute("content", "login/findPw.jsp"); 
		
		return "index"; 
	}
	
	@RequestMapping(value = "find.id", method = RequestMethod.GET)
	public String FindId(HttpServletRequest req, HttpServletResponse res, member m) {
		
		LDAO.findId(req, res, m);
		req.setAttribute("sideMenu", "sidemenu/sideMenu.jsp");
		req.setAttribute("content", "login/findResult.jsp"); 
		 
		return "index"; 
	}
	
	@RequestMapping(value = "find.pw", method = RequestMethod.GET)
	public String FindPw(HttpServletRequest req, HttpServletResponse res, member m) {
		
		LDAO.findPw(req, res, m);
		req.setAttribute("sideMenu", "sidemenu/sideMenu.jsp");
		req.setAttribute("content", "login/findResult.jsp"); 
		
		return "index"; 
	}
	
//	@RequestMapping(value = "find.id", method = RequestMethod.GET)
//	public String findId(HttpServletRequest req, HttpServletResponse res, member m) {
//		
//		LDAO.findId(req, res, m); 
//		LDAO.loginCheck(req, res);
//		req.setAttribute("content", "content/main.jsp"); 
//		
//		return "index";
//	}
	
}
