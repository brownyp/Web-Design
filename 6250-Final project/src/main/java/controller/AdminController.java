package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@Controller
public class AdminController {

    @RequestMapping(value = "/admin",method = RequestMethod.GET)
    public String loadadmin()
    {
        return "admin/index";
    }

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(@RequestParam("testlog") String testlog)
    {
        return "redirect:/admin/index";
    }
    @RequestMapping(value = "/admin/index",method = RequestMethod.POST)
    public String redirecttoP1() { return "admin/index"; }
    @RequestMapping(value = "manageProduct",method = RequestMethod.GET)
    public String manageproduct() { return "admin/index"; }
    @RequestMapping(value = "manageOrder",method = RequestMethod.GET)
    public String managerorder() { return "admin/index"; }

    @RequestMapping(value = "logout",method = RequestMethod.GET)
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "user/index"; }


}
