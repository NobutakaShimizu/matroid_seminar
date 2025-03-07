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

- TCS「具体的な色分けはどれくらいの手間 (演算回数) で見つかるか?」


#### 研究範囲 (ごく一部)

- 最適化アルゴリズム
- 計算量下界
- 暗号
- 誤り訂正符号
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
layout: top-title
color: amber-light
---

::title::

# グラフのエクスパンダー性

::content::

無向グラフ$G=(V,E)$の正規化された隣接行列 $P\in[0,1]^{V\times V}$を考える. 

$$
\begin{aligned}
P = \begin{cases}
\frac{1}{\deg(u)} & \text{if }\{u,v\}\in E,\\
0 & \text{otherwise}.
\end{cases}
\end{aligned}
$$

この行列の固有値を$1=\lambda_1\ge\dots\ge\lambda_n\ge -1$とする ($n=|V|$).

<div class="rounded-lg border-1 border-blue-600 bg-sky-100">

  <div class="ml-4">

  **定義.**

  グラフ$G=(V,E)$は, $\max\{ |\lambda_2|,|\lambda_n| \}\le\lambda$ を満たすとき, **$\lambda$-エクスパンダー**であるという.
  </div>
</div>

全成分$1$のベクトルが第一固有ベクトルに対応する.

パラメータ$\lambda$が小さいほど, そのグラフはよりエクスパンダー性が高い.

---
layout: top-title
color: amber-light
---

::title::
# ランダムウォークとエクスパンダー

::content::

グラフ$G = (V,E)$上の単純ランダムウォーク: ランダムに定まる頂点列$(X_t)_{t\ge 0}$ ($t=0,1,\dots$) であって
頂点$X_0\in V$は任意に指定され, 頂点$X_{t+1}$は頂点$X_t$の一様ランダムな隣接点.

すなわち, 頂点$u$から頂点$v$に遷移する確率は$P(u,v)$.

グラフがエクスパンダー性を持つならば, ランダムウォークの分布は速く収束する.


<div class="rounded-lg border-1 border-blue-600 bg-sky-100">

  <div class="ml-4">

  **命題.**

  グラフ$G=(V,E)$上の**単純ランダムウォーク**$(X_t)_{t\ge 0}$に対し, $X_t$の分布を$p_t\in[0,1]^{V}$とする. すなわち, $p_t(v) = \Pr[X_t=v]$で定まるベクトルである.
  グラフ$G$が連結かつ二部グラフでないならば, ある$V$上の分布$\pi\in[0,1]^V$が存在して, $p_t \to \pi$となる.

  さらに, グラフ$G$が$\lambda$-エクスパンダーならば, ある定数$C>0$が存在して, 任意の初期頂点$X_0$と十分大きな全ての$t\ge 0$に対して, $\|p_t-\pi\|_1\le C\exp(-\lambda t)$が成り立つ.
  </div>
</div>

---
layout: top-title
color: amber-light
---

::title::

# 遅延単純ランダムウォーク

::content::

確率$1/2$で自己ループに遷移し, 確率$1/2$で一様ランダムな隣接点に遷移する頂点列を**遅延単純ランダムウォーク**という.


**観察**: 単純遅延RWは**頂点→辺**の遷移と**辺→頂点**の遷移に分解して考えることができる.

<!-- TODO: 図 -->


---
layout: section
---

# 高次元エクスパンダーとは?

---
layout: top-title
color: amber-light
---

::title::

# (抽象的)単体複体

::content::

**単体複体**: 有限集合 $V$ と部分集合族 $\mathcal{F} \subseteq 2^V$の組 $X=(V,\mathcal{F})$ であり, 部分集合で閉じているもの.
- 面$\sigma$に対し, その次元を$\dim(\sigma)=|\sigma|-1$で定め, 次元$i$の面の集合を$X(i)$とする.
- $X$の次元を最大次元の面の次元で定める.
- 全ての極大面の次元が等しいとき, $X$は**純粋**であるという.




---
layout: top-title
color: amber-light
---

::title::

# (抽象的)単体複体

::content::

<div class="flex justify-center">
<img src="/images/face.png" alt="幾何的" class="w-120"/>
</div>

<div class="text-center">
幾何的には, 点, 線分, 三角形, 四面体, ...を貼り合わせたもの.
</div>


---
layout: section
---

# マトロイドのエクスパンダー性



