
import "./ProductList.css";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
      id: 2,
      name: "Headphones",
      price: 79,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
      id: 3,
      name: "Smartphone",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    }
  ];

  return (
    <div className="product-container">
      <h1>My Product Store</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <p>Price: ${product.price}</p>

            <button>View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

