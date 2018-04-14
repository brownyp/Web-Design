package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @RequestMapping(value = "/")
    public String index()
    {
        System.out.println("ss");
        return "user/index";
    }

    @RequestMapping(value = "productlist",method = RequestMethod.GET)
    public String getpage1()
    {
        return "user/productlist";
    }
    @RequestMapping(value = "home",method = RequestMethod.GET)
    public String home()
    {
        return "user/index";
    }

    @RequestMapping(value = "Mycart",method = RequestMethod.GET)
    public String cart()
    {
        return "user/mycart";
    }

}
