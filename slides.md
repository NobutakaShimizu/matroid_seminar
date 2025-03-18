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

<div class="caption">
  マトロイドはTCSと純粋数学の間の架け橋の一つ
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

<div class="remark mx-20">

マトロイドは研究対象の「扱いやすい」性質を抽象化した時に見えてくることが多い.

</div>




---
layout: top-title
color: amber-light
---

::title::

# 今日の話題: エクスパンダー性

::content::

- ランダムウォークが早く「混ざり合う」ことを保証する性質
- 計算量理論の擬似ランダムネスの文脈における非常に重要な道具
  - 誤り訂正符号の構成, PCP定理の証明, 擬似乱数生成器の構成
- 私の研究におけるエクスパンダー性の応用
  - 平均時計算量の困難性増幅 <a href="https://dl.acm.org/doi/10.1145/3564246.3585189" target="_blank" class="cite-reference">Hirahara and S, STOC'23</a>
  - 埋め込みクリーク問題の最適な探索から判定への帰着 <a href="https://dl.acm.org/doi/10.1145/3618260.3649751" target="_blank" class="cite-reference">[Hirahara and S, STOC'24]</a>
  - 行列積アルゴリズムの誤り訂正 <span class="cite-reference"> [Hirahara and S, STOC'25] </span>

---
layout: top-title
color: amber-light
---

::title::

# 高次元エクスパンダー

::content::

- エクスパンダー性は元々はグラフの性質だが, 近年は単体複体に拡張 (高次元エクスパンダー)
- 計算量理論と誤り訂正符号におけるブレイクスルー
  - PCP定理のパラメータ改善 <span class="cite-reference">\[Bafna, Minzer, Vyas, Yun, STOC'25]</span>
  - 立方複体に基づく量子誤り訂正符号 <a href="https://dl.acm.org/doi/10.1145/3519935.3520024" class="cite-reference">\[Dinur, Evra, Livne, Lubotzky, Mozes, STOC'22\]</a><a href="https://dl.acm.org/doi/10.1145/3519935.3520017" class="cite-reference">\[Panteleev, Kalachev, STOC'22\]</a>
  - マトロイドの基の数え上げ <a href="https://projecteuclid.org/journals/annals-of-mathematics/volume-199/issue-1/Log-concave-polynomials-II--High-dimensional-walks-and-an/10.4007/annals.2024.199.1.4.short" class="cite-reference">\[Anari, Liu, Gharan, Vinzant, Ann. of Math.(2024)\]</a>
  
<div class="topic-box">

**今日の話題**

- 高次元エクスパンダーとは何か?
- マトロイドに関して何がわかるか?

</div>




---
layout: section
color: amber-light
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

一般に, 重み付きのランダムウォークも遷移確率行列を定義できる.

<div class="definition">

遷移確率行列$P\in[0,1]^{V\times V}$の固有値を$\lambda_1(P)\ge\dots\ge\lambda_n(P)$とする ($n=\abs{V}$)とし, $\lambda(P):=\max\{\abs{\lambda_2(P)},\abs{\lambda_n(P)}\}$とする.
</div>

- 全成分$1$のベクトルが$\lambda_1(P)=1$の固有ベクトルになる.


---
layout: top-title
color: amber-light
---

::title::

# グラフのエクスパンダー性

::content::

<div class="definition">

  グラフ$G$は, その単純ランダムウォークの遷移確率行列$P$が$\lambda_2(P)\le \lambda$であるとき, **片側$\lambda$-エクスパンダー**であるという. また, $\lambda(P)\le\lambda$ を満たすとき, **(両側)$\lambda$-エクスパンダー**であるという.
</div>

- パラメータ$\lambda$が小さいほど, そのグラフはよりエクスパンダー性が高い ($\lambda\in[0,1]$).
- 二部グラフは常に$\lambda_n(P)=-1$なので, 両側エクスパンダーにはならない.
- **スペクトルギャップ** = $1-\lambda$

<div class="remark">

慣例ではグラフの性質としてエクスパンダー性を定義するが, 一般には遷移確率行列の性質として定義してもよい. 
</div>

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

スペクトルギャップ$1-\lambda$が大きいほど, ランダムウォークが「混ざりやすい」

<details class="bg-gray-100">
<summary>証明のアイデア (クリックして展開)</summary>

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
color: amber-light
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
layout: top-title-two-cols
color: amber-light
---

::title::

# 二つのエクスパンダー性

::left::

#### 大域エクスパンダー性

<v-click>

- **定義**: $X(i)$上の下降上昇ウォーク$\PDU_i$の第二固有値に基づく性質
- **特徴**:
  - グラフのエクスパンダー性の高次元版
  - $X(i)$全体の大域的な接続性を表現
  - マトロイド上の基交換ウォークの収束速度を保証

</v-click>

::right::

#### 局所エクスパンダー性

<v-click>

- **定義**: 各面$\sigma$のリンク$X_\sigma$の$1$-スケルトンのグラフエクスパンダー性
- **特徴**:
  - 各面の「周辺」が良く接続されていることを保証
  - 「局所的に見るとエクスパンダーグラフ」
  - 局所エクスパンダー性の確認は(飛び道具を使うと)比較的容易に可能

</v-click>

::default::

<v-click>

<div class="theorem mx-40">

局所エクスパンダー性 $\Rightarrow$ 大域エクスパンダー性
</div>

</v-click>


---
layout: top-title
color: amber-light
---

::title::

# 単体複体上のランダムウォーク

::content::


<div class="definition">

次元$i\ge 0$を固定する.
面$\tau \in X(i)$から開始して, 一様ランダムに$u\sim \tau$を選び, $\sigma:=\tau - u$に遷移するランダムウォークを**下降ウォーク**といい, 遷移確率行列を $\Pdown_i \in [0,1]^{X(i)\times X(i-1)}$ で表す.
</div>

<v-click>

遷移確率行列の成分は

$$
  \begin{align*}
    \Pdown_i(\tau,\sigma) =\begin{cases}
    \frac{1}{i+2} & \text{if }\sigma\subset\tau,\\
    0 & \text{otherwise}.
    \end{cases}
  \end{align*}
$$


<div class="definition">

各次元 $-1 \le i\le d$ に対し, $X(i)$上の**定常分布** $\pi_i\in[0,1]^{X(i)}$ を次で定める:
- $\pi_d$ を$X(d)$上の一様分布とする.
- $i<d$ に対し, $\pi_i = \pi_{i+1}\Pdown_i$ と再帰的に定める.
</div>

</v-click>

---
layout: top-title
color: amber-light
---

::title::

# 単体複体上のランダムウォーク

::content::

<div class="remark">

$\pi_i(\sigma)$は$\sigma$を含む極大面の個数に比例する.
</div>



例えば, 単純ランダムウォークの定常分布$\pi$は

$$
  \begin{align*}
    \pi(u)\propto \deg(u)
  \end{align*}
$$

つまり, $u$を含む辺の本数に比例.

辺$e\sim E$を一様ランダムに選び, ランダムな端点を出力すると定常分布$\pi$になる.


---
layout: top-title
color: amber-light
---

::title::

# 単体複体上のランダムウォーク

::content::

下降ウォークの「逆再生」を考える.

<div class="definition">

次元$i<d$を固定する. 以下の等式を満たす遷移確率行列$\textcolor{violet}{\Pup_i}\in[0,1]^{X(i)\times X(i+1)}$に従うランダムウォークを**上昇ウォーク**という:

$$
  \begin{align*}
    \pi_i(\sigma)\textcolor{violet}{\Pup_i(\sigma,\tau)} = \pi_{i+1}(\tau)\Pdown_{i+1}(\tau,\sigma).
  \end{align*}
$$


</div>

- 等式を詳細釣り合い条件という. これを解くと


$$
  \begin{align*}
    \Pup_i(\sigma,\tau)  = 
    \begin{cases}
    \frac{\pi_{i+1}(\tau)}{(i+2)\pi_i(\sigma)} & \text{if }\sigma\subset\tau,\\
    0 & \text{otherwise}.
    \end{cases}
  \end{align*}
$$

- つまり, 定常分布の重み$\pi_{i+1}(\tau)$に比例した確率で遷移する

- 遅延単純RWの「頂点$\to$辺」の遷移に相当

---
layout: top-title
color: amber-light
---

::title::

# 単体複体上のランダムウォーク

::content::

<div class="remark">

下降ウォークと上昇ウォークは互いに「逆再生」の関係にある.
</div>

<div class="flex justify-center">
<img src="/images/up_and_down.svg" alt="上昇ウォークと下降ウォークの関係図" class="w-80"/>
</div>

<details>
<summary>形式的には...</summary>

<div class="proof">

$\Pdown_{i+1},\Pup_i$を線形写像とみなしたとき, 定常分布で重みつけた内積を考えると一方が他方の随伴である:

$$
  \begin{align*}
  \inner{f,\Pup_{i} g}_{\pi_i} = \inner{\Pdown_{i+1} f,g}_{\pi_{i+1}}.
  \end{align*}
$$

</div>

</details>

---
layout: top-title
color: amber-light
---

::title::

# 上昇下降・下降上昇ウォーク

::content::

上昇ウォークと下降ウォークを組み合わせて, 同じ次元の面間でのランダムウォークを定義する.

<div class="definition">

- 上昇下降ウォーク: $\PUD_i = \Pup_i \Pdown_{i+1}$ ($X(i)$上で遷移)
- 下降上昇ウォーク: $\PDU_i = \Pdown_i \Pup_{i-1}$ ($X(i)$上で遷移)

</div>

<div class="flex justify-center">
<img src="/images/walks.svg" alt="上昇下降ウォークと下降上昇ウォークの図" class="w-80"/>
</div>

---
layout: top-title
color: amber-light
---

::title::

# 上昇下降・下降上昇ウォークの性質

::content::

<div class="topic-box">

- 上昇下降ウォーク: $\PUD_i = \Pup_i \Pdown_{i+1}$ ($X(i)$上で遷移)
- 下降上昇ウォーク: $\PDU_i = \Pdown_i \Pup_{i-1}$ ($X(i)$上で遷移)

</div>


これらのウォークは以下の重要な性質を持つ:

<v-clicks>

- $\PUD_i$と$\PDU_i$はどちらも$X(i)$上の定常分布$\pi_i$を持つ

- 両者は半正定値である（$\because$ $\PUD_i = \Pup_i \Pdown_{i+1} = \Pup_i (\Pup_i)^*$の形）
- $\PUD_i$と$\PDU_{i+1}$の非零固有値の多重集合は一致（$\because$ $\PDU_{i+1} = \Pdown_{i+1}\Pup_i$および$\PUD_i=\Pup_i \Pdown_{i+1}$)
  - 特に, $\lambda_2(\PUD_i) = \lambda_2(\PDU_{i+1})$ (第二固有値が一致)

</v-clicks>



---
layout: top-title
color: amber-light
---

::title::

# 高次元エクスパンダー性の定義

::content::

<div class="definition">

純粋な$d$次元単体複体$X=(V,\F)$は, 各$0 \leq i \leq d$に対して$X(i)$上の下降上昇ウォーク$\PDU_i$が$\lambda_2(\PDU_i) \leq \lambda_i$を満たすとき, **大域$(\lambda_0,\dots,\lambda_d)$-エクスパンダー**である.

</div>

<div class="remark">

グラフのエクスパンダー性と同様, $\lambda_i$が小さいほど「混ざりやすい」.

</div>

<v-click>

#### 単体複体の大域的エクスパンダー性の意義

- ランダムウォークの急速な混合を保証
- 高次元における「擬似ランダム性」を表現
- 局所的な情報から大域的性質を導く（局所大域原理）

</v-click>

---
layout: section
color: amber-light
---

# マトロイド

---
layout: top-title
color: amber-light
---

::title::

# マトロイド

::content::

<div class="definition">

単体複体 $X=(V,\mathcal{F})$ であって以下を満たすものを**マトロイド**という:

<div style="text-align: center;">

$\abs{I}<\abs{J}$を満たす任意の$I,J\in\mathcal{F}$に対し, ある$j\in J\setminus I$が存在して, $I\cup\{i\}\in \mathcal{F}$.

</div>

</div>

- 極大な面を**基**という.
- マトロイドは純粋であり, 基の要素数をマトロイド$X$の**ランク**という.
- 例
  - グラフ的マトロイド: 固定したグラフの森の辺からなる部分集合族
  - 線形マトロイド: 固定した行列の線型独立な行のindex集合からなる部分集合族

