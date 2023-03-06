## Jest で始めるテスト入門

<ul>
<li><a href="#01">Jest入門</a></li>
</ul>

<h3 id="01">Jest入門</h3>

<ul>
<li><a href="#01-1">等価を評価するtoBe、toEqual、toStrictEqualの違い</a></li>
<li><a href="#01-2">toBe、toEqual、toStrictEqualの使い分け</a></li>
</ul>

<h4 id="01-1">等価を評価するtoBe、toEqual、toStrictEqualの違い</h4>

<ul>
<li>toBe：プリミティブな値が等しいかを、オブジェクトについては同一インスタンスであるかを比較する。</li>
<li>toEqual：プリミティブな値が等しいかを、オブジェクトについては全プロパティのプリミティブな値が等しいかを、再帰的に比較する。</li>
<li>
toStrictEqual：toEqualとほぼ同じだが、次の点で異なる。
<ul>
<li>未定義のプロパティとundefinedを値に持つプロパティとを区別する。</li>
<li>配列中の、未定義の要素（empty）と、値がundefinedである要素とを区別する。</li>
<li>生成元のクラスを区別する。</li>
</ul>
</li>
</ul>
<br>
<br>

<h4 id="01-2">toBe、toEqual、toStrictEqualの使い分け</h4>

<ul>
<li>
toBeを利用するケース
<ul>
<li>プリミティブ値を評価</li>
<li>同じオブジェクトんの参照を持つ変数であることを評価（例えば引数として渡したオブジェクトの変数がリターンされることを確認するなど）</li>
</ul>
</li>
<li>
toEqualを利用するケース
<ul>
<li>オブジェクトのプロパティ値の評価</li>
</ul>
</li>
<li>
toStrictEqualを利用するケース
<ul>
<li>生成元のクラス名やundefinedなプロパティ、Arrayのempty値の評価を含めた厳密なオブジェクトの評価</li>
</ul>
</li>
</ul>
