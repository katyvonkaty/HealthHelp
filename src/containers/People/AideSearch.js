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
  };

  onSearchSubmit = async () => {
    const response = await axios.get(
      "https://dummyapi.io/data/api/user?limit=5", {
        headers: {
          "app-id": "600d9cabc9d5e51f4f50c151"
        }
      }
    );
    console.log(response.data.data);
    const people = response.data.data
    const updatedPeople = people.map((person) => {
      return {
        ...person,
      };
    });
    this.setState({ people: updatedPeople });
    console.log(response.data);
  };

  personSelected = (id) => {
    this.setState({selectedPerson: id})
    this.props.history.push("/profile/" + id);
  };

  render() {
    const { showing } = this.state;
    const people = this.state.people.map((person) => {
      return (
        <Link to={"/" + person.id}>
        <Aide
          firstName={person.firstName}
          lastName={person.lastName}
          email={person.email}
          picture={person.picture}
          {...this.props}
          clicked={() => this.personSelected(person.id)}
        />
        </Link>
      );
    });

    return (
      <div className="magic" id="magic">
        <h1 style={{ textAlign: "center" }}> Get Home Health Help Today</h1>
        <h4 style={{ textAlign: "center" }}>
          {" "}
          Click the button to see a list of eligible healthcare aides in your
          area.
        </h4>

        <Button
          primary
          massive
          className="buttonSearch"
          style={{ display: "block", margin: "0 auto" }}
          onClick={() => {
            this.setState({ showing: !showing });
            this.onSearchSubmit();
          }}
        >
          {" "}
          Search Health Help
        </Button>

        <section className="Posts" stackable>
          {showing ? null : people}
        </section>
        <Route path="/:id" exact component={FullPerson} />
      </div>
    );
  }
}

export default AideSearch;
