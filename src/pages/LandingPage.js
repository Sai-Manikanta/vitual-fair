import { useUiModeContext } from '../contexts/UiModeContext';
import Landing2dContent from '../components/Landing2dContent';
import Landing3dContent from '../components/Landing3dContent';

function LandingPage() {
    const { uiMode } = useUiModeContext();

    return (
        <>
            { (uiMode === '3d') ? <Landing3dContent /> : <Landing2dContent /> }
        </>
    )
}

export default LandingPage
