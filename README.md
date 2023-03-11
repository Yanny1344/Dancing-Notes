### Getting Started
To use dancingNotes, load dancingNotes with the following:

```
<link rel="stylesheet" type="text/css" href="/path/to/dancingNotes.css">
<script defer type="text/javascript" src='/path/to/dancingNotes.js'></script>
```

#### Basic functionality
Able to generate three types of component

* the PianoComponentGenerator object is responsible for generating the piano keyboard, and it is able to access functions that manipulate the piano keyboard

```
const piano = new PianoComponentGenerator();
```

* the ProgressBarGenerator object is responsible for generating the progress bar

```
const progress_bar = new ProgressBarGenerator();
```

* the selectChordButtonGenerator object is responsible for generating the chord buttons that can be used to manipulate the piano keyboard

```
const chord_buttons = new selectChordButtonGenerator();