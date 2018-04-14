package bean;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "products", schema = "shopping")
public class Products implements Serializable{
    private int id;
    private byte[] image;
    private String name;
    private int price;




}
