package controller;

import bean.OrderDetails;
import bean.Orders;
import bean.Products;
import dao.ProductsDAO;
import exception.ProductsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import util.HibernateUtil;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    ProductsDAO productsDAO;


    @RequestMapping(value = "/")
    public String index()
    {
        System.out.println("ss");
        return "user/index";
    }

    @RequestMapping(value = "getproduct",method = RequestMethod.GET)
    public String getproduct(Model model) throws ProductsException {

       return "user/index";
    }

    @RequestMapping(value = "productlist",method = RequestMethod.GET)
    public String getpage1(Model model) throws ProductsException {
        List<Products> allproducts =  productsDAO.getproduct();
        model.addAttribute("product",allproducts);

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


    @RequestMapping(value = "backtoUpage",method = RequestMethod.GET)
    public String backtoUpage()
    {
        return "user/index";
    }
}


