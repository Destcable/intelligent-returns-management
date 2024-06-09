import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./ui/Header"
import Sidebar from "./ui/Sidebar"
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

const ReturnsManagement = () => <div>Управление возвратами контент</div>;
const Dashboards = () => <div>Dashboards контент</div>;
const Reports = () => <div>Отчеты контент</div>;

const App = () => (
    <Router>
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route
                path="*"
                element={
                    <div className="d-flex flex-column h-100">
                        <Header />
                        <div className="d-flex flex-grow-1">
                            <Sidebar />
                            <div className='flex-grow-1 p-3'>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/returns" element={<ReturnsManagement />} />
                                    <Route path="/dashboards" element={<Dashboards />} />
                                    <Route path="/reports" element={<Reports />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                }
            />
        </Routes>
    </Router>
);

export default App;