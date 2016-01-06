Meteor.methods({
	insertData: function(name, desc, types, rounds, add, team, logoId) {
		Projects.insert({
			"name" : name,
			"desc" : desc,
			"types" : types,
			"rounds" : rounds,
			"add" : add,
			"team" : team,
			"logo" : logoId,
		});
	}
});
