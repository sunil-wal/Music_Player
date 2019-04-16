import { connect } from "react-redux";
import App from '../App'

const mapStateToProps = state => ({
    isLoggedIn: state.authentication.isLoggedIn
})
export default connect(mapStateToProps)(App)
