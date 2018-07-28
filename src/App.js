import React from 'react';

class App extends React.Component {
  state = {
    amount: 0,
    fee: 0,
    final_amount: 0
  };

  calculateValue = (e) => {
    e.preventDefault();
  };

  changeValue = (e) => {
    let amount = e.target.value;
    amount = amount.replace(/[a-z]|[A-Z]/g, '');

    const fee = (amount * 1.85) / 100;
    const final_amount = parseInt(amount) + parseInt(fee);
    console.log(final_amount, fee);

    this.setState({ amount, fee, final_amount });
  };

  render() {
    const { amount, fee, final_amount } = { ...this.state };

    return (
      <div className="app">
        <input
          maxLength="5"
          className="input_field"
          type="text"
          onChange={this.changeValue}
          value={this.state.amount}
        />

        <div>
          {amount ? (
            <h1>Amount TK: {amount}</h1>
          ) : (
            <p>Please enter a valid amount</p>
          )}
          {fee ? <p>Bkash fee TK: {parseInt(fee)}</p> : ''}
          {final_amount ? <p>Final amount TK: {final_amount}</p> : ''}
        </div>
      </div>
    );
  }
}

// const Calculator = ({ amount }) => {
//   return (
//     <div className="calc">

//     </div>
//   );
// };

export default App;
