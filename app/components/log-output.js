import Ember from 'ember';

const {inject} = Ember;
const {service} = inject;

export default Ember.Component.extend({
  logger: service(),
  actions: {
    clear() {
      this.get('logger').clear();
    }
  }
});
