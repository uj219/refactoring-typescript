# typescript-simple-project

## 環境構築

yarnをインストールします。

```console
$ npm install -g yarn
```

プロジェクトの依存パッケージをインストールします。

```console
$ yarn install
```


## 開発サーバー

開発サーバーを起動します。

```console
$ yarn serve
```

起動したらブラウザで下記URLにアクセスすることで各画面を確認できます。

* アプリケーション画面: http://localhost:5000/public/
* 単体テスト実行画面: http://localhost:5000/test/


## 単体テスト

上記で示したようにブラウザでも単体テストの実行を行うことができますが、コンソールでも単体テストを実行することができます。

```console
$ yarn test
```
