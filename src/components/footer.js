/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-white text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block mt-3' style={{marginLeft: "200px"}}>
          <span className='h3'>Follow us</span>
        </div>

        <div>
           {/* eslint-disable-next-line react/jsx-no-target-blank */}
           <a href="https:github.com/Keyur1284" target="_blank"><button className="btn btn-lg btn-dark rounded-circle text-white"  style={{height: "75px"}}>
            <GitHubIcon sx={{ fontSize: 40 }} /> 
           </button></a>
           <a href="https://www.linkedin.com/in/keyur-govrani-b94277237/" target="_blank"><button className="btn btn-lg btn-dark rounded-circle text-white" style={{height: "75px"}}>
             <LinkedInIcon sx={{ fontSize: 40 }}  />
           </button></a>
           <a href="https://www.youtube.com/channel/UC0n7Hj6lAWRYQiFbIhhNn-A"><button className="btn btn-lg btn-dark rounded-circle text-white" style={{height: "75px"}}>
           <YouTubeIcon sx={{ fontSize: 40 }} />
           </button></a>
           <a href="https://twitter.com/_whimsicalguy/" target="_blank"><button className="btn btn-lg btn-dark rounded-circle text-white" style={{height: "75px"}}>
             <TwitterIcon sx={{ fontSize: 40 }} />
           </button></a>
           <a href="https://www.instagram.com/_keyurr/" target="_blank"><button className="btn btn-lg btn-dark rounded-circle text-white" style={{height: "75px"}}>
             <InstagramIcon sx={{ fontSize: 40 }} />
           </button></a>
           <a href="https://www.facebook.com/keyur.govrani" target="_blank"><button className="btn btn-lg btn-dark rounded-circle text-white" style={{height: "75px", marginRight: "73px"}}>
             <FacebookIcon sx={{ fontSize: 40 }} />
           </button></a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center d-flex justify-content-center text-md-start mt-1'>
          <MDBRow className='mt-2'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <p className='display-6'> <a href="https://github.com/Keyur1284/woc5.0-react-menuapp-keyur" target="_blank">
                <img src="https://i.pinimg.com/474x/13/4f/1e/134f1e4c68ac8dd76cbbb05dcc445e8e--kiwi-branding.jpg" alt="logo" className="rounded-circle me-3" style={{height: "50px", width: "50px"}}  />
                </a>
                KIWI FOODS
              </p>
              <p>
              A food menu website that displays pictures, prices 
              and descriptions of various food items offered by restaurants, cafes, or food establishments.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <BusinessIcon className="me-2" />
                 Gujarat, India
              </p>
              <p>
                <MailIcon className="me-2" /> keyurgovrani6912@gmail.com
              </p>
              <p>
                <PhoneIcon className="me-2" /> +91 95105 54403
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center bg-dark p-2'>
       Copyright © Keyur Govrani 2023
     </div>
    </MDBFooter>
  );
}