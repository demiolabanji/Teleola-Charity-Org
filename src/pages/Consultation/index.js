import React from 'react'
import { Typography, Divider } from 'antd'
import './styles.css' // CSS file for styling

import CalendlyWidget from '../../components/CalendlyWidget'
const { Title } = Typography
const ConsultationPage = () => {
  return (
    <div>
      <Title level={1}>Turn your TEST into a TESTIMONY!</Title>
      Teleola Oganla has been a spiritual counselor for the past 25 years.
      Through her gift of prophecy, deliverance prayers, spiritual healing,
      interpretations of dreams, and marriage counseling, she has helped the
      lives and souls of many. In her one-to-one consultation, you are
      guaranteed to find the solution to your problem through the power ordained
      in the prophetess by the Spirit of God. Book your session now.
      <CalendlyWidget />
      <Divider />
      <Title level={2}>Where To Find Us</Title>
    </div>
  )
}

export default ConsultationPage
