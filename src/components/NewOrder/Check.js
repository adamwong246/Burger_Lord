import React from "react";

class Check extends React.Component {

  render() {
    const { disabled, onChangeGratuity, subTotal, gratuity, grandTotal, placeOrder } = this.props

    return (<div id="totaler">
      <table>
        <tr><td>SUB TOTAL</td><td>${subTotal}</td></tr>
        <tr>
          <td>GRATUITY</td>
          <td>
            <input
              type="number"
              placeholder={25}
              value={gratuity}
              onChange={(event) => onChangeGratuity(parseInt(event.target.value))}
            />%
          </td>
        </tr>
        <tr>
          <td>GRAND TOTAL</td>
          <td>
            <button
              disabled={disabled}
              onClick={placeOrder}
            >
              Submit Order for ${grandTotal}
            </button>
          </td>
        </tr>
      </table>
    </div>);
  }
}

export default Check;
