function ProductCard({ product }) {

    return (
        <div className="product-card">

            <img
                src={product.image}
                alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <h4>₹{product.price}</h4>

            <button>
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;




// Purpose

// This component displays one product.

// For example:

// ┌──────────────────────┐
// │      Product Image   │
// │                      │
// │ iPhone 16            │
// │ Mobile               │
// │ ₹89999               │
// │                      │
// │ [ Add to Cart ]      │
// └──────────────────────┘





