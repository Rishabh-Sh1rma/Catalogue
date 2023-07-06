import "./DestinationStyle.css";

const Destination = () => {
  const products = [
    { id: 1, name: "Product 1", image: require("./photos/2.jfif") },
    { id: 2, name: "Product 2", image: require("./photos/4.jfif") },
    { id: 3, name: "Product 3", image: require("./photos/5.jfif") },
    { id: 4, name: "Product 3", image: require("./photos/6.jfif") },
    { id: 5, name: "Product 3", image: require("./photos/7.jfif") },
    { id: 6, name: "Product 3", image: require("./photos/8.jfif") },
    { id: 7, name: "Product 3", image: require("./photos/9.jfif") },
    { id: 8, name: "Product 3", image: require("./photos/10.jfif") },
    { id: 9, name: "Product 3", image: require("./photos/11.jfif") },
    { id: 10, name: "Product 3", image: require("./photos/12.jfif") },
    { id: 11, name: "Product 3", image: require("./photos/13.jfif") },
    { id: 12, name: "Product 3", image: require("./photos/14.jfif") },
    { id: 13, name: "Product 3", image: require("./photos/15.jfif") },
    { id: 14, name: "Product 3", image: require("./photos/16.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/42.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/43.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/44.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/45.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/46.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/47.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/48.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/49.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/50.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/51.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/52.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/53.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/54.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/55.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/56.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/57.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/58.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/59.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/60.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/61.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/62.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/63.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/64.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/65.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/66.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/67.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/68.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/69.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/70.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/71.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/17.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/18.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/19.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/20.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/21.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/22.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/24.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/25.jfif") },
    { id: 15, name: "Product 3", image: require("./photos/26.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/27.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/28.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/29.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/30.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/31.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/32.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/33.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/34.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/35.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/36.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/37.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/38.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/39.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/40.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/41.jpeg") },
    { id: 15, name: "Product 3", image: require("./photos/bannera.jpeg") },
    { id: 16, name: "Product 3", image: require("./photos/stone.jfif") }

    // ... add more products
  ];
  return (
    <div className="destination">
      <h1>Our Catalogue</h1>
      <p>Specialization in glass filled ruby and Black Spinel !</p>
      <h3>
        For Order, Direct Massage On WhatsApp{" "}
        <i class="fa-brands fa-whatsapp"></i>
      </h3>
      <h2>(+91 9784352249, +91 9664078593)</h2>

      {
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};
export default Destination;
