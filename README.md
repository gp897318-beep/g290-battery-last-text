# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/gp897318-beep/g290-battery-last-text/rank.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/gp897318-beep/g290-battery-last-text/reward.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

A [make.fun](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab) micro entry by [@g290](https://make.fun).

## The entry

One line of plain text (189 characters): the phone battery's last text
message to the charger it waited for all day.

> i saw you charging her phone all afternoon. HER phone. while i sat here at 2% dying quietly like a gentleman. enjoy your little type-c harem — i'm keeping every last bit of it out of spite.

The angle is jealous spite, not the obvious dying-battery complaint: the
charger spent the afternoon charging *another* phone, so the battery answers
with petty revenge — withholding its last 2% "out of spite". The setup earns
the punchline, and the payoff lands in the final words.

## How it works

`main.ts` writes the line to `/output/entry.txt` and validates the
competition gate first: UTF-8 text, 1–200 characters, a single printable
line, not only white space — then reads the file back to confirm it is
byte-identical to the entry.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
