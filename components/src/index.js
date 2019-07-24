import React from  'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
    <div className="ui container comments">
      <CommentDetail 
      author="same" 
      time = "Today at 4:45 PM" 
      cmd ="Hi" 
      avatar ={faker.image.avatar()}/>
      <CommentDetail 
      author="Alex" 
      time = "Today at 6:45 PM" 
      cmd ="Hello" 
      avatar ={faker.image.avatar()}/>
      <CommentDetail 
      author="Jane" 
      time = "Today at 9:45 PM" 
      cmd ="How are you?" 
      avatar ={faker.image.avatar()}/>
    </div>
    );
};

ReactDom.render(<App/>,document.querySelector('#root'));
