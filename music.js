//strudel practice

//chopstick song

setcpm(120/4)

note(`<[f3, g3]*6 [e3, g3]*6 [d3, b4]*6 [[c4, c5] [c4, c5] [c4, c5] [c4, c5] [d3, b4] [e3, a4]]
       [f3, g3]*6 [e3, g3]*6 [d3, b4]*6 [[c4, c5] g4 e4 c4 - -]>`).sound("piano")

//8 beat doubletime

setcpm(150/4)

sound(`<[cr hh hh hh, bd - - -, - - sd -]
       [hh oh hh hh, bd bd - -, - - sd -]
       [hh*4, bd - - -, - - sd -]
       [hh*4, bd bd - -, [- rim] - sd -]>`).bank("circuitsdrumtracks")

//seasons cover

setcpm(123/4)

$: note("<- [d3, f#3, a3, c#3]@2 [d3, f#3, a3, c4]@2 [b3, d3, f#3, g3]@2 [bd3, d3, e3, g3]@2>").sound("piano").gain(0.4)

$: note(`<a4@0.5 f#4@0.5
          c#4@2
          c3@0.5 d3@0.5 a3@0.5 f#3@0.5
          [bb2@0.03 b2]@2
          bb2@0.5 d3@0.5 a3@0.5 f#3@0.5
          [f3@0.03 f#3]>`).sound("gm_electric_guitar_jazz").gain(1.5)

$: sound("<- cr@0.5 hh@0.5 hh@0.5 hh@6.5*13 cr>").bank("mfb512").gain(.2)

$: sound("<- [bd - - - ]@8*4>").bank("mfb512").gain(1.4)
$: sound("<- [- - sd - ]@8*4>").bank("mfb512").gain(1.2)
$: sound("<- [sd - - - ]@8*4>").bank("mfb512").gain(0.6)
