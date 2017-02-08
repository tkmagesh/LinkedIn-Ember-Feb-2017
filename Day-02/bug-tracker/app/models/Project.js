import Ember from 'ember';

let Project = Ember.Object.extend({
	name : '',
	description : '',
	slug : Ember.computed('name', function(){
		return this.get('name').dasherize();
	}),
	setupBugs : Ember.on('init', function(){
		console.log('setting up bugs in the project');
		if (!this.get('bugs')){
			this.set('bugs', []);
		}
	})
});

window.Project = Project;
export default Project;
