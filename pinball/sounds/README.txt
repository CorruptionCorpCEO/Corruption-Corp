Default sound effects for Pinballa.

Drop an audio file here named <id>.mp3 to make it the built-in default for that
effect. A machine with its own uploaded sound (Cosmetics -> Sounds) overrides
the default; if a file below is missing, that effect is simply silent.

All effects are loudness-normalised at play time, so files of different volumes
end up at a similar level — you don't need to match levels yourself.

Expected files (from soundConfig in src/script.js):
  plungerCharge.mp3     Plunger charge (one-shot; stops at full charge)
  plungerRelease.mp3    Plunger release / launch
  wallBounce.mp3        Ball hitting a wall OR a flipper
  bumperTrigger.mp3     Bumper hit
  grabberTrigger.mp3    Grabber catch
  pointTrigger.mp3      Point pad
  boss1st.mp3           Boss lit (1st)
  boss2nd.mp3           Boss lit (2nd)
  boss3rd.mp3           Boss lit (3rd)
  boss4th.mp3           Boss lit (4th, pre-jackpot)
  jackpot.mp3           All bosses lit / jackpot
  gameOver.mp3          Game over
  backgroundMusic.mp3   Looping background music

Any browser-decodable format works if you change the extension in
defaultSounds (src/script.js); .mp3 is the default lookup.
