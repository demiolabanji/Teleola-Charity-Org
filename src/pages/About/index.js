// src/HomePage.js
import React from 'react'
import { Typography, Avatar, Divider } from 'antd'
import {} from 'antd'
import './styles.css' // CSS file for styling

import cardBackground from '../../assets/images/pages/home/card-background.jpeg'
const { Title, Paragraph } = Typography

const HomePage = () => {
  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Left Section */}
      <div style={{ flex: 1, paddingRight: '50px' }}>
        <Avatar size={256} src={cardBackground} />
        <Title level={2}>PROPHETESS TELEOLA OGANLA</Title>
        <Divider />
      </div>

      {/* Right Section */}
      <div className="section">
        <Paragraph>
          Prophetess Teleola Oganla is a minister of religion, a prophet, the
          founder of TMCO Charity and a spiritual counsellor. She has been
          working in the ministry of God for the past 25 years and specialises
          in spiritual deliverance, motivation, healing, counselling and
          prophecies.
          {/* Add the rest of the content here */}
        </Paragraph>

        <Paragraph>
          In 2015 she founded the Teleola Martha Christian Organisation which
          works to impact the lives of the underprivileged, widows, orphans and
          women facing domestic violence. In 2020 her charity was awarded with
          the British Empire Medalist Award from Her Majesty the Queen of
          England for her work and mission in helping those in need.
          {/* Add the rest of the content here */}
        </Paragraph>
      </div>
    </div>
  )
}

export default HomePage
