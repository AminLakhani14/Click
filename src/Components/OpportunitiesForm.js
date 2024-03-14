import React, { useState } from 'react'
import { CircularProgress, } from "@mui/material";
import { TextField } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { postService } from "../utils/services";
import { Toaster, Toastersuccess } from "./Toaster";

const OpportunitiesForm = () => {
    const [isloading, setisloading] = useState(false);

    const onHandleSubmit = (values, resetForm) => {
        ;
        setisloading(true);

        const RespObj = { ...values, };
        postService("/contact-us", RespObj)
            .then((response) => {
                console.log(response);
                Toastersuccess("Your Feedback is submitted");
                setisloading(false);
                resetForm();
            })
            .catch((error) => {
                Toaster(error.message, "error");
                setisloading(false);
                resetForm();
            });
    };

    const handleMobileNumberChange = (event, form) => {
        const inputValue = event.target.value;
        const truncatedValue = inputValue.slice(0, 11);
        form.setFieldValue("mobileNumber", truncatedValue);
    };
    return (
        <>


            <div
                className="col-lg-12 "
                style={{
                    height: "415px",
                    background: "white",
                    marginTop: "-25px",
                    padding: "60px 60px 0px 60px",
                }}
            >
                <Formik
                    initialValues={{
                        name: "",
                        mobileNumber: "",
                        email: "",
                        comments: "",
                        address: "",
                        companyName: "",
                        country: "",
                        department: "",
                        companyWebsite: "",
                        license: "",
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .matches(/^[A-Za-z]+$/, "Name must only contain letters")
                            .required("Name is required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Email is required"),
                        mobileNumber: Yup.string()
                            .test("len", "Number must have exactly 11 digits", (value) => {
                                if (value) {
                                    return value.toString().length === 11;
                                }
                                return true;
                            })
                            .required("Number is required"),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        onHandleSubmit(values, resetForm);
                        setSubmitting(false);
                    }}
                >
                    {({
                        values: {
                            name,
                            email,
                            mobileNumber,
                            address,
                            companyName,
                            companyWebsite,
                            country,
                            comments,
                        },
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        setFormikState,
                    }) => (

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div class="">
                                        <TextField
                                            id="outlined-controlled"
                                            style={{ width: "100%" }}
                                            name="name"
                                            size="small"
                                            placeholder="Enter your name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={name}
                                        />
                                        {errors.name && touched.name && (
                                            <span className="error">{errors.name}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="">
                                        <TextField
                                            id="outlined-controlled"
                                            style={{ width: "100%" }}
                                            name="companyName"
                                            size="small"
                                            placeholder="Enter your company name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={companyName}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <TextField
                                        id="outlined-controlled"
                                        style={{ width: "100%" }}
                                        label="Job Title"
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={companyWebsite}
                                        name="companyWebsite"
                                        placeholder="Enter your job title"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-4">
                                    <div class="">
                                        <TextField
                                            id="outlined-controlled"
                                            style={{ width: "100%" }}
                                            size="small"
                                            label="Email"
                                            name="email"
                                            placeholder="Enter your Email"
                                            value={email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email && (
                                            <span className="error">{errors.email}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="">
                                        <Field name="mobileNumber">
                                            {({ field, form }) => (
                                                <TextField
                                                    id="outlined-controlled"
                                                    style={{ width: "100%" }}
                                                    size="small"
                                                    type="number"
                                                    onChange={(event) => {
                                                        handleMobileNumberChange(event, form);
                                                    }}
                                                    onBlur={handleBlur}
                                                    value={field.value}
                                                    name="mobileNumber"
                                                    label="Phone"
                                                    placeholder="92123567901"
                                                />
                                            )}
                                        </Field>

                                        {errors.mobileNumber && touched.mobileNumber && (
                                            <span className="error">{errors.mobileNumber}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div class="">
                                        <TextField
                                            id="outlined-controlled"
                                            style={{ width: "100%" }}
                                            size="small"
                                            label="Subject"
                                            placeholder="Write your feedback subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={address}
                                            name="address"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div class="">
                                        <TextArea
                                            id="outlined-controlled"
                                            size="small"
                                            style={{ width: "100%" }}
                                            label="Message"
                                            maxRows={10}
                                            minRows={4}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={comments}
                                            name="comments"
                                            rows={4}
                                            placeholder="Write your feedback subject"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-sm-12 mt-4 tocentersubmitbutton">
                                    <button
                                        type="submit"
                                        className="submitButton"
                                        disabled={isloading}
                                    >
                                        {isloading ? (
                                            <CircularProgress size={30} color="inherit" />
                                        ) : (
                                            "  Submit"
                                        )}
                                    </button>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-lg-12 mt-4">
                                    <button type="button" className="submitButton">
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </div> */}

                        </form>
                    )}
                </Formik>

            </div>
        </>
    )
}

export default OpportunitiesForm