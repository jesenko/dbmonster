import Ember from 'ember';

export default Ember.Component.extend({
   items: function(){
     return ['em-item'];
  }.property()
});
