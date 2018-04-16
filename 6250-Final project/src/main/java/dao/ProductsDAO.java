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

    public Products searchMovie(String i1, String i2) throws ProductsException {
        Products movie = new Products();
        try {
            DAO.begin();

            Session s = getSession();
            System.out.println("inside DAO");
            if (i1.equals("title")) {

                Query q = s.createQuery("from  where title='" + i2 + "'");
                List<Products> m = q.list();
                movie = m.get(0);


            }

            DAO.commit();
            DAO.close();


        } catch (HibernateException e) {
            DAO.rollback();
            throw new ProductsException("Exception while creating user: " + e.getMessage());
        }
        return movie;
    }

}
