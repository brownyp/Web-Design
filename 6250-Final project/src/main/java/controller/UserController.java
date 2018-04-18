package controller;

import bean.OrderDetails;
import bean.Orders;
import bean.Products;
import dao.ProductsDAO;
import exception.ProductsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import util.HibernateUtil;

import javax.servlet.http.HttpServletRequest;
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


    @RequestMapping(value = "ordernow",method = RequestMethod.GET)
    public String ordernow(@RequestParam("chargeNum")String num, HttpServletRequest Request, Model model) throws ProductsException {
        List<String> productsNum = new ArrayList<>();

        productsNum.add(Request.getParameter("amountInput0"));
        productsNum.add(Request.getParameter("amountInput1"));
        productsNum.add(Request.getParameter("amountInput2"));
        productsNum.add(Request.getParameter("amountInput3"));
        productsNum.add(Request.getParameter("amountInput4"));

        System.out.println(productsNum.size());

        model.addAttribute("productsNum",productsNum);
        return "user/orderConfirm";
    }


    @RequestMapping(value = "testConfirm",method = RequestMethod.GET)
    public String orderConfim(HttpServletRequest Request,Model model) throws ProductsException {
        String[] a =Request.getParameterValues("productsNum");
        List<Products> allproducts =  productsDAO.getproduct();



        return "user/index";
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


