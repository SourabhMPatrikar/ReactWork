import React from "react";
import Button from "./Button";
import Alert from "./Alert";
const Common = () => {
  return (
    <div className="common-component">
      <div className="row">
        <div className="title">
          <h4>Alert</h4>
        </div>
        <div className="btn-box">
          <Alert alertType="" alertText="Normal Message." alertTextType="" />
          <Alert alertType="success" alertText="Success Message." alertTextType="bold" />
          <Alert alertType="danger" alertText="Danger Message." alertTextType="italic" />
          <Alert alertType="warn" alertText="Warn Message." alertTextType="under-line" />
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h4>Button</h4>
        </div>
        <div className="btn-box">
          <Button btnText="First" />
          <Button btnText="Second" variant="default" />
          <Button btnText="Second" variant="info" />
          <Button btnText="Second" variant="primary" />
          <Button btnText="Second" variant="secondary" />

          <Button btnText="dark" variant="dark" />
          <Button btnText="light" variant="light" />

          <Button btnText="success" variant="success" />
          <Button btnText="danger" variant="danger" />
          <Button btnText="warn" variant="warn" />
        </div>
      </div>
    </div>
  );
};
export default Common;