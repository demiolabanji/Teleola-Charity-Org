import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import './styles.css'
import { AppRoutes } from '../../constants.js'
const AppMenu = () => {
  const location = useLocation()

  return (
    <div className="appMenu">
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        className="menu"
      >
        {/* Left-aligned items */}
        <Menu.Item key="/" className="menu-item-left menu-item-static">
          <Link to="/">
            <div style={{ fontSize: '1.8em' }}>Teleola Ladipo Oganla</div>
          </Link>
        </Menu.Item>

        {/* Right-aligned items */}
        <Menu.Item key={AppRoutes.ABOUT} className="menu-item-right">
          <Link to={AppRoutes.ABOUT}>About</Link>
        </Menu.Item>
        <Menu.Item key={AppRoutes.CHARITY} className="menu-item-right">
          <Link to={AppRoutes.CHARITY}>Charity</Link>
        </Menu.Item>

        <Menu.Item key={AppRoutes.CONSULTATION} className="menu-item-right">
          <Link to={AppRoutes.CONSULTATION}>Consultation</Link>
        </Menu.Item>

        <Menu.Item
          key={AppRoutes.FAITH_AND_ENCOURAGEMENT}
          className="menu-item-right"
        >
          <Link to={AppRoutes.FAITH_AND_ENCOURAGEMENT}>
            Faith + Encouragement
          </Link>
        </Menu.Item>

        <Menu.Item key={AppRoutes.CHURCH} className="menu-item-right">
          <Link to={AppRoutes.CHURCH}>Messiah C&S Church</Link>
        </Menu.Item>
        {/* Add more menu items as needed */}
      </Menu>
    </div>
  )
}

export default AppMenu
