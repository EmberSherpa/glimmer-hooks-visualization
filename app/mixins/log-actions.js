import Ember from 'ember';

export default Ember.Mixin.create({
  logger: Ember.inject.service(),
  send(actionName, ...args) {
    this._super.apply(this, arguments);
    this.get('logger').logAction(this, actionName, ...args);
  }
});
