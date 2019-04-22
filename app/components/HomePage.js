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
import { getAlbum, getArtists, getTracks, getPlaylists } from '../services';
import styles from './HomePage.css';
import SearchPage from './search/SearchPage';
import SelectPlaylist from './modals/SelectPlaylist';

function DataList(props) {
  const names = props.names;
  let addButton = props.addButton;
  const listItems = names.rows.map((data, index) => {
    return (
      <Row>
        <Col xs="11">
          <Link to="/track">
            <ListGroupItem key={data.name + index}>{data.name}</ListGroupItem>
          </Link>
        </Col>
        <Col xs="1">
          {' '}
          {addButton ? (
            <button
              className="btn-xs btn btn-primary pull-right"
              onClick={() => props.addSongFun(data.id)}
            >
              +
            </button>
          ) : null}
        </Col>
      </Row>
    );
  });
  return (
    <div>
      <ListGroup>{listItems}</ListGroup>
      <DataPagination itemsLength={names.count} name={names.name} />
    </div>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.dataSet = [...Array(Math.ceil(Math.random() * 10))].map(
      (a, i) => 'Record ' + (i + 1)
    );

    this.pageSize = 5;
    this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    this.props.clearData();
    this.props.loadData();
  }
  handleToggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleLogout() {
    this.props.logout();
  }
  handleAddSong(id) {
    console.log('ha', id);
    this.props.addSong(id);
  }

  render() {
    const {
      authentication,
      allArtist,
      allAlbum,
      allTrack,
      allPlaylists
    } = this.props;
    return (
      <div id={styles.homePage}>
        <div className="text-right">
          <Button color="primary" onClick={this.handleLogout}>
            Logout
          </Button>
        </div>
        <br />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '1'
              })}
              onClick={() => {
                this.handleToggle('1');
              }}
            >
              Artist
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '2'
              })}
              onClick={() => {
                this.handleToggle('2');
              }}
            >
              Albums
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '3'
              })}
              onClick={() => {
                this.handleToggle('3');
              }}
            >
              Tracks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '4'
              })}
              onClick={() => {
                this.handleToggle('4');
              }}
            >
              Playlist
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {authentication.isAdmin ? (
                  <div>
                    <br />
                    <SearchPage name="artists" />
                    <div className="text-right">
                      <Link to={routes.NEW_ARTIST} className="btn btn-link">
                        <Button color="primary">Add Artist</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {allArtist ? <DataList names={allArtist} /> : ''}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {authentication.isAdmin ? (
                  <div>
                    <br />
                    <SearchPage name="albums" />
                    <div className="text-right">
                      <Link to={routes.NEW_ALBUM} className="btn btn-link">
                        <Button color="primary">Add Album</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {allAlbum ? (
                  <DataList
                    names={allAlbum}
                    addButton={true}
                    addSongFun={this.handleAddSong}
                  />
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                {authentication.isAdmin ? (
                  <div>
                    <br />
                    <SearchPage name="tracks" />
                    <div className="text-right">
                      <Link to={routes.NEW_TRACK} className="btn btn-link">
                        <Button color="primary">Add Track</Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {allTrack ? (
                  <DataList
                    names={allTrack}
                    addButton={true}
                    addSongFun={this.handleAddSong}
                  />
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <div className="text-right">
                  <Link to={routes.PLAYLIST_REPORT}>
                    <Button color="warning">Playlist Report</Button>
                  </Link>
                  <Link to={routes.NEW_PLAYLIST} className="btn btn-link">
                    <Button color="primary">Add Playlist</Button>
                  </Link>
                </div>
                <div>
                  {allPlaylists ? (
                    <DataList names={allPlaylists} addButton={false} />
                  ) : (
                    ''
                  )}
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        {this.props.modifyPlaylist.openModal ? <SelectPlaylist /> : ''}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {
    authentication,
    artist,
    album,
    track,
    updatePlaylists,
    modifyPlaylist
  } = state;
  return {
    authentication,
    allArtist: artist.allArtist,
    allAlbum: album.allAlbum,
    allPlaylists: updatePlaylists.allPlaylists,
    allTrack: track.allTrack,
    modifyPlaylist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearData: () => {},
    addSong: id => {
      console.log(id);
      dispatch({ type: 'ADDSONGBYID', payload: { id, openModal: true } });
    },
    loadData() {
      this.loadAlbum();
      this.loadArtists();
      this.loadTracks();
      this.loadPlaylists();
    },

    get loadAlbum() {
      return async () => {
        try {
          let album = await getAlbum();
          dispatch({ type: ALBUM.SUCCESS, album });
        } catch (error) {
          dispatch({ type: ALBUM.ERROR, message: error.message });
        }
      };
    },
    get loadArtists() {
      return async () => {
        try {
          let artist = await getArtists();
          dispatch({ type: ARTIST.SUCCESS, artist });
        } catch (error) {
          dispatch({ type: ARTIST.ERROR, message: error.message });
        }
      };
    },
    get loadTracks() {
      return async () => {
        try {
          let track = await getTracks();
          dispatch({ type: TRACK.SUCCESS, track });
        } catch (error) {
          dispatch({ type: TRACK.ERROR, message: error.message });
        }
      };
    },
    get loadPlaylists() {
      return async () => {
        try {
          let playlists = await getPlaylists();
          dispatch({ type: PLAYLIST.SUCCESS, playlists });
        } catch (error) {
          dispatch({ type: PLAYLIST.ERROR, message: error.message });
        }
      };
    },
    logout: () => {
      dispatch(userActions.logout());
    }
  };
}
const connectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export { connectedHomePage as HomePage };
