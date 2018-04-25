package dao;

import bean.Products;
import exception.ProductsException;
import org.hibernate.*;
import util.HibernateUtil;

import java.util.ArrayList;
import java.util.List;

import static dao.DAO.getSession;


public class ProductsDAO {
    public ProductsDAO() {
    }

    public List<Products> getproduct() throws ProductsException {
        try {
            ArrayList<Products> allProducts = new ArrayList<>();
            Session s=getSession();
            DAO.begin();
//            Query q = s.createQuery("FROM Products");
//            List<Products> m = q.list();
//            for(int i =0;i<m.size();i++){
//                allProducts.add(m.get(i));
//            }


//            DAO.begin();
//            Session s = HibernateUtil.getSession();
//            Query q = s.createQuery("from Products where name='" + productName + "'");
//            List<Products> products = q.list();
//            Products p = new Products();
//            p = products.get(0);
//            p.setName(productNewName);
//            p.setPrice(Integer.parseInt(productNewPrice));
//            s.update(p);
//            DAO.commit();
//            DAO.close();
//
            Criteria crit = s.createCriteria(Products.class);
            List<Products> results = crit.list();
            DAO.commit();
            DAO.close();
            return results;

        } catch (HibernateException e) {
            DAO.rollback();
            throw new ProductsException("Exception while creating user: " + e.getMessage());
        }
    }

    public Products updateProduct(String productName,String productNewName,String productNewPrice) throws ProductsException {
        try {
            Session s=getSession();
            DAO.begin();
            Query q = s.createQuery("from Products where name='" + productName + "'");
            List<Products> products = q.list();
            Products pro = products.get(0);
            pro.setName(productNewName);
            pro.setPrice(Integer.parseInt(productNewPrice));
            s.update(pro);
            DAO.commit();
            DAO.close();

            return pro;

        } catch (HibernateException e) {
            DAO.rollback();
            throw new ProductsException("Exception while creating user: " + e.getMessage());
        }
    }

    public void deleteProduct(Products pro) throws ProductsException {
        try {
            Session s=getSession();
            DAO.begin();
            s.delete(pro);
            DAO.commit();
            DAO.close();

        } catch (HibernateException e) {
            DAO.rollback();
            throw new ProductsException(e.getMessage());
        }
    }
}
