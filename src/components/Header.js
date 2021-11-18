import { Link } from 'react-router-dom'
import { useUiModeContext } from '../contexts/UiModeContext'

function Header() {
    const { uiMode, setUiMode } = useUiModeContext();

    return (
        <header className="py-2 px-5 shadow flex justify-between items-center">
            <Link to="/">
                <img 
                    src="https://d246zmsm5ycwub.cloudfront.net/assets/event_images/BTS_2021_Logo_with_Dates_PNG.png" 
                    alt="logo"
                    className="h-6" 
                />
            </Link>
            
            {/* Toggle Switch */}
            <div 
                className="rounded-full p-2 shadow cursor-pointer flex justify-between items-center"
                onClick={() => setUiMode(uiMode => uiMode === '3d' ? '2d' : '3d')} // toggle 2d 3d modes
            >
                {(uiMode === '3d') && <span className="text-xs mr-1 select-none">3D</span>}
                <span 
                    className={`bg-blue-400 w-4 h-4 block rounded-full ${(uiMode === '3d') ? 'float-right' : 'float-left'}`}
                ></span>
                {(uiMode === '2d') && <span className="text-xs ml-1 select-none">2D</span>}
            </div>
        </header>
    )
}

export default Header
