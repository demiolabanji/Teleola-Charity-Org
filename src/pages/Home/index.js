// src/HomePage.js
import React from 'react'
import { Typography, Row, Col, Avatar, Button } from 'antd'
import {} from 'antd'
import './styles.css' // CSS file for styling
import { AppRoutes } from '../../constants.js'
import AppCard from '../../components/Card'

import card1 from '../../assets/images/pages/home/cards/1.jpeg'
import card2 from '../../assets/images/pages/home/cards/2.jpeg'
import card3 from '../../assets/images/pages/home/cards/3.jpeg'
import handsHolding from '../../assets/images/pages/home/hands-holding.jpeg'

const { Title, Paragraph } = Typography

const HomePage = () => {
  return (
    <div>
      <Title level={1}>Prophetess Teleola Ladipo Oganla BEM (JP)</Title>
      <Title level={3} style={{ paddingBottom: 50 }}>
        Mother | Prophetess | Counsellor | Founder of TMCO Charity
      </Title>
      <Row gutter={16} className="card-row">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <AppCard
            title="Prophetess Teleola Ladipo Oganla"
            image={card1}
            link={AppRoutes.ABOUT}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <AppCard
            title="Consultation Services"
            image={card2}
            link={AppRoutes.CONSULTATION}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <AppCard
            title="TMCO Charity"
            image={card3}
            link={AppRoutes.CHARITY}
          />
        </Col>
      </Row>

      <Row align="middle" className="mailing-list-section">
        <Col xs={24} sm={12} md={6} lg={4} xl={4} className="avatar-col">
          <Avatar size={128} src={handsHolding} alt="Lady Avatar" />
        </Col>
        <Col xs={24} sm={12} md={18} lg={20} xl={20}>
          <Title level={3}>
            Seeking spiritual guidance, daily prayers, motivation and healing?
          </Title>
          <Paragraph>
            Join our faith and encouragement mailing list where the prophetess
            will release new updates, daily prayers and exclusive information on
            upcoming events you won't want to miss.
          </Paragraph>
          <Button type="primary" href={AppRoutes.FAITH_AND_ENCOURAGEMENT}>
            Join Now
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
