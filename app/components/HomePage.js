import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

function ListItem(props) {
    return <li>{props.value}</li>;
  }


function DataList(props) {
    const names = props.names;
    const listItems = names.map((name, index) =>
      <ListItem key={name + index}
                value={name}/>

    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

class HomePage extends React.Component {
    componentDidMount() {
    }

    render() {
        const { authentication } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi</h1>
                <h3>Artists:</h3>
                <DataList names={authentication.artistNames} />
                <h3>Albums:</h3>
                <DataList names={authentication.albumNames} />
                <h3>Tracks:</h3>
                <DataList names={authentication.tracks} />
                <h3>Playlist:</h3>
                <DataList names={authentication.plyalists} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
