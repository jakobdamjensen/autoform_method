TestSchema = new SimpleSchema({
    title: {
        type: String
    }
});

if (Meteor.isClient) {
  Template.hello.events({
    'click button#submitButtonOutside': function (e, template) {
      // increment the counter when button is clicked
      template.find("form").submit();
    }
  });
}

if (Meteor.isServer) {
    Meteor.methods({
        insertdata: function(data){
            console.log(data);
        }
    })
}
