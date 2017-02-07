import Ember from 'ember';

let Project = Ember.Object.extend({
	name : '',
	description : ''
});

let Bug = Ember.Object.extend({
	name : '',
	description : '',
	project : '',
	severity : 1
});



export default Ember.Route.extend({
	
});
