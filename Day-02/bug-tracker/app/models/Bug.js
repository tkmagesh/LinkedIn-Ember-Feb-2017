import Ember from 'ember';

let Bug = Ember.Object.extend({
	name : '',
	description : '',
	project : '',
	severity : 1
});

window.Bug = Bug;
export default Bug;