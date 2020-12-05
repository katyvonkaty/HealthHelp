import React from "react"

class ButtonLoader extends React.Component {
  state= {
    loading: false
  }

  loadLoader = () => {
    this.setState({ loading: true })

    setTimeout ( () => {
      this.setState( {loading:false}, 3000 )
    })
  }

  render() {
    const {loading} = this.state;

    return (
      <button onClick={this.loadLoader} disabled={loading}> Click me </button>
    )
  }
}

export default ButtonLoader;
