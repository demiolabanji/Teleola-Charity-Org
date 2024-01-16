import './App.css'
import AppMenu from './components/AppMenu/index'
import AppFooter from './components/AppFooter/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { AppRoutes } from './constants'
import { Content } from 'antd/es/layout/layout'
import CharityPage from './pages/Charity'
import ConsultationPage from './pages/Consultation'
import { Layout } from 'antd'
import ChurchPage from './pages/Church'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import FaithAndEncouragementPage from './pages/FaithAndEncouragement'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <AppMenu />

          <Content style={{ padding: '0 50px' }}>
            <Routes>
              <Route path={AppRoutes.HOME} element={<HomePage />} />
              <Route path={AppRoutes.ABOUT} element={<AboutPage />} />
              <Route path={AppRoutes.CHARITY} element={<CharityPage />} />
              <Route path={AppRoutes.CHURCH} element={<ChurchPage />} />
              <Route
                path={AppRoutes.CONSULTATION}
                element={<ConsultationPage />}
              />
              <Route
                path={AppRoutes.FAITH_AND_ENCOURAGEMENT}
                element={<FaithAndEncouragementPage />}
              />

              <Route
                path={AppRoutes.PRIVACY_POLICY}
                element={<PrivacyPolicyPage />}
              />
            </Routes>
          </Content>
          <AppFooter />
        </Layout>
      </Router>
    </div>
  )
}

export default App
