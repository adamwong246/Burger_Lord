import React from "react";
import Button from '@material-ui/core/Button';

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
            <Button
              variant="contained"
              color="warning"
              disabled={disabled}
              onClick={placeOrder}
            >
              {disabled ? "order not valid" : `Submit Order for $${grandTotal}`}
            </Button>
          </td>
        </tr>
      </table>
    </div>);
  }
}

export default Check;
