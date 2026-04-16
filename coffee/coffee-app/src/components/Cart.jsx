import "./Cart.css";

export default function Cart({ open, cart, onAdd, onRemove, onClear, onClose }) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * 0.095;
  const total = subtotal + tax;

  return (
    <>
      <div className={`cart-overlay ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <h2 className="cart-title">Your Order</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">☕</span>
            <p>Your cup is empty.</p>
            <p className="cart-empty-sub">Add something from the menu to get started.</p>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span className="cart-item-emoji">{item.emoji}</span>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <div className="cart-item-qty">
                    <button onClick={() => onRemove(item.id)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onAdd(item)}>+</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (9.5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="btn-checkout">Place Order</button>
              <button className="btn-clear" onClick={onClear}>Clear order</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
