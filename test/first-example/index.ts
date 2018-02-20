import { Customer, Movie, Rental } from "../../src/first-example";

const assert = chai.assert;

suite('first-example', () => {

  const movieCommando = new Movie('コマンドー', Movie.REGULAR);
  const movieStandByMe = new Movie('スタンド・バイ・ミー', Movie.REGULAR);
  const movieBladeRunner2049 = new Movie('ブレードランナー2049', Movie.NEW_RELEASE);

  const sakuragi = new Customer('桜木 花道');
  const gori = new Customer('赤木 剛憲');

  setup(() => {
  });

  teardown(() => {
  });

  test('statement(): ', () => {
    // ｢桜木 花道｣が｢コマンドー｣と｢ブレードランナー2049｣をレンタルする
    sakuragi.addRental(new Rental(movieCommando, 7));
    sakuragi.addRental(new Rental(movieBladeRunner2049, 3));
    // ｢桜木 花道｣がレンタルした明細を取得
    const statement = sakuragi.statement();
    assert.equal(statement,
      'Rental Record for 桜木 花道\n\tコマンドー\t9.5\n\tブレードランナー2049\t9\nAmount owed is 18.5\nYou earned 3 frequent renter points');
  });

});
