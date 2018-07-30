import React from 'react';

class App extends React.Component {
  state = {
    amount: '',
    fee: 0,
    final_amount: 0
  };

  changeValue = (e) => {
    let amount = e.target.value;
    amount = amount.replace(/[a-z]|[A-Z]|[$@#-/:-?{-~!"^_`\[\]]/g, '');
    const fee = (amount * 1.85) / 100;
    const final_amount = parseInt(amount) + parseInt(fee);
    this.setState({ amount, fee, final_amount });
  };

  render() {
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const { amount, fee, final_amount } = { ...this.state };

    return (
      <div className="app">
        <div className="logo">
          <img src="./logo.png" alt="Bkash Calc" />
        </div>
        <input
          type="text"
          maxLength="5"
          pattern="[0-9]"
          placeholder="10,000"
          className="input_field"
          onChange={this.changeValue}
          value={this.state.amount}
          autoFocus="true"
        />

        <div>
          {amount ? (
            <h1>Amount TK: {numberWithCommas(final_amount)}</h1>
          ) : (
            <p>Please enter a valid amount</p>
          )}
          {fee ? (
            <p>Bkash fee TK: {parseInt(fee)} (Bkash cash out fee is 1.85%)</p>
          ) : (
            ''
          )}
          {final_amount ? (
            <div>
              <p>
                <strong>
                  Final amount TK: {numberWithCommas(final_amount)} for{' '}
                  {numberWithCommas(amount)}
                </strong>
              </p>
              <span>
                <small>
                  2018{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tamalweb.com">
                    Tamal Anwar
                  </a>
                </small>
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default App;
