import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../constants/routes';
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
  ListGroupItem
} from 'reactstrap';
import classnames from 'classnames';
import { userActions } from '../actions';
import DataPagination from './DataPagination';
import { getArtist } from '../actions/artist';
import styles from './HomePage.css';

function DataList(props) {
  const names = props.names;
  const listItems = names.map((name, index) => {
    return <ListGroupItem key={name + index}>{name}</ListGroupItem>;
  });
  return (
    <div>
      <ListGroup>{listItems}</ListGroup>
      <DataPagination itemsLength={listItems.length} />
    </div>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.dataSet = [...Array(Math.ceil(Math.random() * 10))].map(
      (a, i) => 'Record ' + (i + 1)
    );

    this.pageSize = 3;
    this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      activeTab: '1',
      currentPage: 0,
      searchText: ''
    };
  }
  componentDidMount() {
    this.props.dispatch(getArtist());
  }
  handleToggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleLogout() {
    this.props.dispatch(userActions.logout());
  }
  handlePageChange(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
  }
  handleSearch(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    const { authentication, allArtist } = this.props;
    return (
      <div id={styles.homePage}>
        <div className="text-right">
          <Button color="primary" onClick={this.handleLogout}>
            Logout
          </Button>
        </div>
        <br />
        <div>
          <Input
            type="text"
            placeholder="Search..."
            value={this.state.searchText}
            onChange={this.handleSearch}
          />
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
                  <div className="text-right">
                    <Link to={routes.NEW_ARTIST} className="btn btn-link">
                      <Button color="primary">Add Artist</Button>
                    </Link>
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
                  <div className="text-right">
                    <Link to={routes.NEW_ALBUM} className="btn btn-link">
                      <Button color="primary">Add Album</Button>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                <DataList names={authentication.albumNames} addButton={true} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                {authentication.isAdmin ? (
                  <div className="text-right">
                    <Link to={routes.NEW_TRACK} className="btn btn-link">
                      <Button color="primary">Add Track</Button>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                <DataList names={authentication.tracks} addButton={true} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                {authentication.isAdmin ? (
                  <div className="text-right">
                    <Link to={routes.NEW_PLAYLIST} className="btn btn-link">
                      <Button color="primary">Add Playlist</Button>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
                <DataList names={authentication.playlists} addButton={false} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { authentication, artist } = state;
  return {
    authentication,
    allArtist: artist.allArtist
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
