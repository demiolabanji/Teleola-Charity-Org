import React, { useState } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Carousel,
  Divider,
  Modal,
} from 'antd'
import './styles.css' // CSS file for styling
import AppCard from '../../components/Card'
import { Link } from 'react-router-dom'

import mainCarouselImage1 from '../../assets/images/pages/charity/main-carousel/1.jpeg'
import mainCarouselImage2 from '../../assets/images/pages/charity/main-carousel/2.jpeg'
import mainCarouselImage3 from '../../assets/images/pages/charity/main-carousel/3.jpeg'
import mainCarouselImage4 from '../../assets/images/pages/charity/main-carousel/4.jpeg'
import mainCarouselImage5 from '../../assets/images/pages/charity/main-carousel/5.jpeg'
import mainCarouselImage6 from '../../assets/images/pages/charity/main-carousel/6.jpeg'

import feedingWidowsCarouselImage1 from '../../assets/images/pages/charity/success-stories/feeding-widows/1.jpeg'
import feedingWidowsCarouselImage2 from '../../assets/images/pages/charity/success-stories/feeding-widows/2.jpeg'
import feedingWidowsCarouselImage3 from '../../assets/images/pages/charity/success-stories/feeding-widows/3.jpeg'

import buildingBridgeCarouselImage1 from '../../assets/images/pages/charity/success-stories/building-bridge/1.jpeg'
import buildingBridgeCarouselImage2 from '../../assets/images/pages/charity/success-stories/building-bridge/2.jpeg'
import buildingBridgeCarouselImage3 from '../../assets/images/pages/charity/success-stories/building-bridge/3.jpeg'

import donatingOutCarouselImage1 from '../../assets/images/pages/charity/success-stories/donating-out/1.jpeg'

const { Title, Paragraph, Text } = Typography

const mainCarouselImages = [
  mainCarouselImage5,
  mainCarouselImage4,
  mainCarouselImage6,
  mainCarouselImage3,
  mainCarouselImage2,
  mainCarouselImage1,
]

const successStoryCardContents = [
  {
    title: 'Feeding the widows',
    description: 'We fed the widows',
    cardImageBackground: feedingWidowsCarouselImage1,
    modalCarouselImages: [
      feedingWidowsCarouselImage1,
      feedingWidowsCarouselImage2,
      feedingWidowsCarouselImage3,
    ],
  },

  {
    title: 'Building a bridge',
    description: 'We built a bridge',
    cardImageBackground: buildingBridgeCarouselImage1,
    modalCarouselImages: [
      buildingBridgeCarouselImage1,
      buildingBridgeCarouselImage2,
      buildingBridgeCarouselImage3,
    ],
  },

  {
    title: 'Donating Out',
    description: 'We Donated to other Organisations',
    cardImageBackground: donatingOutCarouselImage1,
    modalCarouselImages: [donatingOutCarouselImage1],
  },
]

const bankAccountInformation = [
  {
    currency: 'Nigerian Naira',
    accountName: 'Teleola Martha Christian Organisation Orphanage Home',
    bank: 'UBA Plc',
    accountNumber: '1023249339',
  },

  {
    currency: 'United States Dollar',
    accountName: 'Teleola Martha Christian Organisation Orphanage Home',
    bank: 'UBA Plc',
    accountNumber: '3002942963',
  },
  {
    currency: 'Great British Pound',
    accountName: 'Teleola Martha Christian Organisation',
    bank: 'Barclays Bank',
    accountNumber: '1023249339',
    sortCode: '20-29-63',
    IBAN: 'GB71 BUKB 20296313341380',
  },
]
const CharityPage = () => {
  const [modalContent, setModalContent] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = (story) => {
    setModalContent(story)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div>
      <Title level={1}>Teleola Martha Christian Organisation (TMCO)</Title>

      <Title
        level={4}
        style={{ paddingBottom: 50, fontStyle: 'italic', fontWeight: 'normal' }}
      >
        We care for the unprivileged, the needy and widows. We support orphans,
        widows, and others in need.
      </Title>

      <Carousel autoplay>
        {mainCarouselImages?.map((carouselImage) => {
          return (
            <div>
              <AppCard height="500px" image={carouselImage} opacity="0" />
            </div>
          )
        })}
      </Carousel>

      <Divider />

      <Title level={2}>About Us</Title>

      <Paragraph>
        TMCO was set up in 2015 after Prophetess Teleola received a vision to
        set up a charity to support the less fortunate. TMCO has been a key
        supporter in numerous endeavours to improve the lives of widows and
        orphans, including providing food, clothes + accomodation, educational
        scholarships, free weekly breakfasts and many more activities.
      </Paragraph>

      <Title level={2}>Our Impact</Title>
      <Row gutter={16} className="card-row">
        {successStoryCardContents.map((successStoryCard, idx) => {
          return (
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <div onClick={() => showModal(successStoryCard)}>
                <AppCard
                  height="200px"
                  title={successStoryCard.title}
                  image={successStoryCard.cardImageBackground}
                  opacity="0.3"
                />
              </div>

              <Modal
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="submit" type="primary" onClick={handleOk}>
                    OK
                  </Button>,
                ]}
              >
                <Title level={2}>{modalContent?.title}</Title>
                <Paragraph style={{ textAlign: 'center' }}>
                  {modalContent?.description}
                </Paragraph>

                <Carousel autoplay>
                  {modalContent?.modalCarouselImages?.map((image, idx) => {
                    return (
                      <div>
                        <img
                          src={image}
                          alt={`Carousel ${idx}`}
                          style={{
                            width: '100%',
                            maxHeight: '400px',
                            margin: '0 auto',
                          }}
                        />
                      </div>
                    )
                  })}
                </Carousel>
              </Modal>
            </Col>
          )
        })}
      </Row>

      <div>
        <Title level={2}>Support TMCO</Title>

        <Title level={4}>
          Your donation goes a long way, no matter how small.
        </Title>
        <Paragraph></Paragraph>

        <Card>
          <Text style={{ fontWeight: 'bold', color: 'red' }}>
            Beware of scammers. These are our only payment details.
          </Text>

          <Row gutter={16} className="card-row">
            {bankAccountInformation?.map((account) => {
              return (
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Title level={4}>{account.currency}</Title>
                  <Paragraph>{account.bank}</Paragraph>

                  <Paragraph>{account.accountName}</Paragraph>

                  <Paragraph>{account.accountNumber}</Paragraph>

                  <Paragraph>{account.sortCode}</Paragraph>

                  <Paragraph>{account.IBAN}</Paragraph>
                </Col>
              )
            })}

            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <Title level={4}>PayPal</Title>

              <Link to="https://www.paypal.com/paypalme/tmcocharity1174523?country.x=GB&locale.x=en_GB">
                Donate Here
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}

export default CharityPage
