import React from 'react';
import 'antd/dist/antd.css';
import TaskFormContainer from './containers/TaskFormContainer';
import Tasks from './containers/Tasks';
import Background from './images/data-bg.jpg';

let BgStyle = {
  width: '100%',
  minHeight: '100vh',
  position: 'absolute',
  top: '0',
  background: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function App() {
  return (
    <div className="App" style={BgStyle}>
      <TaskFormContainer></TaskFormContainer>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
