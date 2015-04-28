amadeus.js
==========
Javascript implementation of [amadeus](https://github.com/martriay/amadeus)
Usage:
-----

Simply require `amadeus.js` and ask for a mode

```javascript
> Amadeus = require('./amadeus')
[Function: Amadeus]
> a = new Amadeus
{}
> a.mixolidio("re")
['Re', 'Mi', 'Fa#', 'Sol', 'La', 'Si', 'Do']
> a.eolico("fa")
['Fa', 'Sol', 'Lab', 'Sib', 'Do', 'Reb', 'Mib']
> a.mayor("mi")
['Mi', 'Fa#', 'Sol#', 'La', 'Si', 'Do#', 'Re#']
> locrio("sib")
['La#', 'Si', 'Do#', 'Re#', 'Mi', 'Fa#', 'Sol#']

```
Works with latin notation (Do, Re, Mi, etc) and supports the following modes: `jonico` (also works with `mayor`), `dorico`, `frigio`, `lidio`, `mixolidio`, `eolico` (also works with `menor`), `locrio`
