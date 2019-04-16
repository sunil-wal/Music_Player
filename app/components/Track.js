import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { userActions }  from '../actions/user.actions';

var newData = {
    data: 'Track Details',
    artistName: 'John Doe',
    genre: 'pop',
    album: 'shapes',
    length:'5:03'
 }


 var DataList = ComposedComponent => class extends React.Component {
    componentDidMount() {
       this.setState({
          data: newData.data,
          artistName: newData.artistName,
          genre: newData.genre,
          album: newData.album,
          length: newData.length
       });
    }
    render() {
       return <ComposedComponent {...this.props} {...this.state} />;
    }
 };

  class Tracks extends React.Component {
    render() {
        return (
           <div className="container">
              <div className="row">
                 <h1>{this.props.data}</h1>
                 <hr/>
                 <ul>
                     <li>{this.props.artistName}</li>
                     <li>{this.props.genre}</li>
                     <li>{this.props.album}</li>
                     <li>{this.props.length}</li>
                </ul>

              </div>
           </div>
        )
     }
  }

export default DataList(Tracks);






