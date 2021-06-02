import React, { Component} from 'react';
import axios from 'axios'

class Post extends Component {

    state = {
        id: null,
        post: []
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
			const {post, id} = this.state
        return (
        <div className= "post card " key={id}>
					 <div className= "card-content">
						<span className ="card-title"> {post.title}</span>
						<p> {post.body}</p>
					</div>
				</div>
        );
    }

}

export default Post
