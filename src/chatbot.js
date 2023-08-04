// src/Chatbot.js

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SVG from "react-inlinesvg";

import "./chatbot.css";
import chatbotIcon from "./assets/chatbotIcon.svg";
import { Tooltip } from "antd";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [predefinedQuestions, setPredefinedQuestions] = useState([
    "Why should I invest in Sindh?",
    "How can I setup a business in Sindh?",
    "How can I contact support?",
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

    // Remove the selected question from the predefinedQuestions list
    setPredefinedQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q !== question)
    );

    // Simulate processing time for the chatbot response
    setTimeout(() => {
      let response;
      switch (question) {
        case "Why should I invest in Sindh?":
          response =
            "By investing in Sindh, you will be part of a global hub with strong connections to major markets and a knowledge-based economy that is opening to the world.";
          break;
        case "How can I setup a business in Sindh?":
          response =
            "Sindh is constantly expanding opportunities for international companies.";
          break;

        case "How can I contact support?":
          response = "Our Contact Number is: +92 21 99218874";
          break;

        // Add more cases and responses for other predefined questions here

        default:
          response = "I am sorry, but I could not understand your question.";
          break;
      }
      addMessage(response); // Add the chatbot's response to the chat

      // After answering, set the state to ask "Anything else"
      setAskingAnythingElse(true);
    }, 2000); // Delay of 1 second for the chatbot response (adjust as needed)
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleEnterButton = (event) => {
    if (event.key === "Enter") {
      handleSendButton();
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
      // Add more predefined questions as needed
    ]);
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
    if (arrow === "Hide") {
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
          <div className="chat-messages" ref={chatContainerRef}>
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
          {askingAnythingElse && !conversationEnded && (
            <div className="any-thing-else">
              <p>Anything else?</p>
              <div className="d-flex">
                <button onClick={handleYesButtonClick}>Yes</button>
                <button onClick={handleNoButtonClick}>No</button>
              </div>
            </div>
          )}
          {!askingAnythingElse && !conversationEnded && (
            <div className="predefined-questions">
              {predefinedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleOptionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onKeyPress={handleEnterButton}
              onChange={handleUserInput}
            />
            <button className="send-button" onClick={handleSendButton}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
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
