import DS from 'ember-data';

export default DS.Model.extend({
    firstname:DS.attr('string'),
    lastname : DS.attr('string'),
    address: DS.attr('string'),
    email : DS.attr('string'),
    city: DS.attr('string'),
    postal: DS.attr('string')
});
