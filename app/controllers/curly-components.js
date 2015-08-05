import Ember from 'ember';
import LogActions from '../mixins/log-actions';

export default Ember.Controller.extend(LogActions, {
  blogPost: {
    title: 'Announcing Ember 2.0',
    body: 'The latest and greatest Ember since 1.13'
  },
  // BEGIN-SNIPPET curly-components-change-block-post-action
  actions: {
    'change-blog-post'() {
      this.set('blogPost', {
        title: 'Ember 2.0 in Production',
        body: 'Learn all about running Ember 2.0 in production'
      });
    }
  }
  // END-SNIPPET
});
