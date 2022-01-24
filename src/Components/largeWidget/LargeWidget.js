import React from "react";
import "./largeWidget.css";

const LargeWidget = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Sales</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
            />
            <span className="widgetLgName">George Williams</span>
          </td>
          <td className="widgetLgDate">12 Jan. 2022</td>
          <td className="widgetLgAmount">$8,500</td>
          <td className="widgetLgStatus">
            <Button type="New" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
            />
            <span className="widgetLgName">Regina George</span>
          </td>
          <td className="widgetLgDate">10 Jan. 2022</td>
          <td className="widgetLgAmount">$8,500</td>
          <td className="widgetLgStatus">
            <Button type="Lost" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
            />
            <span className="widgetLgName">Jennifer Walters</span>
          </td>
          <td className="widgetLgDate">8 Jan. 2022</td>
          <td className="widgetLgAmount">$8,500</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LargeWidget;
