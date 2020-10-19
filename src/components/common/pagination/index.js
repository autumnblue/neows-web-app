import React from 'react'
import { Pagination } from 'antd'

const PaginationContainer = ({ totalSize, current, pageSize, onChangePageNum, onChangeSizePerPage }) => {
  return (
    <div className='pagination-container'>
      <Pagination
        showQuickJumper
        showSizeChanger
        defaultCurrent={1}
        total={totalSize}
        current={current}
        pageSize={pageSize}
        onChange={onChangePageNum}
        onShowSizeChange={onChangeSizePerPage}
        hideOnSinglePage
        pageSizeOptions={['10', '20', '30', '40']}
      />
    </div>
  )
}

export default PaginationContainer