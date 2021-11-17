function Header({ is3dEnabled, setIs3dEnabled }) {
    return (
        <header className="py-2 px-5 shadow flex justify-between items-center">
            <img 
                src="https://d246zmsm5ycwub.cloudfront.net/assets/event_images/BTS_2021_Logo_with_Dates_PNG.png" 
                alt="logo"
                className="h-6" 
            />
            
            {/* Toggle Switch */}
            <div 
                className="rounded-full p-2 shadow cursor-pointer flex justify-between items-center"
                onClick={() => setIs3dEnabled(!is3dEnabled)}
            >
                {is3dEnabled && <span className="text-xs mr-1 select-none">3D</span>}
                <span 
                    className={`bg-blue-400 w-4 h-4 block rounded-full ${is3dEnabled ? 'float-right' : 'float-left'}`}
                ></span>
                {!is3dEnabled && <span className="text-xs ml-1 select-none">2D</span>}
            </div>
        </header>
    )
}

export default Header
