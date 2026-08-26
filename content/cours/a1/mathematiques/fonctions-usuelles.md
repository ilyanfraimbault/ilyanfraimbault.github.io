---
title: Fonctions usuelles
description: Exponentielle, logarithme, fonctions trigonométriques réciproques et fonctions hyperboliques. Dix exercices corrigés avec indices et solutions détaillées.
interactif: true
annee: A1
matiere: Mathématiques
ordre: 2
icone: i-lucide-function-square
---

::rappel{titre="La boîte à outils du cours"}

- **Déf 1.2** (ln = réciproque de exp) : pour $x>0$, $\;y = \ln(x) \iff e^y = x$.
- **Prop 1.11** : $e^{\ln x} = x$ (pour $x>0$) et $\ln(e^x) = x$.
- **Prop 1.2 / 1.12** (propriétés algébriques) : $e^{a+b} = e^a e^b$, $\ln(ab) = \ln a+\ln b$, $\ln\dfrac{a}{b} = \ln a-\ln b$, $\ln(a^n) = n\ln a$…
- **Prop 1.3** : $e^x > 0$ pour tout $x$. **Prop 1.4 / 1.15** : exp et ln sont **strictement croissantes**.
- **Prop 1.5 / 1.16** (limites) et **Prop 1.6 / 1.17** (croissances comparées : $\lim_{x\to+\infty}\dfrac{e^x}{x} = +\infty$, $\lim_{x\to+\infty}\dfrac{\ln x}{x} = 0$…).
- **Prop 1.9** : $(e^{u})' = u'e^{u}$. **Prop 1.20** : $(\ln u)' = \dfrac{u'}{u}$ (pour $u>0$).
- **Prop 2.3** : $\sin' = \cos$, $\cos' = -\sin$.
- **Déf 3.1** : $\arccos : [-1,1]\to[0,\pi]$, $\arcsin : [-1,1]\to\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$, $\arctan : \mathbb{R}\to\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$, réciproques de cos, sin, tan restreintes. **Prop 3.1–3.3** : $\arccos(\cos x) = x$ **seulement** si $x\in[0,\pi]$, etc. **Prop 3.4** : leurs dérivées.
- **Déf 4.1** : $\mathrm{ch}\,x = \dfrac{e^x+e^{-x}}{2}$, $\mathrm{sh}\,x = \dfrac{e^x-e^{-x}}{2}$, $\mathrm{th}\,x = \dfrac{\mathrm{sh}\,x}{\mathrm{ch}\,x}$. **Prop 4.1** : $\mathrm{ch}^2x-\mathrm{sh}^2x = 1$.
- Du chapitre *Fonctions d'une variable réelle* : $(uv)' = u'v+uv'$, $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$, $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$, $\left(\dfrac{1}{u}\right)' = -\dfrac{u'}{u^2}$.

::

:::exercice{titre="Exercice 1" theme="Équations avec exponentielle et logarithme"}

Résoudre les équations suivantes après avoir déterminé le domaine de résolution.

**La méthode, toujours en 3 étapes :**

1. **Domaine de résolution** : chaque $\ln(A)$ exige $A > 0$ (ln n'est définie que sur $]0,+\infty[$) ; $e^A$ ne pose aucune condition. Le domaine est l'**intersection** des conditions.
2. **Se débarrasser de ln/exp** grâce à la bijection (Déf 1.2 et stricte croissance) : $\ln(A) = c \iff A = e^c$ ; $e^A = c$ avec $c>0$ $\iff A = \ln c$ ; $\ln(A) = \ln(B) \iff A = B$.
3. **Vérifier** que les solutions trouvées appartiennent au domaine, puis conclure par l'ensemble $S$.

::question{label="1."}

$\ln(x+1) = 1$

#indice

Commence toujours par la condition d'existence : sous un logarithme, l'argument doit être strictement positif. Ensuite, pour faire disparaître le $\ln$, compose par l'exponentielle, qui est sa réciproque (Déf 1.2). N'oublie pas la dernière étape : vérifier que ce que tu trouves est bien dans le domaine.

#solution

**Domaine** : $x+1 > 0 \iff x > -1$, donc $D = \left]-1,+\infty\right[$.

**Résolution** : $\ln(x+1) = 1 \iff x+1 = e^1 \iff x = e-1$.

**Vérification** : $e-1 \approx 1{,}72 > -1$ ✓

$$\boxed{S = \{e-1\}}$$

::

::question{label="2."}

$e^{x-1} = 3$

#indice

Ici, aucune condition d'existence à poser : l'exponentielle est définie sur $\mathbb{R}$ tout entier. Avant de composer par $\ln$, assure-toi simplement que le second membre est strictement positif — c'est ce qui autorise le passage au logarithme.

#solution

**Domaine** : aucune condition, $D = \mathbb{R}$.

**Résolution** : $3 > 0$ donc on peut composer par ln : $x-1 = \ln 3 \iff x = 1+\ln 3$.

$$\boxed{S = \{1+\ln 3\}}$$

::

::question{label="3."}

$\ln(x^2+1) = \ln(2x)$

#indice

Deux logarithmes égaux : la bijectivité de $\ln$ permet d'identifier directement les arguments. Attention au domaine, les deux conditions ne sont pas de même nature — l'une est automatiquement vérifiée, l'autre non. Une fois l'équation polynomiale obtenue, cherche une identité remarquable plutôt que de dérouler le discriminant.

#solution

**Domaine** : $x^2+1 > 0$ est **toujours vrai** (somme d'un carré et de 1) ; $2x > 0 \iff x > 0$. Donc $D = \left]0,+\infty\right[$.

**Résolution** : $\ln A = \ln B \iff A = B$ :

$$x^2+1 = 2x \iff x^2-2x+1 = 0 \iff (x-1)^2 = 0 \iff x = 1$$

*(identité remarquable, une racine double)*

**Vérification** : $1 > 0$ ✓

$$\boxed{S = \{1\}}$$

::

::question{label="4."}

$\ln(x-2) = \ln(x+1)$

#indice

Même principe qu'à la question précédente : on identifie les arguments. Mais regarde ce qui reste après simplification — si les $x$ disparaissent en laissant une égalité numérique fausse, l'équation n'a tout simplement aucune solution. Tu peux aussi anticiper le résultat en comparant $x-2$ et $x+1$ et en invoquant la stricte croissance de $\ln$.

#solution

**Domaine** : $x-2 > 0$ **et** $x+1 > 0$, c'est-à-dire $x > 2$ et $x > -1$ ; l'intersection donne $D = \left]2,+\infty\right[$.

**Résolution** : $x-2 = x+1 \iff -2 = 1$ : **impossible**.

$$\boxed{S = \varnothing}$$

*(Logique : $x-2 < x+1$ pour tout $x$, et ln est strictement croissante, donc $\ln(x-2) < \ln(x+1)$ toujours — les deux membres ne peuvent jamais être égaux.)*

::

:::

:::exercice{titre="Exercice 2" theme="Inéquations avec logarithme"}

Résoudre les inéquations suivantes après avoir déterminé le domaine de résolution.

**Méthode : les mêmes 3 étapes qu'à l'exercice 1**, mais à l'étape 2 on utilise la **stricte croissance de ln** (Prop 1.15) : elle conserve le sens des inégalités,

$$\ln(A) \leqslant \ln(B) \iff A \leqslant B \quad (\text{sur le domaine où } A, B > 0).$$

::question{label="1."}

$\ln(x-2) \leqslant \ln(2x-1)$

#indice

La stricte croissance de $\ln$ (Prop 1.15) conserve le sens de l'inégalité : tu peux comparer directement les arguments. Le vrai travail est ailleurs — le domaine impose déjà une contrainte forte, et il faut se demander si l'inégalité obtenue y ajoute vraiment quelque chose.

#solution

**Domaine** : $x-2 > 0$ et $2x-1 > 0$, soit $x > 2$ et $x > \frac{1}{2}$, d'où $D = \left]2,+\infty\right[$.

**Résolution** : $x-2 \leqslant 2x-1 \iff -2+1 \leqslant 2x-x \iff -1 \leqslant x$.

**Intersection avec $D$** : tout $x > 2$ vérifie $x \geqslant -1$, donc la condition est toujours satisfaite sur $D$.

$$\boxed{S = \left]2,+\infty\right[}$$

::

::question{label="2."}

$\ln\!\left(1+\dfrac{2}{x}\right) \geqslant \ln x$

#indice

Pour le domaine, une des deux conditions découle de l'autre : si $x>0$, que peux-tu dire du signe de $\dfrac{2}{x}$ ? Ensuite tu obtiens une inéquation avec une fraction : multiplier par $x$ est licite ici car $x$ est strictement positif, donc le sens de l'inégalité ne change pas. Termine par un tableau de signes du trinôme.

#solution

**Domaine** : il faut $x > 0$ (pour $\ln x$) et $1+\frac{2}{x} > 0$ ; or si $x > 0$ alors $\frac{2}{x} > 0$ donc $1+\frac{2}{x} > 1 > 0$ automatiquement. $D = \left]0,+\infty\right[$.

**Résolution** : $1+\dfrac{2}{x} \geqslant x$. On multiplie par $x > 0$ (le sens ne change pas car $x$ est positif) :

$$x+2 \geqslant x^2 \iff x^2-x-2 \leqslant 0$$

**Signe du trinôme** : $\Delta = 1+8 = 9$, racines $x = \dfrac{1\pm 3}{2}$, soit $-1$ et $2$. Coefficient $a = 1 > 0$, donc le trinôme est **négatif entre ses racines** : $-1 \leqslant x \leqslant 2$.

**Intersection avec $D$** : $0 < x \leqslant 2$.

$$\boxed{S = \left]0, 2\right]}$$

::

::question{label="3."}

$\ln x \leqslant \ln(x^2-2x)$

#indice

Le domaine demande ici un vrai tableau de signes : la condition $x^2-2x>0$ se factorise et donne une réunion d'intervalles, qu'il faut ensuite croiser avec $x>0$. Le piège classique est d'oublier cette intersection et de garder une branche qui n'existe pas.

#solution

**Domaine** : $x > 0$ et $x^2-2x > 0 \iff x(x-2) > 0 \iff x < 0$ ou $x > 2$. Intersection : $D = \left]2,+\infty\right[$.

**Résolution** : $x \leqslant x^2-2x \iff 0 \leqslant x^2-3x \iff x(x-3) \geqslant 0 \iff x \leqslant 0$ ou $x \geqslant 3$.

**Intersection avec $D$** : $x \geqslant 3$.

$$\boxed{S = \left[3,+\infty\right[}$$

::

:::

:::exercice{titre="Exercice 3" theme="Études de fonctions"}

Pour chacune des fonctions suivantes : déterminer le domaine de définition, calculer la dérivée et préciser le domaine de dérivabilité, étudier le signe de la dérivée, puis dresser le tableau de variations.

**La méthode imposée par l'énoncé, en 4 étapes :**

1. **Domaine de définition** : conditions d'existence ($\sqrt{A}$ exige $A \geqslant 0$ ; $\ln A$ exige $A > 0$ ; $\frac{1}{A}$ exige $A \neq 0$).
2. **Dérivée** avec les formules composées (Prop 1.9 pour $e^u$, Prop 1.20 pour $\ln u$…) et **domaine de dérivabilité**.
3. **Signe de $f'$** : on écarte les facteurs toujours positifs ($e^u > 0$ par Prop 1.3, une racine carrée, un carré…) et on étudie le signe du facteur restant. Si ce signe n'est pas évident, on étudie une **fonction auxiliaire**.
4. **Limites aux bornes** (croissances comparées si besoin) et **tableau de variations**.

::question{label="1."}

Étudier $f_1 : x \mapsto e^{\sqrt{x}}$

#indice

Le domaine est dicté par la racine carrée. Attention à la nuance entre domaine de définition et domaine de dérivabilité : la fonction racine est définie en $0$ mais n'y est pas dérivable. Pour la dérivée, c'est la Prop 1.9 avec $u = \sqrt{x}$ ; pour le signe, souviens-toi qu'une exponentielle est toujours strictement positive.

#solution

**Domaine** : $\sqrt{x}$ exige $x \geqslant 0$, d'où $D_{f_1} = [0,+\infty[$.

**Dérivée** : forme $e^u$ avec $u = \sqrt{x}$, dérivable sur $]0,+\infty[$ seulement (la racine carrée n'est pas dérivable en $0$), $u' = \dfrac{1}{2\sqrt{x}}$. Par la Prop 1.9 :

$$f_1'(x) = \frac{1}{2\sqrt{x}}\,e^{\sqrt{x}} \quad \text{sur } ]0,+\infty[$$

**Signe** : $e^{\sqrt{x}} > 0$ (Prop 1.3) et $\dfrac{1}{2\sqrt{x}} > 0$, donc $f_1' > 0$ : $f_1$ est **strictement croissante**.

**Limites et valeurs** : $f_1(0) = e^0 = 1$ ; quand $x\to+\infty$, $\sqrt{x}\to+\infty$ donc $e^{\sqrt{x}}\to+\infty$ (composition de limites).

```
x      | 0              +∞
f₁'(x) |      +
f₁     | 1   ↗          +∞
```

::

::question{label="2."}

Étudier $f_2 : x \mapsto \ln(-x^2+3x-2)$

#indice

Le domaine se lit sur le signe d'un trinôme du second degré : calcule ses racines et rappelle-toi qu'avec $a<0$ le trinôme est positif *entre* les racines. Bonne nouvelle pour l'étape suivante : sur ce domaine le dénominateur de $f_2'$ (donné par la Prop 1.20) est strictement positif, donc seul le numérateur décide du signe.

#solution

**Domaine** : il faut $-x^2+3x-2 > 0$. Racines du trinôme : $\Delta = 9-8 = 1$, $x = \dfrac{-3\pm 1}{-2}$, soit $x = 1$ et $x = 2$. Coefficient $a = -1 < 0$, donc le trinôme est **positif entre ses racines** :

$$D_{f_2} = \left]1, 2\right[$$

**Dérivée** : forme $\ln u$ avec $u = -x^2+3x-2 > 0$ sur $D$, $u' = -2x+3$. Par la Prop 1.20 :

$$f_2'(x) = \frac{-2x+3}{-x^2+3x-2} \quad \text{sur } ]1,2[$$

**Signe** : le dénominateur est $> 0$ sur $D$ (c'est la condition du domaine), donc $f_2'(x)$ est du signe de $-2x+3$, qui s'annule en $x = \frac{3}{2}$ : positif avant, négatif après.

**Limites et valeurs** : aux deux bornes, $u \to 0^+$ donc $\ln u \to -\infty$ (Prop 1.16). Maximum en $\frac{3}{2}$ :

$$f_2\left(\tfrac{3}{2}\right) = \ln\left(-\tfrac{9}{4}+\tfrac{9}{2}-2\right) = \ln\tfrac{1}{4} = -2\ln 2$$

```
x      | 1           3/2           2
f₂'(x) |      +       0      −
f₂     | −∞  ↗     −2ln2    ↘     −∞
```

⚠️ *Le tableau de la correction officielle affiche $\ln(3)$ comme maximum : c'est une coquille — $f_2\left(\frac{3}{2}\right) = \ln\frac{1}{4} = -2\ln 2$ (et $-x^2+3x-2$ ne dépasse jamais $\frac{1}{4}$, donc $\ln 3$ est impossible).*

::

::question{label="3."}

Étudier $f_3 : x \mapsto x\,e^{1/x}$

#indice

C'est un produit : applique $(uv)' = u'v+uv'$, avec la Prop 1.9 pour dériver $e^{1/x}$ (la dérivée de $\frac{1}{x}$ vaut $-\frac{1}{x^2}$). Pense ensuite à **factoriser par l'exponentielle** : c'est ce qui rend le signe lisible. Il y a quatre bornes à traiter, et en $0^+$ tu auras besoin d'une croissance comparée après le changement de variable $X = \frac{1}{x}$.

#solution

**Domaine** : $\frac{1}{x}$ exige $x \neq 0$, d'où $D_{f_3} = \mathbb{R}^*$.

**Dérivée** : produit $u\times v$ avec $u = x$, $u' = 1$ et $v = e^{1/x}$, $v' = -\dfrac{1}{x^2}e^{1/x}$ (Prop 1.9 avec $\frac{1}{x}$ de dérivée $-\frac{1}{x^2}$) :

$$f_3'(x) = e^{1/x}+x\left(-\frac{1}{x^2}\right)e^{1/x} = e^{1/x}\left(1-\frac{1}{x}\right) = e^{1/x}\,\frac{x-1}{x} \quad \text{sur } \mathbb{R}^*$$

*(on factorise toujours par l'exponentielle)*

**Signe** : $e^{1/x} > 0$, donc $f_3'$ est du signe du quotient $\dfrac{x-1}{x}$ :

```
x        | −∞      0       1      +∞
x−1      |    −    ‖   −   0   +
x        |    −    ‖   +       +
(x−1)/x  |    +    ‖   −   0   +
```

**Limites** (les 4 bornes) :

- $x\to-\infty$ : $\frac{1}{x}\to 0$ donc $e^{1/x}\to 1$, et $f_3(x) \to -\infty$.
- $x\to 0^-$ : $\frac{1}{x}\to-\infty$ donc $e^{1/x}\to 0$ (Prop 1.5), et $x\to 0$ : le produit tend vers $0^-$.
- $x\to 0^+$ : $\frac{1}{x}\to+\infty$. On pose $X = \frac{1}{x}$ : $f_3(x) = \dfrac{e^X}{X} \to +\infty$ par **croissance comparée** (Prop 1.6).
- $x\to+\infty$ : $e^{1/x}\to 1$ donc $f_3(x)\to+\infty$.
- Minimum local en $1$ : $f_3(1) = e$.

```
x      | −∞         0 ‖ 0          1         +∞
f₃'(x) |      +       ‖      −     0    +
f₃     | −∞  ↗  0⁻    ‖ +∞   ↘     e   ↗  +∞
```

::

::question{label="4."}

Étudier $f_4 : x \mapsto \dfrac{\sin x}{x}$

#indice

Commence par exploiter la parité pour te ramener à $]0,+\infty[$. La dérivée est un quotient, et son signe est celui de $g(x) = x\cos x-\sin x$ : ce signe n'est pas lisible directement, il faut donc étudier $g$ comme **fonction auxiliaire**. Sa dérivée se simplifie très joliment, et le signe de $\sin$ te découpera $]0,+\infty[$ en intervalles $[n\pi,(n+1)\pi]$ selon la parité de $n$ ; le théorème des valeurs intermédiaires fera le reste. En $0$, reconnais un taux d'accroissement.

#solution

**Étape 1 — domaine et symétries.** $x \neq 0$, donc $D_{f_4} = \mathbb{R}^*$. On remarque que $f_4$ est **paire** ($f_4(-x) = \dfrac{-\sin x}{-x} = f_4(x)$, Prop 2.1) — on l'étudie donc sur $]0,+\infty[$ — et qu'elle est **prolongeable par continuité en 0** en posant $f_4(0) = 1$ (cf. la limite ci-dessous).

**Étape 2 — dérivée.** Quotient avec $u = \sin x$, $u' = \cos x$ (Prop 2.3) et $v = x$, $v' = 1$ :

$$f_4'(x) = \frac{x\cos x-\sin x}{x^2} \quad \text{sur } \mathbb{R}^*$$

**Étape 3 — signe, via une fonction auxiliaire.** $x^2 > 0$, donc $f_4'$ est du signe de $g(x) = x\cos x-\sin x$, qu'on étudie sur $]0,+\infty[$ :

$$g'(x) = \cos x - x\sin x-\cos x = -x\sin x$$

Or, sur $]0,+\infty[$, $\sin x \geqslant 0 \iff x \in [n\pi,(n+1)\pi]$ avec $n$ **pair**. Donc $g$ est **strictement décroissante** sur chacun des intervalles $[n\pi,(n+1)\pi]$ avec $n$ pair, et **strictement croissante** sur $[n\pi,(n+1)\pi]$ avec $n$ impair.

Aux bornes : $g(n\pi) = n\pi\cos(n\pi)-\sin(n\pi) = (-1)^n\,n\pi$. Sur chaque $[n\pi,(n+1)\pi]$, $g$ est donc continue, strictement monotone, et change de signe ($n$ pair : de $n\pi$ à $-(n+1)\pi$ ; $n$ impair : de $-n\pi$ à $(n+1)\pi$). D'après le **théorème des valeurs intermédiaires**, il existe un **unique** réel $x_n$ dans chaque intervalle $[n\pi,(n+1)\pi]$ tel que $g(x_n) = 0$. D'où les tableaux de variations de $g$ :

Pour $n$ **pair** :

```
x      | nπ         xₙ          (n+1)π
g'(x)  | 0      −    ⋮      −      0
g      | nπ   ↘      0      ↘   −(n+1)π
```

Pour $n$ **impair** :

```
x      | nπ         xₙ          (n+1)π
g'(x)  | 0      +    ⋮      +      0
g      | −nπ  ↗      0      ↗    (n+1)π
```

**Étape 4 — tableau de variations de $f_4$.** $f_4'$ est du signe de $g$, et $f_4(n\pi) = \dfrac{\sin(n\pi)}{n\pi} = 0$ à chaque borne :

Pour $n$ **pair** :

```
x      | nπ         xₙ         (n+1)π
g(x)   |      +      0      −
f₄     | 0    ↗   f₄(xₙ)   ↘     0
```

Pour $n$ **impair** :

```
x      | nπ         xₙ         (n+1)π
g(x)   |      −      0      +
f₄     | 0    ↘   f₄(xₙ)   ↗     0
```

*(Cas particulier $n = 0$ : $g(0) = 0$ et $g$ strictement décroissante donnent $g < 0$ sur $]0,\pi]$, donc $x_0 = 0$ : $f_4$ est **strictement décroissante** sur $]0,\pi]$, de $1$ vers $0$.)*

**Étape 5 — limites.**

- $x\to 0$ : $\dfrac{\sin x}{x} = \dfrac{\sin x-\sin 0}{x-0} \to \sin'(0) = \cos(0) = 1$ *(c'est un taux d'accroissement : même argument que la Prop 1.8 du cours pour $\frac{e^x-1}{x}$)* — d'où le prolongement par continuité $f_4(0) = 1$.
- $x\to+\infty$ : $\left\lvert\dfrac{\sin x}{x}\right\rvert \leqslant \dfrac{1}{x} \to 0$, donc $f_4 \to 0$ par **encadrement** ($f_4$ oscille en s'amortissant vers $0$, ses extrema étant les $f_4(x_n)$).

::

::question{label="5."}

Étudier $f_5 : x \mapsto \sqrt{x^2-5x+6}$

#indice

Sous une racine carrée, l'expression doit être positive **ou nulle** : le domaine contient donc les racines du trinôme, mais le domaine de dérivabilité, lui, les exclut (la formule $(\sqrt u)' = \frac{u'}{2\sqrt u}$ exige $u>0$). Une fois la dérivée écrite, regarde où s'annule son numérateur : la valeur trouvée réserve une surprise.

#solution

**Domaine** : $x^2-5x+6 \geqslant 0$. Racines : $\Delta = 25-24 = 1$, $x = \dfrac{5\pm 1}{2}$, soit $2$ et $3$. Comme $a = 1 > 0$, le trinôme est positif **à l'extérieur** des racines :

$$D_{f_5} = \left]-\infty,2\right] \cup \left[3,+\infty\right[$$

**Dérivée** : forme $\sqrt{u}$ avec $u = x^2-5x+6$, $u' = 2x-5$ :

$$f_5'(x) = \frac{2x-5}{2\sqrt{x^2-5x+6}} \quad \text{sur } ]-\infty,2[\,\cup\,]3,+\infty[$$

*(pas de dérivée en $2$ ni en $3$ : $u$ s'y annule, la formule $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$ exige $u > 0$ — tangentes verticales)*

**Signe** : le dénominateur est $> 0$, donc $f_5'$ est du signe de $2x-5$, qui s'annule en $\frac{5}{2}$… qui est **hors du domaine**. Sur $]-\infty,2[$ : $2x-5 < -1 < 0$, donc $f_5$ est décroissante. Sur $]3,+\infty[$ : $2x-5 > 1 > 0$, donc $f_5$ est croissante.

**Limites et valeurs** : $f_5(2) = 0$, $f_5(3) = 0$ ; en $\pm\infty$, $x^2-5x+6 \to +\infty$ donc $f_5 \to +\infty$.

```
x      | −∞        2 ‖ 3        +∞
f₅'(x) |     −       ‖      +
f₅     | +∞  ↘   0   ‖ 0   ↗  +∞
```

::

::question{label="6."}

Étudier $f_6 : x \mapsto e^x\ln(x+1)$

#indice

Produit d'une exponentielle et d'un logarithme : dérive avec $(uv)'$, puis factorise par $e^x$ qui est toujours positif. Le crochet restant n'a pas un signe évident — introduis-le comme fonction auxiliaire $h$, dérive-la, trouve son minimum et regarde son signe. Attention aussi à la borne gauche du domaine, où le logarithme explose.

#solution

**Domaine** : $x+1 > 0$, d'où $D_{f_6} = \left]-1,+\infty\right[$.

**Dérivée** : produit avec $u = e^x$, $u' = e^x$ et $v = \ln(x+1)$, $v' = \dfrac{1}{x+1}$ (Prop 1.20) :

$$f_6'(x) = e^x\ln(x+1)+\frac{e^x}{x+1} = e^x\left[\ln(x+1)+\frac{1}{x+1}\right] \quad \text{sur } ]-1,+\infty[$$

**Signe** : $e^x > 0$, donc $f_6'$ est du signe de $h(x) = \ln(x+1)+\dfrac{1}{x+1}$. Ce signe n'est pas évident, d'où une **étude auxiliaire** :

$$h'(x) = \frac{1}{x+1}-\frac{1}{(x+1)^2} = \frac{(x+1)-1}{(x+1)^2} = \frac{x}{(x+1)^2}$$

$h' < 0$ sur $]-1,0[$ et $h' > 0$ sur $]0,+\infty[$ : $h$ atteint son **minimum en $0$**, qui vaut $h(0) = \ln 1+1 = 1 > 0$. Donc $h > 0$ partout, donc $f_6' > 0$ : $f_6$ est **strictement croissante**.

**Limites** : quand $x\to -1^+$, $e^x \to e^{-1}$ (fini, positif) et $\ln(x+1)\to-\infty$, donc $f_6\to-\infty$. Quand $x\to+\infty$, les deux facteurs tendent vers $+\infty$, donc $f_6\to+\infty$.

```
x      | −1             +∞
f₆'(x) |       +
f₆     | −∞    ↗        +∞
```

::

:::

:::exercice{titre="Exercice 4" theme="Équations trigonométriques"}

Résoudre les équations trigonométriques suivantes.

**Méthode** : on se ramène à une égalité entre **deux cosinus** (ou deux sinus), puis on utilise la lecture du cercle trigonométrique (Déf 2.1, avec la parité de cos et la périodicité, Prop 2.1–2.2) :

$$\cos A = \cos B \iff A = B+2k\pi \;\text{ ou }\; A = -B+2k\pi \quad(k\in\mathbb{Z})$$

et la formule des angles complémentaires pour convertir un sinus : $\sin\theta = \cos\!\left(\dfrac{\pi}{2}-\theta\right)$.

::question{label="1."}

Déterminer les réels $x$ tels que $\cos\left(x-\dfrac{\pi}{4}\right) = \sin\left(2x-\dfrac{\pi}{3}\right)$.

#indice

Tant que tu as un cosinus d'un côté et un sinus de l'autre, tu ne peux rien conclure : convertis d'abord le sinus en cosinus avec les angles complémentaires. Ensuite, l'égalité de deux cosinus donne **deux** familles de solutions, pas une seule — ne perds pas la seconde en chemin, et n'oublie pas le $2k\pi$.

#solution

**Étape 1 — tout mettre en cosinus** :

$$\sin\left(2x-\frac{\pi}{3}\right) = \cos\left(\frac{\pi}{2}-\left(2x-\frac{\pi}{3}\right)\right) = \cos\left(\frac{5\pi}{6}-2x\right)$$

*(calcul : $\frac{\pi}{2}+\frac{\pi}{3} = \frac{3\pi+2\pi}{6} = \frac{5\pi}{6}$)*

**Étape 2 — égalité de deux cosinus** : $\cos\left(x-\frac{\pi}{4}\right) = \cos\left(\frac{5\pi}{6}-2x\right)$ donne deux familles.

**Famille 1** : $x-\dfrac{\pi}{4} = \dfrac{5\pi}{6}-2x+2k\pi$

$$3x = \frac{5\pi}{6}+\frac{\pi}{4}+2k\pi = \frac{10\pi+3\pi}{12}+2k\pi = \frac{13\pi}{12}+2k\pi$$

$$x = \frac{13\pi}{36}+\frac{2k\pi}{3}$$

**Famille 2** : $x-\dfrac{\pi}{4} = -\dfrac{5\pi}{6}+2x+2k\pi$

$$-x = -\frac{5\pi}{6}+\frac{\pi}{4}+2k\pi = -\frac{7\pi}{12}+2k\pi \quad\Longrightarrow\quad x = \frac{7\pi}{12}-2k\pi$$

Comme $k$ parcourt tout $\mathbb{Z}$, on écrit simplement $x = \dfrac{7\pi}{12}+2k\pi$.

$$\boxed{S = \left\{\frac{13\pi}{36}+\frac{2k\pi}{3},\; k\in\mathbb{Z}\right\}\cup\left\{\frac{7\pi}{12}+2k\pi,\; k\in\mathbb{Z}\right\}}$$

*(Vérifié numériquement : cela donne bien exactement 4 solutions par tour, par exemple $\frac{13\pi}{36}, \frac{7\pi}{12}, \frac{37\pi}{36}, \frac{61\pi}{36}$ dans $[0,2\pi[$.)*

::

::question{label="2."}

Résoudre sur l'intervalle indiqué : $\cos(x) = \dfrac{1}{2}$ dans $[0,2\pi]$.

#indice

Reconnais d'abord une valeur remarquable du cercle : quel angle usuel a pour cosinus $\frac{1}{2}$ ? Les deux familles de solutions donnent chacune un représentant dans $[0,2\pi]$ — pour la seconde, il faut choisir la bonne valeur de $k$ afin de retomber dans l'intervalle demandé.

#solution

**Valeur remarquable** : $\dfrac{1}{2} = \cos\dfrac{\pi}{3}$. Donc :

$$\cos x = \cos\frac{\pi}{3} \iff x = \frac{\pi}{3}+2k\pi \;\text{ ou }\; x = -\frac{\pi}{3}+2k\pi$$

**Dans $[0,2\pi]$** : la première famille donne $x = \dfrac{\pi}{3}$ (avec $k=0$) ; la seconde donne $x = -\dfrac{\pi}{3}+2\pi = \dfrac{5\pi}{3}$ (avec $k=1$).

$$\boxed{S = \left\{\frac{\pi}{3},\; \frac{5\pi}{3}\right\}}$$

⚠️ *L'énoncé dit « inéquation » mais écrit une équation ($=$). Si l'intention était $\cos x \leqslant \frac{1}{2}$, la lecture du cercle donne $S = \left[\frac{\pi}{3}, \frac{5\pi}{3}\right]$ (l'arc où le cosinus, c'est-à-dire l'abscisse sur le cercle, est sous $\frac{1}{2}$).*

::

:::

:::exercice{titre="Exercice 5" theme="Dérivées de fonctions trigonométriques"}

Soit $f$ une fonction définie sur $\mathbb{R}$. Calculer $f'(x)$ dans chacun des cas suivants.

**Méthode** : mêmes réflexes que dans le chapitre *Fonctions d'une variable réelle* (identifier la forme : somme, produit, carré, quotient), avec $\sin' = \cos$ et $\cos' = -\sin$ (Prop 2.3), et $\big(\sin(ax+b)\big)' = a\cos(ax+b)$.

::question{label="1."}

$f(x) = x^2+\cos x$

#indice

C'est une somme : on dérive terme à terme. Le seul point de vigilance est le signe apporté par la dérivée du cosinus (Prop 2.3).

#solution

Somme, dérivée terme à terme :

$$\boxed{f'(x) = 2x-\sin x}$$

::

::question{label="2."}

$f(x) = \sin 2x$

#indice

C'est une composée de la forme $\sin(ax+b)$. Le facteur $a$ ne disparaît pas : il sort devant grâce à la dérivation en chaîne. Oublier ce facteur est l'erreur la plus fréquente.

#solution

Forme $\sin(ax+b)$ avec $a = 2$, $b = 0$ :

$$\boxed{f'(x) = 2\cos 2x}$$

::

::question{label="3."}

$f(x) = \cos x\sin x$

#indice

Applique la formule du produit $(uv)' = u'v+uv'$ avec $u = \cos x$ et $v = \sin x$. Les deux termes obtenus se regroupent en une expression bien connue — que tu peux relier à un angle double si tu le souhaites.

#solution

Produit, avec $u = \cos x$, $u' = -\sin x$ et $v = \sin x$, $v' = \cos x$ :

$$f'(x) = -\sin x\sin x+\cos x\cos x = \cos^2x-\sin^2x$$

$$\boxed{f'(x) = \cos^2x-\sin^2x \;(= \cos 2x)}$$

::

::question{label="4."}

$f(x) = \sin^2x$

#indice

Vois-y un carré $u^2$, dont la dérivée est $2uu'$. Il ne s'agit pas de dériver « le carré » seul : le facteur $u'$ est indispensable.

#solution

Carré $u^2$ (avec $n = 2$), $u = \sin x$, $u' = \cos x$ :

$$\boxed{f'(x) = 2\sin x\cos x \;(= \sin 2x)}$$

::

::question{label="5."}

$f(x) = x^2\cos x$

#indice

Produit d'un polynôme et d'un cosinus : formule $(uv)'$. Le deuxième terme hérite du signe moins de la dérivée du cosinus, ne le perds pas.

#solution

Produit, avec $u = x^2$, $u' = 2x$ et $v = \cos x$, $v' = -\sin x$ :

$$\boxed{f'(x) = 2x\cos x-x^2\sin x}$$

::

::question{label="6."}

$f(x) = \cos^2x$

#indice

Même schéma qu'à la question 4, mais cette fois $u = \cos x$ : le facteur $u'$ change de signe, et donc le résultat aussi.

#solution

Carré $u^2$, avec $u = \cos x$, $u' = -\sin x$ :

$$\boxed{f'(x) = -2\sin x\cos x \;(= -\sin 2x)}$$

::

::question{label="7."}

$f(x) = \sin x+\cos x$

#indice

Une somme, donc rien de plus qu'un usage direct de $\sin' = \cos$ et $\cos' = -\sin$. Sois très attentif aux signes : c'est exactement là que la correction officielle se trompe.

#solution

Somme, dérivée terme à terme :

$$\boxed{f'(x) = \cos x-\sin x}$$

⚠️ *La correction officielle imprime $-\cos x+\sin x$ : erreur de signe — puisque $\sin' = \cos$ et $\cos' = -\sin$, la dérivée est bien $\cos x-\sin x$.*

::

::question{label="8."}

$f(x) = \dfrac{2\cos x+3}{2\cos x-3}$

#indice

C'est un quotient : applique $\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}$. Le numérateur semble lourd, mais $u'$ et $v'$ sont **identiques** : factorise par ce facteur commun et tout se simplifie d'un coup. Pense aussi à justifier que le dénominateur ne s'annule jamais.

#solution

Quotient, avec $u = 2\cos x+3$, $u' = -2\sin x$ et $v = 2\cos x-3$, $v' = -2\sin x$.

Numérateur : $-2\sin x(2\cos x-3)-(2\cos x+3)(-2\sin x)$. On **factorise par $-2\sin x$** :

$$-2\sin x\big[(2\cos x-3)-(2\cos x+3)\big] = -2\sin x\times(-6) = 12\sin x$$

$$\boxed{f'(x) = \frac{12\sin x}{(2\cos x-3)^2}}$$

*(Remarque : $\lvert\cos x\rvert\leqslant 1$ donc $2\cos x-3 \leqslant -1 < 0$ : le dénominateur ne s'annule jamais, $f$ est dérivable sur $\mathbb{R}$.)*

::

:::

:::exercice{titre="Exercice 6" theme="Fonctions trigonométriques réciproques"}

On étudie les fonctions $\arccos$, $\arcsin$ et $\arctan$, réciproques des fonctions trigonométriques restreintes (Déf 3.1).

::question{label="1. a)"}

Calculer les valeurs de $\arccos$ et $\arcsin$ en $0$, $1$, $\dfrac{1}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{\sqrt{3}}{2}$.

#indice

Lis le cercle trigonométrique « à l'envers » : $\arccos(x)$ est l'unique angle **de $[0,\pi]$** dont le cosinus vaut $x$, et $\arcsin(x)$ l'unique angle **de $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$** dont le sinus vaut $x$. L'intervalle d'arrivée n'est pas un détail : c'est lui qui rend la réponse unique.

#solution

**Méthode** : $\arccos(x)$ est **l'unique angle de $[0,\pi]$** dont le cosinus vaut $x$ ; $\arcsin(x)$ est **l'unique angle de $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$** dont le sinus vaut $x$ (Déf 3.1). On lit donc les valeurs remarquables du cercle trigonométrique « à l'envers ».

| $x$ | $0$ | $1$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
|---|---|---|---|---|---|
| $\arccos x$ | $\frac{\pi}{2}$ | $0$ | $\frac{\pi}{3}$ | $\frac{\pi}{4}$ | $\frac{\pi}{6}$ |
| $\arcsin x$ | $0$ | $\frac{\pi}{2}$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ |

*(Exemple de lecture : $\cos\frac{\pi}{3} = \frac{1}{2}$ et $\frac{\pi}{3}\in[0,\pi]$, donc $\arccos\frac{1}{2} = \frac{\pi}{3}$.)*

::

::question{label="1. b)"}

Calculer les valeurs de $\arctan$ en $0$, $1$, $\sqrt{3}$, $\dfrac{1}{\sqrt{3}}$, puis calculer $\arctan\left(\tan\dfrac{7\pi}{3}\right)$.

#indice

Même lecture inverse que précédemment, cette fois dans $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$. Pour la dernière valeur, méfie-toi du réflexe « $\arctan(\tan\theta)=\theta$ » : cette simplification n'est valable que si $\theta$ appartient à l'intervalle d'arrivée de $\arctan$. Commence par réduire l'angle modulo la période de la tangente.

#solution

**Méthode** : même lecture inverse, avec des valeurs dans $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ :

| $x$ | $0$ | $1$ | $\sqrt{3}$ | $\frac{1}{\sqrt{3}}$ |
|---|---|---|---|---|
| $\arctan x$ | $0$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{6}$ |

**Le piège** $\arctan\left(\tan\dfrac{7\pi}{3}\right)$ : la Prop 3.3 dit que $\arctan(\tan\theta) = \theta$ **seulement si** $\theta \in \left]-\frac{\pi}{2},\frac{\pi}{2}\right[$. Or $\dfrac{7\pi}{3} \notin \left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ : on **ne peut pas** répondre $\frac{7\pi}{3}$.

On réduit d'abord l'angle : $\dfrac{7\pi}{3} = \dfrac{\pi}{3}+2\pi$, donc $\tan\dfrac{7\pi}{3} = \tan\dfrac{\pi}{3}$ (périodicité). Et cette fois $\dfrac{\pi}{3} \in \left]-\frac{\pi}{2},\frac{\pi}{2}\right[$, donc :

$$\arctan\left(\tan\frac{7\pi}{3}\right) = \arctan\left(\tan\frac{\pi}{3}\right) = \boxed{\frac{\pi}{3}}$$

::

::question{label="2."}

Montrer que $\arccos x+\arcsin x = \dfrac{\pi}{2}$ pour tout $x\in[-1,1]$.

#indice

Pour prouver qu'une expression est constante, la stratégie du cours est toujours la même : poser $f$ égale à cette expression, montrer que $f' = 0$ sur un intervalle, puis identifier la constante en **calculant $f$ en un point bien choisi** (prends le plus simple possible). Les dérivées de $\arccos$ et $\arcsin$ sont dans la Prop 3.4 ; pense à traiter les deux bornes à part, car $f$ n'y est pas dérivable.

#solution

**Méthode du cours** (même schéma que la démonstration de la Prop 4.3 pour argsh) : pour montrer qu'une fonction est constante, on montre que **sa dérivée est nulle** sur un intervalle, puis on calcule sa **valeur en un point**.

Posons $f(x) = \arccos x+\arcsin x$ sur $[-1,1]$.

- $f$ est dérivable sur $]-1,1[$ (Prop 3.4) et :

$$f'(x) = \frac{-1}{\sqrt{1-x^2}}+\frac{1}{\sqrt{1-x^2}} = 0$$

- Donc $f$ est **constante** sur $]-1,1[$. Sa valeur : en $x = 0$,

$$f(0) = \arccos 0+\arcsin 0 = \frac{\pi}{2}+0 = \frac{\pi}{2}$$

- Donc $f(x) = \dfrac{\pi}{2}$ sur $]-1,1[$. Aux bornes, on vérifie directement : $f(1) = 0+\dfrac{\pi}{2}$ ✓ et $f(-1) = \pi+\left(-\dfrac{\pi}{2}\right) = \dfrac{\pi}{2}$ ✓.

$$\boxed{\forall x\in[-1,1],\quad \arccos x+\arcsin x = \frac{\pi}{2}}$$

::

:::

:::exercice{titre="Exercice 7" theme="Identités hyperboliques"}

Démontrer les égalités suivantes.

**Méthode du cours** (celle de la démonstration de la Prop 4.1) : **revenir aux définitions exponentielles** (Déf 4.1), développer avec les propriétés algébriques de exp (Prop 1.2), puis regrouper.

::question{label="1."}

Pour tous réels $a$ et $b$ : $\mathrm{ch}(a+b) = \mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b$

#indice

Pars du membre de **droite** — c'est celui qui se développe — en remplaçant $\mathrm{ch}$ et $\mathrm{sh}$ par leurs définitions exponentielles (Déf 4.1). Développe les deux produits séparément, puis additionne : les termes croisés doivent disparaître.

#solution

On développe le membre de droite :

$$\mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b = \frac{(e^a+e^{-a})(e^b+e^{-b})}{4}+\frac{(e^a-e^{-a})(e^b-e^{-b})}{4}$$

Premier produit : $e^{a+b}+e^{a-b}+e^{-a+b}+e^{-a-b}$.

Second produit : $e^{a+b}-e^{a-b}-e^{-a+b}+e^{-a-b}$.

En sommant, les termes croisés **se compensent** :

$$= \frac{2e^{a+b}+2e^{-(a+b)}}{4} = \frac{e^{a+b}+e^{-(a+b)}}{2} = \mathrm{ch}(a+b) \qquad\blacksquare$$

::

::question{label="2."}

Pour tout réel $a$ : $\mathrm{ch}(2a) = \mathrm{ch}^2a+\mathrm{sh}^2a = 2\,\mathrm{ch}^2a-1 = 1+2\,\mathrm{sh}^2a$

#indice

Il y a trois écritures à obtenir, mais une seule idée : calcule séparément la **somme** $\mathrm{ch}^2a+\mathrm{sh}^2a$ et la **différence** $\mathrm{ch}^2a-\mathrm{sh}^2a$ à partir des définitions exponentielles. La somme te donne la première égalité, la différence (Prop 4.1) permet de passer aux deux autres par substitution. Souviens-toi que $e^a\cdot e^{-a}=1$ en développant les carrés.

#solution

**Méthode de la correction** : on calcule séparément $\mathrm{ch}^2a+\mathrm{sh}^2a$ et $\mathrm{ch}^2a-\mathrm{sh}^2a$ à partir des définitions exponentielles. Soit $a$ un réel.

**Somme** :

$$\mathrm{ch}^2a+\mathrm{sh}^2a = \left(\frac{e^a+e^{-a}}{2}\right)^2+\left(\frac{e^a-e^{-a}}{2}\right)^2 = \frac{e^{2a}+e^{-2a}+2}{4}+\frac{e^{2a}+e^{-2a}-2}{4} = 2\cdot\frac{e^{2a}+e^{-2a}}{4} = \mathrm{ch}(2a)$$

*(en développant les carrés avec $e^a\cdot e^{-a} = 1$)*

**Différence** :

$$\mathrm{ch}^2a-\mathrm{sh}^2a = \frac{e^{2a}+e^{-2a}+2}{4}-\frac{e^{2a}+e^{-2a}-2}{4} = \frac{4}{4} = 1$$

*(on retrouve la Prop 4.1)*

Ainsi $\mathrm{ch}(2a) = \mathrm{ch}^2a+\mathrm{sh}^2a$ ; et comme $\mathrm{ch}^2a-\mathrm{sh}^2a = 1$, c'est-à-dire $\mathrm{sh}^2a = \mathrm{ch}^2a-1$ et $\mathrm{ch}^2a = 1+\mathrm{sh}^2a$, on obtient en substituant :

$$\mathrm{ch}(2a) = 2\,\mathrm{ch}^2a-1 = 1+2\,\mathrm{sh}^2a \qquad\blacksquare$$

*(Variante plus rapide : prendre $b = a$ dans l'égalité 1, puis utiliser la Prop 4.1.)*

::

::question{label="3."}

Pour tous réels $a$ et $b$ : $\mathrm{sh}(a+b) = \mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a$

#indice

Exactement la même démarche qu'à la question 1 : définitions exponentielles, développement des deux produits, puis somme. Repère bien quels termes croisés se compensent cette fois — ce ne sont pas les mêmes qu'avant.

#solution

Même méthode :

$$\mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a = \frac{(e^a-e^{-a})(e^b+e^{-b})}{4}+\frac{(e^b-e^{-b})(e^a+e^{-a})}{4}$$

Premier produit : $e^{a+b}+e^{a-b}-e^{b-a}-e^{-a-b}$.

Second produit : $e^{a+b}+e^{b-a}-e^{a-b}-e^{-a-b}$.

Somme (les termes en $e^{a-b}$ et $e^{b-a}$ se compensent) :

$$= \frac{2e^{a+b}-2e^{-(a+b)}}{4} = \mathrm{sh}(a+b) \qquad\blacksquare$$

::

::question{label="4."}

Pour tout réel $a$ : $\mathrm{sh}(2a) = 2\,\mathrm{sh}\,a\,\mathrm{ch}\,a$

#indice

Inutile de tout recalculer : tu viens d'établir une formule d'addition qui contient déjà celle-ci. Il suffit de choisir judicieusement les deux variables.

#solution

On prend $b = a$ dans l'égalité de la question 3 :

$$\mathrm{sh}(2a) = \mathrm{sh}\,a\,\mathrm{ch}\,a+\mathrm{sh}\,a\,\mathrm{ch}\,a = \boxed{2\,\mathrm{sh}\,a\,\mathrm{ch}\,a} \qquad\blacksquare$$

::

::question{label="5."}

Pour tous réels $a$ et $b$ : $\mathrm{th}(a+b) = \dfrac{\mathrm{th}\,a+\mathrm{th}\,b}{1+\mathrm{th}\,a\,\mathrm{th}\,b}$

#indice

Puisque $\mathrm{th} = \frac{\mathrm{sh}}{\mathrm{ch}}$, forme le quotient des deux formules d'addition déjà démontrées. Pour faire apparaître des tangentes hyperboliques, divise haut et bas par un produit bien choisi — et justifie que cette division est licite en te rappelant que $\mathrm{ch}$ ne s'annule jamais.

#solution

**Stratégie** : $\mathrm{th} = \dfrac{\mathrm{sh}}{\mathrm{ch}}$, donc on fait le quotient des égalités 3 et 1 :

$$\mathrm{th}(a+b) = \frac{\mathrm{sh}(a+b)}{\mathrm{ch}(a+b)} = \frac{\mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a}{\mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b}$$

Pour faire apparaître des th, on **divise numérateur et dénominateur par $\mathrm{ch}\,a\,\mathrm{ch}\,b$** (licite : $\mathrm{ch} \geqslant 1$ ne s'annule jamais) :

$$= \frac{\dfrac{\mathrm{sh}\,a}{\mathrm{ch}\,a}+\dfrac{\mathrm{sh}\,b}{\mathrm{ch}\,b}}{1+\dfrac{\mathrm{sh}\,a}{\mathrm{ch}\,a}\dfrac{\mathrm{sh}\,b}{\mathrm{ch}\,b}} = \frac{\mathrm{th}\,a+\mathrm{th}\,b}{1+\mathrm{th}\,a\,\mathrm{th}\,b} \qquad\blacksquare$$

::

:::

:::exercice{titre="Exercice 8" theme="Dérivées des fonctions hyperboliques"}

Démontrer que, pour tout réel $x$, les égalités suivantes sont vraies.

**Méthode du cours** (démonstration de la Prop 4.2) : **dériver les définitions exponentielles**, en n'oubliant pas que $(e^{-x})' = -e^{-x}$ (Prop 1.9 avec $u = -x$).

::question{label="1."}

$\mathrm{ch}'x = \mathrm{sh}\,x$

#indice

Repars de la définition $\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2}$ et dérive terme à terme. Le point à surveiller est la dérivée de $e^{-x}$ : la Prop 1.9 fait apparaître un signe moins.

#solution

$$\mathrm{ch}'x = \left(\frac{e^x+e^{-x}}{2}\right)' = \frac{e^x-e^{-x}}{2} = \boxed{\mathrm{sh}\,x}$$

::

::question{label="2."}

$\mathrm{sh}'x = \mathrm{ch}\,x$

#indice

Même démarche qu'à la question précédente, mais avec un signe moins déjà présent dans la définition. Les deux signes moins se combinent : sois attentif à ce double changement.

#solution

$$\mathrm{sh}'x = \left(\frac{e^x-e^{-x}}{2}\right)' = \frac{e^x-(-e^{-x})}{2} = \frac{e^x+e^{-x}}{2} = \boxed{\mathrm{ch}\,x}$$

::

::question{label="3."}

$\mathrm{th}'x = 1-\mathrm{th}^2x = \dfrac{1}{\mathrm{ch}^2x}$

#indice

Comme $\mathrm{th}$ est un quotient de $\mathrm{sh}$ par $\mathrm{ch}$, applique $\left(\frac{u}{v}\right)'$ avec les deux dérivées que tu viens d'établir. Le résultat se lit ensuite de **deux** façons : en simplifiant le numérateur grâce à la Prop 4.1, ou en séparant la fraction en deux morceaux.

#solution

$\mathrm{th} = \dfrac{\mathrm{sh}}{\mathrm{ch}}$ : formule du **quotient**, avec les deux dérivées qu'on vient d'établir :

$$\mathrm{th}'x = \frac{\mathrm{sh}'x\,\mathrm{ch}\,x-\mathrm{sh}\,x\,\mathrm{ch}'x}{\mathrm{ch}^2x} = \frac{\mathrm{ch}^2x-\mathrm{sh}^2x}{\mathrm{ch}^2x}$$

Deux lectures de ce résultat, qui donnent les deux formes demandées :

- avec la **Prop 4.1**, le numérateur vaut $1$ : $\mathrm{th}'x = \dfrac{1}{\mathrm{ch}^2x}$ ;
- en séparant la fraction : $\mathrm{th}'x = 1-\dfrac{\mathrm{sh}^2x}{\mathrm{ch}^2x} = 1-\mathrm{th}^2x$.

$$\boxed{\mathrm{th}'x = 1-\mathrm{th}^2x = \frac{1}{\mathrm{ch}^2x}} \qquad\blacksquare$$

::

:::

:::exercice{titre="Exercice 9" theme="Dérivées des fonctions hyperboliques réciproques"}

Démontrer les formules de dérivation suivantes.

**Méthode du cours** (celle des démonstrations des Prop 3.4 et 4.3) : on part de l'égalité $f(f^{-1}(x)) = x$, on **dérive les deux membres** (le membre de gauche avec la formule de la composée), puis on isole $(f^{-1})'(x)$. Il reste à exprimer le résultat en fonction de $x$ grâce à $\mathrm{ch}^2-\mathrm{sh}^2 = 1$, **en justifiant le signe** au moment de prendre une racine carrée.

::question{label="1."}

Pour tout $x > 1$ : $\mathrm{argch}'x = \dfrac{1}{\sqrt{x^2-1}}$

#indice

Dérive l'identité $\mathrm{ch}(\mathrm{argch}\,x) = x$ et isole la dérivée cherchée. Tu obtiens alors un $\mathrm{sh}(\mathrm{argch}\,x)$ qu'il faut exprimer en fonction de $x$ : la Prop 4.1 donne son **carré**. Le point délicat est le choix du signe de la racine — appuie-toi sur le signe de $\mathrm{argch}\,x$ quand $x>1$.

#solution

On dérive l'égalité $\mathrm{ch}(\mathrm{argch}\,x) = x$ :

$$\mathrm{argch}'x\times\mathrm{sh}(\mathrm{argch}\,x) = 1 \quad\Longrightarrow\quad \mathrm{argch}'x = \frac{1}{\mathrm{sh}(\mathrm{argch}\,x)}$$

Exprimons $\mathrm{sh}(\mathrm{argch}\,x)$ en fonction de $x$ : par la Prop 4.1,

$$\mathrm{sh}^2(\mathrm{argch}\,x) = \mathrm{ch}^2(\mathrm{argch}\,x)-1 = x^2-1$$

**Justification du signe** : pour $x > 1$, $\mathrm{argch}\,x > 0$ et $\mathrm{sh}\,t > 0$ quand $t > 0$, donc on prend la racine **positive** : $\mathrm{sh}(\mathrm{argch}\,x) = +\sqrt{x^2-1}$.

$$\boxed{\mathrm{argch}'x = \frac{1}{\sqrt{x^2-1}}} \qquad\blacksquare$$

::

::question{label="2."}

Pour tout réel $x$ : $\mathrm{argsh}'x = \dfrac{1}{\sqrt{x^2+1}}$

#indice

Même mécanique : dérive $\mathrm{sh}(\mathrm{argsh}\,x) = x$. Cette fois, la justification du signe est immédiate — il suffit de se rappeler l'encadrement vérifié par $\mathrm{ch}$ sur $\mathbb{R}$ tout entier.

#solution

On dérive $\mathrm{sh}(\mathrm{argsh}\,x) = x$ :

$$\mathrm{argsh}'x\times\mathrm{ch}(\mathrm{argsh}\,x) = 1 \quad\Longrightarrow\quad \mathrm{argsh}'x = \frac{1}{\mathrm{ch}(\mathrm{argsh}\,x)}$$

Par la Prop 4.1 : $\mathrm{ch}^2(\mathrm{argsh}\,x) = 1+\mathrm{sh}^2(\mathrm{argsh}\,x) = 1+x^2$, et comme $\mathrm{ch} \geqslant 1 > 0$ **toujours**, $\mathrm{ch}(\mathrm{argsh}\,x) = +\sqrt{x^2+1}$.

$$\boxed{\mathrm{argsh}'x = \frac{1}{\sqrt{x^2+1}}} \qquad\blacksquare$$

::

::question{label="3."}

Pour tout $x$ tel que $\lvert x\rvert < 1$ : $\mathrm{argth}'x = \dfrac{1}{1-x^2}$

#indice

Dérive $\mathrm{th}(\mathrm{argth}\,x) = x$ en réutilisant la forme $\mathrm{th}' = 1-\mathrm{th}^2$ démontrée à l'exercice 8 : c'est elle qui fait apparaître directement $x$, sans racine carrée ni discussion de signe. Vérifie simplement que le facteur obtenu ne s'annule pas.

#solution

On dérive $\mathrm{th}(\mathrm{argth}\,x) = x$, en utilisant $\mathrm{th}' = 1-\mathrm{th}^2$ (exercice 8) :

$$\mathrm{argth}'x\times\big(1-\mathrm{th}^2(\mathrm{argth}\,x)\big) = 1$$

Or $\mathrm{th}(\mathrm{argth}\,x) = x$, donc $1-\mathrm{th}^2(\mathrm{argth}\,x) = 1-x^2 \neq 0$ (car $\lvert x\rvert<1$) :

$$\boxed{\mathrm{argth}'x = \frac{1}{1-x^2}} \qquad\blacksquare$$

::

:::

:::exercice{titre="Exercice 10" theme="Expressions logarithmiques des fonctions hyperboliques inverses"}

Démontrer les expressions logarithmiques suivantes.

**Méthode du cours** (exactement la démonstration de la Prop 4.3, 3ᵉ point) : pour montrer que deux fonctions sont égales sur un intervalle, on montre qu'elles ont **la même dérivée** (elles diffèrent alors d'une constante) et qu'elles coïncident **en un point** (la constante est alors nulle). Les dérivées des fonctions $\mathrm{arg}$ sont connues par l'exercice 9.

::question{label="1."}

Pour tout $x \geqslant 1$ : $\mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right)$

#indice

Pose $f$ égale au membre de droite, vérifie d'abord qu'elle est bien définie, puis dérive-la avec la Prop 1.20. Au moment de simplifier, mets le numérateur au même dénominateur : un facteur commun avec $u$ apparaît et disparaît. Il ne reste plus qu'à comparer les deux fonctions **en un point** bien choisi — la borne $x=1$ est la plus économique.

#solution

Posons $f(x) = \ln\left(x+\sqrt{x^2-1}\right)$. *(Bien défini : pour $x\geqslant 1$, $x+\sqrt{x^2-1} \geqslant 1 > 0$.)*

Dérivons sur $]1,+\infty[$, forme $\ln u$ avec $u = x+\sqrt{x^2-1}$, $u' = 1+\dfrac{2x}{2\sqrt{x^2-1}} = 1+\dfrac{x}{\sqrt{x^2-1}}$ :

$$f'(x) = \frac{1+\dfrac{x}{\sqrt{x^2-1}}}{x+\sqrt{x^2-1}} = \frac{\dfrac{\sqrt{x^2-1}+x}{\sqrt{x^2-1}}}{x+\sqrt{x^2-1}} = \frac{1}{\sqrt{x^2-1}} = \mathrm{argch}'x$$

*(le facteur $x+\sqrt{x^2-1}$ se simplifie — c'est tout l'intérêt de cette forme)*

Donc $f$ et $\mathrm{argch}$ diffèrent d'une constante sur $[1,+\infty[$. En $x = 1$ : $f(1) = \ln(1+0) = 0$ et $\mathrm{argch}\,1 = 0$ (car $\mathrm{ch}\,0 = 1$). La constante est nulle :

$$\boxed{\forall x\geqslant 1,\quad \mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right)} \qquad\blacksquare$$

::

::question{label="2."}

Pour tout $x$ réel : $\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)$

#indice

C'est la démonstration du cours, mot pour mot. Avant de dériver, justifie que l'argument du logarithme est strictement positif pour **tout** réel $x$, y compris négatif : compare $\sqrt{x^2+1}$ à $\lvert x\rvert$. Le calcul de la dérivée est ensuite le même qu'à la question précédente, et $x=0$ est le point de comparaison naturel.

#solution

*(C'est mot pour mot la démonstration de la Prop 4.3 du cours.)* Posons $f(x) = \ln\left(x+\sqrt{x^2+1}\right)$. *(Bien défini sur $\mathbb{R}$ : $\sqrt{x^2+1} > \sqrt{x^2} = \lvert x\rvert \geqslant -x$, donc $x+\sqrt{x^2+1} > 0$.)*

$$f'(x) = \frac{1+\dfrac{x}{\sqrt{x^2+1}}}{x+\sqrt{x^2+1}} = \frac{\dfrac{\sqrt{x^2+1}+x}{\sqrt{x^2+1}}}{x+\sqrt{x^2+1}} = \frac{1}{\sqrt{x^2+1}} = \mathrm{argsh}'x$$

Et $f(0) = \ln(0+1) = 0 = \mathrm{argsh}\,0$ (car $\mathrm{sh}\,0 = 0$). Donc :

$$\boxed{\forall x\in\mathbb{R},\quad \mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)} \qquad\blacksquare$$

::

::question{label="3."}

Pour tout $x$ tel que $-1 < x < 1$ : $\mathrm{argth}\,x = \dfrac{1}{2}\ln\left(\dfrac{1+x}{1-x}\right)$

#indice

Avant de dériver, casse le logarithme du quotient en différence de deux logarithmes (Prop 1.12) : c'est licite car les deux facteurs sont strictement positifs sur $]-1,1[$, et cela rend la dérivation immédiate. Attention au signe apporté par la dérivée de $1-x$. Compare ensuite en $x=0$.

#solution

Posons $f(x) = \dfrac{1}{2}\ln\left(\dfrac{1+x}{1-x}\right) = \dfrac{1}{2}\big[\ln(1+x)-\ln(1-x)\big]$ (Prop 1.12, licite car $1+x>0$ et $1-x>0$ sur $]-1,1[$).

$$f'(x) = \frac{1}{2}\left[\frac{1}{1+x}-\frac{-1}{1-x}\right] = \frac{1}{2}\times\frac{(1-x)+(1+x)}{(1+x)(1-x)} = \frac{1}{2}\times\frac{2}{1-x^2} = \frac{1}{1-x^2} = \mathrm{argth}'x$$

Et $f(0) = \dfrac{1}{2}\ln 1 = 0 = \mathrm{argth}\,0$ (car $\mathrm{th}\,0 = 0$). Donc :

$$\boxed{\forall x\in\left]-1,1\right[,\quad \mathrm{argth}\,x = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)} \qquad\blacksquare$$

::

:::
