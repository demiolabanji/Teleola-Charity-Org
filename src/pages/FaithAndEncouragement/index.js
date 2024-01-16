import React from 'react'
import { Typography, Col, Carousel } from 'antd'
import './styles.css' // CSS file for styling
import MailChimpForm from '../../components/MailChimpForm'
import mainCarouselImage1 from '../../assets/images/pages/faith-and-encouragement/main-carousel/1.jpeg'
import mainCarouselImage2 from '../../assets/images/pages/faith-and-encouragement/main-carousel/2.jpeg'
import mainCarouselImage3 from '../../assets/images/pages/faith-and-encouragement/main-carousel/3.jpeg'
import mainCarouselImage4 from '../../assets/images/pages/faith-and-encouragement/main-carousel/4.jpeg'
import AppCard from '../../components/Card'

const mainCarouselImages = [
  mainCarouselImage1,
  mainCarouselImage2,
  mainCarouselImage3,
  mainCarouselImage4,
]

const { Title, Paragraph } = Typography
const FaithAndEncouragementPage = () => {
  return (
    <div>
      <Title level={1}>
        Seeking spiritual guidance, daily prayers, motivation and healing?
      </Title>
      <Carousel autoplay>
        {mainCarouselImages?.map((carouselImage) => {
          return (
            <div
              style={{ display: 'flex', justifyContent: 'center', padding: 50 }}
            >
              <AppCard height="500px" image={carouselImage} opacity="0" />
            </div>
          )
        })}
      </Carousel>

      <Paragraph style={{ fontSize: 28 }}>
        Join our mailing list where the Prophetess will share new updates, daily
        prayers and devotionals, daily encouragement, and exclusive information
        on upcoming events and engagements you won't want to miss.
      </Paragraph>

      <div style={{ display: 'flex', justifyContent: 'center', padding: 50 }}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <MailChimpForm />
        </Col>
      </div>
    </div>
  )
}

export default FaithAndEncouragementPage
