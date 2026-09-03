---
title: Nombres complexes — le cours
description: Forme algébrique, opérations, second degré dans C, affixes, module et argument, formes trigonométrique et exponentielle, ensembles de points. Chaque notion est suivie d'un exemple entièrement traité.
interactif: true
type: cours
annee: A1
matiere: Remise à niveau en maths
ordre: 1
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

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/exercices" titre="Les exercices du TD" description="Les quatre exercices du programme, corrigés — indice, solution et rappel de cours s’ouvrent en fenêtre sous chaque question" type="exercices" meta="4 exercices"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/entrainement" titre="La fiche d’entraînement" description="Quinze questions en cinq paliers, de « qu’est-ce que i » à la formule de Moivre" type="entrainement" meta="15 questions"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/trigonometrie/cours" titre="Guide : comprendre le cercle trigonométrique" description="L’argument d’un complexe est un angle du cercle : si sa lecture n’est pas automatique, le guide la reprend depuis le début" icone="i-lucide-compass" meta="Cercle interactif"}
::

## 1. La forme algébrique

On admet l'existence d'un nombre $i$ tel que $i^2 = -1$. Tout nombre complexe s'écrit alors de façon unique

$$
z = a+bi, \qquad a = \mathcal{R}e(z)\ \text{(partie réelle)}, \quad b = \mathcal{I}m(z)\ \text{(partie imaginaire)}
$$

- $b = 0$ : $z$ est **réel** ; $a = 0$ : $z$ est **imaginaire pur**. On a donc $\mathbb{R}\subset\mathbb{C}$.
- **Égalité** : $z = z'$ si et seulement si les parties réelles **et** les parties imaginaires coïncident. Une égalité complexe vaut donc pour deux égalités réelles — c'est ce qui permet d'« identifier ».
- ⚠️ La partie imaginaire est un **réel** : $\mathcal{I}m(3-2i) = -2$, et non $-2i$.

::exemple{id="nc-identification" titre="Lire les parties réelle et imaginaire, identifier" pour="Le premier réflexe, utile dans tout l'exercice 1"}
$\mathcal{R}e(5-4i) = 5$ et $\mathcal{I}m(5-4i) = -4$ (un réel, sans le $i$).

$7 = 7+0i$ est réel ; $-6i = 0-6i$ est imaginaire pur.

**Identification.** Trouver les réels $x$ et $y$ tels que $x-1+(2y+3)i = 4-i$. On égalise partie réelle avec partie réelle, partie imaginaire avec partie imaginaire :

$$
x-1 = 4 \quad\text{et}\quad 2y+3 = -1 \quad\Longrightarrow\quad x = 5,\quad y = -2
$$
::

## 2. Les opérations

La règle du jeu tient en une phrase : **on calcule comme en algèbre ordinaire**, $i$ jouant le rôle d'une variable, et on remplace $i^2$ par $-1$ dès qu'il apparaît.

::exemple{id="nc-somme" titre="Somme et différence : composante par composante" pour="Exercice 1 a) — additionner deux complexes"}
On regroupe les parties réelles ensemble, les parties imaginaires ensemble, exactement comme pour des vecteurs :

$$
(5-2i)+(-3+6i) = (5-3)+(-2+6)i = 2+4i
$$

$$
(5-2i)-(-3+6i) = (5+3)+(-2-6)i = 8-8i
$$

Pour la différence, le piège classique est d'oublier de distribuer le signe moins sur **les deux** composantes du second nombre.
::

::exemple{id="nc-produit" titre="Produit : double distributivité, puis remplacement de i²" pour="Exercice 1 b) — multiplier deux complexes"}
On développe comme un produit de deux binômes, puis on remplace $i^2$ par $-1$ :

$$
(3-i)(1+2i) = 3+6i-i-2i^2 = 3+5i-2\times(-1) = 3+5i+2 = 5+5i
$$

Le terme $-2i^2$ **change de signe** en devenant $+2$ : c'est là que se joue tout le calcul. On termine toujours en regroupant sous la forme $a+bi$.
::

::exemple{id="nc-carre" titre="Carré d'un complexe : identité remarquable" pour="Exercice 1 c) — élever au carré"}
On applique $(a+b)^2 = a^2+2ab+b^2$ sans rien changer, puis $i^2 = -1$. Devant une soustraction, **le signe moins se met dans $b$** : ici $a = 3$ et $b = -i$, et la formule reste celle du $+$.

$$
(3-i)^2 = 3^2+2\times 3\times(-i)+(-i)^2 = 9-6i+i^2 = 9-6i-1 = 8-6i
$$

L'autre écriture est tout aussi juste : $(a-b)^2 = a^2-2ab+b^2$ avec $b = +i$ donne $3^2-2\times 3\times i+i^2$, le même calcul. Ce qu'il ne faut pas faire, c'est **mélanger les deux** — annoncer $b = -i$ puis utiliser la formule en $-2ab$ compterait le signe moins deux fois.

Deux carrés à connaître par cœur, ils reviennent sans cesse :

$$
(1+i)^2 = 1+2i+i^2 = 2i \qquad (1-i)^2 = -2i
$$

Et les puissances de $i$ tournent en boucle de quatre en quatre : $i^2 = -1$, $i^3 = -i$, $i^4 = 1$. Par exemple $i^{2026} = i^{4\times 506+2} = i^2 = -1$.
::

**Le conjugué** de $z = a+bi$ est $\bar z = a-bi$ : on change le signe de la partie imaginaire. Sa propriété décisive :

$$
z\bar z = a^2+b^2 \quad\text{— un réel positif}
$$

Autres règles : $\overline{\bar z} = z$, $\overline{z_1+z_2} = \overline{z_1}+\overline{z_2}$, $\overline{z_1z_2} = \overline{z_1}\,\overline{z_2}$. Et deux caractérisations utiles : $z$ est réel $\iff z = \bar z$ ; $z$ est imaginaire pur $\iff z = -\bar z$.

::exemple{id="nc-conjugue" titre="Conjugué, et produit d'un complexe par son conjugué" pour="Exercice 1 d) — pourquoi le résultat est toujours réel"}
$$
\overline{3-i} = 3+i \qquad \overline{7} = 7 \qquad \overline{-6i} = 6i
$$

Le produit d'un complexe par son conjugué se calcule avec $(a-b)(a+b) = a^2-b^2$ :

$$
(3-i)(3+i) = 3^2-i^2 = 9+1 = 10
$$

**Le résultat est toujours un réel positif**, égal à $a^2+b^2$ — donc aussi à $\lvert z\rvert^2$. Aucun terme en $i$ ne peut subsister : s'il en reste un, il y a une erreur de signe quelque part.
::

::exemple{id="nc-quotient" titre="Quotient : multiplier par le conjugué du dénominateur" pour="Exercice 1 e) et f) — la méthode centrale du chapitre"}
Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. On multiplie donc **en haut et en bas** par le conjugué du dénominateur, ce qui rend celui-ci réel.

**Inverse.** Pour $\dfrac{1}{3-i}$, le conjugué du dénominateur est $3+i$ :

$$
\frac{1}{3-i} = \frac{3+i}{(3-i)(3+i)} = \frac{3+i}{9+1} = \frac{3+i}{10} = \frac{3}{10}+\frac{1}{10}i
$$

**Quotient général.** Pour $\dfrac{1+2i}{3-i}$, même conjugué :

$$
\frac{1+2i}{3-i} = \frac{(1+2i)(3+i)}{10} = \frac{3+i+6i+2i^2}{10} = \frac{1+7i}{10} = \frac{1}{10}+\frac{7}{10}i
$$

Deux raccourcis qui font gagner du temps : $\dfrac{1}{i} = -i$ (diviser par $i$, c'est multiplier par $-i$) et $\dfrac{1+i}{1-i} = i$.
::

## 3. Équation du second degré

Pour $az^2+bz+c = 0$ à coefficients **réels**, on calcule $\Delta = b^2-4ac$, et trois cas se présentent :

| Cas | Racines |
|---|---|
| $\Delta > 0$ | deux réelles, $x = \dfrac{-b\pm\sqrt{\Delta}}{2a}$ |
| $\Delta = 0$ | une racine double, $x = \dfrac{-b}{2a}$ |
| $\Delta < 0$ | deux complexes conjuguées, $z = \dfrac{-b\pm i\sqrt{-\Delta}}{2a}$ |

Le troisième cas est le seul vraiment nouveau : $-\Delta$ étant positif, il a une racine carrée ordinaire, et le $i$ prend en charge le signe. **Ne jamais écrire $\sqrt{-3}$** : on écrit $i\sqrt{3}$.

::exemple{id="nc-second-degre" titre="Résoudre une équation à discriminant négatif" pour="Exercice 2 — la seule équation du chapitre"}
Résolvons $z^2-2z+5 = 0$ dans $\mathbb{C}$. On identifie $a = 1$, $b = -2$, $c = 5$ :

$$
\Delta = (-2)^2-4\times 1\times 5 = 4-20 = -16 < 0
$$

Le discriminant est négatif : deux racines complexes conjuguées, avec $\sqrt{-\Delta} = \sqrt{16} = 4$ :

$$
z = \frac{2\pm 4i}{2} = 1\pm 2i \qquad\text{donc}\qquad S = \{1-2i,\; 1+2i\}
$$

**Vérification, toujours utile** : la somme des racines doit valoir $-\dfrac{b}{a} = 2$ — ici $(1-2i)+(1+2i) = 2$ ✓ — et leur produit $\dfrac{c}{a} = 5$ — ici $(1-2i)(1+2i) = 1+4 = 5$ ✓.
::

## 4. Points, vecteurs et affixes

Le plan muni d'un repère orthonormé $(O;\vec u,\vec v)$ devient une carte des complexes :

$$
\text{point } M(x,y) \;\longleftrightarrow\; \text{affixe } z = x+yi \qquad \text{vecteur } \vec w(x,y) \;\longleftrightarrow\; z_{\vec w} = x+yi
$$

- Axe horizontal = **axe réel**, axe vertical = **axe imaginaire**.
- **Vecteur** : $z_{\overrightarrow{AB}} = z_B-z_A$, extrémité moins origine.
- **Milieu** de $[AB]$ : $z_M = \dfrac{z_A+z_B}{2}$, une simple moyenne.
- **Distance** : $AB = \lvert z_B-z_A\rvert$.
- $\bar z$ est le symétrique de $z$ par rapport à l'axe réel ; $-z$ le symétrique par rapport à $O$.

::exemple{id="nc-affixe" titre="Du point à son affixe, et les deux cas particuliers" pour="Exercice 3 a) — lire des affixes sur une figure"}
La lecture est directe : l'abscisse devient la partie réelle, l'ordonnée la partie imaginaire.

$$
P(-3,\,2)\;\longrightarrow\; z_P = -3+2i \qquad Q(1,\,-4)\;\longrightarrow\; z_Q = 1-4i
$$

Les deux cas où l'on se trompe :

- un point de l'**axe des abscisses**, comme $R(5,0)$, a pour affixe le **réel** $z_R = 5$ ;
- un point de l'**axe des ordonnées**, comme $S(0,-2)$, a pour affixe l'**imaginaire pur** $z_S = -2i$.
::

::exemple{id="nc-vecteur" titre="Affixe d'un vecteur, et distance entre deux points" pour="Exercice 3 b) — extrémité moins origine"}
Avec $A$ d'affixe $1+i$ et $B$ d'affixe $4+5i$ :

$$
z_{\overrightarrow{AB}} = z_B-z_A = (4+5i)-(1+i) = 3+4i
$$

Le vecteur a donc pour coordonnées $(3,4)$ : on avance de $3$ et on monte de $4$, ce qu'on peut relire sur la figure. La longueur suit :

$$
AB = \lvert 3+4i\rvert = \sqrt{9+16} = 5
$$

**Le sens compte** : $z_{\overrightarrow{BA}} = -3-4i$, l'opposé. Écrire $z_A-z_B$ par distraction donne le vecteur inverse.
::

::exemple{id="nc-milieu" titre="Affixe du milieu d'un segment" pour="Exercice 3 c) — la moyenne des deux affixes"}
Toujours avec $A$ d'affixe $1+i$ et $B$ d'affixe $4+5i$ :

$$
z_M = \frac{z_A+z_B}{2} = \frac{(1+i)+(4+5i)}{2} = \frac{5+6i}{2} = \frac{5}{2}+3i
$$

Le milieu a donc pour coordonnées $\left(\dfrac{5}{2},\,3\right)$. Il faut diviser **les deux** parties par $2$ : n'en diviser qu'une est l'erreur habituelle.
::

## 5. Module et argument

Pour $z = x+yi$ non nul, vu comme le point $M$ :

- **Module** : $\lvert z\rvert = OM = \sqrt{x^2+y^2}$, une longueur, donc toujours positive.
- **Argument** : $\arg(z)$ est l'angle $(\vec u,\overrightarrow{OM})$, défini à $2k\pi$ près, noté $\theta\,[2\pi]$.

$$
\lvert z_1z_2\rvert = \lvert z_1\rvert\lvert z_2\rvert \qquad \left\lvert\frac{z_1}{z_2}\right\rvert = \frac{\lvert z_1\rvert}{\lvert z_2\rvert} \qquad \lvert\bar z\rvert = \lvert z\rvert \qquad z\bar z = \lvert z\rvert^2
$$

**La méthode du cours pour l'argument** : calculer **les deux** rapports

$$
\cos\theta = \frac{x}{\lvert z\rvert} \qquad \sin\theta = \frac{y}{\lvert z\rvert}
$$

puis reconnaître un angle remarquable. Les deux sont nécessaires : le cosinus seul laisse toujours deux angles possibles, c'est le signe du sinus qui tranche.

::cercle-trigo{titre="Trouver un argument sur le cercle" resume="Le couple (signe du cosinus, signe du sinus) désigne un quadrant, et un seul : c’est ce qui départage les deux angles candidats." angle="120" modes="explorer"}
::

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |

::exemple{id="nc-module-argument" titre="Calculer un module, puis un argument" pour="Exercice 4 — les deux premières étapes de la forme exponentielle"}
Prenons $z = -1+i\sqrt{3}$.

**Module.** Avec $x = -1$ et $y = \sqrt3$ :

$$
\lvert z\rvert = \sqrt{(-1)^2+(\sqrt3)^2} = \sqrt{1+3} = 2
$$

**Argument.** On calcule les deux rapports :

$$
\cos\theta = \frac{-1}{2} \qquad \sin\theta = \frac{\sqrt3}{2}
$$

Cosinus négatif et sinus positif : l'angle est dans le deuxième quadrant, et l'angle remarquable qui convient est

$$
\theta = \frac{2\pi}{3}\quad[2\pi]
$$

Si l'on n'avait regardé que $\cos\theta = -\dfrac12$, on aurait hésité entre $\dfrac{2\pi}{3}$ et $-\dfrac{2\pi}{3}$ : c'est bien le sinus qui décide.

**Quand le rapport ne se lit pas directement.** Par exemple $\dfrac{2}{2\sqrt2}$ : on multiplie haut et bas par $\sqrt2$, ce qui donne $\dfrac{2\sqrt2}{4} = \dfrac{\sqrt2}{2}$, cette fois reconnaissable dans le tableau.
::

## 6. La forme trigonométrique

Le module et l'argument suffisent à reconstituer le nombre : $x = r\cos\theta$ et $y = r\sin\theta$ sont les coordonnées du point $M$ lues sur le cercle de rayon $r$. D'où la **forme trigonométrique**

$$
z = r\left(\cos\theta+i\sin\theta\right) \qquad (r = \lvert z\rvert > 0,\ \theta = \arg z)
$$

que les sujets abrègent souvent en $[r\,;\theta]$. ⚠️ Ce n'est **pas** un couple de coordonnées : le premier nombre est une longueur, le second un angle.

**Les deux sens de conversion**, à ne pas confondre :

| Sens | Ce qu'on connaît | Ce qu'on calcule |
|---|---|---|
| Trigonométrique → algébrique | $r$ et $\theta$ | $a = r\cos\theta$ et $b = r\sin\theta$, puis $z = a+bi$ |
| Algébrique → trigonométrique | $a$ et $b$ | $r = \sqrt{a^2+b^2}$, puis $\cos\theta = \dfrac{a}{r}$ **et** $\sin\theta = \dfrac{b}{r}$ |

Le premier sens est purement mécanique : deux valeurs à lire dans le tableau des angles remarquables. Le second demande l'étape d'identification de l'angle, avec le piège habituel — les deux rapports sont nécessaires.

::exemple{id="nc-trigo-vers-algebrique" titre="De la forme trigonométrique à la forme algébrique" pour="Le sens facile : deux lectures dans le tableau"}
Écrivons $z = \left[6\,;\dfrac{5\pi}{6}\right]$ sous forme algébrique.

$$
a = 6\cos\frac{5\pi}{6} = 6\times\left(-\frac{\sqrt3}{2}\right) = -3\sqrt3
$$

$$
b = 6\sin\frac{5\pi}{6} = 6\times\frac12 = 3
$$

$$
z = -3\sqrt3+3i
$$

**Contrôle.** $\dfrac{5\pi}{6}$ est dans le deuxième quadrant, où l'abscisse est négative et l'ordonnée positive : les signes obtenus concordent.

Cas particuliers à connaître par cœur, ils reviennent tout le temps : $[r\,;0] = r$, $\left[r\,;\dfrac\pi2\right] = ri$, $[r\,;\pi] = -r$, $\left[r\,;-\dfrac\pi2\right] = -ri$.
::

::exemple{id="nc-algebrique-vers-trigo" titre="De la forme algébrique à la forme trigonométrique" pour="Le sens exigeant : module, puis les deux rapports"}
Écrivons $z = -2-2i\sqrt3$ sous forme trigonométrique.

**Module.**

$$
r = \sqrt{(-2)^2+\left(-2\sqrt3\right)^2} = \sqrt{4+12} = 4
$$

**Les deux rapports.**

$$
\cos\theta = \frac{-2}{4} = -\frac12 \qquad \sin\theta = \frac{-2\sqrt3}{4} = -\frac{\sqrt3}{2}
$$

Cosinus **et** sinus négatifs : troisième quadrant. L'angle remarquable qui a ces deux valeurs est $-\dfrac{2\pi}{3}$.

$$
z = 4\left(\cos\left(-\frac{2\pi}{3}\right)+i\sin\left(-\frac{2\pi}{3}\right)\right) = \left[4\,;-\frac{2\pi}{3}\right]
$$

**Vérification systématique** : on redéveloppe. $4\times\left(-\dfrac12\right) = -2$ et $4\times\left(-\dfrac{\sqrt3}{2}\right) = -2\sqrt3$, on retombe bien sur l'énoncé.

**Quand l'angle n'est pas remarquable**, comme pour $z = 5+3i$ : le module vaut $\sqrt{34}$, et l'argument ne se lit dans aucun tableau. On donne alors une valeur approchée en radians, $\theta = \arctan\dfrac35 \approx 0{,}540$ — l'arc tangente convenant directement ici parce que $z$ est dans le premier quadrant.
::

## 7. Forme exponentielle

En notant $\cos\theta+i\sin\theta = e^{i\theta}$, tout complexe non nul s'écrit

$$
z = re^{i\theta} \qquad (r = \lvert z\rvert > 0,\ \theta = \arg z)
$$

Elle hérite des règles de l'exponentielle, ce qui la rend imbattable pour les produits, quotients et puissances :

$$
re^{i\theta}\times r'e^{i\theta'} = rr'e^{i(\theta+\theta')} \qquad \frac{1}{re^{i\theta}} = \frac1r e^{-i\theta} \qquad \left(re^{i\theta}\right)^n = r^ne^{in\theta}
$$

À connaître : $e^{i0} = 1$, $e^{i\pi/2} = i$, $e^{i\pi} = -1$, $e^{-i\pi/2} = -i$. Et la règle de choix : **forme algébrique pour les sommes, forme exponentielle pour les produits et les puissances**.

::exemple{id="nc-exponentielle" titre="Écrire un complexe sous forme exponentielle, et s'en servir" pour="Exercice 4 — la troisième étape, puis l'intérêt de cette forme"}
Reprenons $z = 1+i$. Module : $\lvert z\rvert = \sqrt{1+1} = \sqrt2$. Puis

$$
\cos\theta = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}, \qquad \sin\theta = \frac{\sqrt2}{2} \quad\Longrightarrow\quad \theta = \frac{\pi}{4}
$$

$$
z = \sqrt2\,e^{i\pi/4}
$$

**Vérification systématique** : on redéveloppe pour retomber sur l'énoncé.

$$
\sqrt2\left(\cos\frac\pi4+i\sin\frac\pi4\right) = \sqrt2\left(\frac{\sqrt2}{2}+i\frac{\sqrt2}{2}\right) = 1+i
$$

**Ce que cette forme permet** : calculer $(1+i)^8$ sans rien développer.

$$
(1+i)^8 = \left(\sqrt2\,e^{i\pi/4}\right)^8 = (\sqrt2)^8\,e^{2i\pi} = 16
$$

⚠️ La forme exponentielle exige $r > 0$. Une écriture comme $-2e^{i\theta}$ n'en est pas une : il faut la corriger en $2e^{i(\theta+\pi)}$.
::

## 8. Ensembles de points et transformations

Un module est une **distance** : $\lvert z_B-z_A\rvert = AB$. Toute condition écrite avec des modules se relit donc comme une condition de distance, et décrit une figure du plan.

| Condition sur $z$ | Ensemble des points $M$ |
|---|---|
| $\lvert z-z_A\rvert = r$ | le **cercle** de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert \leqslant r$ | le **disque** fermé de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert = \lvert z-z_B\rvert$ | la **médiatrice** du segment $[AB]$ |

⚠️ Le premier réflexe est de **faire apparaître la forme $\lvert z-z_A\rvert$**, quitte à factoriser un signe. Par exemple $\lvert z+2-i\rvert$ s'écrit $\lvert z-(-2+i)\rvert$ : le centre est le point d'affixe $-2+i$, et non $2-i$.

**L'autre méthode, quand les modules ne suffisent pas** : poser $z = x+iy$ avec $x$ et $y$ réels, puis séparer partie réelle et partie imaginaire. C'est le passage obligé dès qu'apparaît $\bar z$, ou une condition du type « $Z$ est réel ».

$$
Z \text{ est réel} \iff \mathcal{I}m(Z) = 0 \qquad Z \text{ est imaginaire pur} \iff \mathcal{R}e(Z) = 0
$$

::exemple{id="nc-ensembles" titre="Reconnaître un cercle, un disque, une médiatrice" pour="Traduire une condition sur les modules en figure"}
**Un cercle.** $\lvert z-1+3i\rvert = 4$. On réécrit l'intérieur sous la forme $z-z_A$ :

$$
\lvert z-(1-3i)\rvert = 4
$$

C'est le cercle de centre le point d'affixe $1-3i$, soit $(1\,;-3)$, et de rayon $4$.

**Une médiatrice.** $\lvert z-2\rvert = \lvert z+i\rvert$ se relit $\lvert z-2\rvert = \lvert z-(-i)\rvert$, donc $AM = BM$ avec $A(2\,;0)$ et $B(0\,;-1)$ : c'est la médiatrice de $[AB]$.

**Contrôle par le calcul**, si le doute subsiste. Avec $z = x+iy$, la condition $\lvert z-2\rvert = \lvert z+i\rvert$ s'élève au carré :

$$
(x-2)^2+y^2 = x^2+(y+1)^2
$$

$$
-4x+4 = 2y+1 \quad\Longrightarrow\quad 4x+2y-3 = 0
$$

Une équation du premier degré en $x$ et $y$ : c'est bien une droite.
::

::exemple{id="nc-reel-imaginaire-pur" titre="Quand un quotient est-il réel, quand est-il imaginaire pur ?" pour="La méthode z = x+iy, appliquée à un quotient"}
Soit $Z = \dfrac{z+1}{z-i}$, avec $z = x+iy$ et $z \neq i$.

**On multiplie par le conjugué du dénominateur**, exactement comme pour une forme algébrique ordinaire :

$$
Z = \frac{\left(x+1+iy\right)\left(x-i(y-1)\right)}{x^2+(y-1)^2}
$$

Seul le numérateur demande du travail. On développe et on regroupe :

$$
\mathcal{R}e = x(x+1)+y(y-1) \qquad \mathcal{I}m = xy-(x+1)(y-1)
$$

**$Z$ est réel** quand la partie imaginaire s'annule, **$Z$ est imaginaire pur** quand c'est la partie réelle. Chacune de ces deux équations décrit une figure — ici une droite dans le premier cas, un cercle dans le second, puisque $x^2+y^2$ y apparaît.

⚠️ **Ne jamais oublier d'exclure les points interdits** : celui qui annule le dénominateur, et — pour « imaginaire pur » — celui qui annule $Z$ tout entier, $0$ n'étant pas un imaginaire pur.
::

## Les pièges à retenir

- $\mathcal{I}m(3-2i) = -2$ : la partie imaginaire est un réel, sans le $i$.
- Ne jamais écrire $\sqrt{-3}$ ; quand $\Delta < 0$, c'est $i\sqrt3$ qui apparaît.
- L'argument exige cosinus **et** sinus : $\cos\theta = \dfrac12$ seul laisse $\pm\dfrac{\pi}{3}$ en concurrence.
- La forme exponentielle impose $r > 0$.
- $[r\,;\theta]$ n'est pas un couple de coordonnées : $r$ est une longueur, $\theta$ un angle.
- $\lvert z-a\rvert = r$ est un **cercle**, $\lvert z-a\rvert \leqslant r$ un **disque**.
- Affixe de $\overrightarrow{AB}$ : $z_B-z_A$, extrémité moins origine.
- Un quotient n'est pas terminé tant qu'il reste un $i$ au dénominateur.
