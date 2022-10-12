import animation  from './assets/jsons/background.json'
import './App.css';
import Lottie from "react-lottie";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
          <h1>YOUR RIDE IS <br />
<span>GETTING READY</span> </h1>
        </div>
        <div className="tagline">
          <p>We are working hard to bring you remarkable travel experiences.</p>
          <p>Get exclusive news and updates before the commercial launch by following our official social channels.

</p>
        </div>

        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
        </div>

      </div>
      <div className="animationbackrgound">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
      </div>
    </div>
  );
}

export default App;
