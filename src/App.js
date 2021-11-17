import { useState } from 'react'
import Header from './components/Header';
import Landing3dContent from './components/Landing3dContent';
import Landing2dContent from './components/Landing2dContent';

function App() {
    const [is3dEnabled, setIs3dEnabled] = useState(true);

    return (
        <div className="flex flex-col h-screen">
            <Header is3dEnabled={is3dEnabled} setIs3dEnabled={setIs3dEnabled} />
            { is3dEnabled ? <Landing3dContent /> : <Landing2dContent /> }
        </div>
    )
}

export default App
