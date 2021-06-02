import React, { Component} from 'react';
import axios from 'axios'

class Post extends Component {

    state = {
        post: null
    }
    componentDidMount() {
        let id= this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(response =>{
            this.setState({post: response.data})
        })
        this.setState({
            id
        })
    }

    render() {
			const {post} = this.state;

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

export default Post
