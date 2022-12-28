import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const ShowProducts = () => {
    return <></>;
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
            <hr />
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
              <button className="btn btn-outline-dark me-2">All</button>
              <button className="btn btn-outline-dark me-2"> Men's Clothing</button>
              <button className="btn btn-outline-dark me-2">Women's Clothing</button>
              <button className="btn btn-outline-dark me-2">Jewellery</button>
              <button className="btn btn-outline-dark me-2">Electronics</button>
            </div>
            <div className="container">
              <div className="row">
                {filter.map((product) => (
                  <div className="col-md-3 mb-4">
                    <div class="card h-100 text-center p-4" key={product.id}>
                      <img
                        src={product.image} class="card-img-top"alt={product.title} height="250px"/>
                      
                      <div class="card-body">
                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                        <p class="card-text lead fw-bold">${product.price}</p>
                        <a href="#" class="btn btn-outline-dark">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <loading /> : <showProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
