import React from "react";

class Video extends React.Component {
	render (){
		return(
		<div className="video-container">
                <div className="video-image">
                  <img src={this.props.thumbnail} alt={this.props.title} />
                </div>
                <div className="video-info">
                  <h3>{this.props.title}</h3>
                  <p>Upload date: {this.props.dateAdded}</p>
                  <h4>Channel's Title: {this.props.channel}</h4>
                  <p>{this.props.description}</p>
                </div>
            </div>
		);
	}
}

export default Video;