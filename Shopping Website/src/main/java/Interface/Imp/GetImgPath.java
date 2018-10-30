package Interface.Imp;

import Interface.ProductInterface;

public class GetImgPath implements ProductInterface {
    @Override
    public String getImagesPath(String x) {
        String path ="http://localhost:8080/images/"+x;
        return path;
    }
}
