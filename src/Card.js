//----------------
import { useState } from "react";
import { productsData } from "./data";
import './index.css';

export default function App() {
  const [products, setProducts] = useState(productsData);

  const addToCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product };
        updatedProduct.cartQty = updatedProduct.cartQty
          ? updatedProduct.cartQty + 1
          : 1;
        return updatedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="container my-2">
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="left-side d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <span className="navbar-brand-title">KFC</span>
            </a>
            <div className="button-group">
              <button>DELIVERY</button>
              <button>PICKUP</button>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvas-title"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvas-title">
                KFC
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* Navigation items */}
                <li className="nav-item" key="store-locator">
                  <a
                    className="nav-address"
                    aria-current="page"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Store Locator
                  </a>
                </li>
                <li className="nav-item" key="track-order">
                  <a
                    className="nav-order"
                    href="#"
                    style={{
                      textDecoration: "none",
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Track Order
                  </a>
                </li>
                <li className="nav-item" key="explore-menu">
                  <a
                    className="nav-menu"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Explore Menu
                  </a>
                </li>
                <hr />
                <li className="nav-item" key="about-us">
                  <a
                    className="nav-about"
                    aria-current="page"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item" key="feedback">
                  <a
                    className="nav-feedback"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Feedback
                  </a>
                </li>
                <li className="nav-item" key="terms">
                  <a
                    className="nav-term"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item" key="privacy-policy">
                  <a
                    className="nav-privacy"
                    aria-current="page"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item" key="contact-us">
                  <a
                    className="nav-contact"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item" key="mitao-bhook">
                  <a
                    className="nav-mitao-bhook"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    Mitao Bhook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <button>LOGIN</button>
          </div>
        </div>
      </nav>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-4 row-cols-md-4 my-5 py-5">
          <button>EveryDay Value</button>
          <button>Ala-Cart-&-Combos</button>
          <button>Promotion</button>
          <button>Signature-Boxes</button>
        </div>
      </div>
      <h1 style={{ fontFamily: "cursive" }}>EveryDay Value</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description}
                  <br />
                  <a
                    href="#"
                    className={`btn ${
                      product.stock ? "btn-primary" : "btn-danger"
                    }`}
                    onClick={() => addToCart(product.id)}
                    disabled={product.stock && product.cartQty >= product.stock}
                  >
                    {product.stock ? "Add to Cart" : "Out of Stock"}
                  </a>
                  {!!product.cartQty && <span> {product.cartQty}</span>}
                  {product.cartQty === product.stock && (
                    <span className="text-info"> 3 stock limit reached!</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
