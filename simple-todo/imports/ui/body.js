import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
import './task.js';

Template.body.helpers({
  tasks() {
    return Tasks.find({},{sort: {createAt: -1}});
  },
});
Template.body.events({
  'submit .new-task'(event){
    //prevent default behavior
    event.preventDefault();

    //get value from form element
    const target = event.target;
    const text = target.text.value;

    //insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    //clear the form
    target.text.value = '';
  },
})

