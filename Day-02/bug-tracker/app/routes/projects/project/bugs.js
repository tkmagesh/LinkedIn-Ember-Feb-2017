import Ember from 'ember';



export default Ember.Route.extend({
	model : function(){
		let currentProject = this.modelFor('projects.project');

		return currentProject;
	}
});
