import React, { useState } from "react";
import { Button, Flex, Header, Portal } from "@fluentui/react-northstar";
function Modal() {
  const [open, setOpen] = useState(false);

  const btnContent = open ? "Close Portal" : "Open Portal";
  return (
    <div>
      <Flex  onClick={() => setOpen(true)}>
      <Button content={btnContent} />
      </Flex>
      <Portal
        trapFocus={{
          isClickableOutsideFocusTrap: false,
          focusTriggerOnOutsideClick: false,
          elementToFocusOnDismiss: null,
          ignoreExternalFocusing: false,
          disableFirstFocus: false,
          firstFocusableSelector: null,
        }}
        open={open}
        content={
          <div
            style={{
              backgroundColor: "#fff",
              position: "fixed",
              left: "40%",
              top: "45%",
              zIndex: 1000,
              padding: "15px",
              boxShadow: "rgb(187, 187, 187) 0px 2px 8px",
              border: "1px solid rgba(34,36,38,.15)",
              borderRadius: "5px",
            }}
          >
            <Header>This is a portal with focus trap!</Header>
            <p tabIndex={0}>
              Portal doesn't close on outside click. See passed focus trap
              props.
            </p>
            <p tabIndex={0}>To close, simply click the close button</p>
            <Button content="Do nothing" />
            {/* <Button content="Close popup" onClick={this.closePortal} /> */}
          </div>
        }
      />
      
    </div>
  );
}

export default Modal;
