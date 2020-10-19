import React from 'react'
import { Tabs } from 'antd'

import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import Tab4 from './tab4'

const { TabPane } = Tabs

const Browse = ({
  isLoading,
  totalSize,
  currentPageNum,
  pageSize,
  list,
  onChangePageNum,
  onChangePageSize,
  getBrowseData,
  getDataFromStarDateAndEndDate,
  feeds,
  getAsteroidByID,
  asteroidById
}) => {
  return (
    <div className='browse-container'>
      <div className='card-container'>
        <Tabs type='card'>
          <TabPane tab="Neo Browse" key="1">
            <Tab1
              isLoading={isLoading}
              list={list}
              totalSize={totalSize}
              currentPageNum={currentPageNum}
              pageSize={pageSize}
              onChangePageNum={onChangePageNum}
              onChangePageSize={onChangePageSize}
              getBrowseData={getBrowseData}
            />
          </TabPane>
          <TabPane tab="Neo Feed on Date" key="2">
            <Tab2
              isLoading={isLoading}
              getDataFromStarDateAndEndDate={getDataFromStarDateAndEndDate}
              feeds={feeds}
            />
          </TabPane>
          <TabPane tab="Search by ID" key="3">
            <Tab3
              isLoading={isLoading}
              getAsteroidByID={getAsteroidByID}
              asteroidById={asteroidById}
            />
          </TabPane>
          <TabPane tab="My Favorite" key="4">
            <Tab4 />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Browse