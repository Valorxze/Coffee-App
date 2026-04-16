import "./MenuCard.css";

export default function MenuCard({ item, qty, onAdd, onRemove }) {
  return (
    <div className={`card ${qty > 0 ? "card--selected" : ""}`}>
      <div className="card-emoji">{item.emoji}</div>
      <div className="card-body">
        <div className="card-top">
          <div>
            <p className="card-category">{item.category}</p>
            <h3 className="card-name">{item.name}</h3>
          </div>
          <span className="card-price">${item.price.toFixed(2)}</span>
        </div>

        <p className="card-desc">{item.description}</p>

        <div className="card-tags">
          {item.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="card-actions">
          {qty === 0 ? (
            <button className="btn-add" onClick={onAdd}>
              + Add to Cart
            </button>
          ) : (
            <div className="qty-control">
              <button className="qty-btn" onClick={onRemove}>−</button>
              <span className="qty-count">{qty}</span>
              <button className="qty-btn" onClick={onAdd}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
