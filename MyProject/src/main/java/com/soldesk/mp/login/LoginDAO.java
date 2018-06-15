package com.soldesk.mp.login;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginDAO {

	@Autowired
	private SqlSession ss;

	public void joinMember(HttpServletRequest req, HttpServletResponse res, member m) {

		try {

			if (ss.getMapper(LoginMapper.class).joinMember(m) == 1) {

				req.setAttribute("r", "��� ����");

			} else {

				req.setAttribute("r", "���  ����");

			}

		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "����");
		}
	}

	public members checkId(HttpServletRequest req, HttpServletResponse res, member m) {

		return new members(ss.getMapper(LoginMapper.class).idCheck(m));

	}

	public void loginOk(HttpServletRequest req, HttpServletResponse res, member m) {

		try {

			HttpSession hs = req.getSession();
			member dbM = ss.getMapper(LoginMapper.class).loginOk(m);

			if (dbM.getId() != null) {

				if (m.getPw().equals(dbM.getPw())) {

					hs.setAttribute("loginMember", dbM);
					hs.setMaxInactiveInterval(1200);
					req.setAttribute("r", "�α��� ����");
					
					if (req.getParameter("autoLoginCheck") != null) {
						
						Cookie c = new Cookie("autoLoginCheck" ,dbM.getId());
						c.setMaxAge(1 * 60 * 60 * 24);
						res.addCookie(c);  
						
					}
					
				} else {
					req.setAttribute("r", "��й�ȣ ����");
					
				}

			} else {
				req.setAttribute("r", "���̵� �����ϴ�.");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public boolean loginCheck(HttpServletRequest req, HttpServletResponse res) {

		member m = (member) req.getSession().getAttribute("loginMember");

		if (m != null) {
			req.setAttribute("sideMenu", "sidemenu/loginMenu.jsp");
			return true;
		} else {
			req.setAttribute("sideMenu", "sidemenu/sideMenu.jsp");
			return false; 
		}

	}

	public void logout(HttpServletRequest req, HttpServletResponse res) {
		
		req.getSession().setAttribute("loginMember", null);
		
		Cookie[] cookies = req.getCookies();
		
		if (cookies != null) {
			for (Cookie c : cookies) {
				
				if (c.getName().equals("autoLoginCheck")) {
					c.setValue(null);
					res.addCookie(c);
				}
				
			}
		}
		
	}
	
	public void autoLogin(HttpServletRequest req, HttpServletResponse res) {
		
		Cookie[] cookies = req.getCookies();
		
		if (cookies != null) {
			for (Cookie c : cookies) {
				
				if (c.getName().equals("autoLoginCheck")) {
						
					String id = c.getValue();
					
					if (id != null) {
						member m = new member();
						m.setId(id);
						
						member dbM = ss.getMapper(LoginMapper.class).loginOk(m);
						
						if (dbM != null) {
							
							HttpSession hs = req.getSession();
							hs.setAttribute("loginMember", dbM);
							hs.setMaxInactiveInterval(1200);
							
						}
						
					}
					
				}
				
			}
		}
		
	}
	
	public void findId(HttpServletRequest req, HttpServletResponse res, member m) {
		
		try {

			if (ss.getMapper(LoginMapper.class).findId(m) == 1) {
				req.setAttribute("r","��ȸ ����");
			}else {
				req.setAttribute("r","��ȸ ����");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
}
