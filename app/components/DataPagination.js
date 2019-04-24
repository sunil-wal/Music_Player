import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { ARTIST, ALBUM, TRACK, PLAYLIST } from '../constants';
import { getAlbum, getArtists, getTracks, getPlaylists } from '../services';

class DataPagination extends React.Component {
  constructor(props) {
    super(props);
    this.itemsLength = this.props.itemsLength;

    this.pageSize = 5;

    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      currentPage: 0,
      pagesCount: Math.ceil(this.itemsLength / this.pageSize)
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.itemsLength !== this.props.itemsLength) {
      this.setState({
        pagesCount: Math.ceil(this.props.itemsLength / this.pageSize)
      });
    }
  }
  handlePageChange(e, index) {
    e.preventDefault();
    this.props.loadData(index + 1, this.props.name);
    this.setState({
      currentPage: index
    });
  }
  render() {
    const { currentPage } = this.state;

    return (
      <div>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              onClick={e => this.handlePageChange(e, currentPage - 1)}
              previous
              href="#"
            />
          </PaginationItem>

          {[...Array(this.state.pagesCount)].map((page, i) => (
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink
                onClick={e => this.handlePageChange(e, i)}
                href="#"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem disabled={currentPage >= this.state.pagesCount - 1}>
            <PaginationLink
              onClick={e => this.handlePageChange(e, currentPage + 1)}
              next
              href="#"
            />
          </PaginationItem>
        </Pagination>
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
    loadData(offset, name) {
      if (name === 'artists') {
        this.loadArtists(offset);
      } else if (name === 'albums') {
        this.loadAlbum(offset);
      } else if (name === 'tracks') {
        this.loadTracks(offset);
      } else if (name === 'playlists') {
        this.loadPlaylists(offset);
      }
    },

    get loadAlbum() {
      return async offset => {
        try {
          let album = await getAlbum(offset);
          dispatch({ type: ALBUM.SUCCESS, album });
        } catch (error) {
          dispatch({ type: ALBUM.ERROR, message: error.message });
        }
      };
    },
    get loadArtists() {
      return async offset => {
        try {
          let artist = await getArtists(offset);
          dispatch({ type: ARTIST.SUCCESS, artist });
        } catch (error) {
          dispatch({ type: ARTIST.ERROR, message: error.message });
        }
      };
    },
    get loadTracks() {
      return async offset => {
        try {
          let track = await getTracks(offset);
          dispatch({ type: TRACK.SUCCESS, track });
        } catch (error) {
          dispatch({ type: TRACK.ERROR, message: error.message });
        }
      };
    }
    // get loadPlaylists() {
    //   return async offset => {
    //     try {
    //       let playlists = await getPlaylists(offset);
    //       dispatch({ type: PLAYLIST.SUCCESS, playlists });
    //     } catch (error) {
    //       dispatch({ type: PLAYLIST.ERROR, message: error.message });
    //     }
    //   };
    // }
  };
}
// export default DataPagination;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataPagination);
