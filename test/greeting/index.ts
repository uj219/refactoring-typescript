const assert = chai.assert;
import { Greeting } from '../../src/greeting';

suite('greeting', () => {

  setup(() => {
  });

  teardown(() => {
  });

  test('getMessage(): メッセージの取得', () => {
    const greeting = new Greeting();
    const actual = greeting.getMessage('World!');
    assert.equal(actual, 'Hello World!');
  });

});
