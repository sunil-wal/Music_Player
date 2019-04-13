import { connect } from "react-redux";
import App from '../App'

const mapStateToProps = state => ({
    isLoggedIn: false
})
export default connect(mapStateToProps)(App)
