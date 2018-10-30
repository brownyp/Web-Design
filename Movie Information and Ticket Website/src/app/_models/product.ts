export class Product{
    public id: number;
    public key: string;
    public name: string;
    public description: string;
    public rate: Array<any>;
    public length: string;
    public img: string;
    public price: number;

    public updateFrom(src: Product): void {
        this.id = src.id;
        this.key =src.key;
        this.name = src.name;
        this.description = src.description;
        this.rate = src.rate;
        this.length = src.length;
        this.img = src.img;
        this.price = src.price;
        
      }
  }