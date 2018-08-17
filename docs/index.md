# Welcome to myValencer's manual!

myValencer is a web application to query valence patterns in FrameNet.

myValencer is free and opensource. Help us improve it by reporting bugs
or requesting features on Github or by contacting us at contact at valencer.io.

!!! warning
    This manual is intendend for myValencer's users. It may contain errors or
    approximations regarding FrameNet. Please always refer to the
    [FrameNet book](framenet_book.pdf).

myValencer currently supports the following functionalities:

* **Annotations**
* **Frames**
* **Lexical units**
* **Cluster**

## What is a *valence pattern*?

A *valence pattern* refers to the range of combinatorial possibilities of
valences for each lexical unit, where *valences* are the syntactic
realizations
of frame elements, represented as triplets of frame element (FE),
phrase type (PT) and grammatical function (GF).

The following sentence provides an example of FrameNet annotation for the valence
pattern `Fluid.NP.Ext Goal.PP.Dep Source.PP.Dep` where the predicate
`spill.v` evokes the `Fluidic_motion` frame:

![Screenshot](img/fnexample-ft.png)

Here, the `Fluid` FE is realized as the subject `Ext` of a noun phrase `NP`,
and the `Goal` and `Source` FEs are realized as objects `Dep` of prepositional
phrases `PP`.

You can find [a summary of FrameNet's PT and GF below]().
For a detailed account, refer to the [FrameNet book](framenet_book.pdf).
For a detailed
account of Frame Elements, you can browse the
[Frame Index](https://framenet.icsi.berkeley.edu/fndrupal/frameIndex) on
the FrameNet website.


## Query HowTo
myValencer is designed to take as input combinations of FE.PT.GF
triplets, such as:
```
Fluid.NP.Ext Goal.PP.Dep Source.PP.Dep
```
The above query will return all annotation sets containing at least the
three distinct Frame Elements `Fluid`, `Goal` and `Source` in their specified
syntactic realizations. Valences must be separated by a whitespace and triplets
FE.PT.GF in a single valence are separated by a dot.

Combinations of valences are **orderless**, so the above query is equivalent to:
```
Goal.PP.Dep Fluid.NP.Ext Source.PP.Dep
```
Similarly, triplets inside a given valence are also **orderless**, so
that `Goal.PP.Dep` is equivalent to `PP.Goal.Dep` or to `Dep.PP.Goal`.

Queries are also **case-insensitive**, so the above queries are equivalent to:
```
fluid.np.ext goal.pp.dep source.pp.dep
```

Finally, the query system is **flexible** and accepts combinations of one, two or
three elements per valence, such as:
```
Goal Fluid.Ext Source.PP
```
The above query will search for annotation sets containing a `Goal` FE in any
possible syntactic realization (PT.GF), a `Fluid` FE realized as an external
argument in any kind of phrase type, and a `Source` FE realized in a
prepositional phrase with any kind of grammatical function.

## Use cases



## Options
### withExtraCoreFEs
### strictVUmatching

## Output
### Annotations

### Frames

### Lexical Units

### Cluster

## PT GF overview
### PT labels

### GF labels
| Label  | Name | Details | Example |
| ------------- | ------------- | ------------- | ------------- |
| Ext  | External Argument  | | |
| Obj | Object | | |
| Dep | Dependent | | |
| Head | Head noun modified by attributive adjective | | |
| Gen | Genitive determiner | | |
| Appos | Appositive | | |

## Mapping to UD and PENN
