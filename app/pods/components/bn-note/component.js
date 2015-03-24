import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: 'li',
  layout: layout,
  isDone: function(key, value) {
  	if (value === undefined) {
  		return this.get('note').get('done');
  	} else {
  		this.set('note.done', value);
  		this.get('note').save();
  		return value;
  	}
  }.property('note.done'),
  actions: {
	  deleteNote: function() {
	      this.get('note').destroyRecord();
	  }
  }
});
