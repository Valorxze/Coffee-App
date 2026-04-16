import "./MenuCard.css";

export default function MenuCard({ item }) {
  return (
    <div className="card">
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
      </div>
    </div>
  );
}
