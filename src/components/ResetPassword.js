import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { Container, Card, FormControl, Input, Button } from "@mui/material";
import { resetPasswordService } from "../services/auth";

export const ResetPassword = () => {
  const { resetPasswordToken } = useParams();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6)
        .max(255),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  useEffect(() => {
    const resetPassword = async () => {
      await resetPasswordService({
        resetPasswordLink: resetPasswordToken,
        newPassword: formik.values.newPassword,
      });
    };
    resetPassword();
  }, [formik.values.newPassword, resetPasswordToken]);

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card>
        <FormControl onSubmit={formik.handleSubmit}>
          <Input
            type="password"
            placeholder="Your new password"
            name="newPassword"
            onChange={formik.handleChange}
            error={formik.errors.newPassword}
            value={formik.values.newPassword}
          ></Input>
          <Button type="submit">Reset Password</Button>
        </FormControl>
      </Card>
    </Container>
  );
};
