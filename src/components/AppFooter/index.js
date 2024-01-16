import { Typography, Row, Col, Layout, Space } from 'antd'
import { Link } from 'react-router-dom'
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { AppRoutes, EMAIL_ADDRESS } from '../../constants'
import { FaTiktok } from 'react-icons/fa'

const { Footer: AntFooter } = Layout
const { Text } = Typography

const AppFooter = () => {
  return (
    <AntFooter style={{ textAlign: 'center', padding: '20px 50px' }}>
      <Row gutter={16} justify="space-around" align="middle">
        <Col>
          <a
            href="https://www.facebook.com/timewithteleola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined style={{ fontSize: '24px' }} />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.tiktok.com/@toganla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok style={{ fontSize: '24px' }} />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.instagram.com/officialteleolaoganla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={{ fontSize: '24px' }} />
          </a>
        </Col>
        <Col>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailOutlined style={{ fontSize: '24px' }} />
          </a>
        </Col>
        <Col>
          <Space size="large">
            <Text>Teleola Ladipo Oganla ©{new Date().getFullYear()}.</Text>
            <Link to="https://chigbo.net">
              <Text>Created by Jordan Chigbo</Text>
            </Link>
            <Text>and</Text>
            <Link to="https://github.com/queenabolarin">
              <Text>Queen Abolarin</Text>
            </Link>
            <Link to={AppRoutes.PRIVACY_POLICY}>
              <Text>Privacy Policy</Text>
            </Link>
          </Space>
        </Col>
      </Row>

      <Row justify="end" align="middle"></Row>
    </AntFooter>
  )
}

export default AppFooter
