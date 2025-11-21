import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
function ProductsPage() {
  const products = useProducts(); //koledata bara dastersi karbar
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
  };
  useEffect(() => {
    setDisplayed(products);
  }, [products]);
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />{" "}
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div className={styles.sidebar}>
          <div>
            <FaListUl />
            <p>Categories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
