import Ember from 'ember';

export default Ember.Component.extend({
  bgcolor: 'yellow',
  subitems: function(){
    return [{
      component: 'em-subitem',
      subitem: { label: 'label1' }
    },{
      component: 'em-subitem',
      subitem: { label: 'label2' }
    }];
  }.property()
});
