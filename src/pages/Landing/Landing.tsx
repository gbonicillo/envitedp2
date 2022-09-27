import { Link } from 'react-router-dom';
import landingPageImage from './../../assets/landingPageImage.svg';
import styles from './Landing.module.css';

function Landing() {
    return (<div style={{
        backgroundColor: '#f6f2ff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
      }} className='container'>
        <div style={{width: '283px'}}>
          <h1 style={{marginBottom: '16px', color: '#240D57'}} className="text-4xl md:text-6xl font-bold">Imagine if <span className={styles.snapchat}>Snapchat</span><br/>had events.</h1>
          <p  style={{
            color: '#4f4f4f',
            marginBottom: '36px'
          }} className='text-base md:text-2xl'>Easily host and share events with your friends across any social media.</p>
        </div>
        <img src={landingPageImage} style={{
          width: '165.63px',
          height: '292px',
          marginBottom: '34px'
        }} />
        <Link to="/create">
          <button className='text-base font-bold button'>Create my event</button>
        </Link>
      </div>)
}

export default Landing;