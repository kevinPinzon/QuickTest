export const Notifications = new Mongo.Collection('notifications');

let Schema = {};

Schema.notification = new SimpleSchema({
  canchaName: {
    type: String
  },
  clienteName: {
    type: String
  },
  clienteId: {
    type: String
  },
  duenoId: {
    type: String
  },
  read: {
    type: Boolean
  }
});

Notifications.attachSchema(Schema.notification);

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) &&
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

if(Meteor.isServer){
  Meteor.methods({
    'notification.insert'(notification){
        console.log("dentro de noti.insert...");
        Notifications.insert(notification, function(err){
          if(err){
            console.log("dentro err de la clase noti");
            throw new Meteor.Error('Error inserting notification: '+   err);
          }else
            console.log("dentro de noti: "+ Notifications.find().count());
        });
     }
  });

  Meteor.publish('notifications', function() {
    return Notifications.find({duenoId: this.userId, read: false});
  });
}
