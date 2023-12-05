import React, { useEffect, useState } from "react";
import style from "../Css/newsletter.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { postService } from "../utils/services";
import { Toaster, Toastersuccess } from "./Toaster";
import { CircularProgress, TextField } from "@mui/material";
import SVG from 'react-inlinesvg';


const { modal_container, popup, news_letter_intput,news_letter_button,close_icon,message_icon } = style;

const NewsLetterModal = () => {
  const [isloading, setisloading] = useState(false);
  const [closePopUp, setclosePopUp] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onHandleSubmit = (values) => {
    setisloading(true);
    debugger;
    const RespObj = { ...values };
    postService("/contact-us", RespObj)
      .then((response) => {
        console.log(response);
        Toastersuccess("Your Feedback is submitted");
        setisloading(false);
      })
      .catch((error) => {
        console.log(error);
        Toaster(error.message, "error");

        setisloading(false);
      });
  };
  return (
    <>
     {
        closePopUp &&  <div className={modal_container}>
        <div class={popup} id="myPopup">
        <div className="d-flex justify-content-end"> 
        <i class={`fa-solid fa-xmark ${close_icon}`} onClick={()=>setclosePopUp(false)}></i>
        </div>
        <div className="d-flex justify-content-center">
        <i class={`fa-solid fa-envelope mb-2 ${message_icon}`}></i>
        </div>
          <div>
            <h3 className="mb-3">Subscribe to Our News Letter</h3>
          </div>
          <div>
          <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : "16px ", textAlign: "center",width:"100%" }}>Sign up for our newsletter to receive the latest updates and exciting news directly to your inbox 
                            </p>
            <div className="row g-0  mt-4 ">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  onHandleSubmit(values);
                  setSubmitting(false);
                }}
              >
                {({
                  values: { email },
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-0 align-items-start">
                      <div className="col-10">
                        <input
                          placeholder="Enter Your Email Address"
                          type="email"
                          style={{ width: "100%" }}
                          name="email"
                          value={email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={news_letter_intput}
                        />
                        {errors.email && touched.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                      <div className="col-2">
                        <button
                          type="submit"
                          className={news_letter_button}
                          disabled={isloading}
                        >
                          Submit
                        </button>
                        {/* ///// */}
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
     }
    </>
  );
};

export default NewsLetterModal;
