package initialize;

import entity.Products;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;
import util.HibernateUtil;

@Component
public class Initialize implements InitializingBean {


    @Override
    public void afterPropertiesSet() throws Exception {
        Products p1 = new Products();
        p1.setName("Supreme1");
        p1.setPrice(1999);
        p1.setImage("http://localhost:8080/images/1.jpg");
        HibernateUtil.save(p1);

        Products p2 = new Products();
        p2.setName("Supreme2");
        p2.setPrice(2999);
        p2.setImage("http://localhost:8080/images/2.jpg");
        HibernateUtil.save(p2);

        Products p3 = new Products();
        p3.setName("Supreme3");
        p3.setPrice(3999);
        p3.setImage("http://localhost:8080/images/3.jpg");
        HibernateUtil.save(p3);

        Products p4 = new Products();
        p4.setName("Supreme4");
        p4.setPrice(4999);
        p4.setImage("http://localhost:8080/images/4.jpg");
        HibernateUtil.save(p4);

        Products p5 = new Products();
        p5.setName("Supreme5");
        p5.setPrice(5999);
        p5.setImage("http://localhost:8080/images/5.jpg");
        HibernateUtil.save(p5);
    }
}
