package bean;

import javax.lang.model.type.ArrayType;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders", schema = "shopping")
public class Orders implements Serializable {
    private Integer id;
    private double amount;
    private String customerAddress;
    private String customerEmail;
    private String customerName;
    private String customerPhone;
    private Date orderDate;
    private int orderNum;

    public Orders(){
        orderDetail =  new ArrayList<>();
    }

    private List<OrderDetails> orderDetail;

    @OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="orders")
    public List<OrderDetails> getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(List<OrderDetails> orderDetail) {
        this.orderDetail = orderDetail;
    }

    @Id
    @Column(name = "ID", nullable = false, length = 50)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "Amount", nullable = false, precision = 0)
    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Basic
    @Column(name = "Customer_Address", nullable = false, length = 255)
    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    @Basic
    @Column(name = "Customer_Email", nullable = false, length = 128)
    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    @Basic
    @Column(name = "Customer_Name", nullable = false, length = 255)
    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    @Basic
    @Column(name = "Customer_Phone", nullable = false, length = 128)
    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    @Basic
    @Column(name = "Order_Date", nullable = false)
    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    @Basic
    @Column(name = "Order_Num", nullable = false)
    public int getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(int orderNum) {
        this.orderNum = orderNum;
    }



}
