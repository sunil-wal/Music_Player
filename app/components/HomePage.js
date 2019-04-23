import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../constants/routes';
import { history } from '../helpers';
import { browserHistory } from 'react-router';
import SelectValue from './reusable/SelectValue';
import {
  ARTIST,
  ALBUM,
  TRACK,
  PLAYLIST,
  ALBUMTRACKS,
  ARTISTALBUM
} from '../constants';
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
import {
  getAlbum,
  getArtists,
  getTracks,
  getPlaylists,
  getAlbumTrack,
  getArtistAlbums
} from '../services';
import styles from './HomePage.css';
import SearchPage from './search/SearchPage';
import SelectPlaylist from './modals/SelectPlaylist';

function DataList(props) {
  const names = props.names;
  let addButton = props.addButton;
  const listItems = names.rows.map((data, index) => {
    return (
      <Row key={data.name + index}>
        <Col xs="11">
          <ListGroupItem onClick={props.getData}>{data.name}</ListGroupItem>
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

function PlaylistTracks(props) {
  const names = props.names;
  let addButton = props.addButton;
  const listItems = names.rows.map((data, index) => {
    const id = `/tracksByPlaylistId/${data.id}`;
    return (
      <Row key={data.name + index}>
        <Col xs="12">
          <Link to={id}>
            <ListGroupItem>{data.name}</ListGroupItem>
          </Link>
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
    this.handleAlbumTracks = this.handleAlbumTracks.bind(this);
    this.handleArtistAlbums = this.handleArtistAlbums.bind(this);
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
  handleAlbumTracks() {
    this.props.loadAlbumTracks();
  }
  handleArtistAlbums() {
    this.props.loadArtistAlbums();
  }
  handleAddSong(id, type) {
    console.log('ha', id);
    this.props.addSong(id, type);
  }

  render() {
    const {
      authentication,
      allArtist,
      allAlbum,
      allTrack,
      allAlbumTracks,
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
                {allArtist ? (
                  <DataList
                    names={allArtist}
                    getData={this.handleArtistAlbums}
                  />
                ) : (
                  ''
                )}
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
                    getData={this.handleAlbumTracks}
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
                    <SelectValue />
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
                    <PlaylistTracks names={allPlaylists} addButton={false} />
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
    modifyPlaylist,
    albumTracks
  } = state;
  return {
    authentication,
    allArtist: artist.allArtist,
    allAlbum: album.allAlbum,
    allPlaylists: updatePlaylists.allPlaylists,
    allTrack: track.allTrack,
    modifyPlaylist,
    allAlbumTrack: albumTracks.allAlbumTrack
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearData: () => {},
    addSong: (id, type) => {
      console.log(id);
      dispatch({
        type: 'ADDSONGBYID',
        payload: { id, openModal: true, type: type }
      });
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
    get loadAlbumTracks() {
      return async () => {
        try {
          console.log('hello');
          let albumTracks = await getAlbumTrack();

          dispatch({ type: ALBUMTRACKS.SUCCESS, albumTracks });
        } catch (error) {
          dispatch({ type: ALBUMTRACKS.ERROR, message: error.message });
        }
      };
    },
    get loadArtistAlbums() {
      return async () => {
        try {
          let artistAlbums = await getArtistAlbums();
          dispatch({ type: ARTISTALBUM.SUCCESS, payload: artistAlbums });
        } catch (error) {
          dispatch({ type: ARTISTALBUM.ERROR, message: error.message });
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
