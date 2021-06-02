import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux'


class Home extends Component {

   render() {
		 const {post} = this.props;

		 const postlist = post.length ? (post.map(post =>{
			 return (
				 <div className= "post card " key={post.id}>
					 <img src={Pokeball} alt="pokeball"></img>
					 <div className= "card-content">
						<Link to={"/"+post.id}><span className ="card-title red-text"> {post.title}</span></Link>
						<p> {post.body}</p>
					</div>
				 </div>
			 )
		 })) : (<h1 className= "center blue-text">There are no Post</h1>)
			return (
			<div className= "container home">
				<h4 className="center text-blue">HOME</h4>
				{postlist}
			</div>
			)
   }
}


// this functions will make the state as props to the component

const mapStateToProps = (state) => {
	//this will represent the properties of the state as props
	return {
		post: state.post
	}
}

// this connect is a function that calls the high order component itself from redux
export default connect(mapStateToProps)(Home)
