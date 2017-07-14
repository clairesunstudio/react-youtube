import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/SearchBar'

const API_Key = 'AIzaSyBo01JP2fQkPzwHFLHIr2cXndIGj-P3Tgk';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('.container'));
