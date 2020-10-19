import React, { useState } from 'react'
import { Spin, DatePicker, Button, Table } from 'antd'

const { RangePicker  } = DatePicker

const Tab2 = ({ isLoading, getDataFromStarDateAndEndDate, feeds }) => {
  const [selectedDate, setSelectedDate] = useState(0)
  const onChange = (dateArr, formattedArr) => {
    console.log('Array of the date objects', dateArr)
    if (formattedArr.every(item => !!item)) {
      const data = {
        start_date: formattedArr[0],
        end_date: formattedArr[1]
      }
      getDataFromStarDateAndEndDate(data)
    }
  }

  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name'
    },
    {
      key: 'nasa_jpl_url',
      dataIndex: 'nasa_jpl_url',
      title: 'Nasa Jpl Url'
    },
    {
      key: 'absolute_magnitude_h',
      dataIndex: 'absolute_magnitude_h',
      title: 'Absolute H'
    }
  ]

  return (
    <Spin spinning={isLoading}>
      <RangePicker
        onChange={onChange}
      />
      <div className='date-button-group'>
        {
          feeds && Object.keys(feeds).map((item, index) => {
            if (index === selectedDate) {
              return (
                <Button
                  key={index}
                  onClick={() => setSelectedDate(index)}
                  type='primary'
                >
                  {item}
                </Button>
              )
            } else {
              return (
                <Button
                  key={index}
                  onClick={() => setSelectedDate(index)}
                >
                  {item}
                </Button>
              )
            }
          })
        }
      </div>
      {
        feeds &&
          <div className='table-container'>
            <Table
              dataSource={Object.values(feeds)[selectedDate]}
              columns={columns}
              rowKey={'id'}
              bordered
              scroll={{ x: 600 }}
              pagination={false}
            />
          </div>
      }
    </Spin>
  )
}

export default Tab2