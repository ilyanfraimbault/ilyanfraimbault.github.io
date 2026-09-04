---
title: QCM 2 — Dérivation
description: Vingt questions à choix unique sur le tableau des dérivées, les produits, les quotients, les formes composées, les ensembles de dérivabilité, la continuité et le TVI.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 2
icone: i-lucide-trending-up
---

::rappel{titre="Comment se déroule ce QCM" icone="i-lucide-compass"}
Vingt questions, **une seule bonne réponse** par question. On répond à tout, puis on clique sur **Corriger** en bas de page : rien ne se révèle avant.

Le réflexe à garder pour tout ce QCM, question après question : **reconnaître la structure avant d'appliquer la moindre formule**. Somme ? produit $uv$ ? quotient $\dfrac{u}{v}$ ? forme composée ? L'écriture se simplifie-t-elle d'abord ?

C'est ce diagnostic, et non le calcul, qui départage les bonnes et les mauvaises réponses.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours" titre="Le cours du chapitre" description="Continuité, TVI, dérivabilité, tableau des dérivées usuelles, formes composées et bijections" type="cours" meta="7 sections"}
::

:::qcm{titre="QCM 2 — Dérivation" theme="Du tableau des dérivées usuelles aux formes composées et aux ensembles de dérivabilité" duree="25 min" icone="i-lucide-trending-up"}

::qcm-question{label="1." bonne="b" cours="qcm-fvr-tableau"}
Pour tout réel $\alpha$, la dérivée de $x\mapsto x^{\alpha}$ est :

#a
$\alpha x^{\alpha}$

#b
$\alpha x^{\alpha-1}$

#c
$\dfrac{x^{\alpha+1}}{\alpha+1}$

#d
$x^{\alpha-1}$

#indice
L'exposant **descend** en facteur, et le nouvel exposant vaut l'ancien diminué de $1$.

La proposition **c** est une primitive, pas une dérivée : c'est l'opération inverse.

#solution
$$
\boxed{\left(x^\alpha\right)' = \alpha x^{\alpha-1}}
$$

**C'est la seule ligne vraiment à retenir du tableau.** Toutes les autres s'en déduisent en réécrivant la fonction sous forme de puissance :

$$
\frac{1}{x} = x^{-1} \Rightarrow -x^{-2} = -\frac{1}{x^2} \qquad \sqrt x = x^{1/2} \Rightarrow \frac12 x^{-1/2} = \frac{1}{2\sqrt x}
$$

⚠️ La formule vaut pour **tout** exposant : entier, négatif, fractionnaire. C'est ce qui permet de ne jamais apprendre les lignes des inverses et des racines.
::

::qcm-question{label="2." bonne="c" cours="qcm-fvr-tableau"}
La fonction $f$ définie sur $]0\,;+\infty[$ par $f(x) = \sqrt x$ a pour dérivée :

#a
$f'(x) = \dfrac{1}{\sqrt x}$

#b
$f'(x) = 2\sqrt x$

#c
$f'(x) = \dfrac{1}{2\sqrt x}$

#d
$f'(x) = \dfrac{\sqrt x}{2}$

#indice
Réécris $\sqrt x$ en puissance : $x^{1/2}$. Applique ensuite la règle de la question précédente, puis repasse en racine.

#solution
$$
\left(\sqrt x\right)' = \left(x^{1/2}\right)' = \frac12 x^{-1/2} = \frac{1}{2x^{1/2}} = \frac{1}{2\sqrt x}
$$

**Le contrôle de bon sens** : $\sqrt x$ croît de plus en plus lentement, donc sa dérivée doit **décroître** vers $0$. Seules **a** et **c** décroissent, et le facteur $2$ vient de l'exposant $\dfrac12$.

⚠️ La fonction est définie en $0$ mais **pas dérivable** en $0$ : la dérivée y exploserait. D'où l'intervalle **ouvert** $]0\,;+\infty[$.
::

::qcm-question{label="3." bonne="b" cours="qcm-fvr-tableau"}
La fonction $f$ définie sur $\mathbb{R}^*$ par $f(x) = \dfrac1x$ a pour dérivée :

#a
$f'(x) = \dfrac{1}{x^2}$

#b
$f'(x) = -\dfrac{1}{x^2}$

#c
$f'(x) = \ln\lvert x\rvert$

#d
$f'(x) = -\dfrac{1}{2x^2}$

#indice
Même méthode : $\dfrac1x = x^{-1}$. L'exposant $-1$ descend en facteur, ce qui apporte le signe.

#solution
$$
\left(x^{-1}\right)' = -1\times x^{-2} = -\frac{1}{x^2}
$$

**Le contrôle de bon sens** : la fonction inverse est **décroissante** sur chacun de ses deux intervalles, donc sa dérivée est négative partout. Toute réponse positive était éliminable sans calcul.

La proposition **c** est une **primitive** de $\dfrac1x$, pas sa dérivée.
::

::qcm-question{label="4." bonne="a" cours="qcm-fvr-produit"}
Pour deux fonctions dérivables $u$ et $v$, $(uv)'$ vaut :

#a
$u'v+uv'$

#b
$u'v'$

#c
$u'v-uv'$

#d
$\dfrac{u'}{v'}$

#indice
La dérivée d'un produit n'est **pas** le produit des dérivées. Pour t'en convaincre, teste $u = v = x$ : le produit vaut $x^2$, de dérivée $2x$.

#solution
$$
\boxed{(uv)' = u'v+uv'}
$$

**Le contre-exemple qui élimine b** : avec $u = v = x$, on a $uv = x^2$ donc $(uv)' = 2x$. La formule donne $1\times x+x\times 1 = 2x$ ✓, tandis que $u'v' = 1\times 1 = 1$ ✗.

⚠️ La proposition **c**, avec un signe moins, est le **numérateur du quotient** : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$. Les intervertir est l'erreur la plus fréquente du chapitre.

**Le moyen de ne jamais les confondre** : le produit est **symétrique** en $u$ et $v$, donc sa formule doit l'être aussi — d'où le $+$. Le quotient ne l'est pas, d'où le $-$.
::

::qcm-question{label="5." bonne="c" cours="qcm-fvr-produit"}
Pour $v$ ne s'annulant pas, $\left(\dfrac{u}{v}\right)'$ vaut :

#a
$\dfrac{u'v+uv'}{v^2}$

#b
$\dfrac{u'}{v'}$

#c
$\dfrac{u'v-uv'}{v^2}$

#d
$\dfrac{uv'-u'v}{v^2}$

#indice
Le numérateur ressemble à celui du produit, mais avec un signe moins — et **l'ordre des termes compte** : c'est $u'v$ qui vient en premier.

#solution
$$
\boxed{\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}}
$$

**L'ordre n'est pas négociable** : la proposition **d** est l'opposé du bon résultat. Le moyen mnémotechnique : le numérateur commence par $u'$, comme la formule du produit.

**Le contrôle** : avec $u = 1$ et $v = x$, on doit retrouver la dérivée de $\dfrac1x$ :

$$
\frac{0\times x-1\times 1}{x^2} = -\frac{1}{x^2} \quad ✓
$$

La proposition **d** aurait donné $+\dfrac{1}{x^2}$, ce qui contredit la décroissance de la fonction inverse.
::

::qcm-question{label="6." bonne="b" cours="qcm-fvr-composees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = (3x+1)^5$ a pour dérivée :

#a
$f'(x) = 5(3x+1)^4$

#b
$f'(x) = 15(3x+1)^4$

#c
$f'(x) = 5(3x+1)^6$

#d
$f'(x) = 3(3x+1)^4$

#indice
C'est une puissance de fonction : $\left(u^n\right)' = n\,u'\,u^{n-1}$.

Trois choses doivent apparaître : l'exposant qui descend, l'exposant diminué de $1$, **et** la dérivée de l'intérieur.

#solution
Avec $u = 3x+1$, $u' = 3$ et $n = 5$ :

$$
\left((3x+1)^5\right)' = 5\times 3\times(3x+1)^4 = 15(3x+1)^4
$$

**Les trois distracteurs sont trois oublis distincts :**

- **a** oublie $u' = 3$ — l'erreur numéro un des formes composées ;
- **c** fait **monter** l'exposant au lieu de le faire descendre ;
- **d** garde $u'$ mais perd le $5$.

**Le contrôle sur un cas simple** : si l'on développait $(3x+1)^5$, le terme dominant serait $3^5x^5 = 243x^5$, de dérivée $1215x^4$. Et $15\times 3^4 = 15\times 81 = 1215$ ✓.
::

::qcm-question{label="7." bonne="a" cours="qcm-fvr-composees"}
La fonction $f$ définie sur $\mathbb{R}\setminus\{2\}$ par $f(x) = \dfrac{1}{2-x}$ a pour dérivée :

#a
$f'(x) = \dfrac{1}{(2-x)^2}$

#b
$f'(x) = -\dfrac{1}{(2-x)^2}$

#c
$f'(x) = \dfrac{1}{(2-x)}$

#d
$f'(x) = -\dfrac{1}{2-x^2}$

#indice
$\left(\dfrac1u\right)' = -\dfrac{u'}{u^2}$. Ici $u = 2-x$, donc $u' = -1$ — et **pas** $+1$.

Deux signes moins vont se rencontrer.

#solution
Avec $u = 2-x$ et $u' = -1$ :

$$
\left(\frac{1}{2-x}\right)' = -\frac{u'}{u^2} = -\frac{-1}{(2-x)^2} = \frac{1}{(2-x)^2}
$$

Les deux signes moins se compensent : la dérivée est **positive**.

⚠️ **C'est la source d'erreurs numéro un du chapitre.** Un dénominateur de la forme $a-x$ a pour dérivée $-1$, ce qui inverse le signe attendu. Beaucoup répondent **b** par automatisme.

**Le contrôle de bon sens** : sur $]-\infty\,;2[$, quand $x$ augmente, $2-x$ diminue en restant positif, donc son inverse **augmente**. La fonction est croissante, sa dérivée est bien positive.
::

::qcm-question{label="8." bonne="c" cours="qcm-fvr-produit"}
La fonction $f$ définie sur $\mathbb{R}\setminus\{1\}$ par $f(x) = \dfrac{x^2+1}{x-1}$ a pour dérivée :

#a
$f'(x) = \dfrac{2x}{1}$

#b
$f'(x) = \dfrac{x^2-2x+1}{(x-1)^2}$

#c
$f'(x) = \dfrac{x^2-2x-1}{(x-1)^2}$

#d
$f'(x) = \dfrac{x^2+2x-1}{(x-1)^2}$

#indice
Formule du quotient, avec $u = x^2+1$, $u' = 2x$, $v = x-1$, $v' = 1$.

Le piège est au développement : $-\left(x^2+1\right)$ change le signe des **deux** termes.

#solution
$$
\left(\frac{x^2+1}{x-1}\right)' = \frac{2x(x-1)-\left(x^2+1\right)\times 1}{(x-1)^2}
$$

On développe le numérateur en distribuant bien le signe moins :

$$
2x^2-2x-x^2-1 = x^2-2x-1
$$

$$
\boxed{f'(x) = \frac{x^2-2x-1}{(x-1)^2}}
$$

Le distracteur **b** correspond à l'oubli du signe sur le $+1$ : on écrit $-x^2+1$ au lieu de $-x^2-1$. Le remède est d'écrire la parenthèse **avant** de développer, jamais de tête.
::

::qcm-question{label="9." bonne="b" cours="qcm-fvr-composees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \sqrt{x^2+1}$ a pour dérivée :

#a
$f'(x) = \dfrac{1}{2\sqrt{x^2+1}}$

#b
$f'(x) = \dfrac{x}{\sqrt{x^2+1}}$

#c
$f'(x) = \dfrac{2x}{\sqrt{x^2+1}}$

#d
$f'(x) = 2x\sqrt{x^2+1}$

#indice
$\left(\sqrt u\right)' = \dfrac{u'}{2\sqrt u}$. Ici $u = x^2+1$, donc $u' = 2x$ — et le $2$ va se simplifier avec celui du dénominateur.

#solution
$$
\left(\sqrt{x^2+1}\right)' = \frac{u'}{2\sqrt u} = \frac{2x}{2\sqrt{x^2+1}} = \frac{x}{\sqrt{x^2+1}}
$$

**La simplification du $2$ est le point à ne pas manquer** : c'est ce qui distingue **b** de **c**.

Le distracteur **a** oublie complètement $u'$ : c'est la dérivée de $\sqrt x$ où l'on aurait juste remplacé $x$ par $x^2+1$ à l'intérieur, sans dériver l'intérieur.

⚠️ Ici $x^2+1 > 0$ toujours, donc la fonction est dérivable sur $\mathbb{R}$ entier. Ce n'est pas le cas général : $\sqrt u$ n'est dérivable que là où $u > 0$ **strictement**.
::

::qcm-question{label="10." bonne="c" cours="qcm-fvr-composees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = e^{-x^2}$ a pour dérivée :

#a
$f'(x) = e^{-x^2}$

#b
$f'(x) = -e^{-x^2}$

#c
$f'(x) = -2x\,e^{-x^2}$

#d
$f'(x) = -2x\,e^{-2x}$

#indice
$\left(e^u\right)' = u'e^u$ : l'exponentielle **se reproduit**, et la dérivée de l'exposant sort en facteur.

Ici $u = -x^2$. Que vaut $u'$ ?

#solution
Avec $u = -x^2$, donc $u' = -2x$ :

$$
\left(e^{-x^2}\right)' = -2x\,e^{-x^2}
$$

**Ce qui ne change jamais** : l'exponentielle reste **identique à elle-même**, exposant compris. Le distracteur **d** modifie l'exposant, ce qui n'arrive jamais en dérivant.

**Le contrôle de bon sens** : $e^{-x^2}$ est la courbe en cloche, maximale en $0$. Sa dérivée doit donc s'annuler en $x = 0$ et changer de signe — ce que fait $-2x\,e^{-x^2}$, et pas $-e^{-x^2}$ qui reste strictement négative.
::

::qcm-question{label="11." bonne="a" cours="qcm-fvr-composees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \ln\left(3x^2+2\right)$ a pour dérivée :

#a
$f'(x) = \dfrac{6x}{3x^2+2}$

#b
$f'(x) = \dfrac{1}{3x^2+2}$

#c
$f'(x) = \dfrac{6x}{\ln(3x^2+2)}$

#d
$f'(x) = 6x\ln\left(3x^2+2\right)$

#indice
$\left(\ln u\right)' = \dfrac{u'}{u}$ : la fonction passe au **dénominateur**, sa dérivée au numérateur. Le logarithme disparaît complètement du résultat.

#solution
Avec $u = 3x^2+2$, donc $u' = 6x$ :

$$
\left(\ln\left(3x^2+2\right)\right)' = \frac{6x}{3x^2+2}
$$

**Le repère qui évite deux distracteurs sur trois** : dériver un logarithme **fait disparaître le logarithme**. Toute réponse contenant encore un $\ln$ est fausse, ce qui élimine **c** et **d** sans calcul.

Le distracteur **b** oublie $u'$ au numérateur.

Ici $3x^2+2 > 0$ toujours : la fonction est définie et dérivable sur $\mathbb{R}$ entier.
::

::qcm-question{label="12." bonne="b" cours="qcm-fvr-produit"}
La fonction $f$ définie sur $]0\,;+\infty[$ par $f(x) = x\ln x$ a pour dérivée :

#a
$f'(x) = 1$

#b
$f'(x) = \ln x+1$

#c
$f'(x) = \dfrac1x$

#d
$f'(x) = \ln x+x$

#indice
C'est un **produit** : $u = x$ et $v = \ln x$. Applique $(uv)' = u'v+uv'$, et surveille la simplification du second terme.

#solution
Avec $u = x$, $u' = 1$, $v = \ln x$, $v' = \dfrac1x$ :

$$
(x\ln x)' = 1\times\ln x+x\times\frac1x = \ln x+1
$$

**Le second terme se simplifie complètement** : $x\times\dfrac1x = 1$. C'est ce qui distingue **b** de **d**, où l'on aurait oublié de multiplier par $\dfrac1x$.

Le distracteur **a** est l'erreur $(uv)' = u'v'$.

**Une conséquence utile** : $x\ln x$ a pour dérivée $\ln x+1$, qui s'annule en $x = e^{-1}$. C'est là que se trouve le minimum de la fonction, un résultat qui revient dans les études de fonction.
::

::qcm-question{label="13." bonne="b" cours="qcm-fvr-domaine"}
La fonction $x\mapsto\sqrt x$ en $x = 0$ :

#a
n'est ni définie ni dérivable

#b
est définie mais pas dérivable

#c
est définie et dérivable

#d
est dérivable mais pas définie

#indice
$\sqrt0$ existe-t-il ? Et que devient $\dfrac{1}{2\sqrt x}$ quand $x$ tend vers $0$ ?

Une fonction peut parfaitement être définie en un point sans y être dérivable : c'est le cas d'une courbe à tangente verticale.

#solution
$\sqrt0 = 0$ : la fonction est bien **définie** en $0$, son domaine de définition est $[0\,;+\infty[$.

En revanche

$$
\lim_{x\to 0^+}\frac{1}{2\sqrt x} = +\infty
$$

La dérivée n'a pas de limite finie : la fonction n'est **pas dérivable** en $0$. Géométriquement, la courbe y admet une **tangente verticale**.

$$
\text{Définie sur } [0\,;+\infty[ \qquad \text{Dérivable sur } ]0\,;+\infty[
$$

⚠️ La proposition **d** est impossible : la dérivabilité en un point suppose que la fonction y soit définie.

C'est le contre-exemple à retenir pour la question suivante.
::

::qcm-question{label="14." bonne="a" cours="qcm-fvr-continuite"}
Parmi ces affirmations, laquelle est **vraie** ?

#a
Toute fonction dérivable en $a$ est continue en $a$.

#b
Toute fonction continue en $a$ est dérivable en $a$.

#c
Continuité et dérivabilité sont équivalentes.

#d
Une fonction dérivable peut être discontinue.

#indice
L'implication ne marche que dans **un** sens. Pour trouver lequel, cherche une fonction continue partout mais qui casse quelque part : la valeur absolue, par exemple.

#solution
$$
\boxed{\text{dérivable en } a \Longrightarrow \text{continue en } a}
$$

**La réciproque est fausse**, et deux contre-exemples suffisent à s'en souvenir :

- $x\mapsto\lvert x\rvert$ est continue en $0$ mais pas dérivable : la courbe y forme un **angle**, et les taux d'accroissement à gauche et à droite valent $-1$ et $+1$ ;
- $x\mapsto\sqrt x$ est continue en $0$ mais pas dérivable : **tangente verticale**, comme à la question précédente.

**L'image à garder** : dérivable signifie « lisse, sans angle ni tangente verticale », ce qui est plus exigeant que « d'un seul tenant ».

La proposition **d** est la contraposée de la bonne réponse, donc fausse.
::

::qcm-question{label="15." bonne="c" cours="qcm-fvr-domaine"}
L'ensemble sur lequel $x\mapsto\ln(x-1)$ est dérivable est :

#a
$\mathbb{R}$

#b
$\mathbb{R}\setminus\{1\}$

#c
$]1\,;+\infty[$

#d
$[1\,;+\infty[$

#indice
Le logarithme n'existe que pour un argument **strictement positif**. Il ne s'agit donc pas seulement d'éviter l'annulation d'un dénominateur : c'est une condition plus forte.

#solution
$\ln u$ n'est défini que pour $u > 0$ :

$$
x-1 > 0 \iff x > 1
$$

$$
\boxed{\text{Défini et dérivable sur } ]1\,;+\infty[}
$$

⚠️ **Les deux erreurs que guettent les distracteurs :**

- **b** traite la condition comme celle d'un quotient — « il suffit que $x-1$ ne s'annule pas » —, ce qui laisserait passer $x = 0$ où $\ln(-1)$ n'existe pas ;
- **d** ferme le crochet en $1$, alors que $\ln 0$ n'existe pas non plus.

Pour un logarithme, l'inégalité est **stricte**, et le crochet toujours ouvert.
::

::qcm-question{label="16." bonne="b" cours="qcm-fvr-continuite"}
Pour appliquer le théorème des valeurs intermédiaires à $f$ sur $[a\,;b]$, il faut que $f$ soit :

#a
dérivable sur $[a\,;b]$

#b
continue sur $[a\,;b]$

#c
croissante sur $[a\,;b]$

#d
positive sur $[a\,;b]$

#indice
Le TVI dit qu'une courbe « d'un seul tenant » ne peut pas passer d'un côté à l'autre d'une valeur sans la traverser. Quelle propriété exprime exactement ce « d'un seul tenant » ?

Attention : ce qui est exigé et ce qui est utile en plus sont deux choses différentes.

#solution
Le TVI n'exige que la **continuité** :

> Si $f$ est continue sur $[a\,;b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, alors il existe au moins un $c\in[a\,;b]$ tel que $f(c) = k$.

**Ce que le TVI ne donne pas, c'est l'unicité.** Pour obtenir « une solution **et une seule** », on ajoute la **stricte monotonie** — que l'on établit en général grâce au signe de la dérivée.

D'où la démarche complète, celle des exercices :

1. **continuité** sur l'intervalle → il existe au moins une solution ;
2. **stricte monotonie** → il en existe au plus une ;
3. conclusion : exactement une.

La dérivabilité (proposition **a**) sert donc à l'étape 2, mais n'est pas requise par le théorème lui-même.
::

::qcm-question{label="17." bonne="a" cours="qcm-fvr-composees"}
Pour $u$ dérivable et $n$ entier, $\left(u^n\right)'$ vaut :

#a
$n\,u'\,u^{n-1}$

#b
$n\,u^{n-1}$

#c
$\left(u'\right)^n$

#d
$n\,u'\,u^{n+1}$

#indice
C'est la règle des puissances, mais appliquée à une **fonction** et non à $x$ : il faut donc un facteur de plus que dans $\left(x^n\right)' = nx^{n-1}$.

#solution
$$
\boxed{\left(u^n\right)' = n\,u'\,u^{n-1}}
$$

**La proposition b est le piège central des formes composées** : c'est la formule pour $x^n$, où $u' = 1$ disparaît. Dès que l'intérieur n'est plus simplement $x$, il faut le dériver aussi.

**Le mécanisme, une fois pour toutes.** Toutes les formes composées suivent le même schéma : la dérivée de l'intérieur **sort en facteur**.

$$
\left(u^n\right)' = n u'u^{n-1} \qquad \left(\sqrt u\right)' = \frac{u'}{2\sqrt u} \qquad \left(e^u\right)' = u'e^u \qquad \left(\ln u\right)' = \frac{u'}{u}
$$

$$
\left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u \qquad \left(\frac1u\right)' = -\frac{u'}{u^2}
$$

Une seule idée, sept écritures.
::

::qcm-question{label="18." bonne="b" cours="qcm-fvr-produit"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = x\sin x$ a pour dérivée :

#a
$f'(x) = \cos x$

#b
$f'(x) = \sin x+x\cos x$

#c
$f'(x) = x\cos x$

#d
$f'(x) = \sin x-x\cos x$

#indice
Produit, avec $u = x$ et $v = \sin x$. Les deux termes de la formule apportent chacun quelque chose : ni l'un ni l'autre ne disparaît.

#solution
Avec $u = x$, $u' = 1$, $v = \sin x$, $v' = \cos x$ :

$$
(x\sin x)' = 1\times\sin x+x\times\cos x = \sin x+x\cos x
$$

**Les distracteurs :** **a** et **c** ne gardent qu'un seul des deux termes — l'erreur $(uv)' = u'v'$ ou l'oubli pur et simple. Le **d** met un signe moins, confondant avec la dérivée du cosinus.

⚠️ Ici le signe moins n'a rien à faire : c'est $\cos' = -\sin$ qui en porte un, pas $\sin' = \cos$.
::

::qcm-question{label="19." bonne="c" cours="qcm-fvr-composees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \dfrac{1}{x^2+x+1}$ a pour dérivée :

#a
$f'(x) = \dfrac{2x+1}{\left(x^2+x+1\right)^2}$

#b
$f'(x) = -\dfrac{1}{\left(x^2+x+1\right)^2}$

#c
$f'(x) = -\dfrac{2x+1}{\left(x^2+x+1\right)^2}$

#d
$f'(x) = -\dfrac{2x+1}{x^2+x+1}$

#indice
$\left(\dfrac1u\right)' = -\dfrac{u'}{u^2}$. Trois choses doivent apparaître : le signe moins, la dérivée de $u$ au numérateur, et $u$ **au carré** au dénominateur.

#solution
Avec $u = x^2+x+1$ et $u' = 2x+1$ :

$$
\left(\frac{1}{x^2+x+1}\right)' = -\frac{2x+1}{\left(x^2+x+1\right)^2}
$$

**Chaque distracteur oublie un des trois éléments** : **a** le signe moins, **b** la dérivée $u'$, **d** le carré au dénominateur.

**Pourquoi la fonction est définie sur $\mathbb{R}$ entier** : le discriminant de $x^2+x+1$ vaut $1-4 = -3 < 0$, donc le trinôme ne s'annule jamais et garde le signe de son coefficient dominant, positif. C'est le réflexe à avoir devant un trinôme au dénominateur.
::

::qcm-question{label="20." bonne="a" cours="qcm-fvr-bijection"}
Si $f$ est une bijection dérivable et si $f^{-1}$ est sa réciproque, alors $\left(f^{-1}\right)'(x)$ vaut :

#a
$\dfrac{1}{f'\left(f^{-1}(x)\right)}$

#b
$\dfrac{1}{f'(x)}$

#c
$-\dfrac{1}{f'(x)}$

#d
$f'\left(f^{-1}(x)\right)$

#indice
Pars de l'égalité de définition $f\left(f^{-1}(x)\right) = x$ et dérive les deux membres, en traitant le membre de gauche comme une **composée**.

Attention à l'endroit où $f'$ est évaluée : ce n'est pas en $x$.

#solution
On dérive $f\left(f^{-1}(x)\right) = x$ en traitant la gauche comme une composée :

$$
\left(f^{-1}\right)'(x)\times f'\left(f^{-1}(x)\right) = 1
$$

$$
\boxed{\left(f^{-1}\right)'(x) = \frac{1}{f'\left(f^{-1}(x)\right)}}
$$

**Le point qui distingue a de b** : $f'$ n'est pas évaluée en $x$, mais en $f^{-1}(x)$ — le point de départ correspondant. C'est logique : la tangente à la courbe réciproque en $x$ est la symétrique de la tangente à la courbe directe au point **antécédent**.

**C'est la méthode qui établit toutes les dérivées de réciproques du programme.** Sur $\arcsin$, par exemple : $\sin(\arcsin x) = x$ donne $\arcsin'(x) = \dfrac{1}{\cos(\arcsin x)} = \dfrac{1}{\sqrt{1-x^2}}$, le signe positif de la racine étant justifié par $\arcsin x\in\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, où le cosinus est positif.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées.

::extrait-cours{id="qcm-fvr-tableau" titre="Le tableau des dérivées usuelles" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
**Dériver une somme, c'est dériver terme à terme** :

$$
(u+v)' = u'+v' \qquad (k\,u)' = k\,u' \qquad (k)' = 0
$$

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x^\alpha$ (tout $\alpha$) | $\alpha x^{\alpha-1}$ |
| $\dfrac{1}{x} = x^{-1}$ | $-\dfrac{1}{x^2}$ |
| $\sqrt{x} = x^{1/2}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $e^x$ | $e^x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |

**Une seule ligne est vraiment à retenir** : celle de $x^\alpha$. Les lignes des inverses et des racines s'en déduisent en réécrivant en puissance.

**Le premier réflexe, avant toute formule : l'écriture se simplifie-t-elle ?**

$$
\frac{4}{x^3} = 4x^{-3} \qquad \frac{1}{\sqrt x} = x^{-1/2} \qquad x\sqrt x = x^{3/2} \qquad \frac{x+1}{\sqrt x} = \sqrt x+\frac{1}{\sqrt x}
$$

Une minute de réécriture épargne souvent tout le calcul.
::

::extrait-cours{id="qcm-fvr-produit" titre="Produit et quotient" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
$$
(uv)' = u'v+uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

⚠️ **Le produit a un plus, le quotient un moins**, et dans le quotient **l'ordre compte** : $u'v$ en premier. Écrire $uv'-u'v$ donne l'opposé.

**Le moyen de ne jamais les confondre** : le produit est symétrique en $u$ et $v$, sa formule doit l'être aussi — d'où le $+$. Le quotient ne l'est pas, d'où le $-$.

**La méthode, à chaque fois** : poser $u$ et $v$, calculer $u'$ et $v'$ **à part**, puis remplacer. Écrire la formule de tête est la meilleure façon de perdre un signe.

⚠️ Au développement du numérateur, la parenthèse $-\left(\ldots\right)$ change le signe de **tous** ses termes. C'est l'erreur la plus fréquente sur les quotients de trinômes.

**Avant de dériver un quotient, une question** : le numérateur ressemble-t-il au dénominateur ? Si oui, une division épargne toute la formule.

$$
\frac{x^2+3}{x^2+1} = 1+\frac{2}{x^2+1}
$$
::

::extrait-cours{id="qcm-fvr-composees" titre="Les formes composées" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
**Une seule idée, déclinée sept fois : la dérivée de l'intérieur sort en facteur.**

$$
\left(u^n\right)' = n\,u'\,u^{n-1} \qquad \left(\sqrt u\right)' = \frac{u'}{2\sqrt u} \qquad \left(\frac1u\right)' = -\frac{u'}{u^2}
$$

$$
\left(e^u\right)' = u'\,e^u \qquad \left(\ln u\right)' = \frac{u'}{u} \qquad \left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u
$$

⚠️ **L'oubli de $u'$ est l'erreur numéro un du chapitre.** Le réflexe : après avoir écrit la formule, se demander « ai-je dérivé l'intérieur ? ».

⚠️ **Le piège du dénominateur $a-x$**, source d'erreurs numéro deux : sa dérivée vaut $-1$, ce qui fait basculer tous les signes.

$$
\left(\frac{1}{2-x}\right)' = -\frac{-1}{(2-x)^2} = +\frac{1}{(2-x)^2}
$$

**Deux repères de contrôle :**

- dériver un logarithme **fait disparaître le logarithme** — toute réponse contenant encore un $\ln$ est fausse ;
- dériver une exponentielle **la laisse identique**, exposant compris — seul un facteur apparaît devant.
::

::extrait-cours{id="qcm-fvr-domaine" titre="Où une fonction est-elle dérivable ?" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_6-où-une-fonction-est-elle-dérivable"}
Trois conditions à passer en revue, dans cet ordre :

| Forme | Condition |
|---|---|
| quotient $\dfrac{u}{v}$ | $v \neq 0$ |
| racine $\sqrt u$ | $u > 0$ pour **dériver** ($u\geqslant 0$ suffit pour définir) |
| logarithme $\ln u$ | $u > 0$ **strictement** |

⚠️ **Ne pas confondre les conditions.** Un quotient demande seulement que le dénominateur ne s'annule pas ; un logarithme demande la **positivité stricte**, ce qui est bien plus fort.

⚠️ **Définie n'est pas dérivable.** $\sqrt x$ est définie sur $[0\,;+\infty[$ mais dérivable seulement sur $]0\,;+\infty[$ : en $0$, la dérivée $\dfrac{1}{2\sqrt x}$ tend vers $+\infty$, la courbe y a une tangente verticale. Le crochet se ferme pour le domaine de définition et s'ouvre pour celui de dérivabilité.

**Devant un trinôme au dénominateur**, le réflexe est le discriminant. Si $\Delta < 0$, le trinôme ne s'annule jamais et la fonction est définie sur $\mathbb{R}$ entier — c'est le cas de $x^2+x+1$, dont $\Delta = -3$.
::

::extrait-cours{id="qcm-fvr-continuite" titre="Continuité et théorème des valeurs intermédiaires" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_2-théorème-des-valeurs-intermédiaires"}
**Le lien entre les deux notions, dans un seul sens :**

$$
\text{dérivable en } a \Longrightarrow \text{continue en } a
$$

⚠️ **La réciproque est fausse.** Deux contre-exemples à retenir : $\lvert x\rvert$ en $0$ (un **angle**, taux d'accroissement $-1$ à gauche et $+1$ à droite) et $\sqrt x$ en $0$ (une **tangente verticale**). Les deux sont continues sans être dérivables.

**Le TVI** n'exige que la continuité :

> $f$ continue sur $[a\,;b]$ et $k$ compris entre $f(a)$ et $f(b)$ $\Longrightarrow$ il existe au moins un $c\in[a\,;b]$ tel que $f(c) = k$.

**Il donne l'existence, jamais l'unicité.** Pour conclure à « une solution et une seule », la démarche est en deux temps :

1. **continuité** → au moins une solution ;
2. **stricte monotonie**, établie par le signe de la dérivée → au plus une.

En pratique, on dresse le tableau de variations : il fournit les deux arguments d'un coup, et permet de lire directement dans quel intervalle se trouve la solution.
::

::extrait-cours{id="qcm-fvr-bijection" titre="Bijections et dérivée d'une réciproque" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_7-bijections"}
Une fonction **continue et strictement monotone** sur un intervalle réalise une bijection de cet intervalle sur son image. Elle admet donc une réciproque $f^{-1}$, définie par

$$
f\left(f^{-1}(x)\right) = x \qquad\text{et}\qquad f^{-1}\left(f(x)\right) = x
$$

**La dérivée de la réciproque** s'obtient en dérivant la première égalité comme une composée :

$$
\left(f^{-1}\right)'(x)\times f'\left(f^{-1}(x)\right) = 1 \quad\Longrightarrow\quad \boxed{\left(f^{-1}\right)'(x) = \frac{1}{f'\left(f^{-1}(x)\right)}}
$$

⚠️ $f'$ est évaluée en $f^{-1}(x)$, **pas en $x$**. Géométriquement, la courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport à la droite $y = x$ : la tangente en $x$ correspond à la tangente au point **antécédent**.

**C'est la méthode qui produit toutes les dérivées de réciproques du programme** — arcsin, arccos, arctan, argsh, argch, argth. La seule étape qui demande une vraie rédaction est la dernière : éliminer la composée à l'aide de l'identité fondamentale ($\cos^2+\sin^2 = 1$, ou $\mathrm{ch}^2-\mathrm{sh}^2 = 1$), et **justifier le signe de la racine** par l'intervalle d'arrivée.
::
