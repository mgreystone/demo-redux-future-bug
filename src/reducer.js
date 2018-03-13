export default (state = {}, action) => {
  switch (action.type) {
    default:
      return state

    case 'RESOLVE':
      return { resolved: true }

    case 'REJECT':
      return { resolved: false }
  }
}
