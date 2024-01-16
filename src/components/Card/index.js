import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import './styles.css'

const cardBackgroundStyle = {
  height: '300px', // Set the height you want for your card
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  border: 'none', // Removes the border
  overflow: 'hidden', // Ensures the content doesn't spill out
}

const cardContentStyle = (opacity) => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `rgba(0, 0, 0, ${opacity})`, // Dark overlay for better text readability
    display: 'flex',
    color: 'white',
    justifyContent: 'center', // This centers the text vertically and horizontally
    alignItems: 'center',
    flexDirection: 'column',
  }
}

const AppCard = ({
  title,
  image,
  link,
  caption,
  height = '300px',
  opacity = '0.4',
}) => {
  return (
    <div className="responsive-card">
      <Link to={link}>
        <Card
          bordered={false} // This prop removes the default border
          style={{
            ...cardBackgroundStyle,
            height,
            backgroundImage: `url(${image})`,
          }}
          bodyStyle={{ padding: 0 }} // Removes padding from the default bodyStyle
        >
          {/* Overlay Content */}
          <div style={cardContentStyle(opacity)}>
            <h3>{title}</h3>
            <p>{caption}</p>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default AppCard
