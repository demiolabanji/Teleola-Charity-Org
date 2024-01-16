import React from 'react'
import { Typography, Row, Col, Card, Carousel, Divider } from 'antd'
import './styles.css' // CSS file for styling
import AppCard from '../../components/Card'
import { Link } from 'react-router-dom'
import { FaTiktok } from 'react-icons/fa'

import mainCarouselImage1 from '../../assets/images/pages/church/main-carousel/1.jpeg'
import mainCarouselImage2 from '../../assets/images/pages/church/main-carousel/2.jpeg'
import mainCarouselImage3 from '../../assets/images/pages/church/main-carousel/3.jpeg'
import mainCarouselImage4 from '../../assets/images/pages/church/main-carousel/4.jpeg'
import mainCarouselImage5 from '../../assets/images/pages/church/main-carousel/5.jpeg'
import mainCarouselImage6 from '../../assets/images/pages/church/main-carousel/6.jpeg'

import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography

const mainCarouselImages = [
  mainCarouselImage1,
  mainCarouselImage5,
  mainCarouselImage2,
  mainCarouselImage3,
  mainCarouselImage4,
  mainCarouselImage6,
]

const iframeStyle = {
  height: '100%',
  width: '100%',
  border: '0',
}

const mapContainerStyle = {
  overflow: 'hidden',
  maxWidth: '100%',
  height: '500px',
}

const mapDisplayStyle = {
  height: '100%',
  width: '100%',
  maxWidth: '100%',
}
const ChurchPage = () => {
  return (
    <div>
      <Title level={1}>Messiah Cherubim & Seraphim (C&S) Church</Title>

      <Title
        level={4}
        style={{ paddingBottom: 50, fontStyle: 'italic', fontWeight: 'normal' }}
      >
        "The Way of Salvation"
      </Title>

      <Row gutter={16} style={{ alignContent: 'center', alignItems: 'center' }}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Carousel autoplay>
            {mainCarouselImages?.map((carouselImage) => {
              return (
                <div>
                  <AppCard height="400px" image={carouselImage} opacity="0" />
                </div>
              )
            })}
          </Carousel>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="main-card">
            <Card bordered={false}>
              <Title level={2}>Service Times</Title>

              <Title level={4}>Sunday Worship Service</Title>

              <Paragraph>11:30am - 2:30pm</Paragraph>

              <Title level={4}>Friday Night Vigil</Title>

              <Paragraph>From 12:00am</Paragraph>
            </Card>
          </div>
        </Col>
      </Row>

      <Divider />

      <Title level={2}>Where To Find Us</Title>

      <Row gutter={16} className="card-row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div style={mapContainerStyle}>
            <div id="my-map-display" style={mapDisplayStyle}>
              <iframe
                title="google-maps"
                style={iframeStyle}
                src="https://www.google.com/maps/embed/v1/place?q=Phoenix+Community+Centre,+Westow+Street,+London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              ></iframe>
            </div>
            <style>
              {`
          #my-map-display img.text-marker {
            max-width: none !important;
            background: none !important;
          }
          img {
            max-width: none;
          }
        `}
            </style>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card>
            <Title level={3}>How To Get Here</Title>
            <Divider />

            <Title level={4}>Car Parking</Title>

            <Paragraph>
              3 hours free parking in Sainsbury's (contact us to register for
              extended parking - limited spaces available)
            </Paragraph>
            <Title level={4}>Buses</Title>
            <Paragraph>450 / 432 / 417 / 322 / 249 / N137 / N2</Paragraph>

            <Title level={4}>Train Stations</Title>

            <Paragraph>Crystal Palace (13 minute walk)</Paragraph>
            <Paragraph>Gipsy Hill (10 minute walk)</Paragraph>
          </Card>
        </Col>
      </Row>
      <Divider />

      <Title level={2}>Worship With Us LIVE</Title>

      <Row gutter={16} className="card-row">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Link to="https://www.facebook.com/timewithteleola/">
            <FacebookOutlined style={{ fontSize: '96px' }} />
          </Link>
          <Title level={4}>@timewithteleola</Title>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Link to="https://www.instagram.com/messiahchurchuk/">
            <InstagramOutlined style={{ fontSize: '96px' }} />
          </Link>

          <Title level={4}>@messiahchurchuk</Title>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Link to="https://tiktok.com/@messiahcands">
            <FaTiktok style={{ fontSize: '96px' }} />
          </Link>

          <Title level={4}>@messiahcands</Title>
        </Col>
      </Row>
    </div>
  )
}

export default ChurchPage
