import React from "react";
import ReactDOM from "react-dom";
import { MessengerChat } from "react-messenger-chat-plugin";
const Messenger = () => {
  return (
    <>
      <MessengerChat
        pageId="156683884204961"
        language="sv_SE"
        themeColor={"#096BF5"}
        bottomSpacing={300}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
      />
      ,
    </>
  );
};

export default Messenger;
