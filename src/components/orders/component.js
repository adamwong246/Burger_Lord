import React from "react";

import { OrdersSelector, } from "./selector.js";

import {COMPLETE_ORDER} from "../../state/Actions.js";

import OrdersList from "../../view/Orders/OrdersList.js";

export default (dispatcher) => {
  return class Orders extends React.Component {

    render() {

      const childProps = OrdersSelector(this.props.storeState)

      return (<div>
        <OrdersList
          {
            ...childProps
          }
          completeOrder={(orderId) => dispatcher({ type: COMPLETE_ORDER, payload: orderId })}
        />
      </div>);
    }
  }
}

