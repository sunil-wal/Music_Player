import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { userActions }  from '../actions/user.actions';

class Track extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h2>TRACK NAME</h2>
                        <hr/>
                        <div className="row">
                         <div className="col-md-3">Album name: </div>
                         <div className="col-md-3">Artist:</div>
                         <div className="col-md-3">Genre:</div>
                         <div className="col-md-3">Duration: </div>
                        </div>                        

                    </div>
                </div>
            </div>
        );
    }
} 

export default Track;

