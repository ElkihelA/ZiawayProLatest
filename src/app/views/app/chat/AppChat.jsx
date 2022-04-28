import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {
  getAllContact,
  getRecentContact,
  sendNewMessage,
  getContactById,
  getChatRoomByContactId
} from "./chatService";
import ChatSidenav from "./ChatSidenav";
import ChatContainer from "./ChatContainer";
import { isMobile } from "@utils";

class AppChat extends Component {
  state = {
    currentUser: {
      id: "7863a6802ez0e277a0f98534"
    },
    contactList: [],
    recentContactList: [],
    messageList: [],
    currentChatRoom: "",
    opponentUser: null,
    open: true,
    isMobile: false
  };

  bottomRef = React.createRef();
  windowResizeListener;

  componentDidMount() {
    let { id } = this.state.currentUser;
    getContactById(id).then(data => {
      this.setState({
        currentUser: {
          ...data.data
        }
      });
    });
    getAllContact(this.state.currentUser.id).then(data =>
      this.setState({ contactList: [...data.data] })
    );
    this.updateRecentContactList();

    if (isMobile())
      this.setState({
        open: false,
        isMobile: true
      });
    if (window)
      this.windowResizeListener = window.addEventListener("resize", e => {
        if (isMobile())
          this.setState({
            open: false,
            isMobile: true
          });
        else
          this.setState({
            open: true,
            isMobile: false
          });
      });
  }

  componentWillUnmount() {
    if (window) window.removeEventListener("resize", this.windowResizeListener);
  }

  updateRecentContactList = () => {
    let { id } = this.state.currentUser;
    getRecentContact(id).then(data => {
      this.setState({
        recentContactList: [...data.data]
      });
    });
  };

  scrollToBottom = () => {
    this.bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  handleContactClick = contactId => {
    if (isMobile()) this.toggleSidenav();

    getContactById(contactId).then(({ data }) => {
      this.setState({
        opponentUser: { ...data }
      });
    });

    getChatRoomByContactId(this.state.currentUser.id, contactId).then(
      ({ data }) => {
        let { chatId, messageList, recentListUpdated } = data;
        console.log(chatId);

        this.setState(
          {
            currentChatRoom: chatId,
            messageList
          },
          () => {
            this.bottomRef.scrollTop = 9999999999999;
          }
        );
        if (recentListUpdated) {
          this.updateRecentContactList();
        }
      }
    );
  };

  handleMessageSend = message => {
    let { id } = this.state.currentUser;
    let { currentChatRoom, opponentUser } = this.state;
    if (currentChatRoom === "") return;
    sendNewMessage({
      chatId: currentChatRoom,
      text: message,
      contactId: id,
      time: new Date()
    }).then(data => {
      this.setState(
        {
          messageList: [...data.data]
        },
        () => {
          this.bottomRef.scrollTop = 9999999999999;
        }
      );

      // bot message
      setTimeout(() => {
        sendNewMessage({
          chatId: currentChatRoom,
          text: `Hi, I'm ${opponentUser.name}. Your imaginary friend.`,
          contactId: opponentUser.id,
          time: new Date()
        }).then(data => {
          this.setState(
            {
              messageList: [...data.data]
            },
            () => {
              this.bottomRef.scrollTop = 9999999999999;
            }
          );
        });
      }, 750);
      // bot message ends here
    });
  };

  setBottomRef = ref => {
    this.bottomRef = ref;
  };

  toggleSidenav = () => this.setState({ open: !this.state.open });

  render() {
    let {
      open,
      isMobile,
      currentUser,
      contactList,
      recentContactList,
      messageList,
      opponentUser,
      currentChatRoom
    } = this.state;
    return (
      <Card className="chat-sidebar-container sidebar-container">
        <ChatSidenav
          open={open}
          isMobile={isMobile}
          toggleSidenav={this.toggleSidenav}
          contactList={contactList}
          recentContactList={recentContactList}
          handleContactClick={this.handleContactClick}
        ></ChatSidenav>
        <ChatContainer
          open={open}
          isMobile={isMobile}
          toggleSidenav={this.toggleSidenav}
          messageList={messageList}
          currentUser={currentUser}
          opponentUser={opponentUser}
          currentChatRoom={currentChatRoom}
          setBottomRef={this.setBottomRef}
          handleMessageSend={this.handleMessageSend}
        ></ChatContainer>
      </Card>
    );
  }
}

export default AppChat;
