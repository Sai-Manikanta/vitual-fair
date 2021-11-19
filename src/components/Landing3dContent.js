import { Link } from 'react-router-dom'
import LobbyVideo from '../videos/lobby.mp4';
import PulseCircle from './PulseCircle';

function Landing3dContent() {
    return (
        <div className="flex-grow relative"> 
            <video autoPlay loop muted
                style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'fill', zIndex: '-1' }}
            >
                <source src={LobbyVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <iframe src="https://www.youtube.com/embed/h-jZQaiCmps" title="Google for India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                style={{ width: '25.8%', height: '25.6%', position: 'absolute', top: '7.3%', left: '37.1%' }}
            ></iframe>

            <Link to="/meeting" style={{ width: '17.2%', height: '8.2%', position: 'absolute', top: '38%', left: '14%' }}>
                <PulseCircle positions={{ left: '88%' }} />
            </Link>
            <Link to="/poster" style={{ width: '18%', height: '8.2%', position: 'absolute', top: '38%', right: '13.2%' }}>
                <PulseCircle positions={{ left: '60%' }} />
            </Link>
            <Link to="/conference" style={{ width: '18.8%', height: '19.2%', position: 'absolute', top: '47%', left: '12%' }}>
                <PulseCircle positions={{ left: '88%' }} />
            </Link>
            <Link to="/exibition" style={{ width: '20%', height: '20.4%', position: 'absolute', top: '47%', right: '10%' }}>
                <PulseCircle positions={{ left: '78%' }} />
            </Link>
            <Link to="/information-desk" style={{ width: '10%', height: '11%', position: 'absolute', top: '54%', left: '45%' }}>
                <PulseCircle positions={{ top: '5px', left: '70%' }} />
            </Link>
            <Link to="/pitstop" style={{ width: '6%',height: '3.4%', position: 'absolute', top: '74.4%', left: '46.9%' }}>
                <PulseCircle positions={{ top: '15%', left: '-10%' }} />
            </Link>
        </div>
    )
}

export default Landing3dContent