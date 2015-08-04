import Ember from 'ember';

const {inject} = Ember;
const {service} = inject;

export default Ember.Controller.extend({
    logger: service(),
    currentArgument: null,
    isShowingArgumentModal: false,
    actions: {
      showArgumentModal(argument) {
        this.set('currentArgument', argument);
        this.set('isShowingArgumentModal', true);
      },
      closeArgumentModal() {
        this.set('isShowingArgumentModal', false);
        this.set('currentArgument', null);
      }
    }
});
