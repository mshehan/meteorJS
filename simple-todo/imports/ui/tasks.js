import { Template } from 'meteor/templating';
import { Tasks } from '..api/tasks/js';
import './tasks.html';

Template.task.events({
    'click .toggle-check'(){
        //set the checked property to the opposite side of its current value
        Tasks.update(this._id, {
            $set: {checked: !this.checked },
        });
    },
    'click. delete'(){
        tasks.remove(this._id)
    },
})