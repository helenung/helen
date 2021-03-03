import EmberRouter from '@ember/routing/router';
import config from 'helen/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('photography');
  this.route('art');
  this.route('bird-watching');
  this.route('projects');
});
