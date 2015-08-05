import Ember from 'ember';

export default Ember.Mixin.create({
  logger: Ember.inject.service(),
  activate() {
    this.get('logger').clear();
  }
});
