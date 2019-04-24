import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { addTrackToPlaylist, getAlbumTracks } from '../../services';
import { AST_False } from 'terser';

class SelectPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      selectedPlaylistId: '',
      previousTracks: []
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onDropdownItemClick = this.onDropdownItemClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.type === 'albums') {
      console.log('in');
      this.props.getTracksById(this.props.id);
    }
  }
  toggle() {
    this.props.updateModalState();
  }
  handleSubmit() {
    const ids = this.state.previousTracks;
    if (this.props.type === 'albums') {
      console.log('ins');
      ids.push(...this.props.trackIds);
    } else {
      ids.push(this.props.id);
    }
    this.props.addSongToPlaylist(this.state.selectedPlaylistId, ids);
    this.toggle();
  }
  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  onDropdownItemClick(e) {
    let id = e.currentTarget.getAttribute('id');
    let index = e.currentTarget.getAttribute('index');
    console.log(id);
    console.log('iind ', index);
    const tracks = this.props.allPlaylists.rows[index].playlistTracks.map(
      data => data.id
    );
    this.setState(prevState => ({
      selectedPlaylistId: id,
      previousTracks: tracks
    }));
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Select Playlist</ModalHeader>
          <ModalBody>
            <Dropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle caret>Playlist</DropdownToggle>
              <DropdownMenu>
                {this.props.allPlaylists.rows.map((data, index) => (
                  <DropdownItem key={data.id}>
                    <div
                      onClick={this.onDropdownItemClick}
                      id={data.id}
                      index={index}
                    >
                      {data.name}
                    </div>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Add
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { allPlaylists, modifyPlaylist, tracksByAlbumId } = state;
  return {
    allPlaylists: allPlaylists.playlists,
    id: modifyPlaylist.id,
    modal: modifyPlaylist.openModal,
    type: modifyPlaylist.type,
    tracksIds: tracksByAlbumId.tracksIds
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateModalState: () => {
      dispatch({ type: 'UPDATEMODALSTATE', payload: { openModal: false } });
    },
    addSongToPlaylist(id, data) {
      this.updatePlaylist(id, data);
    },
    get updatePlaylist() {
      return async (id, data) => {
        try {
          let album = await addTrackToPlaylist(id, data);
          dispatch({ type: 'SUCCESS', payload: 'Successfully Track Added' });
        } catch (error) {
          dispatch({ type: 'ERROR', payload: 'Opps! Track is not added' });
        }
      };
    },
    getTracksById(id) {
      this.getAlbumTracksById(id);
    },
    get getAlbumTracksById() {
      return async id => {
        try {
          let trackIds = await getAlbumTracks(id);
          console.log('success');
          dispatch({ type: 'GETTRACKSBYALBUMIDSUCCESS', payload: trackIds });
        } catch (error) {
          console.log('err');
          dispatch({ type: 'GETTRACKSBYALBUMIDERROR', payload: error.message });
        }
      };
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlaylist);
