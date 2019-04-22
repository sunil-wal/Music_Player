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
import { addTrackToPlaylist } from '../../services';
import { AST_False } from 'terser';

class SelectPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      selectedPlaylistId: ''
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onDropdownItemClick = this.onDropdownItemClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle() {
    this.props.updateModalState();
  }
  handleSubmit() {
    const ids = [];
    ids.push(this.props.id);
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
    console.log(id);
    this.setState(prevState => ({
      selectedPlaylistId: id
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
                {this.props.allPlaylists.rows.map(data => (
                  <DropdownItem key={data.id}>
                    <div onClick={this.onDropdownItemClick} id={data.id}>
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
  const { updatePlaylists, modifyPlaylist } = state;
  return {
    allPlaylists: updatePlaylists.allPlaylists,
    id: modifyPlaylist.id,
    modal: modifyPlaylist.openModal
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
        console.log('id' + id);
        console.log('data' + data);
        try {
          let album = await addTrackToPlaylist(id, data);
          console.log('success');
          // dispatch({ type: ALBUM.SUCCESS, album });
        } catch (error) {
          console.log('err');
          // dispatch({ type: ALBUM.ERROR, message: error.message });
        }
      };
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlaylist);
