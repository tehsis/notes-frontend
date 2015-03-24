import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: 'li',
  layout: layout,
  testDone: function() {
    console.log('component!');
  }.observes('note.done')
});
