import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { ARTIST, ALBUM, TRACK } from '../../constants';
import { Input } from 'reactstrap';
import { getAllData } from '../reusable/LoadData';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchText: ''
    };
  }
  handleSearch(event) {
    this.props.loadData(event.target.value, this.props.name);
    this.setState({
      searchText: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div>
          <Input
            type="text"
            placeholder="Search..."
            value={this.state.searchText}
            onChange={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData(searchText, name) {
      if (name === 'artists') {
        getAllData.loadArtists(searchText, dispatch);
      } else if (name === 'albums') {
        getAllData.loadAlbum(searchText, dispatch);
      } else if (name === 'tracks') {
        getAllData.loadTracks(searchText, dispatch);
      }
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
