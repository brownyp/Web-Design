package util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.boot.registry.internal.StandardServiceRegistryImpl;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    private static SessionFactory sessionFactory;

    static
    {
        Configuration configuration = new Configuration().configure();

        StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder()
                .applySettings(configuration.getProperties());

        StandardServiceRegistryImpl registry = (StandardServiceRegistryImpl) builder.build();

        sessionFactory = configuration.buildSessionFactory(registry);
    }

    public static Session getSession()
    {
        return sessionFactory.openSession();
    }
    public static void closeSessionFactory()
    {
        sessionFactory.close();
    }
    public static <T> void save(T t)
    {
        Session session=getSession();
        Transaction transaction=session.beginTransaction();
        session.save(t);
        transaction.commit();
        session.close();
    }
}