import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlaylistReport from '../components/reports/PlaylistReport';
//import * as PlaylistReportActions from '../actions/reportPlaylist';
import * as PlaylistReportActions from '../actions/reportPlaylist';

const mapStateToProps = state => {
  // const { reportPlaylist } = state.playlistReport;
  return {
    //reportPlaylist
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistReportActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistReport);
