import React from "react";
import FullPerson from "./FullPerson";
import Aide from "./Aide";

import axios from "axios";
import { Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

class AideSearch extends React.Component {
  state = {
    people: [],
    showing: true,
    images: []
  };




  onSearchSubmit = async () => {
  const response = await axios.get("https://api.imgflip.com/get_memes")

    let people = response.data.data.memes
    people = people.slice(0,4)
    console.log(people)
    const updatedPeople = people.map( (person) => {
      return {
        ...person
      }
    })
    this.setState({people: updatedPeople})


  };


  personSelected = (id) => {
    console.log(this.id);
    this.props.history.push({pathname: '/' + id});
  };

  render() {


    const { showing } = this.state;
    const people = this.state.people.map((person) => {
      return (
        <div class="ui four column grid">

    <div>
              <div class="column">
              <h4> {person.name} </h4>
              <img src={person.url} />
              </div>

      </div>
      </div>


      )
    })





    return (
      <div className="magic" id="magic">
        <h2> Get Home Health Help Today</h2>
        <h4 style={{ textAlign: "center" }}>
          {" "}
  	       Unfortunately for Harry Potter fans, however, they say a portable cloak that makes moving objects invisible to the human eye remains improbable. A metamaterial cloaking device needs a certain thickness in order to effectively bend the light travelling through it, according to Prof Pendry.
        </h4>

        <Button
           primary
           massive
           className="buttonSearch"
           style={{ display: "block", margin: "0 auto" }}
           onClick={() => {
             this.onSearchSubmit()
             this.setState({ showing: !showing });
           }}
         >
           {" "}
           Check Providers in Your Area
         </Button>


        <section className="Posts" stackable>
        {showing ? null : people }
        </section>


      </div>
    );
  }
}

export default AideSearch;


// import React from "react";
// import FullPerson from "./FullPerson";
// import Aide from "./Aide";
// import axios from "axios";
// import { Route, Link } from "react-router-dom";
// import { Button } from "semantic-ui-react";
//
// class AideSearch extends React.Component {
//   state = {
//     people: [],
//     showing: true,
//   };
// using on search submit we want it to mount
//   onSearchSubmit = async () => {
//     const response = await axios.get(
//       "https://dummyapi.io/data/api/user?limit=5", {
//         headers: {
//           "app-id": "600d9cabc9d5e51f4f50c151"
//         }
//       }
//     );
//     const people = response.data.data
//     const updatedPeople = people.map((person) => {
//       return {
//         ...person,
//       };
//     });
//     this.setState({ people: updatedPeople });
//     console.log(response.data);
//   };
//
//   personSelected = (id) => {
//     this.props.history.push( '/aides/' + id );
//
//     // this.props.history.push({pathname:"/" + id});
//   };
//
//   render() {
//     const { showing } = this.state;
//     const people = this.state.people.map((person) => {
//       return (
//         // <Link to={"/" + person.id} key={person.id}>
//           <Aide
//             firstName={person.firstName}
//             lastName={person.lastName}
//             email={person.email}
//             picture={person.picture}
//             {...this.props}
//             clicked={() => this.personSelected(person.id)}
//           />
//         // </Link>
//       );
//     });
//
//     return (
//       <div className="magic" id="magic">
//         <h1 style={{ textAlign: "center" }}> Get Home Health Help Today</h1>
//         <h4 style={{ textAlign: "center" }}>
//           {" "}
//           Click the button to see a list of eligible healthcare aides in your
//           area.
//         </h4>
//
//         <Button
//           primary
//           massive
//           className="buttonSearch"
//           style={{ display: "block", margin: "0 auto" }}
//           onClick={() => {
//             this.setState({ showing: !showing });
//           }}
//         >
//           {" "}
//           Search Health Help
//         </Button>
//
//         <section className="Posts" stackable>
//           {showing ? null : people}
//         </section>
//         <Route path={this.props.match.url + "/:id"} exact component={FullPerson} />
//       </div>
//     );
//   }
// }
//
// export default AideSearch;


// componentDidMount() {
//   console.log(this.props);
//   axios.get( '/users/' )
//   .then( response => {
//     const people = response.data;
//     const updatedPeople = people.map((person) => {
//       return {
//         ...person,
//       };
//     });
//     this.setState({ people: updatedPeople, showing:false });
//     })
//     .catch( error => {
//       console.log(error);
//     })
// };
