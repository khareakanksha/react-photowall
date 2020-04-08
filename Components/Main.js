import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import {Simulate} from 'react-dom/test-utils';
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      posts: [{
        id: 0,
        desc: "landscape",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
    },
    {
        id: 1,
        desc:"landscapeone",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/6/65/Blue_morpho_butterfly.jpg"
    },
    {
        id: 2,
        desc:"landscapetwo",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Sunrise_Beauty_of_Nature.jpg"
    }] , 
    screen: 'photos' //   addPhoto, photos  
  }
  this.removePhoto = this.removePhoto.bind(this);
  // this.naviagte = this.naviagte.bind(this);
}


removePhoto(postRemoved) {
console.log(postRemoved.desc)
this.setState((state) => ({
 posts: state.posts.filter(post => post !== postRemoved )
}))
}

addPhoto(postSubmitted){
this.setState(state => ({
  posts: state.posts.concat([postSubmitted])
}))
}



// naviagte()
// {
//   this.setState({
//     screen: 'addPhoto'
//   })
// }

// componentDidMount(){
//   const data = SimulateFetchFromDatabase()
//   this.setState({
//     posts: data
//   }
// }

    render(){
      console.log(this.state.posts)
      return <div>
        <Route exact path= "/" render={() => (
          <div>
          <Title title = {'Photowall'}/>
          <Photowall posts = {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate ={this.naviagte}/>
          </div> 

        )}/>
        {/* {
          this.state.screen ==='photos' && ( */}
          {/* )
    } */}
    {/* {
      this.state.screen ==='addPhoto' && ( */}
          
        <Route path= "/AddPhoto" render = {({history}) => (
        <AddPhoto onAddPhoto={(addedPost) => {
          this.addPhoto(addedPost)
          history.push('/')
        }}/>
        )}/>
);
      </div>
      
    }
  }



  export default Main
  