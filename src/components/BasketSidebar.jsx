import { TbCheckupList } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketSidebar.module.css";
function BasketSidebar({ state, clickHandler }) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbCheckupList />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>CheckOut</button>
    </div>
  );
}

export default BasketSidebar;
