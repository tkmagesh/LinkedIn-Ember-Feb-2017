import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		console.log(params);
		//slugged name of the project -> params.slug
		let projects = this.modelFor('projects');
		return projects.findBy('slug', params.slug);
	}
});
