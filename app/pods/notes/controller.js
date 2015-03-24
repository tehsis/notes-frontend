import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createNote: function() {
      let message = this.get('newMessage');
      if (!message.trim()) {return;}

      let note = this.store.createRecord('note', {
        message: message
      });

      this.set('newMessage', '');

      note.save();
    }
  }
});
