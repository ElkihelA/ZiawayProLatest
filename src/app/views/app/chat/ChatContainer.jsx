import React from "react";
import Scrollbar from "react-perfect-scrollbar";
import { Button } from "react-bootstrap";
import { getTimeDifference } from "@utils";
import EmptyMessage from "./EmptyMessage";

const ChatContainer = ({
  currentUser = {},
  toggleSidenav,
  currentChatRoom,
  opponentUser = {},
  messageList = [],
  setBottomRef,
  handleMessageSend,
  isMobile
}) => {
  let [message, setMessage] = React.useState("");
  const sendMessageOnEnter = event => {
    if (event.key === "Enter" && !event.shiftKey) {
      message = message.trim();
      if (message !== "") handleMessageSend(message);
      setMessage("");
    }
  };

  return (
    <div
      className="chat-content-wrap sidebar-content"
      style={{ marginLeft: isMobile ? 0 : "260px" }}
    >
      <div className="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar">
        <span className="link-icon d-md-none" onClick={toggleSidenav}>
          <i className="icon-regular i-Right ml-0 mr-3"></i>
        </span>
        {opponentUser && (
          <div className="d-flex align-items-center">
            <img
              src={opponentUser.avatar}
              alt=""
              className="avatar-sm rounded-circle mr-2"
            />
            <p className="m-0 text-title text-16 flex-grow-1">
              {opponentUser.name}
            </p>
          </div>
        )}
      </div>

      {opponentUser ? (
        <>
          <Scrollbar
            className="chat-content"
            containerRef={ref => {
              setBottomRef(ref);
            }}
          >
            {messageList.map((item, ind) =>
              item.contactId === opponentUser.id ? (
                <div key={ind} className="d-flex mb-4">
                  <div className="message flex-grow-1">
                    <div className="d-flex">
                      <p className="mb-1 text-title text-16 flex-grow-1">
                        {item.name}
                      </p>
                      <span className="text-small text-muted">
                        {getTimeDifference(new Date(item.time))} ago
                      </span>
                    </div>
                    <p className="m-0 white-space-pre-line">{item.text}</p>
                  </div>
                  <img
                    src={item.avatar}
                    alt=""
                    className="avatar-sm rounded-circle ml-3"
                  />
                </div>
              ) : (
                <div key={ind} className="d-flex mb-4 user">
                  <img
                    src={item.avatar}
                    alt=""
                    className="avatar-sm rounded-circle ml-3"
                  />
                  <div className="message flex-grow-1">
                    <div className="d-flex">
                      <p className="mb-1 text-title text-16 flex-grow-1">
                        {item.name}
                      </p>
                      <span className="text-small text-muted">
                        {getTimeDifference(new Date(item.time))} ago
                      </span>
                    </div>
                    <p className="m-0 white-space-pre-line">{item.text}</p>
                  </div>
                </div>
              )
            )}
          </Scrollbar>
          <div className="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
            <form className="inputForm">
              <div className="form-group">
                <textarea
                  className="form-control form-control-rounded"
                  placeholder="Type your message"
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  onChange={e => setMessage(e.target.value)}
                  onKeyUp={sendMessageOnEnter}
                  value={message}
                ></textarea>
              </div>
              <div className="d-flex">
                <div className="flex-grow-1"></div>
                <Button
                  className="btn btn-icon btn-rounded mr-2"
                  variant="primary"
                  onClick={() => {
                    if (message.trim() !== "") handleMessageSend(message);
                    setMessage("");
                  }}
                >
                  <i className="i-Paper-Plane"></i>
                </Button>

                <label htmlFor="attachment" className="mb-0">
                  <Button
                    type="button"
                    className="mr-2"
                    as="span"
                    variant="outline-primary"
                  >
                    <i className="i-Add-File"></i>
                  </Button>
                </label>
                <input
                  onChange={event => {
                    console.log(event.target.files[0]);
                  }}
                  className="d-none"
                  id="attachment"
                  type="file"
                />
              </div>
            </form>
          </div>
        </>
      ) : (
        <EmptyMessage></EmptyMessage>
      )}
    </div>
  );
};

export default ChatContainer;
