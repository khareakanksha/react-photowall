import React from 'react';
import Photo from './Photo'; 
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photowall(props) {
    return  <div> 
            <Link className="addIcon" to="/AddPhoto"> </Link>
        {/* <button onClick= {props.onNavigate} className ="addIcon"> + </button> */}
    
             <div className="photogrid">
            {props.posts
            .sort(function(x,y){
                return y.id - x.id
            })  
            .map((post, index) => <Photo key ={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
        </div>
}

Photowall.propTypes = {
      posts: PropTypes.array.isRequired,
     onRemovePhoto: PropTypes.func.isRequired
  }

// class Photowall extends Component{
//     render(){
//         return <div className="photogrid">
//             {this.props.posts.map((post, index) => <Photo key ={index} post={post}/>)}
//         </div>
//     }
// }

export default Photowall 