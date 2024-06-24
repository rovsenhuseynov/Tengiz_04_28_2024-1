import DividerLineBackrBlack from "../../Components/reusableComponents/DividerLine/DividerLineBackrBlack";

const CartItem = ({
  item,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <li className="cartPage__item">
      <p className="cartPage__item-title">{item.name}</p>
      <DividerLineBackrBlack />
      <div className="cartPage__item-details">
        <img
          className="cartPage__item-image"
          src={item.imageUrl}
          alt={item.name}
        />
        <div className="cartPage__quantity-controls">
          <button
            className="cartPage__quantity-controls-btn2 btn"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
          <span className="cartPage__quantity-controls-number">
            {item.quantity}
          </span>
          <button
            className="cartPage__quantity-controls-btn1 btn"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
        </div>
        <div className="cartPage__item-price">
          <div className="cartPage__item-price-block">
            <p className="price-one">
              Price for one: &nbsp; {parseFloat(item.price).toFixed(2)}₼
            </p>
            <p className="quantity">Quantity: &nbsp; {item.quantity}</p>
            <p className="sum">
              Sum: &nbsp;
              {(parseFloat(item.price) * item.quantity).toFixed(2)} ₼
            </p>
          </div>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="cartPage__remove-button"
        >
          <div className="remove-el"> &#10006; </div>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
