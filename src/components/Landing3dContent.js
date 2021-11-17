import LobbyVideo from '../videos/lobby.mp4';

function Landing3dContent() {
    return (
        <div className="flex-grow relative">
            <img 
                src="images/LobbyTrasparentOverlay.png"
                alt="LobbyIMAGEFORTESTING"
                className="absolute w-full h-full"
                usemap="#image-map"
            />

            <map name="image-map">
                <area target="_self" alt="Conference" title="Conference" href="conference" coords="170,350,441,488" shape="rect" />
                <area target="_self" alt="Exibition" title="Exibition" href="exbition" coords="1002,496,1290,349" shape="rect" />
                <area target="_self" alt="Meeting" title="Meeting" href="meeting" coords="206,339,445,277" shape="rect" />
                <area target="_self" alt="Poster" title="Poster" href="Poster" coords="1000,341,1217,278" shape="rect" />
                <area target="_self" alt="Information Desk" title="Information Desk" href="Information desk" coords="653,482,785,400" shape="rect" />
                <area target="_self" alt="Pitstop" title="Pitstop" href="Pitstop" coords="677,577,762,549" shape="rect" />
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
