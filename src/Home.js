import React, { useEffect, useState } from "react";
import "./Home.css";
import Footer from "./component/Footer";

function Home () {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PROJECTS_API}dashboard/api.php`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <section className="homeSec">
        <h1 className="title">Welcome</h1>
      </section>
      <section className="aboutSec">
        <div className="cardsParnet">
          {data.map((product, index) => (
            <div className="card" key={index}>
              <img src={`${process.env.REACT_APP_PROJECTS_API}dashboard/imgs/${product.image}`} alt="Product" />
              <p> {product.title} </p>
              <p> <span style={{ color: "#900C3F" }}>Price</span>: {product.price} </p>
              <p> <span style={{ color: "#900C3F" }}>Category</span>: {product.category} </p>
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
