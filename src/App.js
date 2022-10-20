import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { SocialIcon } from "react-social-icons";
import './App.css';
import animation from './assets/jsons/background.json';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    // here is where we will declare lottie animation
    // "animation" is what we imported before animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <div className="main">
        <div className="banner">
          <div className="headline">
            <motion.h1 initial={{
              opacity: 0
            }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 1.5,
              }}>YOUR RIDE IS <br />
              <span>GETTING READY</span> </motion.h1>
          </div>
          <motion.div initial={{
            opacity: 0
          }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 2,
            }} className="tagline">
            <p>We are working hard to bring you remarkable travel experiences.</p>
            <p>Get exclusive news and updates before the commercial launch by following our official social channels.

            </p>
          </motion.div>

          <div className="icons">
            {/* <FacebookIcon style={{ fontSize: '2rem' }} /> */}
            {/* <InstagramIcon style={{ fontSize: '2rem' }} /> */}
            <SocialIcon bgColor="rgb(58, 57, 57)" url="https://www.facebook.com/dtravelly" />
            <SocialIcon bgColor="rgb(58, 57, 57)" url="https://www.instagram.com/dtravelly/" />
            {/* <SocialIcon bgColor="rgb(58, 57, 57)" url="dtravelly@gmail.com" /> */}
          </div>

        </div>
        <div className="animationbackrgound">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
}

export default App;
