import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  message: DS.attr('string'),
  done: DS.attr('boolean')
});
