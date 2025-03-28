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
  <div class="absolute bottom-5 right-5">
    <QRCode value="https://nobutakashimizu.github.io/matroid_seminar/" :size="120" render-as="svg"/>
  </div>

---
layout: top-title-two-cols
color: amber-light
---

::title::

# 講演の構成

::left::

### 前半

1. 理論計算機科学とマトロイド
2. エクスパンダーグラフ
   - グラフ上のランダムウォーク
   - エクスパンダー性の定義と性質
3. 単体複体
   - 定義と例
   - 幾何的な意味合い
4. 高次元エクスパンダー性
   - 大域エクスパンダー性
   - 局所エクスパンダー性

::right::

### 後半

5. マトロイド
   - 定義と例
   - エクスパンダー性の証明
6. 応用: 基の数え上げ
   - 決定的アルゴリズムの限界
   - MCMCに基づく近似アルゴリズム
   - 近年の研究動向
7. まとめと展望

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

数学の様々な概念が応用される

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
layout: top-title
color: amber-light
---

::title::

# 数学の賞を受賞したTCS研究者

::content::

- [C. Shannon](https://en.wikipedia.org/wiki/Claude_Shannon): 京都賞(1985)
- [L. Lovász](https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Lov%C3%A1sz): アーベル賞(2021)
- [A. Wigderson](https://en.wikipedia.org/wiki/Avi_Wigderson): アーベル賞(2021)
- [A. Kitaev](https://en.wikipedia.org/wiki/Alexei_Kitaev): ポアンカレ賞(2024)
- [N. Alon](https://en.wikipedia.org/wiki/Noga_Alon): ウルフ賞(2024)
- [A. Shamir](https://en.wikipedia.org/wiki/Adi_Shamir): ウルフ賞(2024)

<div class="topic-box">

最近は理論計算機科学も数学の中で重要な分野として認識されている
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

- 効率的にサンプリング(数え上げ)できる離散構造の性質の抽象化
  - 高次元エクスパンダー (**今日の話**)
  - 母関数の対数凹性 (重み付きへの拡張)

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

<v-clicks>

- 計算量理論の擬似ランダムネスの文脈における非常に重要な道具
  - 誤り訂正符号の構成, PCP定理の証明, 擬似乱数生成器の構成
- 私の研究におけるエクスパンダー性の活用
  - 平均時計算量の困難性増幅 <a href="https://dl.acm.org/doi/10.1145/3564246.3585189" target="_blank" class="cite-reference">\[Hirahara and S, STOC(2023)\]</a>
  - 埋め込みクリーク問題の最適な探索から判定への帰着 <a href="https://dl.acm.org/doi/10.1145/3618260.3649751" target="_blank" class="cite-reference">\[Hirahara and S, STOC(2024)\]</a>
  - 行列積アルゴリズムの誤り訂正 <a href="https://eccc.weizmann.ac.il/report/2025/031/" class="cite-reference"> \[Hirahara and S, STOC(2025)\] </a>

</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# 高次元エクスパンダー

::content::

- エクスパンダー性は元々はグラフの性質だが, 近年は単体複体に拡張 (高次元エクスパンダー)

<v-clicks>

- 計算量理論と誤り訂正符号におけるブレイクスルー
  - PCP定理のパラメータ改善 <a href="https://arxiv.org/abs/2407.12762" class="cite-reference">\[Bafna, Minzer, Vyas, Yun, STOC(2025)]</a>
  - 立方複体に基づく量子誤り訂正符号 <a href="https://dl.acm.org/doi/10.1145/3519935.3520024" class="cite-reference">\[Dinur, Evra, Livne, Lubotzky, Mozes, STOC(2022)\]</a><a href="https://dl.acm.org/doi/10.1145/3519935.3520017" class="cite-reference">\[Panteleev, Kalachev, STOC(2022)\]</a>
  - マトロイドの基の数え上げ <a href="https://projecteuclid.org/journals/annals-of-mathematics/volume-199/issue-1/Log-concave-polynomials-II--High-dimensional-walks-and-an/10.4007/annals.2024.199.1.4.short" class="cite-reference">\[Anari, Liu, Gharan, Vinzant, Ann. of Math.(2024)\]</a>
  
<div class="topic-box">

**今日の話題**

- 高次元エクスパンダーとは何か?
- マトロイドに関して何がわかるか?

</div>

- [資料](https://nobutakashimizu.github.io/lecture_May2024/main.pdf): 清水が2024年5月に東北大数学科で高次元エクスパンダーに関する集中講義をした際の講義ノート

</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# マトロイドの基の交換関係の構造

::content::

具体的には, 次の主張の背景を説明していく:

<div class="topic-box">

  マトロイドを一つ固定し, その基全体 $\calB$ を頂点集合とする**交換グラフ**$\calG$を考える. 交換グラフでは,
  各基のペア$B,B'\in \calB$に対し, その対称差$B\triangle B' = (B\setminus B')\cup (B'\setminus B)$がちょうど二つの元からなる時, かつその時に限って$B$と$B'$の間に辺を引く.
  このグラフは**エクスパンダー性**をもつ.
  
</div>

<div class="flex justify-center">
<img src="/images/base_exchange.svg" alt="マトロイドの基交換" class="w-50"/>
</div>

<v-click>

- 交換グラフ: **マトロイドの交換公理**を表すグラフ
- 一様マトロイドの場合はJohnsonグラフと同一

</v-click>

---
layout: section
color: amber-light
---

# エクスパンダーグラフ
Expander Graph

---
layout: top-title
color: amber-light
---

::title::

# グラフ上のランダムウォーク

::content::

グラフ $G=(V,E)$ を考える. 頂点$u_0\in V$から開始して, 次の頂点を隣接点の中から一様ランダムに選ぶことを繰り返すことで得られる頂点列 $(u_t)_{t\ge 0}$ を**単純ランダムウォーク**という.

<div class="proposition">

グラフが連結かつ非二部ならば, 任意の初期頂点$u_0$から開始しても, $u_t$の分布は, $t\to\infty$ のとき**定常分布** $\pi \in [0,1]^V$ に収束する.

</div>

定常分布 $\pi$ は, $\pi(u) \propto \deg(u)$ で与えられる.

<v-clicks>

<div class="question">

  この収束速度はどのように評価できるか?

</div>


</v-clicks>


---
layout: top-title
color: amber-light
---

::title::

# グラフのエクスパンダー性

::content::

遷移確率行列を$P\in[0,1]^{V\times V}$とする:

$$
\begin{aligned}
P(u,v) := \Pr[u\to v] = \begin{cases}
\frac{1}{\deg(u)} & \text{if }\{u,v\}\in E,\\
0 & \text{otherwise}.
\end{cases}
\end{aligned}
$$

一般に, 重み付きのランダムウォークも同様に遷移確率行列を定める.

<div class="definition">

遷移確率行列$P\in[0,1]^{V\times V}$の固有値を$\lambda_1(P)\ge\dots\ge\lambda_n(P)$とする ($n=\abs{V}$)とし, $\lambda(P):=\max\{\abs{\lambda_2(P)},\abs{\lambda_n(P)}\}$とする.
</div>

- 無向グラフ上のRW(辺重みありも含)の遷移確率行列は常に実固有値を持つ (**可逆性**)
- 全成分$1$のベクトルが$\lambda_1(P)=1$の固有ベクトルになる
- $G$が二部グラフである$\iff \lambda_n(P)=-1$

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

<v-clicks>

- 文脈によるが, スペクトルギャップが非自明な値(例えば頂点数に依存しない値)で下から抑えらるときエクスパンダーと呼ぶことが多い
- パラメータ$\lambda$が小さいほど, そのグラフはよりエクスパンダー性が高い ($\lambda\in[0,1]$)
- 二部グラフは$\lambda_n(P)=-1$なので両側エクスパンダーにはならないが片側エクスパンダーにはなりえる
- **スペクトルギャップ** = $1-\lambda$
 
<div class="remark">

TCSの多くの文脈では正則グラフの性質としてエクスパンダー性を定義するが, 一般にランダムウォーク(遷移確率行列$P$)の性質としても定義できる.
</div>
</V-clicks>

---
layout: top-title
color: amber-light
---

::title::
# ランダムウォークとエクスパンダー

::content::

グラフがエクスパンダー性を持つならば, 単純ランダムウォークの分布は早く収束する.


<div class="proposition">

単純ランダムウォークの$t$番目の頂点$u_t$の分布を$p_t\in[0,1]^V$とする.
グラフ$G$が$\lambda$-エクスパンダーならば, 任意の初期頂点$u_0$と十分大きな全ての$t\ge 0$に対して, $\|p_t-\pi\|_1\le O(n^2\lambda^{t})$が成り立つ.

</div>

スペクトルギャップ$1-\lambda$が大きいほど, ランダムウォークが「混ざりやすい」

<details class="bg-gray-100">
<summary>証明のアイデア (クリックして展開)</summary>

  簡単のため$P^\top=P$とする (つまり$G$は正則).
  ベクトル $p_t - \pi = (p_0-\pi)P^t$ の$\ell^2$ノルムを抑えてから$\ell^1$ノルムのバウンドに変換する. $\pi_0 - \pi$は第一固有ベクトル$\mathbf{1}$に直交するので,  固有値のmin-maxの関係(Courant-Fischerの定理)から

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

# 余談: なぜ「エクスパンダー」なのか？

::content::

(私個人の意見ですが) エクスパンダー性は, ランダムウォークが「広がりやすい」性質を表すためにこの名前がついたと考えられる.

<div class="lemma">

グラフ$G=(V,E)$を$n$頂点$d$-正則$\lambda$-エクスパンダーとする.
頂点部分集合$S\subseteq V$に対し, $e(S)$を, $S$と$\overline{S}$をまたがる辺の本数とすると,
任意の$S\subseteq V$に対して
$$
  \begin{align*}
    e(S) \ge \frac{(1-\lambda) d}{n} \abs{S}(n - \abs{S}).
  \end{align*}
$$

</div>

- $|S|$が小さければ, $e(S)\gtrsim d|S|$ (グラフが$d$-正則なので常に$e(S)\le d|S|$).

<div class="flex justify-center">
<img src="/images/EML.svg" alt="エクスパンダー混交補題" class="w-110"/>
</div>



---
layout: section
color: amber-light
---

# 単体複体
Simplicial Complex

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

- 面$\sigma$に対し, その次元を$\dim(\sigma)=|\sigma|-1$で定め, 次元$i$の面の集合を$X(i)$とする

  - 頂点=次元$0$, 辺=次元$1$, ...

</v-click>

<v-click>

- $X$の次元を$\max\{\dim(\sigma)\colon \sigma\in\mathcal{F}\}$とする

</v-click>

<v-click>

- 全ての極大面の次元が等しいとき, $X$は**純粋**であるという

</v-click>

<v-click>

<div class="remark">

以後は主に純粋な$d$次元単体複体のみを考える (例えばマトロイド)
</div>

</v-click>

---
layout: top-title
color: amber-light
---

::title::

# 単体複体の例: クリーク複体

::content::

<div class="example">

グラフ$G=(V,E)$に対し, $S\subseteq V$は, $\binom{S}{2}\subseteq E$のとき, **クリーク**という. $\calF$を$G$のクリーク全体としたとき, $X=(V,\calF)$は**クリーク複体**と呼ばれる単体複体である.

</div>

<div class="flex justify-center">
<img src="/images/clique_complex.svg" alt="クリーク複体の図" class="w-80"/>
</div>

<div class="caption">
  クリークの例. クリーク複体は一般に純粋とは限らない.
</div>

---
layout: top-title
color: amber-light
---

::title::

# 単体複体の例: 三角形複体

::content::

<div class="example">

グラフ$G=(V,E)$上のクリーク複体$X=(V,\calF)$に対し, その次元$2$以下の面からなる集合を$\calF_{\le 2}$とする. このとき, $X'=(V,\calF_{\le 2})$は純粋な二次元単体複体であり, **三角形複体**という.

</div>

<div class="flex justify-center">
<img src="/images/triangle_complex.svg" alt="三角形複体の図" class="w-80"/>
</div>

<div class="caption">
  三角形複体は純粋.
</div>

---
layout: top-title
color: amber-light
---

::title::

# 単体複体の例: 森からなる複体 (グラフ的マトロイド)

::content::

<div class="example">

グラフ$G=(U,E)$に対し, 辺部分集合$F\subseteq E$は閉路を含まないとき森である. 全ての森からなる辺部分集合族$\calF$に対し, $(E,\calF)$は$(\abs{V}-1)$-次の純粋な単体複体である.

</div>

<div class="flex justify-center">
<img src="/images/forest.svg" alt="全域森複体の例" class="w-80"/>
</div>

<div class="caption">
  グラフとその森の例. グラフ的マトロイドとも呼ばれる.
</div>


---
layout: top-title
color: amber-light
---

::title::

# 単体複体の幾何的な意味合い

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
  - グラフエクスパンダー性の自然な一般化
  - $X(i)$全体の大域的なエクスパンダー性を表現
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
layout: section
color: amber-light
---

# 大域エクスパンダー性
Global Expansion

---
layout: top-title
color: amber-light
---

::title::

# グラフ上の遅延単純ランダムウォーク

::content::

グラフ上の単純ランダムウォークに確率$1/2$の自己遷移を付与したランダムウォークを**遅延単純ランダムウォーク**という.
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

単純遅延RWは**頂点$\to$辺**の遷移と**辺$\to$頂点**の遷移に分解して考えることができる

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

# グラフ上の遅延単純ランダムウォーク

::content::

<div class="flex justify-center">
<img src="/images/VE.svg" alt="頂点-辺の遷移" class="w-80"/>
</div>

<div class="caption">
「0次元」の点から開始し, 「1次元」の辺を経由して再び「0次元」の点に戻るプロセスに分解できる.
</div>

<div class="remark">

高次元エクスパンダーでは, これを高次元の面に一般化したランダムウォークを考える.

</div>


---
layout: top-title
color: amber-light
---

::title::

# 単体複体上のランダムウォーク

::content::


<div class="definition">

次元$i\ge 0$を固定する.
面$\tau \in X(i)$から開始して, 一様ランダムに$u\sim \tau$を選び, $\sigma:=\tau \setminus\{u\}$に遷移するランダムウォークを**下降ウォーク**といい, 遷移確率行列を $\Pdown_i \in [0,1]^{X(i)\times X(i-1)}$ で表す.
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

# 大域エクスパンダー性

::content::

<div class="definition">

純粋な$d$次元単体複体$X=(V,\mathcal{F})$は, 各$0 \leq i \leq d$に対して$X(i)$上の下降上昇ウォーク$\PDU_i$が
$$\lambda_2(\PDU_i) \leq \lambda_i$$
を満たすとき, **大域$(\lambda_0,\dots,\lambda_d)$-エクスパンダー**である.

</div>

<div class="remark">

$\PDU_i$は半正定値なのでスペクトルギャップは$1-\lambda_2(\PDU_i)$.
よって, グラフのエクスパンダー性と同様, $\lambda_i$が小さいほど, $\PDU_i$が「混ざりやすい」

</div>

- 自明: $\lambda_0 = 0$ (頂点$\to$空集合$\to$頂点は1ステップで混ざる)
- $\lambda_d$が小さければ, 極大面上のランダムウォークの収束の早さが保証される
  - 実はマトロイドの基交換ウォークは$\lambda_d \le 1-\frac{1}{d+1}$

---
layout: section
color: amber-light
---

# 局所エクスパンダー性
Local Expansion

---
layout: top-title
color: amber-light
---

::title::

# リンクと局所ランダムウォーク

::content::

局所的なRWを定義するために, リンクの概念を導入する.

<div class="definition">

単体複体$X=(V,\calF)$と面$\sigma\in\calF$に対し, $\sigma$における**リンク**とは, 単体複体$X_\sigma = (V_\sigma,\calF_\sigma)$である. ただし

$$
  \begin{align*}
    \calF_\sigma &= \{\tau\setminus\sigma\colon \tau\in\calF, \tau\supseteq\sigma\},\\
    V_\sigma &= \{ u\in V\setminus \sigma\colon \sigma\cup\{u\}\in \calF \}.
  \end{align*}
$$

</div>

<div class="flex justify-center">
<img src="/images/contract.svg" alt="リンクの図" class="w-110"/>
</div>

<div class="caption">

  面$\sigma$のリンクは, $\sigma$を含む面から$\sigma$を取り除いて得られる.
</div>

---
layout: top-title
color: amber-light
---

::title::

# リンクと局所ランダムウォーク

::content::

<div class="definition">

次元$1$以上の純粋な単体複体 $X=(V,\calF)$ の **骨格グラフ** を, 辺に重みを持つグラフ $G_\sigma=(X(0),X(1))$ であって, 各辺$e\in X(1)$の重みが$\pi_1(e)$で与えられるものとする.
</div>

<v-clicks>

リンク$X_\sigma$の骨格グラフ上での重み付きランダムウォークを局所ランダムウォークという.

<div class="definition">

$X$を$d$次純粋な単体複体とする.
次元$d-2$以下の面$\sigma\in\calF$に対し, $\sigma$における**局所ランダムウォーク**を, リンク$X_\sigma$の骨格グラフ上の重み付きランダムウォークとして定義し, 遷移確率行列を$P_\sigma\in [0,1]^{V_\sigma\times V_\sigma}$と表す.

</div>

- $X$が純粋 $\Rightarrow$ $X_\sigma$も純粋
- $\dim \sigma \le d-2$ から, $X_\sigma$の骨格グラフ$(X_\sigma(0),X_\sigma(1))$を定義可能

</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# 例

::content::

<div class="flex justify-center">
<img src="/images/localwalk1.svg" alt="局所ランダムウォークの例" class="w-190"/>
</div>

<div class="caption">

  グラフ上の三角形複体を考える. 頂点$u$のリンクの骨格グラフは, $u$の近傍がなす誘導部分グラフとなる.
</div>

---
layout: top-title
color: amber-light
---

::title::

# 局所エクスパンダー性

::content::

<div class="definition">

  $d\ge 1$次純粋な単体複体$X$は

  <div style="text-align: center;">
  
  全ての次元$d-2$以下の面$\sigma$に対し, $\lambda_2(P_\sigma) \le \gamma$
  
  </div>
  
  を満たすとき, **局所$\gamma$-エクスパンダー**であるという:
  
</div>

- 第二固有値のみを見る (すなわち骨格グラフの**片側**エクスパンダー性に着目する) ことに注意
- 従って, 局所エクスパンダーだからといって, 局所ランダムウォークの混交性が保証されるわけではない

---
layout: top-title
color: amber-light
---

::title::

# 例

::content::

グラフ$G=(V,E)$上の三角形複体$X$が局所エクスパンダー性が成り立つための条件を考えよう.

<v-clicks>

- $\sigma=\emptyset$のリンクの骨格グラフ$G_\emptyset$は$G$そのもの
  - 辺$e$の重み$\pi_1(e)$は, その辺を含む三角形の個数に比例

- 各頂点$\sigma=\{u\}$のリンクの骨格グラフ$G_\sigma$は, 頂点$u$の近傍からなる誘導部分グラフ
  - 辺の重みは一様 (三角形上の定常分布が一様だから)

<div class="topic-box">

まとめると, $G$自身および各頂点の近傍からなる誘導部分グラフが片側エクスパンダー性を持つとき, 三角形複体は局所エクスパンダー性を持つ

</div>

<div class="remark">

代表的なエクスパンダーグラフ(ラマヌジャングラフ)の多くの構成は内周(非自明な最小長サイクル)が大きいので, その上の三角形複体は決して局所エクスパンダー性を持たない

</div>

</v-clicks>

---
layout: top-title-two-cols
color: amber-light
---

::title::

# 代表的なラマヌジャングラフと局所エクスパンダーの比較

::left::

#### 代表的なラマヌジャングラフ

各頂点の近傍は$d$-正則木

<div class="flex justify-center">
<img src="/images/tree.svg" alt="ラマヌジャングラフの例" class="w-50"/>
</div>

特に, 三角形を持たないので(三角形複体は)局所エクスパンダー性は持たない.

例: <a href="https://link.springer.com/article/10.1007/BF02126799" class="cite-reference">\[Lubotzky, Phillips, Sarnak, Combinatorica(1988)\]</a>


::right::

<v-click>

#### 局所エクスパンダー性を持つグラフ

<div class="flex justify-center">
<img src="/images/local_expansion_graph.svg" alt="局所エクスパンダーの例" class="w-80"/>
</div>

たくさんの三角形が均一に散らばっていて, かつ辺を共有する三角形もたくさんある.

例:<a href="https://www.sciencedirect.com/science/article/pii/S019566980400099X?via\%3Dihub" class="cite-reference">\[Lubotzky, Samuels, Vishne, European J. Combin.(2005)\]</a>によるラマヌジャン複体は局所的にはBruhat-Tits building (無限$d$-正則木の高次元版)

</v-click>

---
layout: top-title
color: amber-light
---

::title::

# Kaufman-Oppenheimの定理

::content::

局所エクスパンダー $\Rightarrow$ 大域エクスパンダーが成り立つ <a href="https://link.springer.com/article/10.1007/s00493-019-3847-0" class="cite-reference">\[Kaufman, Oppenheim, Combinatorica(2020)\]</a>

- 局所エクスパンダー : 三角形がどの局所的な部分を見ても均一に分散
- 大域エクスパンダー : 三角形上の上昇下降ランダムウォークが高速に収束

<v-click>

<div class="theorem">

純粋な$d$-次元単体複体 $X=(V,\calF)$が局所$\gamma$-エクスパンダーならば,

$$
  \begin{align*}
    \lambda_i = 1 - \frac{1}{i+1} + \frac{\gamma i}{2}
  \end{align*}
$$

に対して$X$は大域$(\lambda_0,\dots,\lambda_d)$-エクスパンダーである.

</div>
</v-click>
<v-click>

<div class="question">

どうやって局所エクスパンダー性を示すか?

</div>
</v-click>

---
layout: top-title
color: amber-light
---

::title::

# Oppenheimのトリクルダウン定理

::content::

局所エクスパンダー性を確認するには, 次元$d-2$**以下の**全ての面$\sigma$に対して$\lambda_2(P_\sigma)$を抑えなければならない.
- そもそも局所ウォーク$P_\sigma$の成分(=$G_\sigma$の辺重み)すら簡単な形でないのに, 固有値を抑えるのは難しそう😔

<v-clicks>

Oppenheimのトリクルダウン定理: 全ての次元**ちょうど**$d-2$の面$\sigma$について, $\lambda_2(P_\sigma)$を抑えればよい.

<div class="theorem">

純粋な$d$-次元単体複体 $X=(V,\calF)$が以下の条件を満たすとする:

- 全ての$i\le d-2$と全ての$\sigma\in X(i)$に対してリンクの骨格グラフ$G_\sigma$は連結.
- 全ての$\sigma\in X(d-2)$に対して$\lambda_2(P_\sigma) \le \gamma$.

このとき, $X$は局所$\gamma$-エクスパンダーである.

</div>

- 高次元の面における局所RWを片側エクスパンダー性が低次元に「浸透」(trickle down) していく
- メリット: $\sigma\in X(d-2)$ならば骨格グラフ$G_\sigma$の**辺重みは全て一様**

</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# ここまでのまとめ

::content::

<div class="topic-box">

全ての$\sigma \in X(d-2)$に対し, $\lambda_2(P_\sigma)\le \gamma$かつ$G_\sigma$は連結

</div>

<div class="relative h-10 flex items-center">
  <Arrow x1="50%" y1="0" x2="50%" y2="55" width="3" color="#ff9800" />
  <span class="pl-115 pt-5" style="color: #ff9800;">トリクルダウン定理</span>
</div>

<div class="topic-box">

$X$は局所$\gamma$-エクスパンダー

</div>

<div class="relative h-10 flex items-center">
  <Arrow x1="50%" y1="0" x2="50%" y2="55" width="3" color="#ff9800" />
  <span class="pl-115 pt-5" style="color: #ff9800;">Kaufman-Oppenheimの定理</span>
</div>

<div class="topic-box">

$X$は大域$(\lambda_0,\dots,\lambda_d)$-エクスパンダー. 特に$X(d)$の交換グラフはエクスパンダー性を持つ

</div>





---
layout: section
color: amber-light
---

# マトロイド
Matroid

---
layout: top-title
color: amber-light
---

::title::

# マトロイド

::content::

<div class="definition">

単体複体 $X=(V,\calF)$ であって以下を満たすものを**マトロイド**という:

<div style="text-align: center;">

$\abs{I}<\abs{J}$を満たす任意の$I,J\in\mathcal{F}$に対し, ある$j\in J\setminus I$が存在して, $I\cup\{j\}\in \mathcal{F}$

</div>

</div>

- 極大な面を**基**という
- マトロイドは純粋であり, 基の要素数をマトロイド$X$の**ランク**という (ランク=次元+1)
- 例
  - グラフ的マトロイド: 固定したグラフの森の辺からなる部分集合族
  - 線形マトロイド: 固定した行列の線型独立な行のindex集合からなる部分集合族


---
layout: top-title
color: amber-light
---

::title::

# マトロイドのエクスパンダー性

::content::

<div class="lemma">

任意のマトロイド$X$は局所$0$-エクスパンダーである.
</div>

**証明.**

次元$d-2$の面$\sigma\in X(d-2)$を一つ固定し, そのリンク$X_\sigma$の骨格グラフ$G_\sigma$を考える.
基上の定常分布は一様分布なので, 骨格グラフ上の局所ランダムウォークは$G_\sigma$上の単純RWとなる.

<div class="flex justify-center">
<img src="/images/matroid_skelton.svg" alt="マトロイドの骨格グラフ" class="w-70"/>
</div>

<div class="caption">

  マトロイドの骨格グラフ$G_\sigma$の例. 二頂点$u,v\in V(G_\sigma)$は$\sigma\cup\{u,v\}$が基となるときに辺で結ばれる.
</div>

---
layout: top-title
color: amber-light
---

::title::

# マトロイドのエクスパンダー性

::content::

<div class="claim">

 マトロイド$X=(V,\calF)$から構成されたこの骨格グラフ$G_\sigma$は, 補グラフの全ての連結成分がクリークとなる. すなわち, 補グラフ$\overline{G_\sigma}$の任意の長さ2のパス$\{a,b\},\{b,c\}\in E(\overline{G_\sigma})$ (ただし$a\ne c$) に対して, $\{a,c\}\in E(\overline{G_\sigma})$.

</div>

**主張の証明.**

背理法で示す. ある$\{a,b\},\{b,c\}\in E(\overline{G_\sigma})$であって, $\{a,c\}\not \in E(\overline{G_\sigma})$となるとする.
このとき
1. $\sigma\cup\{a,b\}$と$\sigma\cup\{b,c\}$は$X$の独立集合ではない ($\calF$に属さない).
2. $I:=\sigma\cup\{a,c\}$は元のマトロイドの基である.
3. $b$は骨格グラフの頂点なので, $I':=\sigma\cup\{b\}$は独立集合.

$|I'|<|I|$に対して, 独立集合の公理を適用すると, $I'\cup\{a\}$と$I'\cup\{c\}$の一方は独立集合. これは1に矛盾. $\square$

---
layout: top-title
color: amber-light
---

::title::

# マトロイドのエクスパンダー性

::content::

<div class="lemma">

任意のマトロイド$X$は局所$0$-エクスパンダーである.
</div>

**証明の続き.**

主張より, $G_\sigma$の隣接行列$A$は, 


$$
  \begin{align*}
    A = J - \sum_{i=1}^c v_i v_i^{\top}
  \end{align*}
$$

の形で書ける. ただし, $J$は全ての成分が$1$の行列, $v_i$はクリークの頂点集合の支持ベクトル.
また, 遷移確率行列$P_\sigma$は$P_\sigma=D^{-1}A$の形で表せる ($D$は各頂点の次数を対角に並べた行列).
したがって, $x\bot \mathbf{1}$に関する二次形式$x^\top P_\sigma x$は, 

$$
  \begin{align*}
    x^\top P_\sigma x = x^\top D^{-1} A x \le x^\top D^{-1}J x = 0
  \end{align*}
$$

となり, 特に$\lambda_2(P_\sigma)\le 0$. $\square$

---
layout: top-title
color: amber-light
---

::title::

# マトロイドのエクスパンダー性

::content::

補題, Oppenheimのトリクルダウン定理, Kaufman-Oppenheimの定理を用いると, マトロイドの大域エクスパンダー性を示せる.

<div class="theorem">

自然数$d$に対し, $\lambda_i = 1 - \frac{1}{i+1}$ ($i=0,\dots,d$)と定める.
任意の次元$d$のマトロイド$X$は大域$(\lambda_0,\dots,\lambda_d)$-エクスパンダーである.

</div>

- (トリクルダウン定理を適用するには本当は$G_\sigma$の連結性も示さなければならないが, 簡単に示せるので今回は割愛)
- 交換グラフのエクスパンダー性や基の交換ウォークの収束性の保証が与えられる

---
layout: section
color: amber-light
---

# 応用: 基の数え上げ

---
layout: top-title
color: amber-light
---

::title::

# 基の数え上げ

::content::

<div class="question">

 $n$頂点の連結グラフ$G=(V,E)$が与えられたとき, 全域木の個数を効率的に数え上げよ.
</div>

<v-click>

- 効率的 = $\mathrm{poly}(n)$回のビット演算
- **行列木定理**によれば, $G$から構成されるある$(n-1)\times(n-1)$行列$L'_G$の行列式を計算すれば, 全域木の個数と一致
- 行列式の計算は効率的に可能 (いくつかの素数$p$に対して$\bmod\, p$で行列式を計算して中国剰余定理を適用)

</v-click>
<v-click>

<div class="question">

頂点数$n$のマトロイド$X=(V,\calF)$の基の個数を効率的に数え上げよ (つまり$\abs{V}=n$).
これが$\mathrm{poly}(n)$回の演算でできるか?
</div>

</v-click>


---
layout: top-title
color: amber-light
---

::title::

# 独立性オラクル

::content::

- 一般にマトロイドを指定するには$n$に関して**指数長の文字列**が必要
  - 例えば, 全ての基を指定すれば良いが, 基は指数個ある
  - よって, $\poly(n)$回の演算では不可 (入力の1ビットの読み込みも演算にカウント)
    - $\mathsf{P}\ne\mathsf{NP}$かどうかとは独立に成り立つ困難性(**情報理論的な困難性**)
<v-click>

- **独立性オラクル**を用いるアルゴリズム
  - 集合$I\subseteq V$について「$I\in\calF$ですか?」という質問をすると, オラクルがYes/Noを答えてくれる
  - 効率的 = 質問と演算の回数の合計が$\mathrm{poly}(n)$


<div class="flex justify-center">
<img src="/images/oracle.svg" alt="独立性オラクル" class="w-60"/>
</div>

</v-click>


---
layout: top-title
color: amber-light
---

::title::

# 基数え上げの困難性

::content::

- 情報理論的な下界により, 決定的アルゴリズムの質問回数は少なくとも$2^{\Omega(n)}$ <a href="https://www.sciencedirect.com/science/article/abs/pii/002001909490037X" class="cite-reference">\[Azar, Broder, Frieze, IPL(1994)\]</a>
  - 答えの$2^{n/(\log n)^2}$倍以内の近似値すら求められない
- 有限体上の線形マトロイドの基の数え上げは$\#\mathsf{P}$-困難 <a href="https://www.combinatorics.org/ojs/index.php/eljc/article/view/v19i4p41" class="cite-reference">\[Snook, Electron. J. Comb.(2012)\]</a>
  - $\#\mathsf{P}$-困難: $\mathsf{NP}$困難以上に難しく, 多項式時間では解けないと信じられている

<div class="topic-box">

まとめると, 一般のマトロイドの基の数え上げは難しい.
</div>

特殊ケースでは可能
- グラフ的マトロイド (=全域木の個数)
- 正則マトロイド (行列木定理の一般化が成り立つ)

---
layout: top-title
color: amber-light
---

::title::

# ランダムウォークによる近似数え上げ(MCMC)

::content::

- これまでの下界によると, **決定的**アルゴリズムは近似値すら求められない
<v-clicks>

- しかし, **乱択**を使うと良い近似値を高確率で計算できる!


<div class="theorem">

任意のマトロイド$X=(V,\calF)$に対し, その基の集合を$\calB$とする.
独立性オラクルと二つのパラメータ$\delta,\varepsilon>0$が与えられたとき, $\poly(|V|,1/\delta,1/\varepsilon)$時間で

$$
  \begin{align*}
    (1-\varepsilon)\abs{\calB} \le m \le (1+\varepsilon)\abs{\calB}
  \end{align*}
$$

を満たす$m\in\Nat$を確率$1-\delta$で出力する乱択アルゴリズムが存在する.

</div>

- マルコフ連鎖モンテカルロ法(MCMC)と呼ばれる手法に基づく

</v-clicks>


---
layout: top-title
color: amber-light
---

::title::

# マルコフ連鎖モンテカルロ法(MCMC)とは...

::content::

<div class="topic-box">

有限集合$S$上の分布$\pi\in[0,1]^S$に対し, $\pi$に従うサンプリングを行う手法.
1. 定常分布が$\pi$となるように重み付きランダムウォークを設計
2. そのランダムウォークを十分長く行って得られるサンプル$x\in S$の分布は$\pi$に近い

</div>

重要なポイント
- 1ステップの遷移は効率的にシミュレートしなければならない
- 必要なステップ数 (=ランダムウォークの混交時間) の上界が欲しい

<div class="question">

MCMCを使ってどうやって数え上げの近似値を求めるか?
</div>

---
layout: top-title
color: amber-light
---

::title::

# MCMCに基づく数え上げのイメージ

::content::

<div class="question">

以下の青部分の面積の近似値を求めよ.

<div class="flex justify-center">
<img src="/images/MCMC_menseki.svg" alt="MCMCのイメージ図" class="w-75"/>
</div>

</div>


<v-click>

**アイデア**: 長方形内にたくさんのランダムな点を打ち, 青部分に入った点の個数の割合を出力.

以下の二つが実現できればOK:

- 長方形内のランダムな位置をサンプリング (MCMCを使う)
- 青部分に入ったかどうかの判定

</v-click>

---
layout: top-title
color: amber-light
---

::title::

# 基数え上げへの素朴な適用

::content::

$X=(V,\calF)$を$d$次元マトロイドとする.

1. 独立一様ランダムに$\sigma_1,\sigma_2,\dots,\sigma_\ell \in \binom{V}{d+1}$ を選ぶ
2. これらの中で$\calF$に属するものの割合を出力する ($\sigma_i\in\calF$ならば要素数から自動的に$\sigma_i$は基)

<div class="question">

この方法でうまくいくか?

</div>

<v-click>

- 一つの点$\sigma_i$が$\calB$に属する確率は$\frac{\abs{\calB}}{n^{d+1}}$
  - 従って, $\ell \gg \frac{n^{d+1}}{\abs{\calB}}$でなければならない (そうでなければ常に$0$が出力される)
- $\calB$が大きければ問題ないが, 一般に$\ell\gg\poly(n)$になりうる

</v-click>

---
layout: top-title
color: amber-light
---

::title::

# Jerrum-Valiant-Vazirani (1986)のアプローチ

::content::

- <a href="https://www.sciencedirect.com/science/article/pii/030439758690174X" class="cite-reference">\[Jerrum, Valiant, Vazirani, TCS(1986)\]</a>は, 離散構造の再帰的な性質とMCMCを組み合わせたアプローチを提案.

<div class="topic-box">

**マトロイドの基の再帰構造**: $\calB$を基全体とし, $u\in V$に対し$\calB_u$を$u$を含む基の全体とすると

$$
  \begin{align*}
    \frac{1}{\abs{\calB}} &= \frac{\abs{\calB_u}}{\abs{\calB}}\cdot \frac{1}{\abs{\calB_u}} = \Pr_{\sigma\sim\calB}[\sigma \ni u]\cdot  \frac{1}{\abs{\calB_u}}.
  \end{align*}
$$

</div>

<v-clicks>

- $\Pr_{\sigma\sim \calB}[\sigma\ni u]$はMCMC(上昇下降ウォーク$\PDU_d$を使って基をサンプリング)で近似計算
  - **高次元エクスパンダー性によって混交時間がバウンドされている!**
- $\calB_u$は, $u$で縮約したマトロイド ($u$のリンク$X_{\{u\}}$) の基全体と一致するので, $1/\abs{\calB_u}$は再帰的に近似計算
  - 頂点数が一つ減るので, 再帰の深さは$d+1$
  - 各ステップで$1\pm \varepsilon$倍の近似値が確率$1-\delta$で得られるとすると, 全て掛け算すると$1\pm (d+1)\varepsilon$倍の近似値を確率$1-(d+1)\delta$で得られる

</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# 近年の研究動向

::content::

### 一様分布から重み付きへの拡張

<v-clicks>

- $d$次単体複体$X=(V,\calF)$と$X(d)$上の分布$\pi\in[0,1]^{X(d)}$に対し, 母関数

$$
  \begin{align*}
    g_X(x_1,\dots,x_n) := \sum_{\sigma\in X(d)} \pi(\sigma)\prod_{i\in\sigma} x_i
  \end{align*}
$$

が${}^{\forall} x\in \Real_{>0}^n$で**対数凹性**を持つ (i.e., $\nabla^2\log g_X(x)$が${}^{\forall}x\in\Real_{>0}^n$で半負定値) $\Rightarrow$ $X$が局所$0$-エクスパンダー <a href="https://projecteuclid.org/journals/annals-of-mathematics/volume-199/issue-1/Log-concave-polynomials-II--High-dimensional-walks-and-an/10.4007/annals.2024.199.1.4.short" class="cite-reference">\[Anari, Liu, Gharan, Vinzant, Ann. of Math.(2024)\]</a>
- この拡張により, マトロイドのTutte多項式の(特定の領域内での評価値の)近似計算, Determinal Point Processのサンプリングが可能

- **Lorenzian多項式**: 斉次多項式への一般化 <a href="https://annals.math.princeton.edu/2020/192-3/p04" class="cite-reference">\[Brändén, Huh, Ann. of Math.(2020)\]</a>
  - Lorenzian多項式$p(x)=\sum_\alpha c_\alpha x^\alpha$ ($\alpha\in \mathbb{Z}_{\ge 0}^n$は成分和=$d$の中で動く) に対し, $c_\alpha\ne 0$なる$\alpha$全体はM凸集合 (マトロイドのmultiset版)


</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# 余談: なぜ多項式の対数凹性が重要?

::content::

- 簡単のため, 変数$x_u$での偏微分を$\partial_u$と表し, 母関数$g_X(x)=\sum_{\sigma\in X(d)} \prod_{u\in \sigma}x_u$とする

<v-clicks>

- このとき, $\partial_u g_X(x) = \sum_{\sigma\in X(d),\sigma\ni u} \prod_{i\in \sigma\setminus\{u\}} x_i$ = リンク$X_{\{u\}}$の母関数
  - すなわち, 母関数の微分 = リンクの母関数
- $\log g_X$を偏微分して$x=\mathbf{1}$を代入すると
  
  $$
    \begin{align*}
      \partial_i \log g_X (\mathbf{1}) = \frac{\partial_i g_X(\mathbf{1})}{g_X(\mathbf{1})} = \Pr_{\sigma\sim X(d)}[\sigma\ni i] 
    \end{align*}
  $$

- 二回偏微分して$x=\mathbf{1}$を代入すると

$$
  \begin{align*}
    \partial_i\partial_j \log g_X(\mathbf{1}) = \Pr_{\sigma\sim X(d)}[\sigma\supseteq\{i,j\}] - \Pr_{\sigma}[\sigma\ni i]\Pr_{\sigma}[\sigma\ni j]
  \end{align*}
$$
  - これが$i\ne j$で負$\Rightarrow$ $i\in\sigma$と$j\in\sigma$は負の相関を持つ (balanced matroid) <a href="https://dl.acm.org/doi/10.1145/129712.129716" class="cite-reference">\[Feder, Mihail, STOC(1992)\]</a>
  - 対数凹性は, これを$(i,j)$成分に持つ行列が半負定値であるという性質

</v-clicks>

---
layout: top-title
color: amber-light
---

::title::

# まとめと展望

::content::

#### 単体複体上の高次元エクスパンダー性

- 局所エクスパンダー性：各面のリンクの骨格グラフが良いエクスパンダー性を持つ
- 大域エクスパンダー性：単体複体上のランダムウォークの混交性

#### マトロイドとエクスパンダー性

- マトロイドは局所$0$-エクスパンダー（最適な局所エクスパンダー）
- 局所エクスパンダー性 $\Rightarrow$ 大域エクスパンダー性 $\Rightarrow$ 基交換グラフのエクスパンダー性
- マトロイドの基の個数の近似値をMCMCに基づいて計算

<v-click>

#### 今後の(個人的)展望

- マトロイドに基づく誤り訂正符号の解析: $\mathbb{F}^V \ni x \mapsto (x(B))_{B\in \calB} \in \mathbb{F}^\calB$ (ただし $x(B)=\sum_{u\in B}x(u)$)
- $\calB=\binom{V}{k}$のときは誤り訂正能力を持つ <a href="https://epubs.siam.org/doi/10.1137/080734030" class="cite-reference">\[Impagliazzo, Jaiswal, Kabanets, Wigderson, SIAM J. Comput.(2010)\]</a>
</v-click>

---
layout: top-title
color: amber-light
---

::title::

# その他の参考資料

::content::

- <a href="https://nobutakashimizu.github.io/lecture_May2024/main.pdf" class="cite-reference">高次元エクスパンダーとその応用 (清水による講義資料)</a>
  - エクスパンダーグラフと高次元エクスパンダーに関する講義資料


- <a href="https://www.ams.org/journals/bull/2006-43-04/S0273-0979-06-01126-8/" class="cite-reference">Expander graphs and their applications (Hoory, Linial, Wigderson, Bull. Amer. Math. Soc.(2006))</a>
  - エクスパンダーグラフの基本的な性質とTCSでの応用に関するサーベイ論文

- <a href="https://cseweb.ucsd.edu/classes/sp21/cse291-g/" class="cite-reference">Expander graphs and High-Dimensional Expanders (Hopkins, Lovett, 2021)</a>
  - 高次元エクスパンダーに関する講義資料

- <a href="https://cs.uwaterloo.ca/~lapchi/cs860-2022/notes.html" class="cite-reference">Eigenvalues and Polynomials (Lau, 2022) </a>
  - 高次元エクスパンダーに関する講義資料

- <a href="https://mattbaker.blog/2015/12/14/hodge-theory-in-combinatorics/" class="cite-reference">Hodge Theory in Combinatorics (Matt Bakerのブログ)</a>
  - Lorenzian多項式の応用としてマトロイドの基サンプリングの紹介

