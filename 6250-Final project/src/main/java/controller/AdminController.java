package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class AdminController {
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(@RequestParam("testlog") String testlog)
    {
        return "redirect:/views/page1";
    }

    @RequestMapping(value = "/views/page1",method = RequestMethod.POST)
    public String redirecttoP1() { return "views/page1"; }

}
