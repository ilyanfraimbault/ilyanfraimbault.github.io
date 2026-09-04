---
title: QCM 3 — Fonctions usuelles
description: Vingt questions à choix unique sur l'exponentielle, le logarithme, les équations et inéquations, les croissances comparées, les fonctions réciproques et les fonctions hyperboliques.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 3
icone: i-lucide-function-square
---

::rappel{titre="Comment se déroule ce QCM" icone="i-lucide-compass"}
Vingt questions, **une seule bonne réponse** par question. On répond à tout, puis on clique sur **Corriger** en bas de page : rien ne se révèle avant.

C'est le chapitre le plus large du programme, et celui qui contient le plus de **formules pures**. Un QCM y cherche donc des réflexes plutôt que des calculs : les questions se jouent en quelques secondes, à condition que la formule soit connue — et se perdent tout aussi vite si elle est approximative.

Deux points de vigilance dans tout ce QCM : les **conditions d'existence** ($\ln$ exige un argument strictement positif) et les **signes** ($\mathrm{ch}' = \mathrm{sh}$, sans le moins du cosinus).
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours" titre="Le cours du chapitre" description="Exponentielle, logarithme, équations et limites, trigonométrie, fonctions réciproques et hyperboliques" type="cours" meta="8 sections"}
::

:::qcm{titre="QCM 3 — Fonctions usuelles" theme="exp et ln, limites, réciproques et fonctions hyperboliques" duree="1 h" icone="i-lucide-function-square"}

::qcm-question{label="1." bonne="b" cours="qcm-fu-exp-ln"}
Pour tous réels $a$ et $b$, $e^{a+b}$ vaut :

#a
$e^a+e^b$

#b
$e^a\times e^b$

#c
$e^{ab}$

#d
$\left(e^a\right)^b$

#indice
L'exponentielle **transforme les sommes en produits** : c'est sa propriété fondatrice, celle qui la définit.

Pour éliminer les autres, teste $a = b = 0$ : $e^0 = 1$, et le membre de gauche vaut $1$.

#solution
$$
\boxed{e^{a+b} = e^a\times e^b}
$$

**Le test $a = b = 0$** élimine **a** d'un coup : $e^0 = 1$ à gauche, mais $1+1 = 2$ à droite.

**Les autres règles de la famille :**

$$
e^{a-b} = \frac{e^a}{e^b} \qquad \left(e^a\right)^n = e^{na} \qquad e^{-a} = \frac{1}{e^a} \qquad e^0 = 1
$$

**La formulation qui résume tout** : l'exponentielle transforme les **sommes en produits**, le logarithme fait exactement l'inverse. C'est pourquoi ils sont réciproques l'un de l'autre.
::

::qcm-question{label="2." bonne="c" cours="qcm-fu-exp-ln"}
L'égalité $\ln(ab) = \ln a+\ln b$ est valable :

#a
pour tous réels $a$ et $b$

#b
pour tous $a$ et $b$ non nuls

#c
pour $a > 0$ et $b > 0$

#d
uniquement si $ab > 0$

#indice
Le logarithme n'existe que pour un argument **strictement positif**. Pour que les trois logarithmes de l'égalité aient un sens, il faut donc trois conditions — mais deux suffisent à les impliquer toutes.

Regarde la proposition **d** de près : si $a$ et $b$ sont tous deux négatifs, $ab$ est positif. Les deux membres ont-ils un sens pour autant ?

#solution
Les trois logarithmes $\ln a$, $\ln b$ et $\ln(ab)$ doivent exister, ce qui impose

$$
\boxed{a > 0 \quad\text{et}\quad b > 0}
$$

⚠️ **La proposition d est le piège de la question.** Avec $a = b = -2$, on a bien $ab = 4 > 0$, donc $\ln(ab) = \ln 4$ existe — mais $\ln(-2)$ n'existe pas, et le membre de droite n'a aucun sens.

**La règle correcte pour les carrés**, qui découle de là :

$$
\ln\left(a^2\right) = 2\ln a \ \text{ seulement si } a > 0, \qquad \text{sinon } \ln\left(a^2\right) = 2\ln\lvert a\rvert
$$

**Les autres règles**, toutes sous la même condition de positivité stricte :

$$
\ln\frac{a}{b} = \ln a-\ln b \qquad \ln\left(a^n\right) = n\ln a \qquad \ln 1 = 0 \qquad \ln e = 1
$$
::

::qcm-question{label="3." bonne="d" cours="qcm-fu-exp-ln"}
Parmi ces égalités, laquelle est vraie pour **tout** réel $x$, sans condition ?

#a
$e^{\ln x} = x$

#b
$\ln\left(x^2\right) = 2\ln x$

#c
$\ln\left(\dfrac1x\right) = -\ln x$

#d
$\ln\left(e^x\right) = x$

#indice
Trois de ces égalités contiennent un $\ln$ appliqué à quelque chose qui peut être négatif ou nul. Une seule applique le logarithme à une quantité **toujours strictement positive**.

Que vaut $e^x$, quel que soit $x$ ?

#solution
$$
\boxed{\ln\left(e^x\right) = x \quad\text{pour tout } x\in\mathbb{R}}
$$

L'exponentielle est **toujours strictement positive**, donc $\ln\left(e^x\right)$ a toujours un sens.

**Pourquoi les autres sont conditionnelles :**

- $e^{\ln x} = x$ exige $x > 0$, sinon $\ln x$ n'existe pas ;
- $\ln\left(x^2\right) = 2\ln x$ exige $x > 0$ : pour $x = -3$, le membre de gauche vaut $\ln 9$ et celui de droite n'existe pas ;
- $\ln\left(\dfrac1x\right) = -\ln x$ exige $x > 0$.

**Le repère à garder** : $\exp$ va de $\mathbb{R}$ vers $]0\,;+\infty[$, et $\ln$ fait le chemin inverse. La composée **dans le sens $\ln\circ\exp$** est donc toujours définie ; dans l'autre sens, il faut se placer sur $]0\,;+\infty[$.
::

::qcm-question{label="4." bonne="b" cours="qcm-fu-equations"}
L'équation $\ln x = 3$ a pour solution :

#a
$x = \dfrac{3}{e}$

#b
$x = e^3$

#c
$x = 3e$

#d
$x = \ln 3$

#indice
On applique l'exponentielle aux deux membres, puisque c'est la réciproque du logarithme : $e^{\ln x} = x$.

#solution
$$
\ln x = 3 \iff e^{\ln x} = e^3 \iff x = e^3
$$

$$
\boxed{S = \left\{e^3\right\}}
$$

**La vérification de la condition d'existence** : $e^3 \approx 20{,}1 > 0$, la solution est recevable.

**Le schéma des quatre équations types du chapitre :**

| Équation | Solution | Condition |
|---|---|---|
| $\ln A = c$ | $A = e^c$ | $A > 0$ |
| $e^A = c$ | $A = \ln c$ | $c > 0$ |
| $\ln A = \ln B$ | $A = B$ | $A > 0$ et $B > 0$ |
| $e^A = e^B$ | $A = B$ | aucune |

⚠️ Ne jamais oublier de **vérifier la condition d'existence à la fin** : une solution formellement correcte peut être à rejeter.
::

::qcm-question{label="5." bonne="c" cours="qcm-fu-equations"}
L'ensemble des solutions de $\ln x < 2$ est :

#a
$\left]-\infty\,;e^2\right[$

#b
$\left]0\,;2\right[$

#c
$\left]0\,;e^2\right[$

#d
$\left]e^2\,;+\infty\right[$

#indice
Deux choses à ne pas oublier, et les distracteurs sanctionnent chacune :

- le **domaine** : $\ln x$ n'existe que pour $x > 0$, la solution ne peut donc pas descendre à $-\infty$ ;
- le **sens** de l'inégalité : $\ln$ est strictement croissante, donc elle le conserve.

#solution
Le logarithme est strictement **croissant** sur $]0\,;+\infty[$, donc il conserve le sens des inégalités :

$$
\ln x < 2 \iff \ln x < \ln\left(e^2\right) \iff x < e^2
$$

En croisant avec le domaine $x > 0$ :

$$
\boxed{S = \left]0\,;e^2\right[}
$$

**Les trois distracteurs, trois erreurs :**

- **a** oublie le domaine — pourtant $\ln(-5)$ n'existe pas ;
- **b** oublie de composer par l'exponentielle ;
- **d** inverse le sens de l'inégalité.

⚠️ Le sens ne s'inverserait que pour une fonction **décroissante**. $\ln$ et $\exp$ sont toutes deux strictement croissantes : elles conservent les inégalités.
::

::qcm-question{label="6." bonne="c" cours="qcm-fu-exp-ln"}
L'ensemble de définition de $\ln$ est :

#a
$\mathbb{R}$

#b
$\mathbb{R}^*$

#c
$]0\,;+\infty[$

#d
$[0\,;+\infty[$

#indice
Le logarithme est la réciproque de l'exponentielle. Or l'exponentielle ne prend jamais toutes les valeurs réelles : quel est son ensemble d'arrivée ?

Attention au crochet en $0$.

#solution
$$
\exp : \mathbb{R}\longrightarrow\ ]0\,;+\infty[ \qquad \ln :\ ]0\,;+\infty[\ \longrightarrow\mathbb{R}
$$

L'exponentielle est **strictement positive** et ne s'annule jamais : son image est $]0\,;+\infty[$. Le logarithme, sa réciproque, est donc défini exactement là.

⚠️ **Le crochet est ouvert en $0$** : $\ln 0$ n'existe pas, et $\displaystyle\lim_{x\to 0^+}\ln x = -\infty$. La proposition **d** est cette erreur.

La proposition **b** confond avec la condition d'un quotient — « il suffit d'être non nul » —, ce qui laisserait passer les négatifs.

**Le réflexe devant $\ln u$** : résoudre $u > 0$, avec une inégalité **stricte**, et le crochet toujours ouvert.
::

::qcm-question{label="7." bonne="a" cours="qcm-fu-limites"}
$\displaystyle\lim_{x\to+\infty}\frac{e^x}{x^2}$ vaut :

#a
$+\infty$

#b
$0$

#c
$1$

#d
la forme est indéterminée, on ne peut pas conclure

#indice
La hiérarchie des croissances comparées : **exponentielle $\gg$ puissances $\gg$ logarithme**. Celui qui gagne impose sa limite.

Ici, qui est au numérateur ?

#solution
$$
\boxed{\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \quad\text{pour tout } n}
$$

**L'exponentielle bat toutes les puissances**, si grand soit l'exposant. Elle est au numérateur, donc elle l'emporte et le quotient explose.

**La proposition d est le piège** : la forme est bien indéterminée ($\dfrac{\infty}{\infty}$), mais c'est précisément ce que les croissances comparées servent à lever. « Indéterminée » n'est jamais une réponse finale.

**Les limites du cours, à connaître par cœur :**

$$
\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \qquad \lim_{x\to-\infty}x\,e^x = 0 \qquad \lim_{x\to+\infty}\frac{\ln x}{x} = 0 \qquad \lim_{x\to 0^+}x\ln x = 0^-
$$

**Le réflexe devant $\infty-\infty$ ou $0\times\infty$** : factoriser par le terme dominant, puis appliquer la hiérarchie.
::

::qcm-question{label="8." bonne="b" cours="qcm-fu-limites"}
$\displaystyle\lim_{x\to+\infty}\frac{\ln x}{x}$ vaut :

#a
$+\infty$

#b
$0$

#c
$1$

#d
$e$

#indice
Même hiérarchie qu'à la question précédente, mais cette fois c'est le logarithme qui affronte une puissance.

Lequel des deux est le plus faible ?

#solution
$$
\boxed{\lim_{x\to+\infty}\frac{\ln x}{x} = 0}
$$

**Les puissances battent le logarithme.** Le dénominateur l'emporte, donc le quotient tend vers $0$.

**L'image qui aide** : le logarithme croît si lentement qu'il faut $x = e^{10} \approx 22\,000$ pour que $\ln x$ atteigne seulement $10$. Face à $x$, il ne fait pas le poids.

**La hiérarchie complète, dans l'ordre de force :**

$$
\ln x \ \ll\ x^n \ \ll\ e^x \qquad (x\to+\infty)
$$

Devant un quotient de deux de ces termes, la réponse est immédiate : $+\infty$ si le plus fort est en haut, $0$ s'il est en bas.
::

::qcm-question{label="9." bonne="b" cours="qcm-fu-limites"}
$\displaystyle\lim_{x\to 0^+}x\ln x$ vaut :

#a
$-\infty$

#b
$0$

#c
$1$

#d
la limite n'existe pas

#indice
La forme est $0\times(-\infty)$, donc indéterminée. C'est encore la hiérarchie qui tranche : lequel des deux facteurs impose sa limite ?

#solution
$$
\boxed{\lim_{x\to 0^+}x\ln x = 0^-}
$$

C'est **la puissance qui l'emporte** sur le logarithme, y compris près de $0$. Le résultat est $0$, atteint **par valeurs négatives** — d'où la notation $0^-$ — puisque $\ln x < 0$ pour $x < 1$.

**La proposition a** est le réflexe erroné : « $\ln x$ tend vers $-\infty$, donc le produit aussi ». Le facteur $x$ écrase cette divergence.

Cette limite est celle qui permet d'étudier $x\ln x$ jusqu'en $0$ : la fonction se prolonge par continuité en posant $f(0) = 0$.
::

::qcm-question{label="10." bonne="c" cours="qcm-fu-limites"}
$\displaystyle\lim_{x\to 0}\frac{e^x-1}{x}$ vaut :

#a
$0$

#b
$+\infty$

#c
$1$

#d
$e$

#indice
Ce n'est pas une croissance comparée : c'est un **taux d'accroissement**. Reconnais la définition du nombre dérivé d'une fonction bien connue, en $0$.

#solution
$$
\frac{e^x-1}{x} = \frac{e^x-e^0}{x-0}
$$

C'est exactement le taux d'accroissement de $\exp$ entre $0$ et $x$. Sa limite est donc le nombre dérivé $\exp'(0)$ :

$$
\lim_{x\to 0}\frac{e^x-1}{x} = \exp'(0) = e^0 = 1
$$

$$
\boxed{\lim_{x\to 0}\frac{e^x-1}{x} = 1}
$$

**Le réflexe à installer** : devant une forme $\dfrac00$ où l'on reconnaît $f(x)-f(a)$ au numérateur et $x-a$ au dénominateur, la limite est $f'(a)$. Aucun calcul supplémentaire.

Géométriquement, cela dit que la courbe de $\exp$ a pour tangente en $0$ la droite $y = x+1$.
::

::qcm-question{label="11." bonne="a" cours="qcm-fu-hyperboliques"}
Par définition, $\mathrm{ch}\,x$ vaut :

#a
$\dfrac{e^x+e^{-x}}{2}$

#b
$\dfrac{e^x-e^{-x}}{2}$

#c
$\dfrac{e^x+e^{-x}}{e^x-e^{-x}}$

#d
$e^x+e^{-x}$

#indice
Le **c**osinus hyperbolique porte le **plus**, le **s**inus hyperbolique porte le moins. Et il y a une division par $2$ dans les deux cas.

Pour trancher, évalue en $0$ : $\mathrm{ch}\,0$ doit valoir $1$.

#solution
$$
\boxed{\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2}} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2} \qquad \mathrm{th}\,x = \frac{\mathrm{sh}\,x}{\mathrm{ch}\,x}
$$

**Le test en $0$** départage immédiatement : $\mathrm{ch}\,0 = \dfrac{1+1}{2} = 1$ ✓, tandis que la proposition **d** donnerait $2$ et la **b** donnerait $0$ — c'est $\mathrm{sh}\,0$.

**Les propriétés qui découlent directement de la définition :**

- $\mathrm{ch}$ est **paire** (remplacer $x$ par $-x$ échange les deux termes de la somme, qui est symétrique) ;
- $\mathrm{sh}$ et $\mathrm{th}$ sont **impaires** ;
- $\mathrm{ch}\,x \geqslant 1$ toujours, donc $\mathrm{ch}$ ne s'annule jamais — ce qui autorise à diviser par $\mathrm{ch}$ sans discussion, et rend $\mathrm{th}$ définie sur $\mathbb{R}$ entier.
::

::qcm-question{label="12." bonne="b" cours="qcm-fu-hyperboliques"}
Pour tout réel $x$, $\mathrm{ch}^2x-\mathrm{sh}^2x$ vaut :

#a
$0$

#b
$1$

#c
$-1$

#d
$\mathrm{ch}(2x)$

#indice
C'est l'analogue hyperbolique de $\cos^2+\sin^2 = 1$ — mais avec un **moins** au lieu du plus, et c'est justement ce qui fait la différence entre les deux trigonométries.

Vérifie en $x = 0$.

#solution
$$
\boxed{\mathrm{ch}^2x-\mathrm{sh}^2x = 1}
$$

**La démonstration en deux lignes**, en revenant aux définitions :

$$
\mathrm{ch}^2x-\mathrm{sh}^2x = \left(\frac{e^x+e^{-x}}{2}\right)^2-\left(\frac{e^x-e^{-x}}{2}\right)^2
$$

C'est une identité $A^2-B^2 = (A+B)(A-B)$, avec $A+B = e^x$ et $A-B = e^{-x}$ :

$$
= e^x\times e^{-x} = e^0 = 1
$$

**Le test en $0$** confirme : $1^2-0^2 = 1$ ✓.

**Le parallèle complet, à mémoriser d'un bloc :**

| Circulaire | Hyperbolique |
|---|---|
| $\cos^2+\sin^2 = 1$ | $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ |
| $\sin' = \cos$, $\cos' = -\sin$ | $\mathrm{sh}' = \mathrm{ch}$, $\mathrm{ch}' = \mathrm{sh}$ |

⚠️ Le **signe moins** change de place : il est dans l'identité pour les hyperboliques, dans les dérivées pour les circulaires.
::

::qcm-question{label="13." bonne="a" cours="qcm-fu-hyperboliques"}
La fonction $f = \mathrm{ch}$, définie et dérivable sur $\mathbb{R}$, a pour dérivée :

#a
$f'(x) = \mathrm{sh}\,x$

#b
$f'(x) = -\mathrm{sh}\,x$

#c
$f'(x) = \mathrm{ch}\,x$

#d
$f'(x) = \dfrac{1}{\mathrm{sh}\,x}$

#indice
Dérive directement la définition $\dfrac{e^x+e^{-x}}{2}$ : le second terme apporte un $-1$ par la règle de chaîne, ce qui transforme le plus en moins.

⚠️ Attention à ne pas transposer machinalement $\cos' = -\sin$.

#solution
$$
\left(\frac{e^x+e^{-x}}{2}\right)' = \frac{e^x-e^{-x}}{2} = \mathrm{sh}\,x
$$

$$
\boxed{\mathrm{ch}' = \mathrm{sh} \qquad \mathrm{sh}' = \mathrm{ch}}
$$

⚠️ **Aucun signe moins**, contrairement au cosinus circulaire. C'est la différence à retenir absolument, et le distracteur **b** est exactement ce réflexe mal transposé.

**Le contrôle de bon sens** : $\mathrm{ch}$ est une courbe en forme de chaînette, minimale en $0$ et croissante ensuite. Sa dérivée doit donc s'annuler en $0$ et être positive après — ce que fait $\mathrm{sh}$, impaire et croissante, et pas $-\mathrm{sh}$.

**Et pour la tangente hyperbolique :**

$$
\mathrm{th}' = 1-\mathrm{th}^2 = \frac{1}{\mathrm{ch}^2}
$$
::

::qcm-question{label="14." bonne="c" cours="qcm-fu-hyperboliques"}
$\mathrm{argsh}\,x$ s'exprime avec un logarithme sous la forme :

#a
$\ln\left(x+\sqrt{x^2-1}\right)$

#b
$\dfrac12\ln\dfrac{1+x}{1-x}$

#c
$\ln\left(x+\sqrt{x^2+1}\right)$

#d
$\ln\left(x^2+1\right)$

#indice
$\mathrm{argsh}$ est définie sur $\mathbb{R}$ **tout entier**. La quantité sous la racine doit donc être positive pour **tout** $x$, y compris $x = 0$.

Une seule proposition satisfait cette contrainte.

#solution
$$
\boxed{\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)}
$$

**L'argument de domaine suffit à trancher** : $x^2+1$ est toujours $\geqslant 1 > 0$, alors que $x^2-1$ devient négatif dès que $\lvert x\rvert < 1$. La proposition **a** ne pourrait donc pas être définie sur $\mathbb{R}$ — c'est en fait $\mathrm{argch}$, définie sur $[1\,;+\infty[$.

La proposition **b** est $\mathrm{argth}$, définie sur $]-1\,;1[$.

**Les trois formes logarithmiques, avec leurs domaines :**

| Fonction | Expression | Domaine |
|---|---|---|
| $\mathrm{argsh}$ | $\ln\left(x+\sqrt{x^2+1}\right)$ | $\mathbb{R}$ |
| $\mathrm{argch}$ | $\ln\left(x+\sqrt{x^2-1}\right)$ | $[1\,;+\infty[$ |
| $\mathrm{argth}$ | $\dfrac12\ln\dfrac{1+x}{1-x}$ | $]-1\,;1[$ |

**Le contrôle en $0$** : $\mathrm{argsh}\,0 = \ln(0+1) = \ln 1 = 0$ ✓, cohérent avec $\mathrm{sh}\,0 = 0$.
::

::qcm-question{label="15." bonne="b" cours="qcm-fu-hyperboliques"}
La fonction $f = \mathrm{argth}$, définie et dérivable sur $]-1\,;1[$, a pour dérivée :

#a
$f'(x) = \dfrac{1}{1+x^2}$

#b
$f'(x) = \dfrac{1}{1-x^2}$

#c
$f'(x) = \dfrac{1}{\sqrt{1-x^2}}$

#d
$f'(x) = \dfrac{1}{\sqrt{x^2+1}}$

#indice
Attention aux quatre propositions : deux ont une racine, deux n'en ont pas ; deux ont $1+x^2$, deux ont $1-x^2$.

Le domaine $]-1\,;1[$ est le seul indice dont tu aies besoin. Quelle expression **exige** que $\lvert x\rvert < 1$ tout en étant définie sans racine ?

#solution
$$
\boxed{\mathrm{argth}'x = \frac{1}{1-x^2}}
$$

**Le raisonnement par le domaine** : $1-x^2$ s'annule en $\pm 1$, exactement aux bornes de l'intervalle — cohérent. Tandis que $1+x^2$ ne s'annule jamais, ce qui donnerait une fonction définie sur $\mathbb{R}$ (c'est $\arctan$).

**Le tableau complet des six réciproques du programme :**

| Fonction | Dérivée | Fonction | Dérivée |
|---|---|---|---|
| $\arcsin$ | $\dfrac{1}{\sqrt{1-x^2}}$ | $\mathrm{argsh}$ | $\dfrac{1}{\sqrt{x^2+1}}$ |
| $\arccos$ | $\dfrac{-1}{\sqrt{1-x^2}}$ | $\mathrm{argch}$ | $\dfrac{1}{\sqrt{x^2-1}}$ |
| $\arctan$ | $\dfrac{1}{1+x^2}$ | $\mathrm{argth}$ | $\dfrac{1}{1-x^2}$ |

**Le repère** : les circulaires ont $1-x^2$, les hyperboliques ont $x^2\pm 1$ — et les deux « tangentes » sont les seules sans racine.
::

::qcm-question{label="16." bonne="b" cours="qcm-fu-reciproques"}
$\arccos\left(\cos\dfrac{5\pi}{4}\right) = $

#a
$\dfrac{5\pi}{4}$

#b
$\dfrac{3\pi}{4}$

#c
$-\dfrac{5\pi}{4}$

#d
$\dfrac{\pi}{4}$

#indice
⚠️ Ce n'est **pas** $\dfrac{5\pi}{4}$ : la simplification $\arccos(\cos x) = x$ n'est valable que si $x\in[0\,;\pi]$.

Il faut d'abord remplacer $\dfrac{5\pi}{4}$ par un angle **de $[0\,;\pi]$ ayant le même cosinus**. Quelles symétries conservent le cosinus ?

#solution
$\dfrac{5\pi}{4}$ n'est pas dans $[0\,;\pi]$ : on ne peut pas simplifier directement.

On cherche un angle de $[0\,;\pi]$ de même cosinus, en utilisant la parité puis la périodicité :

$$
\cos\frac{5\pi}{4} = \cos\left(-\frac{5\pi}{4}\right) = \cos\left(-\frac{5\pi}{4}+2\pi\right) = \cos\frac{3\pi}{4}
$$

Et $\dfrac{3\pi}{4}\in[0\,;\pi]$, donc

$$
\boxed{\arccos\left(\cos\frac{5\pi}{4}\right) = \frac{3\pi}{4}}
$$

**Le contrôle immédiat** : $\arccos$ renvoie toujours une valeur de $[0\,;\pi]$. Les propositions **a** et **c** en sortent, elles étaient éliminables sans le moindre calcul.

**La règle générale, dans les deux sens :**

$$
\cos(\arccos x) = x \ \text{ toujours} \qquad \arccos(\cos x) = x \ \text{ seulement si } x\in[0\,;\pi]
$$

C'est la composition avec la **réciproque à l'extérieur** qui demande de la vigilance. Dans l'autre sens, aucun piège.
::

::qcm-question{label="17." bonne="a" cours="qcm-fu-reciproques"}
La dérivée d'$\arcsin$ sur $]-1\,;1[$ est :

#a
$\dfrac{1}{\sqrt{1-x^2}}$

#b
$\dfrac{-1}{\sqrt{1-x^2}}$

#c
$\dfrac{1}{1+x^2}$

#d
$\dfrac{1}{\sqrt{x^2-1}}$

#indice
$\arcsin$ est **croissante** — comme le sinus sur $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$. Sa dérivée est donc positive, ce qui élimine une proposition d'emblée.

Le signe moins, lui, appartient à l'autre réciproque circulaire.

#solution
$$
\boxed{\arcsin'x = \frac{1}{\sqrt{1-x^2}} \qquad \arccos'x = \frac{-1}{\sqrt{1-x^2}}}
$$

**Deux repères qui suffisent à ne jamais se tromper :**

- $\arcsin$ est **croissante**, $\arccos$ est **décroissante** — le signe moins va donc avec $\arccos$ ;
- leurs dérivées sont **opposées**, ce qui est cohérent avec l'identité $\arcsin x+\arccos x = \dfrac{\pi}{2}$ : la dérivée d'une constante étant nulle, les deux dérivées doivent se compenser.

La proposition **c** est $\arctan'$, la **d** est $\mathrm{argch}'$.

**D'où vient la racine.** On dérive $\sin(\arcsin x) = x$, ce qui donne $\arcsin'(x) = \dfrac{1}{\cos(\arcsin x)}$, puis on élimine la composée par $\cos^2+\sin^2 = 1$. Le signe **positif** de la racine se justifie parce que $\arcsin x$ vit dans $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, où le cosinus est positif.
::

::qcm-question{label="18." bonne="c" cours="qcm-fu-reciproques"}
$\arctan$ est définie sur :

#a
$[-1\,;1]$

#b
$\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$

#c
$\mathbb{R}$

#d
$[0\,;\pi]$

#indice
$\arctan$ est la réciproque de la tangente restreinte à $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$. Sur cet intervalle, quelles valeurs la tangente prend-elle ?

Attention à ne pas confondre l'ensemble de **départ** avec l'ensemble d'**arrivée**.

#solution
Sur $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$, la tangente est strictement croissante et parcourt **tout** $\mathbb{R}$, de $-\infty$ à $+\infty$. Sa réciproque est donc définie sur $\mathbb{R}$ entier :

$$
\arctan : \mathbb{R}\longrightarrow\left]-\frac{\pi}{2}\,;\frac{\pi}{2}\right[
$$

**La proposition b est l'ensemble d'arrivée**, pas de départ — c'est la confusion classique, et elle vaut aussi pour $\arccos$ et $\arcsin$.

**Le tableau à connaître dans les deux colonnes :**

| Fonction | Départ | Arrivée |
|---|---|---|
| $\arccos$ | $[-1\,;1]$ | $[0\,;\pi]$ |
| $\arcsin$ | $[-1\,;1]$ | $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$ |

$\arctan$ est **la seule** définie sur $\mathbb{R}$, et la seule dont l'intervalle d'arrivée est ouvert aux deux bouts — parce que $\pm\dfrac{\pi}{2}$ ne sont jamais atteints.
::

::qcm-question{label="19." bonne="b" cours="qcm-fu-exp-ln"}
Le signe de $e^x$ est :

#a
positif si $x > 0$, négatif si $x < 0$

#b
strictement positif pour tout $x$

#c
positif ou nul selon $x$

#d
du signe de $x$

#indice
Que vaut $e^{-10}$ ? C'est un très petit nombre — mais est-il négatif ?

#solution
$$
\boxed{e^x > 0 \quad\text{pour tout réel } x}
$$

L'exponentielle est **strictement positive partout** et ne s'annule jamais. Pour $x$ très négatif elle devient minuscule, mais reste strictement positive : $e^{-10} \approx 0{,}0000454$.

$$
\lim_{x\to-\infty}e^x = 0^+ \qquad \lim_{x\to+\infty}e^x = +\infty
$$

**Trois conséquences utilisées en permanence :**

- on peut **diviser par $e^x$** sans jamais discuter de cas ;
- dans une factorisation comme $e^x\left(x^2-4x\right)$, seul le second facteur porte le signe ;
- $\ln\left(e^x\right)$ est toujours défini, quel que soit $x$ — c'est ce qui distinguait la bonne réponse de la question 3.
::

::qcm-question{label="20." bonne="c" cours="qcm-fu-limites"}
Dans la hiérarchie des croissances comparées en $+\infty$, l'ordre du plus faible au plus fort est :

#a
$e^x \ll x^n \ll \ln x$

#b
$x^n \ll \ln x \ll e^x$

#c
$\ln x \ll x^n \ll e^x$

#d
tous croissent à la même vitesse

#indice
Reprends les deux limites du cours : $\dfrac{\ln x}{x}\to 0$ et $\dfrac{e^x}{x^n}\to+\infty$.

La première dit qui perd contre $x$, la seconde dit qui gagne.

#solution
$$
\boxed{\ln x \ \ll\ x^n \ \ll\ e^x}
$$

**Le logarithme est le plus lent, l'exponentielle la plus rapide**, et les puissances sont entre les deux — quel que soit l'exposant $n$, si grand soit-il.

**Comment s'en servir en QCM**, sans aucun calcul : dans un quotient de deux de ces termes, le plus fort impose sa limite.

$$
\lim_{x\to+\infty}\frac{e^x}{x^{100}} = +\infty \qquad \lim_{x\to+\infty}\frac{\ln x}{\sqrt x} = 0 \qquad \lim_{x\to+\infty}\frac{x^3}{e^x} = 0
$$

**Et devant une forme indéterminée $\infty-\infty$**, on factorise par le terme dominant :

$$
e^x-x^{10} = e^x\left(1-\frac{x^{10}}{e^x}\right) \longrightarrow +\infty\times(1-0) = +\infty
$$

⚠️ « Forme indéterminée » n'est jamais une réponse : c'est le signal qu'il faut factoriser ou appliquer la hiérarchie.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées.

::extrait-cours{id="qcm-fu-exp-ln" titre="Exponentielle et logarithme : les règles" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_1-exponentielle"}
$$
\exp : \mathbb{R}\longrightarrow\ ]0\,;+\infty[ \qquad \ln :\ ]0\,;+\infty[\ \longrightarrow\mathbb{R}
$$

Les deux sont **réciproques** l'une de l'autre, et toutes deux **strictement croissantes**.

$$
e^{\ln x} = x \ (x>0) \qquad \ln\left(e^x\right) = x \ (\text{tout } x)
$$

⚠️ $e^x > 0$ **pour tout $x$** : l'exponentielle ne s'annule jamais et n'est jamais négative. On peut donc toujours diviser par elle.

⚠️ $\ln$ n'existe que pour un argument **strictement positif**. Le crochet est ouvert en $0$, et $\displaystyle\lim_{x\to 0^+}\ln x = -\infty$.

**L'exponentielle transforme les sommes en produits, le logarithme fait l'inverse :**

$$
e^{a+b} = e^ae^b \qquad e^{a-b} = \frac{e^a}{e^b} \qquad \left(e^a\right)^n = e^{na}
$$

$$
\ln(ab) = \ln a+\ln b \qquad \ln\frac ab = \ln a-\ln b \qquad \ln\left(a^n\right) = n\ln a
$$

⚠️ **Les règles du logarithme exigent $a > 0$ et $b > 0$**, et pas seulement $ab > 0$. Avec $a = b = -2$, le produit est positif mais $\ln(-2)$ n'existe pas. Pour un carré : $\ln\left(a^2\right) = 2\ln\lvert a\rvert$ dans le cas général.

$$
\ln 1 = 0 \qquad \ln e = 1 \qquad e^0 = 1
$$
::

::extrait-cours{id="qcm-fu-equations" titre="Équations et inéquations avec ln et exp" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_3-équations-et-inéquations-avec-ln-et-exp"}
**La méthode ne varie jamais** : on compose par la réciproque, puis on vérifie la condition d'existence.

| Équation | Solution | Condition à vérifier |
|---|---|---|
| $\ln A = c$ | $A = e^c$ | $A > 0$ |
| $e^A = c$ | $A = \ln c$ | $c > 0$ |
| $\ln A = \ln B$ | $A = B$ | $A > 0$ et $B > 0$ |
| $e^A = e^B$ | $A = B$ | aucune |

⚠️ **Toujours revenir vérifier la condition d'existence à la fin.** Une solution formellement correcte peut être à rejeter parce qu'elle rend un logarithme impossible.

**Pour les inéquations**, deux points de vigilance :

1. **le domaine d'abord** — l'ensemble solution est toujours intersecté avec le domaine ;
2. **le sens de l'inégalité** — $\ln$ et $\exp$ étant strictement **croissantes**, elles le conservent. Il ne s'inverserait que pour une fonction décroissante.

$$
\ln x < 2 \iff \ln x < \ln\left(e^2\right) \iff 0 < x < e^2
$$

Le $0 <$ ne vient pas de l'inéquation mais du domaine : ne jamais l'oublier.
::

::extrait-cours{id="qcm-fu-limites" titre="Limites et croissances comparées" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_4-limites-et-croissances-comparées"}
**La hiérarchie, du plus lent au plus rapide en $+\infty$ :**

$$
\boxed{\ln x \ \ll\ x^n \ \ll\ e^x}
$$

**Celui qui gagne impose sa limite.** Dans un quotient, la réponse est immédiate.

$$
\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \qquad \lim_{x\to-\infty}x\,e^x = 0 \qquad \lim_{x\to+\infty}\frac{\ln x}{x} = 0 \qquad \lim_{x\to 0^+}x\ln x = 0^-
$$

**Une limite qui n'est pas une croissance comparée**, mais un taux d'accroissement :

$$
\lim_{x\to 0}\frac{e^x-1}{x} = 1
$$

C'est $\exp'(0)$. Le réflexe général : devant une forme $\dfrac00$ où l'on reconnaît $\dfrac{f(x)-f(a)}{x-a}$, la limite est $f'(a)$.

⚠️ **« Forme indéterminée » n'est jamais une réponse finale** : c'est le signal qu'il faut agir.

**Devant $\infty-\infty$ ou $0\times\infty$ : factoriser par le terme dominant.**

$$
e^x-x^{10} = e^x\left(1-\frac{x^{10}}{e^x}\right) \longrightarrow +\infty
$$

**Devant une composée : changer de variable.** Pour $\displaystyle\lim_{x\to 0^+}e^{-1/x}$, on pose $X = \dfrac1x\to+\infty$, et l'expression devient $e^{-X}\to 0$.
::

::extrait-cours{id="qcm-fu-reciproques" titre="arccos, arcsin, arctan" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_6-fonctions-trigonométriques-réciproques"}
| Fonction | Départ | Arrivée | Dérivée |
|---|---|---|---|
| $\arccos$ | $[-1\,;1]$ | $[0\,;\pi]$ | $\dfrac{-1}{\sqrt{1-x^2}}$ |
| $\arcsin$ | $[-1\,;1]$ | $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$ | $\dfrac{1}{1+x^2}$ |

⚠️ **Ne pas confondre départ et arrivée** : on donne un **nombre**, on obtient un **angle**.

**Deux repères pour les dérivées :** $\arcsin$ et $\arccos$ ont des dérivées **opposées** (leur somme vaut la constante $\dfrac\pi2$), et le signe moins va avec $\arccos$, qui est **décroissante**.

**Le piège des compositions :**

$$
\cos(\arccos x) = x \ \text{ toujours} \qquad \arccos(\cos x) = x \ \textbf{ seulement si } x\in[0\,;\pi]
$$

Sinon, il faut ramener l'angle dans le bon intervalle **sans changer la valeur** de la fonction :

- pour $\arccos$ : $\cos(-\theta) = \cos\theta$, puis la périodicité ;
- pour $\arcsin$ : $\sin(\pi-\theta) = \sin\theta$.

**Le contrôle final, systématique** : le résultat est-il dans l'intervalle d'arrivée ? $\arccos$ n'est jamais négatif, $\arcsin$ et $\arctan$ ne dépassent jamais $\dfrac{\pi}{2}$ en valeur absolue. Cette seule vérification élimine la majorité des erreurs.
::

::extrait-cours{id="qcm-fu-hyperboliques" titre="Fonctions hyperboliques et leurs réciproques" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_7-fonctions-hyperboliques"}
$$
\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2} \qquad \mathrm{th}\,x = \frac{\mathrm{sh}\,x}{\mathrm{ch}\,x}
$$

$\mathrm{ch}\,0 = 1$, $\mathrm{sh}\,0 = 0$, $\mathrm{th}\,0 = 0$. **$\mathrm{ch}$ est paire, $\mathrm{sh}$ et $\mathrm{th}$ sont impaires.** Et $\mathrm{ch}\,x\geqslant 1$ toujours — donc jamais nul, ce qui autorise à diviser par $\mathrm{ch}$ sans discussion.

**Le parallèle avec la trigonométrie circulaire permet de tout mémoriser d'un coup :**

| Circulaire | Hyperbolique |
|---|---|
| $\cos^2+\sin^2 = 1$ | $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ |
| $\sin' = \cos$, $\cos' = -\sin$ | $\mathrm{sh}' = \mathrm{ch}$, $\mathrm{ch}' = \mathrm{sh}$ — **aucun signe moins** |
| $\cos(a+b) = \cos a\cos b-\sin a\sin b$ | $\mathrm{ch}(a+b) = \mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b$ |

⚠️ **Le signe moins change de place** : il est dans l'identité côté hyperbolique, dans les dérivées côté circulaire.

**Les réciproques :**

| Fonction | Domaine | Expression | Dérivée |
|---|---|---|---|
| $\mathrm{argsh}$ | $\mathbb{R}$ | $\ln\left(x+\sqrt{x^2+1}\right)$ | $\dfrac{1}{\sqrt{x^2+1}}$ |
| $\mathrm{argch}$ | $[1\,;+\infty[$ | $\ln\left(x+\sqrt{x^2-1}\right)$ | $\dfrac{1}{\sqrt{x^2-1}}$ |
| $\mathrm{argth}$ | $]-1\,;1[$ | $\dfrac12\ln\dfrac{1+x}{1-x}$ | $\dfrac{1}{1-x^2}$ |

**Le domaine suffit à retrouver la formule** : $x^2+1$ est défini partout, $x^2-1$ exige $\lvert x\rvert\geqslant 1$, et $\dfrac{1+x}{1-x}$ exige $\lvert x\rvert < 1$.

**La méthode unique pour démontrer une identité hyperbolique** : remplacer chaque $\mathrm{ch}$ et chaque $\mathrm{sh}$ par sa définition, développer, simplifier.
::
