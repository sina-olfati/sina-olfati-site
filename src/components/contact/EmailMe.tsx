import React, { useRef, useEffect, useState } from "react";

import "./EmailMe.css";
import emailjs from "@emailjs/browser";

// utils
import MTButton from "../../utils/MTButton/MTButton";

// icons
import SendIcon from "@mui/icons-material/Send";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

// i18next
import { useTranslation } from "react-i18next";

// Reveal Animation
import "../../assets/css/reveal.css";

// Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const EmailMe = () => {
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  // const isEn = bodyDir == "ltr" ? true : false

  const { t } = useTranslation();

  const check = localStorage.getItem("i18nextLng");

  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [check]);
  // }, [localStorage.getItem("i18nextLng")]);

  const validationSchema = yup.object({
    name: yup.string().required(t("contact.name-error")),
    email: yup
      .string()
      .required(t("contact.email-error1"))
      .email(t("contact.email-error2")),
    message: yup.string().required(t("contact.message-error")),
  });

  const form = useRef();

  const sendEmail = () => {
    //  e.preventDefault();
    emailjs
      .sendForm(
        "service_1jol4lo",
        "template_bagds8g",
        form.current,
        "PIRU_fk_yIzMO3omj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form);
  };

  return (
    <div className="emailme-container" lang={language}>
      <h1>{t("contact.emailme")}</h1>
      <Formik
        initialValues={{ name: "", message: "", email: "" }}
        onSubmit={(values, onSubmitProps) => {
          sendEmail();
          onSubmitProps.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form
          ref={form}
          className="form-tag"
          action="https://formsubmit.co/sinaolfati6@gmail.com"
          method="POST"
        >
          <div className="field-container reveal">
            <Field
              placeholder={t("contact.name-placeholder")}
              type="text"
              name="name"
            />
            <ErrorMessage name="name" />
          </div>
          <div className="field-container reveal">
            <Field
              placeholder={t("contact.email-placeholder")}
              name="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="field-container reveal">
            <Field
              placeholder={t("contact.message-placeholder")}
              name="message"
              as="textarea"
            />
            <ErrorMessage name="message" />
          </div>

          <div className="send-button">
            <MTButton
              text={"send"}
              href={""}
              download={""}
              icon1={<MarkEmailReadIcon />}
              icon2={<SendIcon />}
              type="submit"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EmailMe;
