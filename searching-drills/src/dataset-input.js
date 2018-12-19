import React from 'react';

export default class DatasetInput extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value: null,
      counter: 0,
      message: ''
    };
  }

  incrementCounter(){
    this.setState({
      counter: this.state.counter++
    });
  } 

  resetCounter(){
    this.setState({
      counter: 0
    });
  }

  setMessage(str){
    this.setState({
      message: str
    });
  }

  linearSearch(arr, value){
    if(isNaN(value) === true){
      return this.setMessage('Please enter a number!')
    }
    for(let i =0; i<arr.length; i++){
      this.incrementCounter();
      if(value === arr[i]){
        return this.setMessage(`We found ${value} after ${this.state.counter} tries using linear search`);
      }
    }
    return this.setMessage(`We could not find ${value} after ${this.state.counter} tries using linear search`);
  }

  binarySearch(arr, value, start, end){
    console.log(arr, value, start, end);
    this.incrementCounter();
    const sortedArray = arr.sort();
    if(isNaN(value) === true){
      return this.setMessage('Please enter a number!')
    }
    if(start>=end){
      this.setMessage(`Could not find ${value} in dataset after ${this.state.counter} tries using binary search`);
      return;
    }
    let index = Math.floor((start+end)/2);
    let item = sortedArray[index];

    if(item === value){
      this.setMessage(`Found ${value} at index ${index} after ${this.state.counter} tries using binary search`);
      return index;
    }

    else if(item < value){
      return this.binarySearch(sortedArray, value, index+1, end);
    }
    else if(item > value){
      return this.binarySearch(sortedArray, value, start, index-1);
    }

  }

  onSubmit(e){
    e.preventDefault();
    this.textInput.value='';
  }

  render(){
    let message;
    if(this.state.message !== ''){
      message = <p>{this.state.message}</p>
    }

    return(
        <form onSubmit={e => {
          this.onSubmit(e);
        }}>
          <label>Enter your dataset below:</label>
          <input type="text" 
            onChange={ e => this.props.addSearchValue(parseInt(e.target.value))}
            ref={input => this.textInput = input} 
            placeholder="Enter your data here...">
          </input>
          <button onClick={() =>{
             this.linearSearch(this.props.searchArr, this.props.value);
             this.resetCounter();
            }}>Linear</button>
          <button onClick={() =>{ 
            this.binarySearch(this.props.searchArr, this.props.value, 0, this.props.searchArr.length);
            this.resetCounter();
          }}>Binary</button>
          {message}
        </form>);
  }
};


