import Ember from 'ember';

const {inject} = Ember;
const {service} = inject;

export default Ember.Controller.extend({
    logger: service()
});
