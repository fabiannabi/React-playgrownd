import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {

	state ={
		post:[ ]
	}
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts/')
			.then(response =>{
				console.log(response)
				this.setState({post: response.data.slice(0,10)})
			})

	}

   render() {
		 const {post} = this.state

		 const postlist = post.length ? (post.map(post =>{
			 return (
				 <div className= "post card " key={post.id}>
					 <div className= "card-content">
						<span className ="card-title"> {post.title}</span>
						<p> {post.body}</p>
					</div>
				 </div>
			 )
		 })) : (<h1 className= "center blue-text">There are no Post</h1>)
			return (
			<div className= "container">
				<h4 className="center text-blue">HOME</h4>
				{postlist}
			</div>
			)
   }
}

export default Home
