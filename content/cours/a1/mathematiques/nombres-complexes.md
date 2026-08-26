---
title: Nombres complexes
description: Forme algébrique, équations du second degré dans C, affixes et forme exponentielle. Quatre exercices avec indices et solutions détaillées.
interactif: true
annee: A1
matiere: Mathématiques
ordre: 3
icone: i-lucide-git-compare-arrows
---

::rappel{titre="La boîte à outils du cours"}
- **Opérations** : on calcule avec $i$ comme avec une variable algébrique, en remplaçant $i^2$ par $-1$.
- **Conjugué** : $\overline{a+bi} = a-bi$, avec la propriété clé $z\bar{z} = a^2+b^2$ — un réel.
- **Quotients** : pour mettre $\dfrac{z_1}{z_2}$ sous forme algébrique, **multiplier numérateur et dénominateur par le conjugué du dénominateur**.
- **Second degré** : $\Delta = b^2-4ac$ ; si $\Delta < 0$, deux racines complexes conjuguées $z = \dfrac{-b \pm i\sqrt{-\Delta}}{2a}$.
- **Affixes** : au point $M(x,y)$ — ou au vecteur $\vec{w}(x,y)$ — on associe $z = x+yi$.
- **Module et argument** : $\lvert z \rvert = \sqrt{x^2+y^2}$, puis $\cos\theta = \dfrac{x}{\lvert z \rvert}$ et $\sin\theta = \dfrac{y}{\lvert z \rvert}$.
- **Milieu** : $z_M = \dfrac{z_A+z_B}{2}$. **Distance** : $AB = \lvert z_B-z_A \rvert$.
- **Forme exponentielle** : $z = re^{i\theta}$ avec $r = \lvert z \rvert > 0$.
::

:::fiche{titre="Fiche de révision — Nombres complexes" resume="Le cours en condensé, plus un exemple entièrement traité pour chaque type de question des exercices. Les exemples utilisent d'autres nombres que les énoncés : ils montrent la méthode sans livrer la réponse."}
### 1. La forme algébrique

On admet l'existence d'un nombre $i$ tel que $i^2 = -1$. Tout nombre complexe s'écrit alors de façon unique

$$z = a+bi, \qquad a = \mathcal{R}e(z)\ \text{(partie réelle)}, \quad b = \mathcal{I}m(z)\ \text{(partie imaginaire)}$$

- $b = 0$ : $z$ est **réel** ; $a = 0$ : $z$ est **imaginaire pur**. On a donc $\mathbb{R}\subset\mathbb{C}$.
- **Égalité** : $z = z'$ si et seulement si les parties réelles **et** les parties imaginaires coïncident. Une égalité complexe vaut donc pour deux égalités réelles — c'est ce qui permet d'« identifier ».
- ⚠️ La partie imaginaire est un **réel** : $\mathcal{I}m(3-2i) = -2$, et non $-2i$.

::exemple{id="nc-identification" titre="Lire les parties réelle et imaginaire, identifier" pour="Le premier réflexe, utile dans tout l'exercice 1"}
$\mathcal{R}e(5-4i) = 5$ et $\mathcal{I}m(5-4i) = -4$ (un réel, sans le $i$).

$7 = 7+0i$ est réel ; $-6i = 0-6i$ est imaginaire pur.

**Identification.** Trouver les réels $x$ et $y$ tels que $x-1+(2y+3)i = 4-i$. On égalise partie réelle avec partie réelle, partie imaginaire avec partie imaginaire :

$$x-1 = 4 \quad\text{et}\quad 2y+3 = -1 \quad\Longrightarrow\quad x = 5,\quad y = -2$$
::

### 2. Les opérations

La règle du jeu tient en une phrase : **on calcule comme en algèbre ordinaire**, $i$ jouant le rôle d'une variable, et on remplace $i^2$ par $-1$ dès qu'il apparaît.

::exemple{id="nc-somme" titre="Somme et différence : composante par composante" pour="Exercice 1 a) — additionner deux complexes"}
On regroupe les parties réelles ensemble, les parties imaginaires ensemble, exactement comme pour des vecteurs :

$$(5-2i)+(-3+6i) = (5-3)+(-2+6)i = 2+4i$$

$$(5-2i)-(-3+6i) = (5+3)+(-2-6)i = 8-8i$$

Pour la différence, le piège classique est d'oublier de distribuer le signe moins sur **les deux** composantes du second nombre.
::

::exemple{id="nc-produit" titre="Produit : double distributivité, puis remplacement de i²" pour="Exercice 1 b) — multiplier deux complexes"}
On développe comme un produit de deux binômes, puis on remplace $i^2$ par $-1$ :

$$(3-i)(1+2i) = 3+6i-i-2i^2 = 3+5i-2\times(-1) = 3+5i+2 = 5+5i$$

Le terme $-2i^2$ **change de signe** en devenant $+2$ : c'est là que se joue tout le calcul. On termine toujours en regroupant sous la forme $a+bi$.
::

::exemple{id="nc-carre" titre="Carré d'un complexe : identité remarquable" pour="Exercice 1 c) — élever au carré"}
On applique $(a+b)^2 = a^2+2ab+b^2$ sans rien changer, puis $i^2 = -1$ :

$$(3-i)^2 = 3^2-2\times 3\times i+i^2 = 9-6i-1 = 8-6i$$

Deux carrés à connaître par cœur, ils reviennent sans cesse :

$$(1+i)^2 = 1+2i+i^2 = 2i \qquad (1-i)^2 = -2i$$

Et les puissances de $i$ tournent en boucle de quatre en quatre : $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. Par exemple $i^{2026} = i^{4\times 506+2} = i^2 = -1$.
::

**Le conjugué** de $z = a+bi$ est $\bar z = a-bi$ : on change le signe de la partie imaginaire. Sa propriété décisive :

$$z\bar z = a^2+b^2 \quad\text{— un réel positif}$$

Autres règles : $\overline{\bar z} = z$, $\overline{z_1+z_2} = \overline{z_1}+\overline{z_2}$, $\overline{z_1z_2} = \overline{z_1}\,\overline{z_2}$. Et deux caractérisations utiles : $z$ est réel $\iff z = \bar z$ ; $z$ est imaginaire pur $\iff z = -\bar z$.

::exemple{id="nc-conjugue" titre="Conjugué, et produit d'un complexe par son conjugué" pour="Exercice 1 d) — pourquoi le résultat est toujours réel"}
$$\overline{3-i} = 3+i \qquad \overline{7} = 7 \qquad \overline{-6i} = 6i$$

Le produit d'un complexe par son conjugué se calcule avec $(a-b)(a+b) = a^2-b^2$ :

$$(3-i)(3+i) = 3^2-i^2 = 9+1 = 10$$

**Le résultat est toujours un réel positif**, égal à $a^2+b^2$ — donc aussi à $\lvert z\rvert^2$. Aucun terme en $i$ ne peut subsister : s'il en reste un, il y a une erreur de signe quelque part.
::

::exemple{id="nc-quotient" titre="Quotient : multiplier par le conjugué du dénominateur" pour="Exercice 1 e) et f) — la méthode centrale du chapitre"}
Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. On multiplie donc **en haut et en bas** par le conjugué du dénominateur, ce qui rend celui-ci réel.

**Inverse.** Pour $\dfrac{1}{3-i}$, le conjugué du dénominateur est $3+i$ :

$$\frac{1}{3-i} = \frac{3+i}{(3-i)(3+i)} = \frac{3+i}{9+1} = \frac{3+i}{10} = \frac{3}{10}+\frac{1}{10}i$$

**Quotient général.** Pour $\dfrac{1+2i}{3-i}$, même conjugué :

$$\frac{1+2i}{3-i} = \frac{(1+2i)(3+i)}{10} = \frac{3+i+6i+2i^2}{10} = \frac{1+7i}{10} = \frac{1}{10}+\frac{7}{10}i$$

Deux raccourcis qui font gagner du temps : $\dfrac{1}{i} = -i$ (diviser par $i$, c'est multiplier par $-i$) et $\dfrac{1+i}{1-i} = i$.
::

### 3. Équation du second degré

Pour $az^2+bz+c = 0$ à coefficients **réels**, on calcule $\Delta = b^2-4ac$, et trois cas se présentent :

| Cas | Racines |
|---|---|
| $\Delta > 0$ | deux réelles, $x = \dfrac{-b\pm\sqrt{\Delta}}{2a}$ |
| $\Delta = 0$ | une racine double, $x = \dfrac{-b}{2a}$ |
| $\Delta < 0$ | deux complexes conjuguées, $z = \dfrac{-b\pm i\sqrt{-\Delta}}{2a}$ |

Le troisième cas est le seul vraiment nouveau : $-\Delta$ étant positif, il a une racine carrée ordinaire, et le $i$ prend en charge le signe. **Ne jamais écrire $\sqrt{-3}$** : on écrit $i\sqrt{3}$.

::exemple{id="nc-second-degre" titre="Résoudre une équation à discriminant négatif" pour="Exercice 2 — la seule équation du chapitre"}
Résolvons $z^2-2z+5 = 0$ dans $\mathbb{C}$. On identifie $a = 1$, $b = -2$, $c = 5$ :

$$\Delta = (-2)^2-4\times 1\times 5 = 4-20 = -16 < 0$$

Le discriminant est négatif : deux racines complexes conjuguées, avec $\sqrt{-\Delta} = \sqrt{16} = 4$ :

$$z = \frac{2\pm 4i}{2} = 1\pm 2i \qquad\text{donc}\qquad S = \{1-2i,\; 1+2i\}$$

**Vérification, toujours utile** : la somme des racines doit valoir $-\dfrac{b}{a} = 2$ — ici $(1-2i)+(1+2i) = 2$ ✓ — et leur produit $\dfrac{c}{a} = 5$ — ici $(1-2i)(1+2i) = 1+4 = 5$ ✓.
::

### 4. Points, vecteurs et affixes

Le plan muni d'un repère orthonormé $(O;\vec u,\vec v)$ devient une carte des complexes :

$$\text{point } M(x,y) \;\longleftrightarrow\; \text{affixe } z = x+yi \qquad \text{vecteur } \vec w(x,y) \;\longleftrightarrow\; z_{\vec w} = x+yi$$

- Axe horizontal = **axe réel**, axe vertical = **axe imaginaire**.
- **Vecteur** : $z_{\overrightarrow{AB}} = z_B-z_A$, extrémité moins origine.
- **Milieu** de $[AB]$ : $z_M = \dfrac{z_A+z_B}{2}$, une simple moyenne.
- **Distance** : $AB = \lvert z_B-z_A\rvert$.
- $\bar z$ est le symétrique de $z$ par rapport à l'axe réel ; $-z$ le symétrique par rapport à $O$.

::exemple{id="nc-affixe" titre="Du point à son affixe, et les deux cas particuliers" pour="Exercice 3 a) — lire des affixes sur une figure"}
La lecture est directe : l'abscisse devient la partie réelle, l'ordonnée la partie imaginaire.

$$P(-3,\,2)\;\longrightarrow\; z_P = -3+2i \qquad Q(1,\,-4)\;\longrightarrow\; z_Q = 1-4i$$

Les deux cas où l'on se trompe :

- un point de l'**axe des abscisses**, comme $R(5,0)$, a pour affixe le **réel** $z_R = 5$ ;
- un point de l'**axe des ordonnées**, comme $S(0,-2)$, a pour affixe l'**imaginaire pur** $z_S = -2i$.
::

::exemple{id="nc-vecteur" titre="Affixe d'un vecteur, et distance entre deux points" pour="Exercice 3 b) — extrémité moins origine"}
Avec $A$ d'affixe $1+i$ et $B$ d'affixe $4+5i$ :

$$z_{\overrightarrow{AB}} = z_B-z_A = (4+5i)-(1+i) = 3+4i$$

Le vecteur a donc pour coordonnées $(3,4)$ : on avance de $3$ et on monte de $4$, ce qu'on peut relire sur la figure. La longueur suit :

$$AB = \lvert 3+4i\rvert = \sqrt{9+16} = 5$$

**Le sens compte** : $z_{\overrightarrow{BA}} = -3-4i$, l'opposé. Écrire $z_A-z_B$ par distraction donne le vecteur inverse.
::

::exemple{id="nc-milieu" titre="Affixe du milieu d'un segment" pour="Exercice 3 c) — la moyenne des deux affixes"}
Toujours avec $A$ d'affixe $1+i$ et $B$ d'affixe $4+5i$ :

$$z_M = \frac{z_A+z_B}{2} = \frac{(1+i)+(4+5i)}{2} = \frac{5+6i}{2} = \frac{5}{2}+3i$$

Le milieu a donc pour coordonnées $\left(\dfrac{5}{2},\,3\right)$. Il faut diviser **les deux** parties par $2$ : n'en diviser qu'une est l'erreur habituelle.
::

### 5. Module et argument

Pour $z = x+yi$ non nul, vu comme le point $M$ :

- **Module** : $\lvert z\rvert = OM = \sqrt{x^2+y^2}$, une longueur, donc toujours positive.
- **Argument** : $\arg(z)$ est l'angle $(\vec u,\overrightarrow{OM})$, défini à $2k\pi$ près, noté $\theta\,[2\pi]$.

$$\lvert z_1z_2\rvert = \lvert z_1\rvert\lvert z_2\rvert \qquad \left\lvert\frac{z_1}{z_2}\right\rvert = \frac{\lvert z_1\rvert}{\lvert z_2\rvert} \qquad \lvert\bar z\rvert = \lvert z\rvert \qquad z\bar z = \lvert z\rvert^2$$

**La méthode du cours pour l'argument** : calculer **les deux** rapports

$$\cos\theta = \frac{x}{\lvert z\rvert} \qquad \sin\theta = \frac{y}{\lvert z\rvert}$$

puis reconnaître un angle remarquable. Les deux sont nécessaires : le cosinus seul laisse toujours deux angles possibles, c'est le signe du sinus qui tranche.

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |

::exemple{id="nc-module-argument" titre="Calculer un module, puis un argument" pour="Exercice 4 — les deux premières étapes de la forme exponentielle"}
Prenons $z = -1+i\sqrt{3}$.

**Module.** Avec $x = -1$ et $y = \sqrt3$ :

$$\lvert z\rvert = \sqrt{(-1)^2+(\sqrt3)^2} = \sqrt{1+3} = 2$$

**Argument.** On calcule les deux rapports :

$$\cos\theta = \frac{-1}{2} \qquad \sin\theta = \frac{\sqrt3}{2}$$

Cosinus négatif et sinus positif : l'angle est dans le deuxième quadrant, et l'angle remarquable qui convient est

$$\theta = \frac{2\pi}{3}\quad[2\pi]$$

Si l'on n'avait regardé que $\cos\theta = -\dfrac12$, on aurait hésité entre $\dfrac{2\pi}{3}$ et $-\dfrac{2\pi}{3}$ : c'est bien le sinus qui décide.

**Quand le rapport ne se lit pas directement.** Par exemple $\dfrac{2}{2\sqrt2}$ : on multiplie haut et bas par $\sqrt2$, ce qui donne $\dfrac{2\sqrt2}{4} = \dfrac{\sqrt2}{2}$, cette fois reconnaissable dans le tableau.
::

### 6. Forme exponentielle

En notant $\cos\theta+i\sin\theta = e^{i\theta}$, tout complexe non nul s'écrit

$$z = re^{i\theta} \qquad (r = \lvert z\rvert > 0,\ \theta = \arg z)$$

Elle hérite des règles de l'exponentielle, ce qui la rend imbattable pour les produits, quotients et puissances :

$$re^{i\theta}\times r'e^{i\theta'} = rr'e^{i(\theta+\theta')} \qquad \frac{1}{re^{i\theta}} = \frac1r e^{-i\theta} \qquad \left(re^{i\theta}\right)^n = r^ne^{in\theta}$$

À connaître : $e^{i0} = 1$, $e^{i\pi/2} = i$, $e^{i\pi} = -1$, $e^{-i\pi/2} = -i$. Et la règle de choix : **forme algébrique pour les sommes, forme exponentielle pour les produits et les puissances**.

::exemple{id="nc-exponentielle" titre="Écrire un complexe sous forme exponentielle, et s'en servir" pour="Exercice 4 — la troisième étape, puis l'intérêt de cette forme"}
Reprenons $z = 1+i$. Module : $\lvert z\rvert = \sqrt{1+1} = \sqrt2$. Puis

$$\cos\theta = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}, \qquad \sin\theta = \frac{\sqrt2}{2} \quad\Longrightarrow\quad \theta = \frac{\pi}{4}$$

$$z = \sqrt2\,e^{i\pi/4}$$

**Vérification systématique** : on redéveloppe pour retomber sur l'énoncé.

$$\sqrt2\left(\cos\frac\pi4+i\sin\frac\pi4\right) = \sqrt2\left(\frac{\sqrt2}{2}+i\frac{\sqrt2}{2}\right) = 1+i$$

**Ce que cette forme permet** : calculer $(1+i)^8$ sans rien développer.

$$(1+i)^8 = \left(\sqrt2\,e^{i\pi/4}\right)^8 = (\sqrt2)^8\,e^{2i\pi} = 16$$

⚠️ La forme exponentielle exige $r > 0$. Une écriture comme $-2e^{i\theta}$ n'en est pas une : il faut la corriger en $2e^{i(\theta+\pi)}$.
::

### Les pièges à retenir

- $\mathcal{I}m(3-2i) = -2$ : la partie imaginaire est un réel, sans le $i$.
- Ne jamais écrire $\sqrt{-3}$ ; quand $\Delta < 0$, c'est $i\sqrt3$ qui apparaît.
- L'argument exige cosinus **et** sinus : $\cos\theta = \dfrac12$ seul laisse $\pm\dfrac{\pi}{3}$ en concurrence.
- La forme exponentielle impose $r > 0$.
- Affixe de $\overrightarrow{AB}$ : $z_B-z_A$, extrémité moins origine.
- Un quotient n'est pas terminé tant qu'il reste un $i$ au dénominateur.
:::


:::exercice{titre="Exercice 1" theme="Forme algébrique d'une somme, d'un produit et d'un quotient"}
On pose $z_1 = 2+3i$ et $z_2 = 4-2i$. Donner la forme algébrique de chacune des expressions suivantes.

::question{label="a)"}
$z_1 + z_2$

#indice
L'addition de deux complexes se fait « composante par composante », exactement comme pour des vecteurs : on additionne les parties réelles entre elles, et les parties imaginaires entre elles. Aucune règle particulière à connaître ici, $i$ se comporte comme une variable qu'on factorise.

Même calcul mené sur d'autres nombres : :voir-exemple[somme et différence]{id="nc-somme"}.

#solution
On regroupe les parties réelles d'un côté, les parties imaginaires de l'autre :

$$z_1+z_2 = (2+4)+(3-2)i = 6+i$$

La forme algébrique cherchée est donc $\boxed{6+i}$, de partie réelle $6$ et de partie imaginaire $1$.
::

::question{label="b)"}
$z_1 \times z_2$

#indice
Développe le produit comme un produit de deux binômes (double distributivité, la même que pour $(a+b)(c+d)$). Le seul point spécifique aux complexes intervient à la fin : il reste un terme en $i^2$, qu'il faut remplacer par $-1$ — attention, cela change le signe de ce terme et il rejoint alors la partie réelle.

Même calcul mené sur d'autres nombres : :voir-exemple[produit de deux complexes]{id="nc-produit"}.

#solution
Double distributivité :

$$z_1 z_2 = (2+3i)(4-2i) = 8-4i+12i-6i^2$$

On remplace $i^2$ par $-1$, donc $-6i^2 = +6$ :

$$z_1 z_2 = 8+6+(-4+12)i = \boxed{14+8i}$$
::

::question{label="c)"}
$z_1^2$

#indice
C'est un carré : l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$ s'applique telle quelle. Le piège classique est le terme $(3i)^2$ : n'oublie pas d'élever **à la fois** le $3$ et le $i$ au carré.

Même calcul mené sur un autre nombre : :voir-exemple[carré d'un complexe]{id="nc-carre"}.

#solution
Identité remarquable, avec $a = 2$ et $b = 3i$ :

$$z_1^2 = (2+3i)^2 = 4+2\times 2\times 3i+(3i)^2$$

Or $(3i)^2 = 9i^2 = -9$, d'où :

$$z_1^2 = 4-9+12i = \boxed{-5+12i}$$
::

::question{label="d)"}
$z_1 \times \overline{z_1}$

#indice
Tu peux développer, mais il y a beaucoup plus rapide : le produit d'un complexe par son conjugué est une propriété du cours qui donne directement un **nombre réel**. Regarde la formule $z\bar z = a^2+b^2$ — le résultat ne comporte aucun $i$.

Même calcul mené sur un autre nombre : :voir-exemple[conjugué et produit z·z̄]{id="nc-conjugue"}.

#solution
C'est exactement la propriété du cours $z\bar z = a^2+b^2$, avec $a = 2$ et $b = 3$ :

$$z_1\overline{z_1} = 2^2+3^2 = 4+9 = \boxed{13}$$

Vérification en développant, si l'on préfère : $(2+3i)(2-3i) = 4-9i^2 = 4+9 = 13$. C'est le carré du module de $z_1$, et c'est précisément ce qui rend la méthode du conjugué utile aux questions suivantes.
::

::question{label="e)"}
$\dfrac{1}{z_2}$

#indice
Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. La méthode du cours consiste à multiplier haut et bas par le conjugué du dénominateur : grâce à la question **d)**, le dénominateur devient alors un réel, et il ne reste qu'à séparer les deux morceaux de la fraction.

La méthode, déroulée sur un autre quotient : :voir-exemple[quotient et conjugué du dénominateur]{id="nc-quotient"}.

#solution
On multiplie numérateur et dénominateur par $\overline{z_2} = 4+2i$ :

$$\frac{1}{z_2} = \frac{\overline{z_2}}{z_2\overline{z_2}} = \frac{4+2i}{4^2+2^2} = \frac{4+2i}{20}$$

Il reste à séparer partie réelle et partie imaginaire, puis à simplifier chaque fraction :

$$\frac{1}{z_2} = \frac{4}{20}+\frac{2}{20}i = \boxed{\frac{1}{5}+\frac{1}{10}i}$$
::

::question{label="f)"}
$\dfrac{z_1}{z_2}$

#indice
Même méthode qu'en **e)** : on multiplie haut et bas par $\overline{z_2}$. Le dénominateur a déjà été calculé à la question précédente, il ne reste donc qu'un produit de deux complexes à développer au numérateur — attention à ne pas confondre $\overline{z_2}$ avec $z_2$ dans ce développement.

La méthode, déroulée sur un autre quotient : :voir-exemple[quotient et conjugué du dénominateur]{id="nc-quotient"}.

#solution
On multiplie par le conjugué du dénominateur :

$$\frac{z_1}{z_2} = \frac{z_1\overline{z_2}}{z_2\overline{z_2}} = \frac{(2+3i)(4+2i)}{20}$$

Développement du numérateur :

$$(2+3i)(4+2i) = 8+4i+12i+6i^2 = 8-6+16i = 2+16i$$

D'où :

$$\frac{z_1}{z_2} = \frac{2+16i}{20} = \boxed{\frac{1}{10}+\frac{4}{5}i}$$
::
:::

:::exercice{titre="Exercice 2" theme="Équation du second degré à discriminant négatif"}
Résoudre dans $\mathbb{C}$ l'équation $x^2+x+1 = 0$.

::question{label="1."}
Déterminer l'ensemble des solutions.

#indice
La méthode est exactement celle du second degré vue au lycée : on identifie $a$, $b$, $c$ puis on calcule le discriminant. La seule différence est ce qu'on fait quand $\Delta < 0$ : dans $\mathbb{R}$ on concluait « pas de solution », dans $\mathbb{C}$ on écrit $\sqrt{\Delta} = i\sqrt{-\Delta}$ et les deux racines existent bel et bien.

Une équation du même type, résolue de bout en bout : :voir-exemple[discriminant négatif]{id="nc-second-degre"}.

#solution
Ici $a = 1$, $b = 1$, $c = 1$. Le discriminant vaut :

$$\Delta = b^2-4ac = 1-4 = -3 < 0$$

$\Delta$ est strictement négatif : l'équation admet **deux racines complexes conjuguées**, données par la formule du cours avec $\sqrt{-\Delta} = \sqrt{3}$ :

$$z_1 = \frac{-b-i\sqrt{-\Delta}}{2a} = \frac{-1-i\sqrt{3}}{2}, \qquad z_2 = \frac{-1+i\sqrt{3}}{2}$$

$$\boxed{S = \left\{\frac{-1-i\sqrt{3}}{2},\; \frac{-1+i\sqrt{3}}{2}\right\}}$$

**Vérification** par somme et produit des racines : $z_1+z_2 = -1 = -\dfrac{b}{a}$, et $z_1z_2 = \dfrac{(-1)^2-(i\sqrt3)^2}{4} = \dfrac{1+3}{4} = 1 = \dfrac{c}{a}$. Les deux correspondent.
::
:::

:::exercice{titre="Exercice 3" theme="Lecture graphique et affixes"}
Le repère est orthonormé, un carreau valant une unité. Les points lus sur la figure sont $M_1(2,1)$, $M_2(0,3)$, $M_3(-2,0)$, $M_4(4,2)$ et $M_5(-4,-3)$.

::question{label="a)"}
Donner l'affixe des points $M_1$, $M_2$, $M_3$, $M_4$ et $M_5$.

#indice
La correspondance est directe : l'abscisse devient la partie réelle, l'ordonnée la partie imaginaire. Deux cas méritent attention — un point situé sur l'axe des ordonnées, dont l'affixe est un **imaginaire pur**, et un point sur l'axe des abscisses, dont l'affixe est un **réel**.

Les deux cas particuliers sont détaillés ici : :voir-exemple[du point à son affixe]{id="nc-affixe"}.

#solution
On applique $M(x,y) \mapsto z = x+yi$ :

| Point | Coordonnées | Affixe |
|---|---|---|
| $M_1$ | $(2,\,1)$ | $z_1 = 2+i$ |
| $M_2$ | $(0,\,3)$ | $z_2 = 3i$ (imaginaire pur) |
| $M_3$ | $(-2,\,0)$ | $z_3 = -2$ (réel) |
| $M_4$ | $(4,\,2)$ | $z_4 = 4+2i$ |
| $M_5$ | $(-4,\,-3)$ | $z_5 = -4-3i$ |

$M_2$ est sur l'axe des ordonnées, donc sa partie réelle est nulle ; $M_3$ est sur l'axe des abscisses, donc sa partie imaginaire est nulle.
::

::question{label="b)"}
Donner l'affixe du vecteur $\overrightarrow{M_2M_4}$.

#indice
Souviens-toi de la formule des coordonnées d'un vecteur : $\overrightarrow{AB}$ a pour coordonnées $(x_B-x_A,\ y_B-y_A)$. La même règle vaut pour les affixes — « extrémité moins origine ». Le sens compte : $\overrightarrow{M_2M_4}$ et $\overrightarrow{M_4M_2}$ ont des affixes opposées.

Le même calcul sur deux autres points : :voir-exemple[affixe d'un vecteur]{id="nc-vecteur"}.

#solution
L'affixe d'un vecteur $\overrightarrow{AB}$ est $z_B-z_A$, soit ici :

$$z_{\overrightarrow{M_2M_4}} = z_4-z_2 = (4+2i)-3i = \boxed{4-i}$$

On peut le relire sur la figure : pour aller de $M_2(0,3)$ à $M_4(4,2)$, on avance de $4$ vers la droite et on descend de $1$, ce qui correspond bien au vecteur de coordonnées $(4,-1)$.
::

::question{label="c)"}
Calculer l'affixe du milieu du segment $[M_2M_3]$.

#indice
La formule du milieu se transpose des coordonnées aux affixes sans changement : c'est la moyenne des deux affixes. Attention à bien diviser **les deux** parties par $2$, la réelle comme l'imaginaire.

Le même calcul sur deux autres points : :voir-exemple[affixe du milieu]{id="nc-milieu"}.

#solution
Propriété du cours : $z_M = \dfrac{z_A+z_B}{2}$. Avec $z_2 = 3i$ et $z_3 = -2$ :

$$z = \frac{z_2+z_3}{2} = \frac{3i+(-2)}{2} = \frac{-2+3i}{2} = \boxed{-1+\frac{3}{2}i}$$

Le milieu a donc pour coordonnées $\left(-1,\ \dfrac{3}{2}\right)$, ce qui est cohérent avec une lecture graphique entre $M_2(0,3)$ et $M_3(-2,0)$.
::
:::

:::exercice{titre="Exercice 4" theme="Forme exponentielle"}
Donner une forme exponentielle du nombre complexe $z = \sqrt{3}-3i$.

::question{label="1."}
Écrire $z$ sous la forme $re^{i\theta}$.

#indice
La méthode se déroule toujours en trois temps : module, puis argument, puis écriture finale. Pour l'argument, calcule **les deux** valeurs $\cos\theta$ et $\sin\theta$ — une seule ne suffit pas à déterminer l'angle, puisque deux angles distincts partagent le même cosinus. Ici le signe de la partie imaginaire t'indique déjà dans quel demi-plan chercher.

Les trois étapes déroulées sur un autre nombre : :voir-exemple[module et argument]{id="nc-module-argument"} puis :voir-exemple[forme exponentielle]{id="nc-exponentielle"}.

#solution
**Étape 1 — le module.** Avec $x = \sqrt{3}$ et $y = -3$ :

$$\lvert z \rvert = \sqrt{(\sqrt{3})^2+(-3)^2} = \sqrt{3+9} = \sqrt{12} = 2\sqrt{3}$$

**Étape 2 — l'argument.** On calcule le cosinus et le sinus :

$$\cos\theta = \frac{\sqrt{3}}{2\sqrt{3}} = \frac{1}{2} \qquad\text{et}\qquad \sin\theta = \frac{-3}{2\sqrt{3}} = -\frac{\sqrt{3}}{2}$$

Le second calcul mérite un mot : $\dfrac{3}{2\sqrt3} = \dfrac{3\sqrt3}{2\times 3} = \dfrac{\sqrt3}{2}$ après multiplication par $\sqrt3$ en haut et en bas.

L'angle remarquable dont le cosinus vaut $\dfrac{1}{2}$ et le sinus $-\dfrac{\sqrt{3}}{2}$ est :

$$\theta = -\frac{\pi}{3} \quad [2\pi]$$

**Étape 3 — conclusion.**

$$\boxed{z = 2\sqrt{3}\,e^{-i\pi/3}}$$

**Vérification** : $2\sqrt{3}\left(\cos\left(-\frac{\pi}{3}\right)+i\sin\left(-\frac{\pi}{3}\right)\right) = 2\sqrt{3}\left(\frac{1}{2}-i\frac{\sqrt{3}}{2}\right) = \sqrt{3}-3i$. On retrouve bien $z$.
::
:::
