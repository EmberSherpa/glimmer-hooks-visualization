import Ember from 'ember';

const {inject} = Ember;
const {service} = inject;

export default Ember.Component.extend({
  tagName: '',
  logger: service(),
  didInitAttrs() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'didInitAttrs', arguments);
  },
  didReceiveAttrs() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'didReceiveAttrs', arguments);
  },
  willRender() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'willRender', arguments);
  },
  didInsertElement() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'didInsertElement', arguments);
  },
  didUpdateAttrs() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'didUpdateAttrs', arguments);
  },
  willUpdate() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'willUpdate', arguments);
  },
  didUpdate() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'didUpdate', arguments);
  },
  didRender() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'didRender', arguments);
  },
  willDestroyElement() {
    this._super.apply(this, arguments);
    this.get('logger').add(this, 'willDestroyElement', arguments);
  }
});
