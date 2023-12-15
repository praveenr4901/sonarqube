import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from "./logoNew.png";
import * as React from 'react';
const Help = () => {
  return (
    <body style={{ background: 'linear-gradient(to right bottom, #FFFFFF, #D6FBE0 )' }}>
      <Container>
        <section>
          <div className="text-center mb-4 pb-2 ">
            <Box component="img" src={Logo} alt="Comeonda" width="170px" height="170px" sx={{ marginLeft: { lg: '0px', xs: 'auto' }, marginRight: { lg: '0px', xs: 'auto' } }} />
          </div>
          <h2 className="text-center mb-4 pb-2 fw-bold">Help</h2>
          <div className="row">
          <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                1. How to win the Leaderboard challenge?
              </h5>
              <p>
              Simple! Earn as many coins from Come On Da to be at the top of the leaderboard!
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                2. How to earn Coin rewards?
              </h5>
              <p>
              - Referral coins - Win 200 coins for referring a friend to the Come On Da app. Win a bonus of 500 coins when your friend creates their first question!<br />
              - Participate & win in prediction contests - Play the prediction contests and win for gaining coins.<br />
              - Watch ads - Watch ads on the app and win coin rewards
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                3. Notification problem
              </h5>
              <p>
                Make sure notification settings on your phone are active and there is proper internet connection.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                4. Unable to play video or music files</h5>
              <p>
                Make sure there is proper internet connection and videos and music are uploaded correctly. Make sure the device date and time is set correctly
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                5. Unable to connect to bet /general question/ ball by ball challenge</h5>
              <p>
                Make sure the device, the mobile connector / wifi setting is properly configured.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                6. After watching the advertisement, there is no change in coin count
              </h5>
              <p>
                Make sure the device internet connection is proper and also check the video play only one time.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                7. Unable to chat with players
              </h5>
              <p>
                Make sure that the person must be your follower and vice versa.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                8. Unable to upload profile picture
              </h5>
              <p>
                Make sure that the internet connection is proper.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                9. Not a member in a particular club
              </h5>
              <p>
                This is because the club admin did not add you to the group/ club.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 mb-6">
              <h5 className="mb-3 fw-bold">
                10. Coin count not updated after request
              </h5>
              <p>
                This may be because the player to whom you requested coins did not accept your request.
              </p>
            </div>
            <div className="col-md-12 col-lg-12 mb-12">
              <p>
                For any further information or queries please contact <strong><u>help@comeonda.com</u></strong>
              </p>
            </div>
          </div>
        </section>
      </Container>
    </body>
  );
};

export default Help;