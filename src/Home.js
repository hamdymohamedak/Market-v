import React, { useEffect, useState } from "react";
import "./Home.css";
import Footer from "./component/Footer";

function Home() {
  const [data, setData] = useState([]);
  const [styles, setStyles] = useState({ display: "none" });
  const [inputStyles, setInputStyles] = useState({ display: "none" });
  const [inputValue, setInputValue] = useState("");

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

  const handleDelete = (id) => {
    // Send a request to delete the product with the given id
    fetch(
      `${process.env.REACT_APP_PROJECTS_API}dashboard/api.php?delete=${id}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((json) => {
        // Update the data state after successful deletion
        setData((prevData) => prevData.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleStyles = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setInputStyles({ display: "block" });

    if (value === "k0120") {
      setStyles({ display: "block" });
    } else {
      setStyles({ display: "none" });
    }
  };

  return (
    <>
      <section className="homeSec">
        <h1 onClick={handleStyles} className="title">
          Welcome
        </h1>
      </section>
      <div className="handleStyles">
        <input
          onChange={handleStyles}
          style={inputStyles}
          type="text"
          value={inputValue}
          placeholder="Type the name of the property rights"
        />
      </div>
      <section className="aboutSec">
        <div className="cardsParnet">
          {data.map((product, index) => (
            <div className="card" key={index}>
              <img
                src={`${process.env.REACT_APP_PROJECTS_API}dashboard/imgs/${product.image}`}
                alt="Product"
              />
              <p> {product.title} </p>
              <p>
                <span style={{ color: "#900C3F" }}>Price</span>: {product.price}
              </p>
              <p>
                <span style={{ color: "#900C3F" }}>Category</span>:
                {product.category}
              </p>
              <button style={styles} onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
