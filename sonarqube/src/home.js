import "./App.css";
import Logo from "./logoNew.png";
import Playstore from "./play_store.png";
import Appstore from "./app_store.png";
import Present from "./present.svg";
import Bet from "./bet.svg";
import Ball from "./ball.svg";
import Features from "./features1.png";
import { Box, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import Service from "./api/service";
import CardActions from "@mui/material/CardActions";
import ReactPlayer from "react-player";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Loader from "react-loading";
import Carousel from "better-react-carousel";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import websiteImage from "./assets/images/website_image.png";
import worldCupSquard from "./assets/images/World Cup Squad India.jpg"
// import banner1 from "./assets/images/banner1.jpg";
// import banner2 from "./assets/images/banner2.jpg";
// import banner3 from "./assets/images/banner3.jpg";
// import banner4 from "./assets/images/banner4.jpg";
// import banner5 from "./assets/images/banner5.jpg";
// import banner6 from "./assets/images/banner6.jpg";
// import banner7 from "./assets/images/banner7.jpg";
// import banner8 from "./assets/images/banner8.jpg";
// import banner9 from "./assets/images/banner9.jpg";
// import banner10 from "./assets/images/banner10.jpg";

// import banner11 from "./assets/images/banner11.jpg";
// import banner12 from "./assets/images/banner12.jpg";
// import banner13 from "./assets/images/banner13.jpg";
// import banner14 from "./assets/images/banner14.jpg";
// import banner15 from "./assets/images/banner15.jpg";
// import banner16 from "./assets/images/banner16.jpg";
// import banner17 from "./assets/images/banner17.jpg";
// import banner18 from "./assets/images/banner18.jpg";
// import banner19 from "./assets/images/banner19.jpg";
// import banner20 from "./assets/images/banner20.jpg";
// import banner21 from "./assets/images/banner21.jpg";
// import banner22 from "./assets/images/banner22.jpg";
// import banner23 from "./assets/images/banner23.jpg";
// import banner24 from "./assets/images/banner24.jpg";
// import banner25 from "./assets/images/banner25.jpg";
// import banner26 from "./assets/images/banner26.jpg";
// import banner27 from "./assets/images/banner27.jpg";
// import banner28 from "./assets/images/banner28.jpg";
// import banner29 from "./assets/images/banner29.jpg";
// import banner30 from "./assets/images/banner30.jpg";
// import banner31 from "./assets/images/banner31.jpg";
// import banner32 from "./assets/images/banner32.jpg";
// import banner33 from "./assets/images/banner33.jpg";

// import banner40 from "./assets/images/banner40.jpg";
// import banner41 from "./assets/images/banner41.jpg";
// import banner42 from "./assets/images/banner42.jpg";
// import banner43 from "./assets/images/banner43.jpg";
import Popup from "./components/PopUp";

const images = [
  { url: websiteImage },
   {url:worldCupSquard},
  // { url: banner40 },
  // { url: banner41 },
  // { url: banner42 },
  // { url: banner43 },
  // { url: banner1 },
  // { url: banner2 },
  // { url: banner3 },
  // { url: banner4 },
  // { url: banner5 },
  // { url: banner6 },
  // { url: banner7 },
  // { url: banner8 },
  // { url: banner9 },
  // { url: banner10 },
  // { url: banner11 },
  // { url: banner12 },
  // { url: banner13 },
  // { url: banner14 },
  // { url: banner15 },
  // { url: banner16 },
  // { url: banner17 },
  // { url: banner18 },
  // { url: banner19 },
  // { url: banner20 },
  // { url: banner21 },
  // { url: banner22 },
  // { url: banner23 },
  // { url: banner24 },
  // { url: banner25 },
  // { url: banner26 },
  // { url: banner27 },
  // { url: banner28 },
  // { url: banner29 },
  // { url: banner30 },
  // { url: banner31 },
  // { url: banner32 },
  // { url: banner33 }
];


function Home() {
  const [list, setList] = React.useState();
  const [gallery, setGallery] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [offers, setOffersList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const layout = [
    {
      breakpoint: 1200,
      cols: 3,
      rows: 1,
      gap: 2,
      loop: true,
      autoplay: 1500,
    },
    {
      breakpoint: 1024,
      cols: 2,
      rows: 1,
      gap: "2%",
      loop: true,
      autoplay: 1500,
    },
    {
      breakpoint: 767,
      cols: 1,
      rows: 1,
      gap: 50,
      loop: true,
      autoplay: 1500,
    },
  ];

  const imageLayout = [
    {
      breakpoint: 767,
      cols: 1,
      rows: 1,
      gap: 50,
      loop: true,
      autoplay: 2000,
    },
  ];
  const getQuestions = () => {
    setLoading(true);
    Service.listQuestions()
      .then((res) => {
        setLoading(false);
        if (res?.data.status === "success") {
          setList(res?.data.response);
        }
      })
      .catch((err) => {});
  };

  const getGallery = () => {
    Service.getGallery()
      .then((res) => {
        setGallery(res?.data);
      })
      .catch((err) => {});
  };

  const getReviews = () => {
    Service.getReviews()
      .then((res) => {
        setReviews(res?.data);
      })
      .catch((err) => {});
  };

  const getOffers = () => {
    Service.getOffers()
      .then((res) => {
        setOffersList(res?.data);
      })
      .catch((err) => {});
  };

  const [openPop, setOpenPop] = useState(false);

  const handleClosePop = () => {
    setOpenPop(false);
  };

  const gotoMobile = (link) => {
    if (/Mobi/.test(navigator.userAgent)) {
      window.open(link);
    } else {
      setOpenPop(true);
    }
  };

  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  useEffect(() => {
    getQuestions();
    getGallery();
    getReviews();
    getOffers();
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#27B587", height: "auto" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2, lg: 2 }}
            lg={12}
            sx={{ paddingTop: { lg: "30px" } }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ width: "100%", paddingLeft: { lg: "40px" } }}>
                <Stack sx={{ width: "100%" }} spacing={2}>
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
                  <Typography
                    className="welcome-text"
                    sx={{ textAlign: { lg: "initial", xs: "center" } }}
                  >
                    Welcome to
                  </Typography>
                  <Typography
                    className="welcome-mainText"
                    sx={{ textAlign: { lg: "initial", xs: "center" } }}
                  >
                    COME ON DA
                  </Typography>
                  <Typography
                    className="welcome-paragraph"
                    sx={{
                      width: { lg: "80%", md: "100%", xs: "90%" },
                      textAlign: { lg: "initial", xs: "center" },
                      padding: { lg: "0px", xs: "18px" },
                    }}
                  >
                    Come On Da (COD) is a fun app which lets you challenge your
                    friends and family. It is a social prediction game for
                    sports, and general topics and events. COD is a great way to
                    stay connected and engage with your peers using the fun
                    element of gambling
                  </Typography>
                  <Box
                    sx={{ alignSelf: { lg: "normal", xs: "center" } }}
                    style={{ display: "flex", gap: "15px" }}
                  >
                    <Link
                      className="store-text"
                      sx={{ textDecoration: "none" }}
                      href="https://play.google.com/store/apps/details?id=comeonda.com"
                    >
                      <Button className="playstore-btn">
                        <Box style={{ display: "flex" }}>
                          <Box
                            component="img"
                            src={Playstore}
                            width={165}
                            height={160}
                            style={{ marginRight: "8px" }}
                          ></Box>
                        </Box>
                      </Button>
                    </Link>

                    <Link
                      className="store-text"
                      sx={{ textDecoration: "none" }}
                      href="https://apps.apple.com/in/app/come-on-da/id1641669178"
                    >
                      <Button className="playstore-btn">
                        <Box style={{ display: "flex" }}>
                          <Box
                            component="img"
                            src={Appstore}
                            width={165}
                            height={160}
                            style={{ marginRight: "5px" }}
                          ></Box>
                        </Box>
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {images && images.length > 1 ? (
                <Carousel
                  cols={1}
                  gap={10}
                  loop
                  autoplay={1500}
                  responsiveLayout={imageLayout}
                  showDots={true}
                >
                  {images.length > 0 &&
                    images.map((item, index) => (
                      <Carousel.Item key={index}>
                        <img src={item.url} alt="" width="100%" height="100%" />
                      </Carousel.Item>
                    ))}
                </Carousel>
              ) : (
                <img src={images[0].url} alt="" width="100%" height="100%" />
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box className="feed-box">
          <Box
            sx={{
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "25px",
            }}
          >
            <Typography className="second-heading">Latest Feeds</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
            {!loading ? (
              <Box
                sx={{
                  display: "grid",
                  columnGap: {
                    xs: "2rem",
                    md: "3rem",
                    lg: "3rem",
                    xl: "5rem",
                  },
                  rowGap: 5,
                  gridTemplateColumns: {
                    xs: "auto",
                    sm: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  },
                  gridTemplateRows: "repeat(1, auto)",
                }}
              >
                {list?.map((item, index) => (
                  <Card sx={{ maxWidth: 345 }} key={index}>
                    <CardContent>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          className={
                            index === 0 || index === 3
                              ? "cardBtn"
                              : index === 1 || index === 4
                              ? "cardBtn2"
                              : "cardBtn3"
                          }
                          sx={{
                            width: "55px",
                            height: "55px",
                            color: "#FFFFFF",
                            fontSize: "18px",
                            borderRadius: "16px",
                          }}
                        >
                          {`0${index + 1}`}
                        </Button>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Typography className="question-tag">
                            {item.question}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Box sx={{ width: "100%" }}>
                        <Divider
                          sx={{ color: "#CCD2E3", padding: "5px 0px 5px 0px" }}
                        />
                        <Button
                          sx={{ float: "right", height: "35px", mt: 1 }}
                          className="playBtn"
                          onClick={() => gotoMobile(item?.short_link)}
                        >
                          Play now
                        </Button>
                      </Box>
                    </CardActions>
                  </Card>
                ))}
              </Box>
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Loader
                  type="spin"
                  color="#747070"
                  delay={0}
                  height={40}
                  width={40}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#E5E5E5", height: "auto" }}>
          <Box
            sx={{
              textAlign: "center",
              paddingTop: "60px",
              paddingBottom: "40px",
            }}
          >
            <Typography
              className="second-heading"
              sx={{ marginBottom: "25px" }}
            >
              How it Works
            </Typography>
            <Typography
              className="second-subHead"
              sx={{
                width: { lg: "50%", xs: "75%" },
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              It is a social prediction app where you can create questions and
              predictions based on live matches.
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={{ xs: 4, md: 5, lg: 5 }}
              lg={12}
              sx={{ padding: { lg: "30px" }, marginLeft: "10px" }}
            >
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box component="img" src={Present} alt="Present"></Box>
                    <p className="card-heading">
                      Win rewards and gift vouchers from your nearest shops
                    </p>
                    <p className="card-subHead">
                      For accurate predictions and the answers to questions
                      asked, shop owners offer exciting rewards and gift
                      vouchers
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box component="img" src={Bet} alt="Present"></Box>
                    <p className="card-heading">
                      Earn coins by answering questions
                    </p>
                    <p className="card-subHead">
                      Ask and answer questions and predictions. Collect coins
                      and challenge your fellow players.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box component="img" src={Ball} alt="Present"></Box>
                    <p className="card-heading">
                      Predict every moment in the game
                    </p>
                    <p className="card-subHead">
                      Enhance the excitement of the game by making predictions
                      on every moment of the match
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {offers.length > 0 && (
        <Container maxWidth="xl">
          <Box
            sx={{ bgcolor: "#FFFFFF", height: "auto", paddingBottom: "40px" }}
          >
            <Box
              sx={{
                textAlign: "center",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              <Typography className="second-heading">Offers</Typography>
            </Box>

            <Carousel responsiveLayout={layout} cols={3} gap={"4%"} loop>
              {offers.map((item, index) => (
                <Carousel.Item key={index}>
                  <Card
                    sx={{
                      boxShadow:
                        "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="200"
                      image={item.featured_image}
                      onClick={() => handleShow(item.featured_image)}
                      sx={{ cursor: "pointer" }}
                    />
                    <CardContent sx={{ height: "100px" }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        dangerouslySetInnerHTML={{ __html: item?.post_content }}
                      ></Typography>
                    </CardContent>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Box>
        </Container>
      )}
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#FFFFFF", height: "auto", paddingBottom: "40px" }}>
          <Box
            sx={{
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <Typography className="second-heading">Gallery</Typography>
          </Box>
          <Carousel responsiveLayout={layout} cols={3} gap={"4%"} loop>
            {gallery.length > 0 &&
              gallery.map((item, index) => (
                <Carousel.Item key={index}>
                  <Card
                    sx={{
                      boxShadow:
                        "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="340"
                      image={item.featured_image}
                    />
                    <CardContent sx={{ height: "100px" }}>
                      <Typography variant="body2" color="text.secondary">
                        {item?.post_title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Carousel.Item>
              ))}
          </Carousel>
        </Box>
      </Container>

      <Dialog
        open={show}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "end" }}>
          <CloseSharpIcon
            sx={{
              cursor: "pointer",
              color: "#01537A",
            }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="selected"
            width="500px"
            height="500px"
          />
        </DialogContent>
      </Dialog>

      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#E5E5E5", height: "auto" }}>
          <Box sx={{ textAlign: "center", paddingTop: "30px" }}>
            <Typography className="second-heading">Reviews</Typography>
          </Box>
          <AwesomeSlider bullets={false} mobileTouch={false}>
            {reviews.length > 0 &&
              reviews.map((item, index) => (
                <Box
                  sx={{ display: "flex" }}
                  className="content-box"
                  key={index}
                >
                  <ReactPlayer url={item.reviewVideo} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      padding: { xs: "5px", md: "2px" },
                    }}
                    className="text-box"
                    dangerouslySetInnerHTML={{ __html: item?.post_content }}
                  ></Box>
                </Box>
              ))}
          </AwesomeSlider>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#FFFFFF", height: "auto" }}>
          <Box sx={{ textAlign: "center", paddingTop: "100px" }}>
            <Typography
              className="second-heading"
              sx={{ marginBottom: "25px" }}
            >
              Awesome Features
            </Typography>
            <Typography
              className="second-subHead"
              sx={{
                width: { lg: "50%", sm: "70%" },
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Look for the features that make our app exciting and great.
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3, lg: 3 }}
              lg={12}
              sx={{ padding: { lg: "60px" } }}
            >
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  className="features-left"
                  sx={{ padding: { lg: "1px", xs: "20px" } }}
                >
                  <Box>
                    <p className="features-heading">Bet creation</p>
                    <p className="features-subHead">
                      Match related bet questions are created with coins and
                      users can play and win
                    </p>
                  </Box>
                  <Box>
                    <p className="features-heading">Question creation</p>
                    <p className="features-subHead">
                      General questions are created with coins and users can
                      play and win
                    </p>
                  </Box>
                  <Box>
                    <p className="features-heading">Live match prediction</p>
                    <p className="features-subHead">
                      Users predict every ball of a match in live and win coins
                    </p>
                  </Box>
                  <Box>
                    <p className="features-heading">Offer creation</p>
                    <p className="features-subHead">
                      Shop owners give exciting offers of their products along
                      with questions
                    </p>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={6}
                sx={{ textAlignLast: "center" }}
              >
                <Box
                  component="img"
                  src={Features}
                  alt="Feautures"
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: { lg: "450px", sm: "300px", xs: "280px" },
                    height: { lg: "600px", sm: "400px", xs: "350px" },
                  }}
                ></Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Box
                  className="features-right"
                  sx={{ padding: { lg: "1px", xs: "20px" } }}
                >
                  <Box>
                    <p className="features-heading">Lucky draw</p>
                    <p className="features-subHead">
                      Winners of a question are selected as the offer winners
                      through a lucky draw
                    </p>
                  </Box>
                  <Box>
                    <p className="features-heading">Activities</p>
                    <p className="features-subHead">
                      If coins are insufficient, a user can do activities like
                      sing a song and request coins to friends with that
                    </p>
                  </Box>
                  <Box>
                    <p className="features-heading">Collect coins</p>
                    <p className="features-subHead">
                      You can collect coins by winning bet, questions,
                      activities or watching advertisements
                    </p>
                  </Box>
                  <Box>
                    <p className="features-heading">Share matches to club</p>
                    <p className="features-subHead">
                      Bet matches can be shared to the club by any of the users
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            className="get-app"
            sx={{
              width: "100%",
              //height: { lg: '375px', md: '390px', sm: '440px', xs: '570px' },
              height: "auto",
              marginBottom: "10px",
            }}
          >
            <Box style={{ textAlign: "center", padding: "20px" }}>
              <p className="getapp-head">Get App</p>
              <p className="getapp-subHead">
                Come On Da (COD) is a fun app which lets you challenge your
                friends and family. It is a social prediction game for sports,
                and general topics and events. COD is a great way to stay
                connected and engage with your peers using the fun element of
                gambling.
              </p>
              <Box
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <Link
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                  href="https://play.google.com/store/apps/details?id=comeonda.com"
                >
                  <Button className="playstore-btn">
                    <Box style={{ display: "flex" }}>
                      <Box
                        component="img"
                        src={Playstore}
                        width={165}
                        height={160}
                        style={{ marginRight: "8px" }}
                      ></Box>
                    </Box>
                  </Button>
                </Link>

                <Link
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                  href="https://apps.apple.com/in/app/come-on-da/id1641669178"
                >
                  <Button className="playstore-btn">
                    <Box style={{ display: "flex" }}>
                      <Box
                        component="img"
                        src={Appstore}
                        width={165}
                        height={160}
                        style={{ marginRight: "5px" }}
                      ></Box>
                    </Box>
                  </Button>
                </Link>
              </Box>
              <Box
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Link
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                  href="https://www.facebook.com/profile.php?id=100084836059535"
                >
                  <IconButton>
                    <FacebookRoundedIcon sx={{ fontSize: "25px" }} />
                  </IconButton>
                </Link>

                <Link
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                  href="https://www.youtube.com/channel/UCCQqbG3oZpjYOQlMDaUO5gg"
                >
                  <IconButton>
                    <YouTubeIcon sx={{ fontSize: "25px" }} />
                  </IconButton>
                </Link>

                <Link
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                  href="https://www.instagram.com/comeonda_/"
                >
                  <IconButton>
                    <InstagramIcon sx={{ fontSize: "25px" }} />
                  </IconButton>
                </Link>

                <Link
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                  href="https://twitter.com/ComeOnDa123"
                >
                  <IconButton>
                    <TwitterIcon sx={{ fontSize: "25px" }} />
                  </IconButton>
                </Link>
              </Box>
              <Box
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Link
                  href="/termsandconditions"
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                >
                  Terms & Conditions
                </Link>
                <Typography
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                >
                  |
                </Typography>
                <Link
                  href="/privacypolicy"
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
                <Typography
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                >
                  |
                </Typography>
                <Link
                  href="https://www.comeonda.com/blog"
                  className="store-text"
                  sx={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        {openPop && <Popup open={openPop} handleClose={handleClosePop} />}
      </Container>
    </>
  );
}

export default Home;
