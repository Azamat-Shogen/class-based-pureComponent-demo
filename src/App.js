import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titanic",
      isReleased: true
    };
  }

  toogleRelease = () => {
    console.log("toogleRelease");
    this.setState((prevState) => ({
      ...this.state,
      isReleased: !prevState.isReleased
    }));
  };

  render() {
    const { title, isReleased } = this.state;

    return (
      <div>
        <MovieTitle title={title} />
        <h1>Movie is released: {isReleased ? "yes" : "no"} </h1>
        <button onClick={this.toogleRelease}>Toogle Release</button>
      </div>
    );
  }
}

// Pure componets eliminate the use of shuldComponentUddata life cycle
class MovieTitle extends React.PureComponent {
  render() {
    console.log("MovieTitle is rendered");
    return <h1>Movie title {this.props.title} </h1>;
  }
}

// class MovieTitle extends React.Component {

//   shouldComponentUpdate(nextProps, nextState) {
//     return this.props.title !== nextProps.title;
//   }

//   render() {
//     console.log("MovieTitle is rendered");
//     return <h1>Movie title {this.props.title} </h1>;
//   }
// }
