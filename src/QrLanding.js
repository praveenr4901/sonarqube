import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "./logoNew.png";
import Peer from "./Peer to Peer Gaming App.svg";
import Rectangle from "./Rectangle 5.png";
import Rectangle6 from "./Rectangle 6.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import Service from "./api/service";
import { APPSTORE_URL, PLAYSTORE_URL } from "./api/constants";

const styles = {
  typography: {
    fontFamily: " 'Roboto',sans-serif !important",
    color: "#37474F",
    fontSize: { md: "70px", xs: "40px", sm: "40px" },
    fontWeight: 900,
    lineHeight: { md: "72px", xs: "49px", sm: "49px" },
    letterSpacing: "0px",
    textAlign: "center",
  },
  typography_1: {
    fontFamily: " 'Roboto',sans-serif !important",
    fontSize: { lg: "19px", md: "19px", sm: "18px", xs: "18px" },
    fontWeight: 600,
    lineHeight: { lg: "29.4px", md: "29.4px", sm: "25.2px", xs: "25.2px" },
    letterSpacing: "0px",
    textAlign: "center",
    mt: 3,
  },
  typography_2: {
    fontFamily: " 'Roboto',sans-serif !important",
    fontSize: { lg: "21px", md: "21px", sm: "18px", xs: "18px" },
    fontWeight: 400,
    lineHeight: { lg: "29.4px", md: "29.4px", sm: "25.2px", xs: "25.2px" },
    textAlign: "center",
    minHeight: "100px",
    maxWidth: { xs: "290px", sm: "570px", md: "570px", lg: "570px" },
    m: "auto",
  },
  link: {
    fontFamily: " 'Roboto',sans-serif !important",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "18.15px",
    color: "#000000 !important",
    textDecoration: "none",
  },
  helper: {
    fontFamily: " 'Roboto',sans-serif !important",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16.94px",
  },
};

function QrLanding() {
  const location = useLocation();
  const navigate = useNavigate();
  const [qrString, setQrString] = useState("");
  const [error, setError] = useState("");
  const initialValues = {
    email: "",
  };

  const validationSchema = object({
    email: string().email().required("Email is required"),
  });

  useEffect(() => {
    const pathname = location.pathname.split("/");
    const value = pathname[pathname.length - 1];
    setQrString(value);
  }, []);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.qr_code = qrString;
      Service.postQR(values)
        .then((res) => {
          if (res.data.status === "success") {
            const isAndroid = /Android/i.test(navigator.userAgent);
            const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isAndroid) {
              window.location.href = PLAYSTORE_URL;
            } else if (isiOS) {
              window.location.href = APPSTORE_URL;
            } else {
              navigate("/qrlanding/12345", { replace: true });
            }
          } else {
            setError(res.data.response);
          }
        })
        .catch((err) => {});
    },
    validate: function (values) {
      const errors = {};
      setError("");
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email ID";
      }
      return errors;
    },
  });

  return (
    <>
      <img
        class="leftimg"
        src={Rectangle6}
        alt="Rectangle6"
        style={{ position: "fixed", top: 0, left: 0, width: "11%" }}
      />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "41px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="Comeonda" width="161px" height="181.05px" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
          }}
        >
          <img src={Peer} alt="Comeonda" width="133px" height="21" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            mt: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: {
                xs: "290px",
                sm: "600px",
                md: "600px",
                lg: "600px",
              },
              mx: "auto",
            }}
          >
            <Typography sx={styles.typography}>
              Welcome to COME ON DA
            </Typography>
            <Typography sx={styles.typography_1}>
              Experience personalized deals designed just for you!
            </Typography>
            <Typography sx={styles.typography_2}>
              Register your email below and download & sign up on Come On Da app
              from the Play Store/App Store to claim the reward. Get downloading
              and start enjoying your offers today!
            </Typography>
          </Box>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <TextField
              type="email"
              name="email"
              id="demo-helper-text-aligned-no-helper"
              variant="outlined"
              label="Enter Email ID"
              InputLabelProps={{
                sx: {
                  fontSize: "16px",
                  fontFamily: "'Roboto',sans-serif !important",
                },
              }}
              sx={{
                height: "60px",
                width: "344px",
              }}
              value={values.email}
              error={errors.email || error}
              onChange={handleChange}
              helperText={
                <Typography sx={styles.helper}>
                  {(touched.email && errors.email) || error}
                </Typography>
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                height: "60px",
                width: "344px",
                backgroundColor: " #332FFF",
                fontSize: "18px",
                fontFamily: "'Roboto',sans-serif !important",
                lineHeight: " 21.78px",
              }}
            >
              Register Now
            </Button>
          </Grid>
        </form>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ textAlign: "center", mt: 4 }}
        >
          <Link href="/termsandconditions" sx={styles.link}>
            Terms & Conditions
          </Link>
        </Grid>
      </Grid>
      <img
        class="rightimg"
        src={Rectangle}
        alt="Rectangle"
        position="relative"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "14%",
        }}
      />
    </>
  );
}

export default QrLanding;
