import React from 'react';
import './table.css';

const OrderHistory = () => {
  return (
    <div>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Order History</div>
            <h2 class="login__title title title_mb-lg">
              Your Order <br />
              History
            </h2>

            <table role="table">
              <thead role="rowgroup">
                <tr role="row">
                  <th role="columnheader">Order Name</th>
                  <th role="columnheader">Order Amount</th>
                  <th role="columnheader">Order Date</th>
                  <th role="columnheader">Payment Status</th>
                  <th role="columnheader">Order Status</th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                <tr role="row">
                  <td role="cell" class="order-details">
                    Test Product
                  </td>
                  <td role="cell" class="order-details">
                    RM60.00 for 2 items
                  </td>
                  <td role="cell" class="order-details">
                    26/03/2021
                  </td>
                  <td role="cell" class="order-details">
                    Shipped
                  </td>
                  <td role="cell" class="order-details">
                    Shipped
                  </td>
                </tr>

                <tr role="row" style={{ marginTop: '20px' }}>
                  <td role="cell" class="order-details">
                    Test Product
                  </td>
                  <td role="cell" class="order-details">
                    RM60.00 for 2 items
                  </td>
                  <td role="cell" class="order-details">
                    26/03/2021
                  </td>
                  <td role="cell" class="order-details">
                    Shipped
                  </td>
                  <td role="cell" class="order-details">
                    Shipped
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
