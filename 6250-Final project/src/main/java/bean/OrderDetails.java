package bean;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orderDetails", schema = "shopping")
public class OrderDetails {
    private Integer id;
    private double amount;
    private double price;
    private int quantity;


    private Products products;

    @ManyToOne
    @JoinColumn(name="Product_id")//加入一列作为外键
    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }


    private Orders orders;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="Order_id")//加入一列作为外键
    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
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
    @Column(name = "Price", nullable = false, precision = 0)
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Basic
    @Column(name = "Quanity", nullable = false)
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quanity) {
        this.quantity = quanity;
    }

}
