import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bird-watching', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bird-watching');
    assert.ok(route);
  });
});
