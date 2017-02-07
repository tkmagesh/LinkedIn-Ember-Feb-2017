import Ember from 'ember';

let Bug = Ember.Object.extend({
	name : '',
	description : '',
	project : '',
	severity : 1
});

let Project = Ember.Object.extend({
	name : '',
	description : '',
	bugs : [],
	slug : Ember.computed('name', function(){
		return this.get('name').dasherize();
	})
});

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
	}
});
