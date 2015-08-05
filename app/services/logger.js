import Ember from 'ember';

export default Ember.Service.extend({
  lines: [],
  logAction(object, actionName, args) {
    const name = object.constructor.toString();
    const entry = { component: name, hook: `sent action ${actionName}`, args};
    this.get('lines').pushObject(entry);
  },
  add(component, hook, args) {
    args = [].slice.apply(args);
    const name = component.constructor.toString();
    this.get('lines').pushObject({ component: name, hook,  args});
  },
  clear() {
    this.set('lines', []);
  }
});
