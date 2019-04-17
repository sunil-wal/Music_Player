import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import classnames from 'classnames';
import { userActions } from '../actions';

function DataList(props) {
  const names = props.names;
  let addButton = props.addButton;
  const listItems = names.map((name, index) => (
    <ListGroupItem key={name + index}>
      {name}
      {addButton ? (
        <button className="btn-xs btn btn-primary pull-right">
          Add to playlist
        </button>
      ) : null}
    </ListGroupItem>
  ));
  return <ListGroup>{listItems}</ListGroup>;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logoutFun = this.logoutFun.bind(this);
    this.state = {
      activeTab: '1'
      //addButton: false
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  logoutFun() {
    this.props.dispatch(userActions.logout());
  }

  render() {
    const { authentication } = this.props;
    return (
      <div>
        <p>
          <Button color="primary" onClick={this.logoutFun}>
            Logout
          </Button>
        </p>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Airtist
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              Albums
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              Tracks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => {
                this.toggle('4');
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
                <DataList
                  names={authentication.artistNames}
                  addButton={false}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <DataList names={authentication.albumNames} addButton={true} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <DataList names={authentication.tracks} addButton={true} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <DataList names={authentication.plyalists} addButton={false} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
// <div className="col-md-6 col-md-offset-3">
//                 <h1>Hi</h1>
//                 <h3>Artists:</h3>
//                 <DataList names={authentication.artistNames} />
//                 <h3>Albums:</h3>
//                 <DataList names={authentication.albumNames} />
//                 <h3>Tracks:</h3>
//                 <DataList names={authentication.tracks} />
//                 <h3>Playlist:</h3>
//                 <DataList names={authentication.plyalists} />
//             </div>
function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
