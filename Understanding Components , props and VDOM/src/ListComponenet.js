function ListComponenet({ items }) {
    return (
      <div>
        <h2>Item List</h2>
        {items.length > 0 && items.map((item) => <p>{item}</p>)}
      </div>
    );
  }
  export default ListComponenet;