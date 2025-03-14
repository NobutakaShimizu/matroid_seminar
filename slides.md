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
css: 
  - 'styles/custom.css'
  - 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
fonts:
  sans: 'Roboto'
  mono: 'Fira Code'
  weights: '400,500,700'
  italic: true
favicon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/solid/book.svg'
themeConfig:
  primary: '#1976d2'

---

# マトロイドのエクスパンダー性

@北海道大学マトロイドセミナー

  [清水 伸高](https://sites.google.com/view/nobutaka-shimizu/home) (東京科学大学)



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

<v-click>

#### 研究範囲 (ごく一部)

- 最適化アルゴリズム
- 計算量下界
- 暗号
- 誤り訂正符号
- マルコフ連鎖

数学の様々な概念が応用される. 

</v-click>

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

<v-clicks>
<div class="text-center mt-4 text-xl font-bold">
マトロイド: 理論計算機科学と純粋数学の間の架け橋の一つ
</div>
</v-clicks>

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
layout: top-title
color: amber-light
---

::title::

# 今日の話題: エクスパンダー性

::content::

- ランダムウォークの混交性に関する性質
- 擬似ランダムネス
- 計算量理論における非常に重要な道具
  - エクスパンダーグラフをブラックボックスに証明に使う
- 計算量下界の証明や行列演算の効率的な誤り訂正に応用 (Hirahara and S, STOC24)(Hirahara and S, STOC23)(Hirahara and S, STOC23)

---
layout: top-title
color: amber-light
---

::title::

# 高次元エクスパンダー

::content::

- エクスパンダー性は元々はグラフの性質だが, 近年は単体複体に拡張 (高次元エクスパンダー)
- 計算量理論と誤り訂正符号への応用 (**私の専門**)
  - 最適化問題の近似困難性のパラメータの改善
  - 誤り訂正符号の構成
  - エクスパンダー性を持つ立方複体が量子誤り訂正符号のブレイクスルーに用いられた
- 実はマトロイドを特殊ケースとして含む (**今日の話**)
  - 基のサンプリングと数え上げの近似が効率的に計算できる (Mihail-Vazirani予想の解決)

---
layout: section
---

# グラフとエクスパンダー性

---
layout: top-title
color: amber-light
---

::title::

# グラフ上のランダムウォーク

::content::

グラフ $G=(V,E)$ を考える. 頂点$u_0\in V$から開始して, 次の頂点を隣接点の中から一様ランダムに選ぶことを繰り返すことで得られる頂点列 $(u_t)_{t\ge 0}$ を**単純ランダムウォーク**という.

<div class="proposition">

グラフが連結かつ非二部ならば, 任意の初期頂点から開始しても, $u_t$の分布は, $t\to\infty$ のとき定常分布 $\pi \in [0,1]^V$ に収束する.

</div>

定常分布 $\pi$ は, $\pi(u) \propto \deg(u)$ で与えられる.

<v-clicks>

<div class="question">

  この収束速度はどのように評価できるか?

</div>


グラフがエクスパンダー性を満たすならば指数的に早く収束します!

</v-clicks>


---
layout: top-title
color: amber-light
---

::title::

# グラフのエクスパンダー性

::content::

遷移確率行列を$P$とする:

$$
\begin{aligned}
P = \begin{cases}
\frac{1}{\deg(u)} & \text{if }\{u,v\}\in E,\\
0 & \text{otherwise}.
\end{cases}
\end{aligned}
$$

つまり, $P(u,v)=\Pr[u\to v]$. この行列の固有値を$1=\lambda_1\ge\dots\ge\lambda_n\ge -1$とする ($n=|V|$).

- 全成分$1$のベクトルが$\lambda_1=1$の固有ベクトルになる.
<v-clicks>

<div class="definition">

  グラフ$G=(V,E)$は, $\max\{ |\lambda_2|,|\lambda_n| \}\le\lambda$ を満たすとき, **$\lambda$-エクスパンダー**であるという.
</div>


パラメータ$\lambda$が小さいほど, そのグラフはよりエクスパンダー性が高い ($\lambda\in[0,1]$).
</v-clicks>

---
layout: top-title
color: amber-light
---

::title::
# ランダムウォークとエクスパンダー

::content::

グラフがエクスパンダー性を持つならば, ランダムウォークの分布は早く収束する.


<div class="proposition">

ランダムウォークの$t$番目の頂点$u_t$の分布を$p_t\in[0,1]^V$とする.
グラフ$G$が$\lambda$-エクスパンダーならば, 任意の初期頂点$u_0$と十分大きな全ての$t\ge 0$に対して, $\|p_t-\pi\|_1\le O(n^2\lambda^{t})$が成り立つ.

</div>

$\lambda$が小さいほど収束が早い → ランダムウォークが「混ざりやすい」

<details class="bg-gray-100">
<summary>証明のアイデア</summary>

  簡単のため$P^\top=P$とする (つまり$G$は正則).
  ベクトル $p_t - \pi = (p_0-\pi)P^t$ の$\ell^2$ノルムを抑えてから$\ell^1$ノルムのバウンドに変換する. $\pi_0 - \pi$は第一固有ベクトル$\mathbf{1}$に直交するので,  固有値のmin-maxの関係(Courant-Fischerの定理)より

  $$
    \begin{align*}
      \|p_t - \pi\|_2^2 = \langle p_0 - \pi, P^{2t}(p_0 - \pi) \rangle \le \lambda^{2t} \|p_0 - \pi\|_2^2.
    \end{align*}
  $$

  主張の$n^2$倍のファクターは, 一般の$P$を扱う過程と$\ell^1$ノルムと$\ell^2$ノルムの関係から生じる. $\square$
</details>


---
layout: top-title
color: amber-light
---

::title::

# エクスパンダーグラフの例

::content::

<div class="flex justify-center">
<img src="/images/expander.png" alt="エクスパンダーの例" class="w-110"/>
<img src="/images/barbell.png" alt="エクスパンダーじゃない例" class="w-110"/>
</div>

<div class="caption">
  ランダム3正則グラフ (左) とバーベルグラフ (右). 左はランダムウォークがすぐ混ざるが, 右はそうならない.
</div>


---
layout: top-title
color: amber-light
---

::title::

# 遅延単純ランダムウォーク

::content::

単純ランダムウォークに確率$1/2$の自己遷移を付与したランダムウォークを**遅延単純ランダムウォーク**という.
遷移確率行列は次で与えられる:

$$
  \begin{align*}
    P = \begin{cases}
      \frac{1}{2} & \text{if } u=v,\\
      \frac{1}{2\deg(u)} & \text{if }\{u,v\}\in E,\\
      0 & \text{otherwise}.
    \end{cases}
  \end{align*}
$$

<div class="remark">

単純遅延RWは**頂点→辺**の遷移と**辺→頂点**の遷移に分解して考えることができる.

</div>

<div class="flex justify-center">
<div class="relative">
<img v-click.hide="1" src="/images/lazyRW1.svg" alt="遅延単純RWの遷移プロセス" class="w-40"/>
<img v-click="['+1', '+1']" src="/images/lazyRW2.svg" alt="遅延単純RWの遷移プロセス" class="w-40 absolute top-0 left-0"/>
<img v-click="2" src="/images/lazyRW3.svg" alt="遅延単純RWの遷移プロセス" class="w-40 absolute top-0 left-0"/>
</div>
</div>


---
layout: top-title
color: amber-light
---

::title::

# 遅延単純ランダムウォーク

::content::

<div class="flex justify-center">
<img src="/images/VE.svg" alt="頂点-辺の遷移" class="w-80"/>
</div>

<div class="caption">
「0次元」の点から開始し, 「1次元」の辺を経由して再び「0次元」の点に戻るプロセスに分解できる.
</div>

<div class="remark">

高次元エクスパンダーでは, これをより高次元の面に一般化したランダムウォークを考える.

</div>


---
layout: section
---

# 単体複体と高次元エクスパンダー

---
layout: top-title
color: amber-light
---

::title::

# (抽象的)単体複体

::content::

<div class="definition">

非空な有限集合$V$と部分集合族$\mathcal{F}\subseteq 2^V$の組 $X=(V,\mathcal{F})$ であり, $\mathcal{F}$が部分集合で閉じているものを**単体複体**といい, $\mathcal{F}$の元を**面**という.

</div>


<v-click>

- 面$\sigma$に対し, その次元を$\dim(\sigma)=|\sigma|-1$で定め, 次元$i$の面の集合を$X(i)$とする.

  - 頂点=次元$0$, 辺=次元$1$, ...

</v-click>

<v-click>

- $X$の次元を$\max\{\dim(\sigma)\colon \sigma\in\mathcal{F}\}$とする.

</v-click>

<v-click>

- 全ての極大面の次元が等しいとき, $X$は**純粋**であるという.
  - 例: マトロイド

</v-click>

<v-click>

<div class="remark">

以後は純粋な$d$次元単体複体のみを考える.
</div>

</v-click>



---
layout: top-title
color: amber-light
---

::title::

# (抽象的)単体複体

::content::

幾何的には, 点, 線分, 三角形, 四面体, ...を貼り合わせたもの.

<div class="flex justify-center">
<img src="/images/face.png" alt="幾何的" class="w-120"/>
</div>

幾何学的な意味での次元と面の次元は一致.

---
layout: top-title
color: amber-light
---

::title::

# 単体複体上のランダムウォーク

::content::

面上を遷移する二種類のランダムウォークを考える.

<div class="definition">

次元$i\ge 0$を固定する.
面$\tau \in X(i)$から開始して, 一様ランダムに$u\sim \tau$を選び, $\sigma:=\tau - u$に遷移するランダムウォークを**下降ウォーク**といい, 遷移確率行列を $P_i \in [0,1]^{X(i)\times X(i-1)}$ で表す.
</div>

<v-click>

下降ウォークを用いると各次元の面上の**定常分布**が定められる.

<div class="definition">

各次元 $-1 \le i\le d$ に対し, $X(i)$上の**定常分布** $\pi_i\in[0,1]^{X(i)}$ を次で定める:
- $\pi_d$ を$X(d)$上の一様分布とする.
- $i<d$ に対し, $\pi_i = \pi_{i+1}P_i$ と再帰的に定める.
</div>

</v-click>






