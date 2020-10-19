import { connect } from 'react-redux'

import Browse from '../../components/browse'
import {
  onChangePageNum,
  onChangePageSize,
  getBrowseData,
  getDataFromStarDateAndEndDate,
  getAsteroidByID
} from '../../actions/browse'

const mapStateToProps = state => {
  return {
    isLoading: state.browse.isLoading,
    totalSize: state.browse.totalSize,
    currentPageNum: state.browse.currentPageNum,
    pageSize: state.browse.pageSize,
    list: state.browse.list,
    feeds: state.browse.feeds,
    asteroidById: state.browse.asteroidById
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangePageNum: (pageNum) => {
      dispatch(onChangePageNum(pageNum))
    },
    onChangePageSize: (current, pageSize) => {
      dispatch(onChangePageSize(current, pageSize))
    },
    getBrowseData: () => {
      dispatch(getBrowseData())
    },
    getDataFromStarDateAndEndDate: (data) => {
      dispatch(getDataFromStarDateAndEndDate(data))
    },
    getAsteroidByID: (id) => {
      dispatch(getAsteroidByID(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)