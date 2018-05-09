package exception;

public class ProductsException extends Exception {
    public ProductsException(String message)
    {
        super("productsException-"+message);
    }

    public ProductsException(String message, Throwable cause)
    {
        super("productsException-"+message,cause);
    }
}
