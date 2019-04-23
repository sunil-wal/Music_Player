import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../constants/routes';
import { history } from '../helpers';
import { browserHistory } from 'react-router';
import { ARTIST, ALBUM, TRACK, PLAYLIST } from '../constants';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Input,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from 'reactstrap';
import classnames from 'classnames';
import { userActions } from '../actions';
import DataPagination from './DataPagination';
import { getTracksByPlaylistId } from '../services';
import styles from './HomePage.css';
import SearchPage from './search/SearchPage';
import SelectPlaylist from './modals/SelectPlaylist';

function DataList(props) {
  const names = props.names;
  const listItems = names.map((data, index) => {
    return (
      <Row>
        <Col xs="12">
          <ListGroupItem key={data + index}>{data}</ListGroupItem>
        </Col>
      </Row>
    );
  });
  return (
    <div>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
}

class TrackByPlaylistId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadData(id);
  }
  render() {
    return (
      <div>
        <div className="text-left">
          <Link to={routes.HOME}>
            <Button color="primary"> Back </Button>
          </Link>
        </div>
        <DataList names={this.props.allTrackByPlaylistId} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { trackByPlaylistId } = state;
  return {
    allTrackByPlaylistId: trackByPlaylistId.allTrackByPlaylistId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData(id) {
      this.loadTracksById(id);
    },

    get loadTracksById() {
      return async id => {
        try {
          let albums = await getTracksByPlaylistId(id);
          console.log('succ');
          dispatch({ type: 'TRACKBYPLAYLISTIDSUCCESS', payload: albums });
        } catch (error) {
          console.log('err');
          dispatch({ type: 'TRACKBYPLAYLISTIDERROR', message: error.message });
        }
      };
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackByPlaylistId);
