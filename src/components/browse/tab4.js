import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'

import fire, { db } from '../../utils/firebaseConfig'

const Tab4 = () => {
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const currentUser = user.uid
        db.ref('users/' + currentUser + '/favorites').on('value', snapshot => {
          let currentFavorites = []
          snapshot.forEach(snap => {
            currentFavorites.push(snap.val())
          })
          setFavorites(currentFavorites)
        })
      }
    })
  }, [])
  const removeFromFavorite = (record) => {
    const myUserId = fire.auth().currentUser.uid
    db.ref('users/' + myUserId + '/favorites').once('value')
      .then(snapShot => {
        snapShot.forEach(snap => {
          if (snap.val().id === record.id) {
            db.ref('users/' + myUserId + '/favorites').child(snap.key).remove()
          }
        })
      })
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
          <div>
            <Button type='primary' onClick={() => removeFromFavorite(record)} danger>
              Remove
            </Button>
          </div>
        )
      }
    }
  ]
  return (
    <div className='favorite-container'>
      {
        favorites && favorites.length > 0 &&
          <div className='table-container'>
            <Table
              dataSource={favorites}
              columns={columns}
              rowKey={'id'}
              bordered
              scroll={{ x: 600 }}
              pagination={false}
            />
          </div>
      }
    </div>
  )
}

export default Tab4