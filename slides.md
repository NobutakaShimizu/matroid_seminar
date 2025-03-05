---
# You can also start simply with 'default'
theme: neversink
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
layout: cover
# some information about your slides (markdown enabled)
title: マトロイドのエクスパンダー性
info: |
  ## Slide of my talk at [Hokkaido University Matroid Seminar](https://sites.google.com/view/matroid-seminar/), held at March 28

# https://sli.dev/features/drawing
drawings:
  persist: true
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
author: Nobutaka Shimizu
---

# マトロイドのエクスパンダー性

@北海道大学マトロイドセミナー

  [清水 伸高](https://sites.google.com/view/nobutaka-shimizu/home) (東京科学大学)


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: top-title
color: amber-light
---
::title::

# 目次

::content::

<Toc minDepth="1" maxDepth="1" />

---
layout: top-title
color: amber-light
---

::title::

# 理論計算機科学 (Theoretical Computer Science; TCS)

::content::

#### 計算機の理論的な能力やその限界を数学を使って解明 (応用数学)

- 数学「四色定理によれば地図は4色で塗れる」

- TCS「具体的な色分けはどれくらいの手間で見つかるか?」


#### 多彩な応用例

- 最適化アルゴリズム
- 計算量下界
- 暗号
- 学習理論
- マルコフ連鎖

数学の様々な概念が応用される. 

---
layout: top-title
color: amber-light
---

::title::

# TCSと純粋数学のつながり

::content::

<div class="flex justify-center">
<img src="/images/TCS_and_math.svg" alt="TCSと純粋数学の関係" class="w-170"/>
</div>

<div class="text-center mt-4 text-xl font-bold">
マトロイド: 理論計算機科学と純粋数学の間の架け橋の一つ
</div>

---
layout: top-title-two-cols
color: amber-light
---

::title::

# 諸分野におけるマトロイド


::left::

### 理論計算機科学

- 効率的に解ける組合せ最適化問題の性質の抽象化
  - 貪欲法
  - マトロイド交叉

- 効率的にサンプリング(数え上げ)できる離散構造の性質の抽象化 (**今日の話**)
  - 高次元エクスパンダー
  - 対数凹多項式 (log-concave polynomial)

::right::

### 純粋数学

- グラフに付随する不変量の一般化
  - ランク多項式
- 線形部分空間や超平面配置の組合せ的性質の抽出
  - 有向マトロイド
::default::

<div class="text-center">
<div class="rounded-lg border-2 border-gray-300 p-4 max-w-2xl mx-auto">
マトロイドは研究対象の「扱いやすい」性質を抽象化した時に見えてくることが多い
</div>
</div>



---

# 今日の話題: エクスパンダー性

- ランダムウォークの混交性に関する性質
- 擬似ランダムネス
- 計算量理論における非常に重要な道具
  - エクスパンダーグラフをブラックボックスに証明に使う
- 計算量下界の証明や行列演算の効率的な誤り訂正に応用 (Hirahara and S, STOC24)(Hirahara and S, STOC23)(Hirahara and S, STOC23)

---

# 高次元エクスパンダー

- エクスパンダー性は元々はグラフの性質だが, 近年は単体複体に拡張 (高次元エクスパンダー)
- 計算量理論と誤り訂正符号への応用 (**私の専門**)
  - 最適化問題の近似困難性のパラメータの改善
  - 誤り訂正符号の構成
  - エクスパンダー性を持つ立方複体が量子誤り訂正符号のブレイクスルーに用いられた
- 実はマトロイドを特殊ケースとして含む (**今日の話**)
  - 基のサンプリングと数え上げの近似が効率的に計算できる (Mihail-Vazirani予想の解決)

<div class="rounded-lg border-2 border-gray-300 p-4 max-w-2xl mx-auto text-center">
期待されるマトロイドの新たな応用(清水の意見)

単に既存の概念の<strong>抽象化</strong>として捉えるのではなく, 既存の誤り訂正符号や計算量下界のパラメータの改善のために<strong>道具</strong>になりうる.
また, エクスパンダー性を応用した新たなアプローチに基づくアルゴリズムが期待される.
</div>

---

# この後の構成

- グラフエクスパンダー性
- 高次元エクスパンダー性
- マトロイドのエクスパンダー性
- その応用: サンプリングと近似数え上げ
- 高次元エクスパンダーの応用 (時間があれば)

---
layout: section
---

# グラフエクスパンダーとは?


---
layout: section
---

# 高次元エクスパンダーとは?

---
layout: section
---

# マトロイドのエクスパンダー性



