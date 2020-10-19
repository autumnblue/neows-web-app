import React, { useState, useEffect } from 'react'
import {Spin, Table} from 'antd'
import { HeartTwoTone, HeartFilled } from '@ant-design/icons'
import PaginationContainer from '../common/pagination'
import fire, { db } from '../../utils/firebaseConfig'

const Tab1 = ({ isLoading, list, totalSize, currentPageNum, pageSize, onChangePageNum, onChangePageSize, getBrowseData }) => {
  const [myFavorites, setMyFavorites] = useState([])
  useEffect(() => {
    getBrowseData()
  }, [])
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const currentUser = user.uid
        db.ref('users/' + currentUser + '/favorites').on('value', snapshot => {
          let currentFavorites = []
          snapshot.forEach(snap => {
            currentFavorites.push(snap.val())
          })
          setMyFavorites(currentFavorites)
        })
      }
    })
  }, [])
  const changePageNum = (pageNum) => {
    onChangePageNum(pageNum)
    getBrowseData()
  }
  const changePageSize = (current, pageSize) => {
    onChangePageSize(current, pageSize)
  }
  const saveToFavorite = (record) => {
    const myUserId = fire.auth().currentUser.uid
    if (myFavorites && myFavorites.length > 0 && myFavorites.find(item => item.id === record.id)) {
      db.ref('users/' + myUserId + '/favorites').once('value')
        .then(snapShot => {
          snapShot.forEach(snap => {
            if (snap.val().id === record.id) {
              db.ref('users/' + myUserId + '/favorites').child(snap.key).remove()
            }
          })
        })
    } else {
      db.ref('users/' + myUserId + '/favorites').push(record)
    }
  }
  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name'
    },
    {
      key: 'designation',
      dataIndex: 'designation',
      title: 'Designation'
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
    },
    {
      key: 'favorite',
      dataIndex: 'favorite',
      title: 'Favorite',
      render: (text, record, index) => {
        return (
          <div onClick={() => saveToFavorite(record)} className='favorite-button'>
            {
              myFavorites && myFavorites.length > 0 && myFavorites.find(item => item.id === record.id) ? (
                <HeartFilled style={{ color: '#ff0000' }} />
              ) : (
                <HeartTwoTone />
              )
            }
          </div>
        )
      }
    }
  ]
  return (
    <div>
      <Spin spinning={isLoading}>
        <div className='table-container'>
          <Table
            dataSource={list}
            columns={columns}
            rowKey={'id'}
            bordered
            scroll={{ x: 600 }}
            pagination={false}
          />
        </div>
        <PaginationContainer
          totalSize={totalSize}
          current={currentPageNum}
          pageSize={pageSize}
          onChangePageNum={changePageNum}
          onChangeSizePerPage={changePageSize}
        />
      </Spin>
    </div>
  )
}

export default Tab1