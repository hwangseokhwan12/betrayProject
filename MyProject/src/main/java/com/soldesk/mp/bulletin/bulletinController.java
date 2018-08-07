package com.soldesk.mp.bulletin;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.soldesk.mp.login.LoginDAO;

@Controller
public class bulletinController {

	@Autowired
	private LoginDAO LDAO;
	
	@RequestMapping(value = "go.writeBulletin", method = RequestMethod.GET)
	public String goWriteBulletin(HttpServletRequest req, HttpServletResponse res) {
		
		LDAO.loginCheck(req, res);
		req.setAttribute("content", "bulletin/writeBulletin.jsp");
		return "index";

	}
	
}
