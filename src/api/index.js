import fakeData from '../data'

const filterByCreationDate = (state, item) =>
  item.creationDate.toString().indexOf(state.date) > -1
const filterByStatus = (state, item) => item.status.indexOf(state.status) > -1
const filterByName = (state, item) => item.name.indexOf(state.name) > -1

export default {
  search: state =>
    fakeData
      .filter(filterByCreationDate.bind(this, state))
      .filter(filterByStatus.bind(this, state))
      .filter(filterByName.bind(this, state)),
}
