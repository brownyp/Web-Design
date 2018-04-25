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

        model.addAttribute("productnum1",Request.getParameter("amountInput0"));
        model.addAttribute("productnum2",Request.getParameter("amountInput1"));
        model.addAttribute("productnum3",Request.getParameter("amountInput2"));
        model.addAttribute("productnum4",Request.getParameter("amountInput3"));
        model.addAttribute("productnum5",Request.getParameter("amountInput4"));
        model.addAttribute("productPrice",num);

        return "user/orderConfirm";
    }


    @RequestMapping(value = "testConfirm",method = RequestMethod.GET)
    public String orderConfim(HttpServletRequest Request,Model model) throws ProductsException {
        String[] p1num =Request.getParameterValues("productnum");
        ArrayList<Integer> p1Num = new ArrayList();
        List<Products> allproducts =  productsDAO.getproduct();
        int k=0;

        for(int i=0;i<p1num.length;i++){
            if(p1num[i].isEmpty()==false){
                p1Num.add(Integer.parseInt(p1num[i]));
            }
        }
        for(int j =0;j<p1Num.size();j++){
            k=k+p1Num.get(j);
        }


        String productPrice = Request.getParameter("productPrice");
        String username = Request.getParameter("username");
        String userPhone = Request.getParameter("userPhone");
        String userAddress = Request.getParameter("userAddress");
        String userEmail = Request.getParameter("userEmail");

        Orders orders = new Orders();
        Date date = new Date();
        orders.setCustomerName(username);
        orders.setCustomerPhone(userPhone);
        orders.setCustomerAddress(userAddress);
        orders.setCustomerEmail(userEmail);
        orders.setOrderDate(date);
        orders.setAmount(Integer.parseInt(productPrice));
        orders.setOrderNum(k);


        System.out.println(allproducts.size());



        ArrayList<OrderDetails> orderD = new ArrayList<>();

        for(int i=0;i<p1num.length;i++){
            if(p1num[i].isEmpty()==false){
                OrderDetails orderDetails = new OrderDetails();
                orderDetails.setOrders(orders);
                orderDetails.setQuantity(Integer.parseInt(p1num[i]));
                int pPrice = allproducts.get(i).getPrice();
                orderDetails.setAmount(pPrice*Integer.parseInt(p1num[i]));
                orderDetails.setProductName(allproducts.get(i).getName());
                orderDetails.setPrice(allproducts.get(i).getPrice());
                orderD.add(orderDetails);
            }
        }

        orders.setOrderDetail(orderD);


        HibernateUtil.save(orders);




        return "user/ordersuccess";
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


