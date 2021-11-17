import LobbyVideo from '../videos/lobby.mp4';

function Landing3dContent() {
    return (
        <div className="flex-grow relative py-6 px-14">
            <video 
                autoPlay 
                loop 
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'fill',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1', 
                }}
            >
                <source src={LobbyVideo} type="video/mp4" />
            </video>
            <div 
                className="grid grid-cols-3 gap-7"
            >
                <div className="h-60 bg-green-500"></div>
                <div className="h-60 bg-green-500"></div>
                <div className="h-60 bg-green-500"></div>
            </div>
        </div>
    )
}

// style={{
//     position: 'absolute',
//     width: '100%',
//     left: '50%',
//     top: '50%',
//     height: '100%',
//     objectFit: 'cover',
//     transform: 'translate(-50%, -50%)',
//     zIndex: '-1'
// }}

// style={{
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//     objectFit: 'cover',
//     zIndex: '-1'
// }}

export default Landing3dContent
