import React, { Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

class Post extends Component {



    render() {

			const {post} = this.props;

			const postCard = post ? (
				<div className= "post " key={post.id}>
					 <div className= "center">
						<h4 className ="center red-text"> {post.title}</h4>
						<p> {post.body}</p>
					</div>
				</div>
        ) :
			(<div className="center">
				<h2 className="center text-blue">Post Loading ...</h2>
			</div>);

        return (
					<div className="container">{postCard}</div>
				)

    }

}

// this second parameter is the current props of the component
const mapStateToProps =(state, ownProps) =>{
	let id = ownProps.match.params.post_id
	return {
		post: state.post.find((post) =>{
			return post.id == id
		})
	}
}


export default connect(mapStateToProps)(Post)
