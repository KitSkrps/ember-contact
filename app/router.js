import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts', function() {
    this.route('add');
    this.route('edit',{path:'/:id/edit'});
  });
  this.route('contact',{path:'/contacts/:id'});
});

export default Router;
