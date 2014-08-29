Technodrome
===========


This is a [revisit.link](http://revisit.link) server that uses a neat hapi plugin called [revisit-mutagen](https://github.com/Flet/revisit-mutagen). Go check it out! The plugin accepts a hash of modules and exposes them according to the [revisit.link spec](http://revisit.link/spec.html). It will also automatically generate sample.jpg files for each service at startup.

So, all thats needed is to create a glitch is a module (or an inline function!) that accepts a buffer and a callback.

These modules are great examples of the pattern:
- [lysergix-gm](https://github.com/revisitors/lysergix-gm)
- [butts-gm](https://github.com/meandavejustice/butts-gm)
- [trippyshift](https://github.com/Flet/trippyshift)


Thanks
------
Thanks to [kid-icarus](https://github.com/kid-icarus) and [meandavejustice](https://github.com/meandavejustice) for sharing their inspiring code.

And special thanks to [ednapiranha](https://github.com/ednapiranha) and the other [revisitors](https://github.com/revisitors) for making something cool and sharing it.