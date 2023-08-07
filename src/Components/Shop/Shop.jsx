import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json") // https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // we're using this to load data with LocalStorage
  useEffect(() => {
    const storedCart = getShoppingCart(); // LS er obj data ta ke stored cart e nisi---{307f166f-1d04-4573-bc37-2f461ea9d4f7: 1}
    const savedCart = [];
    // console.log(storedCart); //  {'307f166f-1d04-4573-bc37-2f461ea9d4f7'(key): 2(value)},{'124e13b9-2d54-4b2f-a74d-a77b362d6ead': 2}

    // Step-1: get id
    for (const id in storedCart) {
      // console.log(id);

      // Step-2: get the product by using id
      const addedProduct = products.find((product) => product.id === id); // compare between id from localStorage & products array
      // console.log("addedProduct", addedProduct); // product obj
      if (addedProduct) {
        // Step-3: get quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //console.log(addedProduct);
        // Step-4: add the addedProduct to the cart
        savedCart.push(addedProduct);
        //console.log(addedProduct);
      }
      // console.log("addedProduct", addedProduct);
    }
    // Step-5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
