import React from "react";
import Button from "./Button";
import Alert from "./Alert";
import Badges from "./Badges";
import Progress from "./Progress";
import Spinner from "./Spinner";
const Common = () => {
  return (
    <div className="common-component">
        <div className="row">
        <div className="title">
          <h4>Spinner</h4>
        </div>
        <div className="combine">
          <div className="spinner-collection">
            <Spinner variant="normal"  />
            <Spinner variant="default"  />
            <Spinner variant="info"  />
            <Spinner variant="primary" />
            <Spinner variant="secondary"  />

            <Spinner variant="dark" />
            <Spinner variant="light" />

            <Spinner variant="success" />
            <Spinner variant="danger" />
            <Spinner variant="warn" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h4>Progress</h4>
        </div>
        <div className="combine">
          <div className="progress-collection">
            <Progress variant="normal" percent="59" />
            <Progress variant="default" percent="45" />
            <Progress variant="info" percent="65" />
            <Progress variant="primary" percent="80" />
            <Progress variant="secondary" percent="20" />

            <Progress variant="dark" percent="70" />
            <Progress variant="light" percent="30" />

            <Progress variant="success" percent="43" />
            <Progress variant="danger" percent="50" />
            <Progress variant="warn" percent="40" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h4>Badges</h4>
        </div>
        <div className="combine">
          <div className="badge-collection">
            <Badges variant="" badgesText="normal" />
            <Badges variant="default" badgesText="default" />
            <Badges variant="info" badgesText="info" />
            <Badges variant="primary" badgesText="primary" />
            <Badges variant="secondary" badgesText="secondary" />

            <Badges variant="dark" badgesText="dark" />
            <Badges variant="light" badgesText="light" />

            <Badges variant="success" badgesText="success" />
            <Badges variant="danger" badgesText="danger" />
            <Badges variant="warn" badgesText="warn" />
          </div>
          
          <div className="badge-collection">
            <Badges variant="" badgeColor="light" badgesText="normal"  />
            <Badges variant="default" badgeColor="light" badgesText="default" />
            <Badges variant="info" badgeColor="light" badgesText="info" />
            <Badges variant="primary" badgeColor="light" badgesText="primary" />
            <Badges variant="secondary" badgeColor="light" badgesText="secondary" />

            <Badges variant="dark" badgeColor="light" badgesText="dark" />
            <Badges variant="light" badgeColor="light" badgesText="light" />

            <Badges variant="success" badgeColor="light" badgesText="success" />
            <Badges variant="danger" badgeColor="light" badgesText="danger" />
            <Badges variant="warn" badgeColor="light" badgesText="warn" />
          </div>
          
          <div className="badge-collection">
            <Badges variant="" badgeColor="dark" badgesText="normal"  />
            <Badges variant="default" badgeColor="dark" badgesText="default" />
            <Badges variant="info" badgeColor="dark" badgesText="info" />
            <Badges variant="primary" badgeColor="dark" badgesText="primary" />
            <Badges variant="secondary" badgeColor="dark" badgesText="secondary" />

            <Badges variant="dark" badgeColor="dark" badgesText="dark" />
            <Badges variant="light" badgeColor="dark" badgesText="light" />

            <Badges variant="success" badgeColor="dark" badgesText="success" />
            <Badges variant="danger" badgeColor="dark" badgesText="danger" />
            <Badges variant="warn" badgeColor="dark" badgesText="warn" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h4>Alert</h4>
        </div>
        <div className="combine">
          <Alert alertType="normal" alertText="Message normal." alertTextType="" />
          <Alert alertType="default" alertText="Message default." alertTextType="" />
          <Alert alertType="info" alertText="Message info." alertTextType="italic" />
          <Alert alertType="primary" alertText="Message primary." alertTextType="" />
          <Alert alertType="secondary" alertText="Message secondary." alertTextType="" />

          <Alert alertType="dark" alertText="Message dark." alertTextType="" />
          <Alert alertType="light" alertText="Message light." alertTextType="" />

          <Alert alertType="success" alertText="Message success." alertTextType="bold" />
          <Alert alertType="danger" alertText="Message danger." alertTextType="under-line" />
          <Alert alertType="warn" alertText="Message warn." alertTextType="" />
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h4>Button</h4>
        </div>
        <div className="combine">
          <div className="btn-box">
            <Button btnText="normal" variant="normal" />
            <Button btnText="default" variant="default" />
            <Button btnText="info" variant="info" />
            <Button btnText="primary" variant="primary" />
            <Button btnText="secondary" variant="secondary" />

            <Button btnText="dark" variant="dark" />
            <Button btnText="light" variant="light" />

            <Button btnText="success" variant="success" />
            <Button btnText="danger" variant="danger" />
            <Button btnText="warn" variant="warn" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Common;