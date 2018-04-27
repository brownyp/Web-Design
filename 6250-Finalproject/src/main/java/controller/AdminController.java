package controller;

import Interface.Imp.GetImgPath;
import entity.Products;
import exception.ProductsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import dao.ProductsDAO;
import org.springframework.web.multipart.MultipartFile;
import util.HibernateUtil;


@Controller
public class AdminController {
    @Autowired
    ProductsDAO productsDAO;

    @RequestMapping(value = "/user")
    public String gotoadmin()
    { return "user/index"; }

    @RequestMapping(value = "/admin",method = RequestMethod.GET)
    public String loadadmin()
    {
        return "admin/index";
    }

    @RequestMapping(value = "/login",method = RequestMethod.GET)
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
            }
        }
        productsDAO.deleteProduct(delPro);
        List<Products> all1products =  productsDAO.getproduct();
        model.addAttribute("product",all1products);

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


    @RequestMapping(value = "createNewProduct")
    public String createProduct(@RequestParam("productImg") MultipartFile file, @RequestParam("productName") String productName,
                                @RequestParam("productPrice") String productPrice,HttpServletRequest Request) throws IOException, ProductsException {

        System.out.println("kk");
        Products pro = new Products();
        pro.setName(productName);
        pro.setPrice(Integer.parseInt(productPrice));
        HibernateUtil.save(pro);
        ClassLoader classLoader = getClass().getClassLoader();
        file.transferTo(new File(classLoader.getResource(".").getFile() + "/" + file.getOriginalFilename()));
        String test = file.getOriginalFilename();
        GetImgPath g = new GetImgPath();
        String test1 = g.getImagesPath(test);
        productsDAO.updateProductImg(pro.getName(),test1);


        return "admin/index"; }

    @RequestMapping(value = "logout",method = RequestMethod.GET)
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "else/welcome"; }


    @RequestMapping(value = "createProduct",method = RequestMethod.GET)
    public String createProduct() {
        return "admin/createPro"; }

    @RequestMapping(value = "searchProductpage",method = RequestMethod.GET)
    public String searchProductpage() {
        return "admin/searchProductpage"; }

    @RequestMapping(value = "searchProduct",method = RequestMethod.GET)
    public String searchProduct(HttpServletRequest request,Model model) throws ProductsException {
        String searchByName = request.getParameter("searchByName");
        List<Products> pro = productsDAO.searchProductImg(searchByName);
        model.addAttribute("product",pro);

        return "admin/searchResult"; }


}
