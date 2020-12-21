import React from "react"
import Aide from './Aide';
import axios from "axios";

//
// const peopleImage = (props) => (
//     componentDidMount = async() => {
//       const response = await axios.get("https://randomuser.me/api?results=10")
//       let photos = response.data.results
//       console.log(response.data.results);
//       photos.map ( photo => {
//         {photo.picture.large}
//       })
//     }
// )


class PeopleImage extends React.Component {
    state = {
      photos:[]
    }

    componentDidMount(){
      const response = axios.get("https://randomuser.me/api")
      this.setState({ photos: response.data.results})

      console.log(response.data);
      // console.log(response.data.results);
    }


render(){
      // const photos = this.state.photos.map( photo => {
      //   return (
      //     <img src ={photo.picture.large} />
      //   )
      // })

      return (
        <div>
            <section className="Images">
              <h1> hi </h1>
            </section>
        </div>
      )
    }
}


export default PeopleImage
