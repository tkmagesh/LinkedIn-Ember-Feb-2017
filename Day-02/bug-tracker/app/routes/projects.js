import Ember from 'ember';

import Project from '../models/Project';
import Bug from '../models/Bug';

export default Ember.Route.extend({
	model(){
		//bug objects
		let serverCommBug = Bug.create({
			name : 'Server communication failure',
			descrition : 'Unable to make REST calls to the server',
			project : 'Inventory Management',
			severity : 5
		});

		let userResBug = Bug.create({
			name : 'Application not responsive',
			description : 'User reports that the application is not responsive to user actions',
			project : 'Inventory Management',
			severity : 1
		});

		let dataValBug = Bug.create({
			name : 'Data Validation error',
			description : 'Application accepts furture dates for date of birth',
			project : 'Payroll System',
			severity : 3
		});

		//project objects
		let invMgmt = Project.create({
			name : 'Inventory Management',
			description : 'Lord of stock maintenance',
			bugs : [serverCommBug, userResBug]
		});

		let paySys = Project.create({
			name : 'Payroll System',
			description : 'At my server 1st of every month',
			bugs : [dataValBug]
		});

		return [invMgmt, paySys];
	},
	actions : {
		createProject : function(){
			var currentController = this.get('controller');
			let projectName = currentController.get('projectName');
			var newProject = Project.create({name : projectName});
			//this.modelFor('projects').pushObject(newProject);
			currentController.model.pushObject(newProject);
			currentController.set('projectName', '');
		}
	}
});
