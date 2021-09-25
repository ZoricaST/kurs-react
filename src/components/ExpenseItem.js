import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">March 28th 2021</div>

      <div className="expense-item__description">
        <h2>Car Insraance</h2>
        <div className="expense-item__description">$294.67</div>
      </div>
    </div>

  );
}

export default ExpenseItem;
