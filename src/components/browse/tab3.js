import React from 'react'
import {Spin, Input, Card, Col, Row} from 'antd'

const { Search } = Input

const Tab3 = ({ isLoading, getAsteroidByID, asteroidById }) => {
  const onSearch = (value) => {
    if (value) {
      getAsteroidByID(value)
    }
  }
  return (
    <Spin spinning={isLoading}>
      <Search
        placeholder="Search asteroid by ID"
        onSearch={onSearch}
        enterButton
      />
      {
        asteroidById &&
          <div className='detail-card'>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title={asteroidById.name}
                  bordered
                >
                  <div>
                    <p>Designation: {asteroidById.designation}</p>
                    <p>Absolute Magnitude H: {asteroidById.absolute_magnitude_h}</p>
                    <p>Nasa Jpl Url: {asteroidById.nasa_jpl_url}</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
      }
    </Spin>
  )
}

export default Tab3