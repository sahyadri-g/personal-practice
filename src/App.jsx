import './App.css'
import ClickTracker from './components/ClickTracker';
import LikeButton from './components/LikeButton';
import PaymentStatus from './components/PaymentStatus';
import PriceLabel from './components/PriceLabel';
import RatingSelector from './components/RatingSelector';
import ShowPassword from './components/ShowPassword';
import StockStatus from './components/StockStatus';
import ThemeToggle from './components/ThemeToggle';
import TimeGreeting from './components/TimeGreeting';
import UserExperience from './components/UserExperience';
import VisitorCounter from './components/VisitorCounter';
function App() {

    // const Hours = new Date().getHours()

  return (
    <>
    {/* <UserExperience name="Sandesh" startYear={2017} /> */}
    <PriceLabel price={0}/>
    {/* <PaymentStatus status="success"/> */}
    {/* <TimeGreeting Hours={Hours}/> */}
    {/* <StockStatus quantity={0}/> */}
    {/* <VisitorCounter/> */}
    {/* <LikeButton/> */}
    {/* <ClickTracker/> */}
    {/* <ThemeToggle/> */}
    {/* <RatingSelector/> */}
    {/* <ShowPassword/> */}
    </>
  )
}

export default App
