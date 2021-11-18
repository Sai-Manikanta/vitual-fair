import { useHistory } from 'react-router-dom'
import LobbyVideo from '../videos/lobby.mp4';

function Landing3dContent() {
    const history = useHistory();

    const changePage = page => {
        history.push(page);
    }

    return (
        <div className="flex-grow relative"> 
            <img 
                src="images/LobbyTrasparentOverlay.png"
                alt="LobbyIMAGEFORTESTING"
                className="absolute w-full h-full"
                useMap="#image-map"
            />

            <map name="image-map">
                <area target="" alt="Conference" onClick={() => changePage('/conference')} title="Conference" coords="170,350,441,488" shape="rect" className="cursor-pointer" />
                <area target="" alt="Exibition" onClick={() => changePage('/exibition')} title="Exibition" coords="1002,496,1290,349" shape="rect" className="cursor-pointer" />
                <area target="" alt="Meeting" onClick={() => changePage('/meeting')} title="Meeting" coords="206,339,445,277" shape="rect" className="cursor-pointer" />
                <area target="" alt="Poster" onClick={() => changePage('/poster')} title="Poster" coords="1000,341,1217,278" shape="rect" className="cursor-pointer" />
                <area target="" alt="Information Desk" onClick={() => changePage('/information-desk')} title="Information Desk" coords="653,482,785,400" shape="rect" className="cursor-pointer" />
                <area target="" alt="Pitstop" onClick={() => changePage('/pitstop')} title="Pitstop" coords="677,577,762,549" shape="rect" className="cursor-pointer" />
            </map>

            <video 
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '100%', objectFit: 'fill', objectPosition: 'top', position: 'absolute', top: 0, left: 0, zIndex: '-1' }} 
            >
                <source src={LobbyVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    )
}

export default Landing3dContent
