package bean;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "orders", schema = "shopping")
public class Orders {
    private String id;
    private double amount;
    private String customerAddress;
    private String customerEmail;
    private String customerName;
    private String customerPhone;
    private Date orderDate;
    private int orderNum;


}
