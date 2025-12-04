
export function IngridientList() {
  const items = ["chicken", "plantain", "groundnut oil", "spinach", "spices"];
  return (
    <>
      <div className="ingr-list">
        <h3 className="ingr-head">Ingridients on hand:</h3>
        {items.map((item, id) => {
          return (
            <ul className="item-list">
              <li key={id} className="items">{item}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
