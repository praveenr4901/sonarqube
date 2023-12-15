import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import infoImage from "../assets/images/info.png";
import bgImg from "../assets/images/bgImg.png";

export default function Popup({ open, handleClose }) {
  const handleClear = () => {
    handleClose();
  };

  return (
    <Dialog
      open={open}
      scroll={"body"}
      maxWidth="lg"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          overflow: "initial",
          borderRadius: "18px"
        }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-70px",
          alignItems: "center",
          left: "auto",
          right: "auto",
          margin: "auto",
          textAlign: "center",
          width: "100%"
        }}
      >
        <img src={infoImage} alt="" width="150px" height="150px" />
      </Box>
      <DialogContent
        sx={{
          display: "flex",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon sx={{ color: "#CCD2E3" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            minWidth: {xs: "370px", md:"400px"},
            marginTop: "15px"
          }}
        >
          <Typography style={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "38px",
            textAlign: "center",
          }}>
            <span style={{ color: "rgb(111 107 107)" }}>Download</span><br/>
            <span style={{ color: '#27B587', fontWeight: 600, fontSize: "26px" }}>Come On Da App</span><br/>
            <span style={{ color: "rgb(111 107 107)" }}>&amp; Start to Play</span>
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: 3,
            flexDirection: "row",
          }}
        >
          <Button
            sx={{
              width: "100px",
              color: "#fff !important",
              border: "none !important",
              borderRadius: "56px",
              backgroundColor: "#8b8f99 !important",
              textTransform: "uppercase",
              fontSize: "12px",
              marginBottom: { xs: "10px", md: "0px" },
            }}
            onClick={handleClear}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "100px",
              color: "#fff !important",
              border: "none !important",
              backgroundColor: "#27B587 !important",
              textTransform: "uppercase",
              borderRadius: "56px",
              fontSize: "12px",
              marginBottom: { xs: "10px", md: "0px" },
            }}
            onClick={handleClear}
            variant="contained"
          >
            Ok
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
