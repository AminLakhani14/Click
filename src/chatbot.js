// src/Chatbot.js

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faL, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SVG from "react-inlinesvg";

import "./chatbot.css";
import chatbotIcon from "./assets/chatbotIcon.svg";
import { Tooltip } from "antd";

const arr=[  "By investing in Sindh, you will be part of a global hub with strong connections to major markets and a knowledge-based economy that is opening to the world.","Sindh is constantly expanding opportunities for international companies.","Our Contact Number is: +92 21 99218874","How can I help you?","I am sorry, but I could not understand your question."]
const arr1=[
  "Why should I invest in Sindh?",
  "How can I setup a business in Sindh?",
  "How can I contact support?",
  "I have a question"
  // Add more predefined questions as needed
]

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [hideInput, setHideInput] = useState(true)
 
  const [predefinedQuestions, setPredefinedQuestions] = useState([
    "Why should I invest in Sindh?",
    "How can I setup a business in Sindh?",
    "How can I contact support?",
    "I have a question",
    // Add more predefined questions as needed
  ]);
  const [askingAnythingElse, setAskingAnythingElse] = useState(false);
  const [conversationEnded, setConversationEnded] = useState(false);
  const chatContainerRef = useRef(null);
  const toggleChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

  const handleOptionClick = (question) => {
    addMessage(question, true); // Add the user's selected question to the chat
  setHideInput(false)
    // Remove the selected question from the predefinedQuestions list
    setPredefinedQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q !== question)
    );


    // Simulate processing time for the chatbot response
    setTimeout(() => {
      debugger
      let response;
      for(let a=0; a<arr1.length; a++){
        if(arr1[a]==question){
          response=arr[a]
          setAskingAnythingElse(true);
          setConversationEnded(false)
          break
        }
        else if(arr1[a]==question){
          response=arr[a]
          setAskingAnythingElse(true);
          setConversationEnded(false)
          break
        }
        else if(question=="I have a question"){
          response=arr[3]
          setAskingAnythingElse(false);
          setConversationEnded(true)
          break
        }
        else if(arr1[a].toLowerCase().includes(question.toLowerCase())){
          response=arr[a]
          setAskingAnythingElse(true);
          setConversationEnded(false)
          break
        }
        else{
          response="I am sorry, but I could not understand your question.";
          setAskingAnythingElse(true);
          setConversationEnded(false)
          setHideInput(true)
        }
      }
      addMessage(response)
      // switch (question) {
      //   case  "Why should I invest in Sindh?" :
      //     response =
      //       "By investing in Sindh, you will be part of a global hub with strong connections to major markets and a knowledge-based economy that is opening to the world.";
      //       setAskingAnythingElse(true);
      //       setConversationEnded(false)

      //     break;
      //   case "How can I setup a business in Sindh?":
      //     response =
      //       "Sindh is constantly expanding opportunities for international companies.";
      //       setAskingAnythingElse(true);
      //       setConversationEnded(false)
      //     break;

      //   case "How can I contact support?":
      //     response = "Our Contact Number is: +92 21 99218874";
      //     setAskingAnythingElse(true);
      //     setConversationEnded(false)

      //     break;
      //   // Add more cases and responses for other predefined questions here
      //   case "I have a question":
      //     response="How can I help you?"
      //     setAskingAnythingElse(false);
      //     setConversationEnded(true)
         
      
      //     ;
      //     break;

      //     // case Reply[0].includes(userInput):
      //     // response=arr[0];
      //     // break
      //   default:
      //     for(let a=0; a<arr.length; a++){
      //       if(arr[a].includes(question)){
      //         response=Reply[a]
      //       }
      //     }
      //     // response = "I am sorry, but I could not understand your question.";
      // setAskingAnythingElse(true);
      // setConversationEnded(false)


      //     break;
      // }
      // addMessage(response); // Add the chatbot's response to the chat

      // After answering, set the state to ask "Anything else"
      // setAskingAnythingElse(true);
    }, 2000); // Delay of 1 second for the chatbot response (adjust as needed)
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  function handleKeyDown(event) {
    debugger
    console.log(event)
    if (event.key === "Enter") {
      if(userInput !==""){
        handleOptionClick(userInput)
        setUserInput("")
       }
      console.log("Enter key pressed!");
      // Add your desired functionality here
    }
  };
  const [initialResponsesShown, setInitialResponsesShown] = useState(false);
  const initialResponsesAddedRef = useRef(false);

  useEffect(() => {
    // Add the initial predefined responses only once
    if (!initialResponsesAddedRef.current) {
      addMessage("Hello, I'm here to help you find your way"); // Predefined response: Hello, I'm here to help you find your way
      addMessage("How can I assist you today?"); // Predefined response: How to Chat with Chatbot

      initialResponsesAddedRef.current = true;
    }

    // Scroll to the bottom of the chat container whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);
  const handleSendButton = () => {
    if (userInput.trim() !== "") {
      addMessage(userInput, true); // Add the user's message to the chat
      setUserInput(""); // Clear the input box after sending the message
    } else {
      // If the user sends an empty message, show the predefined responses
      setAskingAnythingElse(false);
      setPredefinedQuestions([
        "Why should I invest in Sindh?",
        "How can I setup a business in Sindh?",
        "How can I contact support?",
        // Add more predefined questions as needed
      ]);
    }
  };

  const handleYesButtonClick = () => {
    setAskingAnythingElse(false);
    // Show the predefined questions again
    setPredefinedQuestions([
      "Why should I invest in Sindh?",
      "How can I setup a business in Sindh?",
      "How can I contact support?",
      "I have a question"
      // Add more predefined questions as needed
    ]);
    setHideInput(true)
  };

  const handleNoButtonClick = () => {
    setAskingAnythingElse(false);
    setConversationEnded(true);
    addMessage("Thank you for contacting CLICK."); // Add the final message to the chat
  };

  const addMessage = (content, isUser = false) => {
    const newMessage = {
      content,
      isUser,
      botName: "CLICK Bot",
      timestamp: new Date().toLocaleString(), // Add the timestamp property to the message
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  useEffect(() => {
    // Scroll to the bottom of the chat container whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "HideInput") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <div>
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h2 className="chatbotHeaderText">CLICK virtual assistant</h2>
            <p style={{ textAlign: "left", marginBottom: "11px" }}>
              Ask me anything
            </p>
          </div>
          <div className="chat-messages"   ref={chatContainerRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isUser ? "user-message" : "bot-message"}
              >
                {!message.isUser && (
                  <div className="bot-response">
                    <span className="bot-name">{message.botName}</span>
                    <span className="timestamp">{message.timestamp}</span>
                    {message.content}
                  </div>
                )}
                {message.isUser && message.content}
              </div>
            ))}
          </div>
          {askingAnythingElse  && !conversationEnded && (
            <div className="any-thing-else">
              <p>Anything else?</p>
              <div className="d-flex">
                <button onClick={handleYesButtonClick}>Yes</button>
                <button onClick={handleNoButtonClick}>No</button>
              </div>
            </div>
          )}
          {!askingAnythingElse  && !conversationEnded && (
            <div className="predefined-questions">
              {predefinedQuestions.map((question) => (
                <button
                // style={{backgroundColor:"red"}}
                  className="chatbot_selected_question"
                  key={question}
                  onClick={() => handleOptionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
         {
          !hideInput && <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onKeyDown={handleKeyDown}
            // onKeyPress={handleEnterButton}
            onChange={handleUserInput}
          />
          <button className="send-button" onClick={(event)=>{
            // handleSendButton()
            debugger
             if(userInput !==""){
              handleOptionClick(userInput)
              setUserInput("")
              // if(arr[0].includes(userInput)){
              //   handleOptionClick(userInput)
              //   setUserInput("")
              // }
               
             }
          }}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
         }
          <div className="close-icon" onClick={toggleChatbot}>
            <span>&times;</span>
          </div>
        </div>
      )}
      <Tooltip
        overlayInnerStyle={{ borderRadius: "0px" }}
        color={"#007bff"}
        placement="left"
        title={"I'm Here to assist you"}
        arrow={mergedArrow}
      >
        <div className="chatbot-toggle-button" onClick={toggleChatbot}>
          <SVG
            src={chatbotIcon}
            className="heart"
            height={65}
            width={65}
            style={{
              position: "absolute",
            }}
            fill={"#0f5789"}
            title="React"
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default Chatbot;
