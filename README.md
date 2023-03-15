## Jest で始めるテスト入門

<ul>
<li><a href="#01">Jest入門</a></li>
</ul>

<h3 id="01">Jest入門</h3>

<ul>
<li><a href="#01-1">等価を評価するtoBe、toEqual、toStrictEqualの違い</a></li>
<li><a href="#01-2">toBe、toEqual、toStrictEqualの使い分け</a></li>
<li><a href="#01-3">前後処理が実行されるタイミング</a></li>
<li><a href="#01-4">テストをスキップ</a></li>
</ul>

<br>

<h4 id="01-1">等価を評価するtoBe、toEqual、toStrictEqualの違い</h4>

- `toBe`：プリミティブな値が等しいかを、オブジェクトについては同一インスタンスであるかを比較する。
- `toEqual`：プリミティブな値が等しいかを、オブジェクトについては全プロパティのプリミティブな値が等しいかを、再帰的に比較する。
- `toStrictEqual`：toEqual とほぼ同じだが、次の点で異なる。
  - 未定義のプロパティと undefined を値に持つプロパティとを区別する。
  - 配列中の、未定義の要素（empty）と、値が undefined である要素とを区別する。
  - 生成元のクラスを区別する。

<br>

<h4 id="01-2">toBe、toEqual、toStrictEqualの使い分け</h4>

- `toBe` を利用するケース
  - プリミティブ値を評価
  - 同じオブジェクトんの参照を持つ変数であることを評価（例えば引数として渡したオブジェクトの変数がリターンされることを確認するなど）
- `toEqual` を利用するケース
  - オブジェクトのプロパティ値の評価
- `toStrictEqual` を利用するケース
  - 生成元のクラス名や undefined なプロパティ、Array の empty 値の評価を含めた厳密なオブジェクトの評価

<br>

<h4 id="01-3">前後処理が実行されるタイミング</h4>

- `beforeAll`: describe 内で定義されているすべてのテストの実行前に 1 回実行される
- `beforeEach`: describe 内で定義されているそれぞれのテストの実行前に 1 回実行される
- `afterAll`: describe 内で定義されているすべてのテストの終了後に 1 回実行される
- `afterEach`: describe 内で定義されているそれぞれのテストの終了後に 1 回実行される

<br>

<h4 id="01-4">テストをスキップ</h4>

- `describe.skip` or `xdescribe`: グループ内のテストケースすべてをスキップ
- `test.skip` or `xtest`: テストケースをスキップ
- `it.skip` or `xit`: テストケースをスキップ

<br>
