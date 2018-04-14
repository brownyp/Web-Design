package exception;

public class MovieException extends Exception {
    public MovieException(String message)
    {
        super("MovieException-"+message);
    }

    public MovieException(String message, Throwable cause)
    {
        super("MovieException-"+message,cause);
    }
}
