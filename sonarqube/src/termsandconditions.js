import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Logo from "./logoNew.png";
import React, { useEffect } from "react";
import Service from "./api/service";
import Loader from "react-loading";
import { Typography } from "@mui/material";

const TermsAndConditions = () => {
  const [terms, setTerms] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const getTerms = () => {
    setLoading(true);
    Service.getTermsConditions()
      .then((res) => {
        setLoading(false);
        console.log(res?.data.content);
        setTerms(res?.data.content.replace(/\[([^\[])*(\])/g, ""));
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getTerms();
  }, []);
  return (
    <body
      className="w-100 min-vh-100"
      style={{
        background: "linear-gradient(to right bottom, #FFFFFF, #D6FBE0 )",
      }}
    >
      <Container>
        <Stack sx={{ width: "100%" }} spacing={2}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Loader
                type="spin"
                color="#747070"
                delay={0}
                height={40}
                width={40}
              />
            </div>
          ) : (
            <div>
              <a href="/home">
                <div className="text-center">
                  <Box
                    component="img"
                    src={Logo}
                    alt="Comeonda"
                    width="170px"
                    height="170px"
                    sx={{
                      marginLeft: { lg: "0px", xs: "auto" },
                      marginRight: { lg: "0px", xs: "auto" },
                    }}
                  />
                </div>
              </a>
              <Box>
                <Typography
                  paragraph
                  sx={{ textAlign: "unset", fontSize: "16px" }}
                  dangerouslySetInnerHTML={{ __html: terms }}
                ></Typography>
              </Box>
            </div>
          )}
        </Stack>
      </Container>
    </body>
  );
};

export default TermsAndConditions;
