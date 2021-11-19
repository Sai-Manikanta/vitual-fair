import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';

// importing page components
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const MeetingPage = React.lazy(() => import('./pages/MeetingPage'));
const ConferencePage = React.lazy(() => import('./pages/ConferencePage'));
const InformationDeskPage = React.lazy(() => import('./pages/InformationDeskPage'));
const PosterPage = React.lazy(() => import('./pages/PosterPage'));
const ExibitionPage = React.lazy(() => import('./pages/ExibitionPage'));
const PitstopPage = React.lazy(() => import('./pages/PitstopPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <React.Suspense fallback={'Loading...'}>
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
            </React.Suspense>
        </div>
    )
}

export default App
