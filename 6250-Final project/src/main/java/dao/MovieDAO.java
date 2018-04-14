package dao;

import bean.Products;
import exception.MovieException;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import util.HibernateUtil;

import java.util.List;


public class MovieDAO {
    public MovieDAO() {
    }

    public Products saveMovie(Integer i1, String i2, String i3, String i4, Integer i5) throws MovieException {
        try {
            Products m = new Products();
            m.setTitle(i1);
            m.setActor(i2);
            m.setActress(i3);
            m.setGenre(i4);
            m.setYear(i5);
            HibernateUtil.save(m);
            return m;

        } catch (HibernateException e) {
            DAO.rollback();
            throw new MovieException("Exception while creating user: " + e.getMessage());
        }
    }

    public Products searchMovie(String i1, String i2) throws MovieException {
        Products movie = new Products();
        try {
            DAO.begin();

            Session s = HibernateUtil.getSession();
            System.out.println("inside DAO");
            if (i1.equals("title")) {

                Query q = s.createQuery("from Movies where title='" + i2 + "'");
                List<Products> m = q.list();
                movie = m.get(0);


            } else if (i1.equals("actor")) {
                Query q = s.createQuery("from Movies where actor='" + i2 + "'");
                List<Products> m = q.list();
                movie = m.get(0);


            } else if (i1.equals("actress")) {
                Query q = s.createQuery("from Movies where actress='" + i2 + "'");
                List<Products> m = q.list();
                movie = m.get(0);

            }

            DAO.commit();
            DAO.close();


        } catch (HibernateException e) {
            DAO.rollback();
            throw new MovieException("Exception while creating user: " + e.getMessage());
        }
        return movie;
    }

}
