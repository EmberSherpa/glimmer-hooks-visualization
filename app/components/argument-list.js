import Ember from 'ember';

const {computed, typeOf} = Ember;

export default Ember.Component.extend({
  tagName: '',
  arguments: null,
  args: computed('arguments', {
    get() {
      return (this.get('arguments') || []).map(function(arg){
        return {
          type: typeOf(arg),
          value: arg
        };
      });
    }
  })
});
