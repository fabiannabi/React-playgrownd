import React, { Component} from 'react';
import {connect} from 'react-redux'

class Post extends Component {

	handleClick = () =>{
		this.props.deletePost(this.props.post.id)
		this.props.history.push("/")
	}

    render() {

		const {post} = this.props;
		const postCard = post ? (
			<div className= "post " key={post.id}>
					<div className= "center">
					<h4 className ="center red-text"> {post.title}</h4>
					<p> {post.body}</p>
					<div className="center">
						<button className =" btn grey"
							onClick={this.handleClick}>
							Delete post
						</button>
					</div>
				</div>
			</div>
			) :
		(<div className="center">
			<h2 className="center text-blue">Post Deleted, Return to Home</h2>
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


// dispatches the action to add or remove data from

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) =>{
			dispatch({type:"DELETE_POST", id:id})
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Post)
