import React from "react";
import Button from "../../Common/Button";
const Content = () => {
    return(
        <div id="content">
            Content
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
    );
}
export default Content;