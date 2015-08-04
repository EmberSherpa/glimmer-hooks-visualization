import Ember from 'ember';

export default Ember.Service.extend({
  lines: [],
  add(component, hook, args) {
    args = [].slice.apply(args);
    this.get('lines').pushObject({ component, hook,  args});
  },
  clear() {
    this.set('lines', []);
  }
});
