import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';

// importing page components
import LandingPage from './pages/LandingPage';
import MeetingPage from './pages/MeetingPage';
import ConferencePage from './pages/ConferencePage';
import InformationDeskPage from './pages/InformationDeskPage';
import PosterPage from './pages/PosterPage';
import ExibitionPage from './pages/ExibitionPage';
import PitstopPage from './pages/PitstopPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/meeting" component={MeetingPage} />
                <Route path="/conference" component={ConferencePage} />
                <Route path="/information-desk" component={InformationDeskPage} />
                <Route path="/poster" component={PosterPage} />
                <Route path="/exibition" component={ExibitionPage} />
                <Route path="/pitstop" component={PitstopPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App
