// function Counter() {
//   const [count, setCount] = React.useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>incremenat</button>
//     </div>
//   );
//   //   return React.createElement(
//   //     "div",
//   //     null,
//   //     React.createElement("p", null, `count:${count}`),
//   //     React.createElement("button", { onClick: increment }, "Increament")
//   //   );
// }
const App = () => {
  return (
    <div>
      <h1>Counter Parent</h1>
      <Counter hello={"hello"} />
      {/* <PhotoGallery /> */}
      <FeaturewithAuth />
    </div>
  );
};
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = (dd) => {
    console.log(dd, "ddd hello");
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>counter {this.state.count}</p>
        <button onClick={() => this.incrementCount("hello 1")}>
          incremeannnat
        </button>
      </div>
    );
  }
}

const PhotoGallery = () => {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);
  React.useEffect(() => {
    console.log(photos, "photos");
  }, [photos]);

  return (
    <div>
      {photos?.splice(0, 5)?.map((ph, index) => {
        return <img key={ph.id} src={ph?.image} />;
      })}
    </div>
  );
};

// const withLogin = (WrappedComponent) => {
//   return class extends React.Component {
//     login() {
//       // login logic
//       console.log("Login Successful");
//     }
//     logout() {
//       // logout logic
//       console.log("Logout Successfull");
//     }
//     render() {
//       return <WrappedComponent login={this.login} logout={this.logout} />;
//     }
//   };
// };

// class FeatureComponent extends React.Component {
//   render() {
//     return (
//       <>
//         <button onClick={this.props.login}>Login</button>
//         <button onClick={this.props.logout}>Logout</button>
//       </>
//     );
//   }
// }

// const FeatureWithAuth = withLogin(FeatureComponent)

const FeatureComponent = (props) => {
    return (
        <div>
      <button onClick={props.login}>Login</button>
    </div>
  );
};
const withLogin = (WrappedComponent) => {
    const login = () => {
        console.log("success login");
    };
    
    return () => <WrappedComponent login={login} />;
};
const FeaturewithAuth = withLogin(FeatureComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
