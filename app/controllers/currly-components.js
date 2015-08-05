import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  showBlogPost: false,
  blogPost: computed({
    get() {
      return {
        title: 'Announcing Ember 2.0',
        body: 'The latest and greatest Ember since 1.13'
      };
    }
  })
});
