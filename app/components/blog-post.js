import Ember from 'ember';

const {inject} = Ember;
const {service} = inject;

export default Ember.Component.extend({
  logger: service(),
  didInitAttrs() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'didInitAttrs', arguments);
  },
  didReceiveAttrs() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'didReceiveAttrs', arguments);
  },
  willRender() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'willRender', arguments);
  },
  didInsertElement() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'didInsertElement', arguments);
  },
  didUpdateAttrs() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'didUpdateAttrs', arguments);
  },
  willUpdate() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'willUpdate', arguments);
  },
  didUpdate() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'didUpdate', arguments);
  },
  didRender() {
    this._super.apply(this, arguments);
    this.get('logger').add('blog-post', 'didRender', arguments);
  }
});
