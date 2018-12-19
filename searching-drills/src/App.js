import React, { Component } from 'react';
import DatasetInput from './dataset-input';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state ={
      searchArr : [89,30,25,32,72,70,51,42,25,24],
      counter: 0,
      value: null
    };
  }

  addDataset(value){
    this.setState({
      value
    });
  }

  linearSearch(arr, value){
    let counter =0;
    for(let i =0; i<arr.length; i++){
      counter ++;
      if(value === arr[i]){
        return `We found ${value} after ${counter} tries using linear search`
      }
    }
    return `We could not find ${value}`
  }



  binarySearch(arr, value, start, end){
    const sortedArray = arr.sort();
    if(start>end){
      return `Could not find ${value} in dataset`
    }
    let index = Math.floor((start+end)/2);
    let item = sortedArray[index];

    if(item === value){
      return index;
    }

    else if(item < value){
      return binarySearch(sortedArray, value, index+1, end);
    }
    else if(item > value){
      return binarySearch(sortedArray, value, start, index-1);
    }

  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <DatasetInput />
        </main>
      </div>
    );
  }
}

export default App;
