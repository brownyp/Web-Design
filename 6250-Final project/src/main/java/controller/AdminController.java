package controller;

import bean.Products;
import dao.DAO;
import exception.ProductsException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import dao.ProductsDAO;
import util.HibernateUtil;


@Controller
public class AdminController {
    @Autowired
    ProductsDAO productsDAO;


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
    public String manageProduct(Model model) throws ProductsException {
        List<Products> allproducts =  productsDAO.getproduct();
        model.addAttribute("product",allproducts);
        return "admin/manageProduct"; }

    @RequestMapping(value = "deleteproduct",method = RequestMethod.GET)
    public String deleteProducts(HttpServletRequest Request,Model model) throws ProductsException {
        String productName = Request.getParameter("deleteCheck");
        List<Products> allproducts =  productsDAO.getproduct();
        Products delPro = new Products();
        for(int i=0;i<allproducts.size();i++){
            if(allproducts.get(i).getName().equals(productName)){
                delPro=allproducts.get(i);
                System.out.println(i);
            }
        }
        productsDAO.deleteProduct(delPro);

        model.addAttribute("product",allproducts);

        return "admin/manageProduct"; }

    @RequestMapping(value = "updateProduct",method = RequestMethod.GET)
    public String updateProduct(HttpServletRequest Request,Model model,HttpServletResponse response) throws ProductsException, IOException {
        String productName = Request.getParameter("productName");
        String productNewName = Request.getParameter("productNewName");
        String productNewPrice = Request.getParameter("productNewPrice");
        productsDAO.updateProduct(productName,productNewName,productNewPrice);
        List<Products> allproducts =  productsDAO.getproduct();
        model.addAttribute("product",allproducts);

        PrintWriter out = response.getWriter();
        out.print("<script type=\"text/javascript\">alert('Update Successful');</script>");
        out.flush();

        return "admin/manageProduct";}


    @RequestMapping(value = "manageOrder",method = RequestMethod.GET)
    public String managerorder() { return "admin/manageOrder"; }

    @RequestMapping(value = "logout",method = RequestMethod.GET)
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "user/index"; }


}
