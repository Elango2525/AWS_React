import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Tutorialspoint</h1>
            <ChangeName />
         </div>
      );
   }
}
class ChangeName extends React.Component {
   constructor(props) {
      super(props);
      this.state = { color: 'lightgreen' };
   }
   UNSAFE_componentWillMount() {
      // Changing the state immediately.
      this.setState({ color: 'wheat' });
   }
   render() {
      return (
         <div>
            <h1 style={{ color: this.state.color }}>Simply Easy Learning</h1>
         </div>
      );
   }
}
export default App;
