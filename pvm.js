

if (Meteor.isClient){
var best = new buzz.sound("thebest", {
	formats: ['ogg', "mp3"]
});

var limit = new buzz.sound("limit", {
	formats: ['ogg', "mp3"]
});

var pushit = new buzz.sound("pushit", {
	formats: ['ogg', "mp3"]
});

Template.playSound.events({
	"click #musicButton1": function(event, template){
		best.togglePlay();
	},
	"click #musicButton2": function(event, template){
		limit.togglePlay();
	},
	"click #musicButton3": function(event, template){
		pushit.togglePlay();
	}
});
}

if (Meteor.isServer){
  
}

