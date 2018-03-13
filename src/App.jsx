import { Fragment } from 'react'
import { connect } from 'react-redux'
import { resolve, reject } from './actions'

const App = ({ resolved, dispatchResolve, dispacthReject }) =>
  <Fragment>
    <button onClick={dispatchResolve}>Resolve</button>
    <button onClick={dispacthReject}>Reject</button>
    <div>
      {resolved === true && 'Resolved'}
      {resolved === false && 'Rejected'}
    </div>
  </Fragment>

const mapStateToProps = ({ resolved }) => ({ resolved })

const mapDispatchToProps = {
  dispatchResolve: resolve,
  dispacthReject: reject
}

const hoc = connect(mapStateToProps, mapDispatchToProps)

export default hoc(App)
