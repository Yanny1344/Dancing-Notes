/* JS Library usage examples */
"use strict";
 //c2, d2, e2, g2, a2, g2, g2, e2, e2, d2, c2, a1, c2
 //e2, d#2, E2, D#2, e2, b1, d2, c2, a1

 const piano = new PianoComponentGenerator()
 const piano_2 = new PianoComponentGenerator()
 const piano_3 = new PianoComponentGenerator()
 const piano_4 = new PianoComponentGenerator()
 const progress_bar_1 = new ProgressBarGenerator();
 const progress_bar_2 = new ProgressBarGenerator();
 const chord_buttons = new selectChordButtonGenerator();

 function examples() {	
    const body = document.querySelector('body')
    const library_name_container = document.createElement('div')
    const library_name = document.createElement('h1')
    library_name.textContent = "dancingNotes.js Examples"
    library_name.style.fontSize = "2.5em";
    library_name_container.style.display = "flex"
    library_name_container.style.justifyContent = "center"
    library_name_container.appendChild(library_name)
    body.append(library_name_container)

    const button_con = document.createElement('div')
    button_con.className = "button_con"

    const home_button = document.createElement('button')
    home_button.textContent = "< Home"
    home_button.className = "home_button"

    const link = document.createElement('a')
    link.href = "home.html"
    link.appendChild(home_button)
    button_con.appendChild(link)

    body.append(button_con)

    // generate keyboard ======================================================
    const keyboard_des_container = document.createElement('div')
    const keyboard_des_title = document.createElement('h2')
    keyboard_des_title.textContent = "Create a piano keyboard"
    keyboard_des_container.appendChild(keyboard_des_title)

    const keyboard_des = document.createElement('p')
    keyboard_des.innerHTML = `
    &ensp; - Generate a piano keyboard with one or two octaves where each key has its corresponding sound <br>
    &ensp; - Click the piano keyboard to play music
    `
    keyboard_des_container.appendChild(keyboard_des)
    body.append(keyboard_des_container)

    // actual code---------------------
    piano.makeKeyboard(2);
    // ---------------------------------

    const js_title = document.createElement('h4')
    js_title.style.marginBottom = "0px"
    js_title.textContent = "JavaScript"
    body.append(js_title)

    const keyboard_code_container = document.createElement('div')
    keyboard_code_container.style.backgroundColor = "#f5f2f0"
    keyboard_code_container.style.borderColor = "black"
    keyboard_code_container.style.width = "80%"
    keyboard_code_container.style.height = "100px"
    const pre_1 = document.createElement('pre')
    pre_1.className = "language-javascript"
    const keyboard_code = document.createElement('code')
    keyboard_code.innerHTML = `
    const piano = new PianoComponentGenerator();
    // default height and  default width are 200px and 280px respectively
    // generate a keyboard with 2 octaves
    piano.makeKeyboard(2);
    `
    pre_1.appendChild(keyboard_code)
    keyboard_code_container.appendChild(pre_1)
    body.append(keyboard_code_container)

    // input fields for chords====================================================
    const input_field_container = document.createElement('div')
    const input_field_title = document.createElement('h2')
    input_field_title.textContent = "Create input text fields"
    input_field_container.appendChild(input_field_title)

    const input_field = document.createElement('p')
    input_field.innerHTML = `
    &ensp; - Generate text fields that takes two kinds of input: <br>
    &ensp; &ensp; 1) A list of chords or a list of notes <br>
    &ensp; &ensp; 2) A positive number indicating a time interval, and the music will finish playing within the constraint
    `
    input_field_container.appendChild(input_field)

    // examples for playing chords
    const input_chord = document.createElement('h4')
    input_chord.innerHTML = "&ensp; 1. Play a list of chords"
    input_field_container.append(input_chord)

    const input_chord_des = document.createElement('p')
    input_chord_des.innerHTML = `
    &ensp; &ensp; - Bind a piano keyboard <br>
    &ensp; &ensp; - Bind a progress bar <br>
    &ensp; &ensp; - Available chords are c, d, e, f, g, a, b, c#, d#, f#, g#, a# <br>
    &ensp; &ensp; - Input a list of chords separated by commas (ex: f, g, e, a#, d, g, c) <br>
    &ensp; &ensp; - Input a time interval (ex: 5) <br>
    &ensp; &ensp; - Click the start button to play music
    `
    input_field_container.append(input_chord_des)    

    body.append(input_field_container)

    // actual code for playing chords---------------------
    piano_2.makeKeyboard(2);

    piano_2.makeInputField("inputForm1", "inputChords", "inputTime1");
    const blankLine1 = document.createElement('br')
    body.append(blankLine1)
    progress_bar_1.makeProgressBar();
    const placeholder1 = document.querySelector('#inputChords')
    placeholder1.placeholder = "please enter a list of chords"

    const inputForm1 = document.querySelector('#inputForm1');
    const startChordBind = startChord.bind(piano_2);
    inputForm1.addEventListener('submit', startChordBind)
    const startProgressBind1 = startProgress1.bind(progress_bar_1);
    inputForm1.addEventListener('submit', startProgressBind1)
    //------------------------------------------------------------

    const js_title_2 = document.createElement('h4')
    js_title_2.style.marginBottom = "0px"
    js_title_2.textContent = "JavaScript"
    body.append(js_title_2)

    const input_chord_code_container = document.createElement('div')
    input_chord_code_container.style.backgroundColor = "#f5f2f0"
    input_chord_code_container.style.borderColor = "black"
    input_chord_code_container.style.width = "80%"
    input_chord_code_container.style.height = "880px"
    const pre_2 = document.createElement('pre')
    pre_2.className = "language-javascript"
    const input_chord_code = document.createElement('code')
    input_chord_code.innerHTML = `
    // generate a piano keyboard
    const piano = new PianoComponentGenerator();
    piano.makeKeyboard(2);

    // generate the input text field
    piano.makeInputField("inputForm", "inputChords", "inputTime");

    // set the placeholder
    const placeholder = document.querySelector('#inputChords');
    placeholder.placeholder = "please enter a list of chords";

    // bind a piano keyboard to startChord (a function defined below)
    const startChordBind = startChord.bind(piano);

    // generate a progress bar
    const progress_bar = new ProgressBarGenerator();
    progress_bar.makeProgressBar();

    // add eventListener to start playing a chord
    const inputForm = document.querySelector('#inputForm');
    inputForm.addEventListener('submit', startChordBind);

    // bind the progress bar to startProgress (a function defined below
    // add eventListener to start the progress bar
    const startProgressBind = startProgress.bind(progress_bar);
    inputForm.addEventListener('submit', startProgressBind);

    function startChord(e){
        e.preventDefault();
        const chord_list = document.querySelector('#inputChords').value;
        let time_interval = document.querySelector('#inputTime').value;
        if(time_interval != ""){
            this.playChords(chord_list, time_interval, "inputChords",  "inputTime");
        }
    }

    function startProgress(e){
        e.preventDefault();
        const chord_list = document.querySelector('#inputChords').value;
        let time_interval = document.querySelector('#inputTime').value;
        let split_list = chord_list.split(',');
        let flag = true
        for (let item of split_list){
            if(! /^[cdfgaCDFGA]#$|^[cdefgabCDEFGAB]$/.test(item.trim())){
                flag = false
            } 
        }
        if (! /\d/.test(inputTime.value) || inputTime.value <= 0){
            flag = false
        }
        if (flag === true){
            this.startProgressBar(time_interval);
        }
    }
    `
    pre_2.appendChild(input_chord_code)
    input_chord_code_container.appendChild(pre_2)
    body.append(input_chord_code_container)

    // input fields for notes
    const input_note_container = document.createElement('div')
    const input_note = document.createElement('h4')
    input_note.innerHTML = "&ensp; 2. Play a list of notes"
    input_note_container.append(input_note)

    const input_note_des = document.createElement('p')
    input_note_des.innerHTML = `
    &ensp; &ensp; - Bind a piano keyboard <br>
    &ensp; &ensp; - Bind a progress bar <br>
    &ensp; &ensp; - Available notes are c, d, e, f, g, a, b, c#, d#, f#, g#, a# <br>
    &ensp; &ensp; - Use 1 and 2 to indicate which octave the note belongs to (c1 indicates c in the first octave) <br>
    &ensp; &ensp; - Input a list of notes separated by commas (ex: c2, d2, e2, g2, a2, g2, g2, e2, e2, d2, c2, a1, c2) <br>
    &ensp; &ensp; - Input a time interval (ex: 5) <br>
    &ensp; &ensp; - Click the start button to play music
    `
    input_note_container.append(input_note_des)    

    body.append(input_note_container)

    // actual code for playing notes---------------------
    piano_3.makeKeyboard(2);
    piano_3.makeInputField("inputForm2", "inputNotes", "inputTime2");
    const blankLine2 = document.createElement('br')
    body.append(blankLine2)
    progress_bar_2.makeProgressBar();
    const placeholder2 = document.querySelector('#inputNotes')
    placeholder2.placeholder = "please enter a list of notes"

    const inputForm2 = document.querySelector('#inputForm2');
    const startMelodyBind = startMelody.bind(piano_3);
    inputForm2.addEventListener('submit', startMelodyBind);
    const startProgressBind2 = startProgress2.bind(progress_bar_2);
    inputForm2.addEventListener('submit', startProgressBind2)
    // -----------------------------------------------------------

    const js_title_3 = document.createElement('h4')
    js_title_3.style.marginBottom = "0px"
    js_title_3.textContent = "JavaScript"
    body.append(js_title_3)

    const input_note_code_container = document.createElement('div')
    input_note_code_container.style.backgroundColor = "#f5f2f0"
    input_note_code_container.style.borderColor = "black"
    input_note_code_container.style.width = "80%"
    input_note_code_container.style.height = "880px"
    const pre_3 = document.createElement('pre')
    pre_3.className = "language-javascript"
    const input_note_code = document.createElement('code')
    input_note_code.innerHTML = `
    // generate a piano keyboard
    const piano = new PianoComponentGenerator();
    piano.makeKeyboard(2);

    // generate the input text field
    piano.makeInputField("inputForm", "inputNotes", "inputTime");

    // set the placeholder
    const placeholder = document.querySelector('#inputChords');
    placeholder.placeholder = "please enter a list of notes";

    // bind a piano keyboard to startMelody (a function defined below)
    const startMelodyBind = startMelody.bind(piano);

    // generate a progress bar
    const progress_bar = new ProgressBarGenerator();
    progress_bar.makeProgressBar();

    // add eventListener to start playing a chord
    const inputForm = document.querySelector('#inputForm');
    inputForm.addEventListener('submit', startMelodyBind);

    // bind the progress bar to startProgress (a fuction defined below)
    // add eventListener to start the progress bar
    const startProgressBind = startProgress.bind(progress_bar);
    inputForm.addEventListener('submit', startProgressBind);

    function startMelody(e){
        e.preventDefault();
        const notes_list = document.querySelector('#inputNotes').value;
        let time_interval = document.querySelector('#inputTime').value;
        if(time_interval != ""){
            this.playMelody(notes_list, time_interval, "inputNotes", "inputTime")
        }
    }

    function startProgress(e){
        e.preventDefault();
        const chord_list = document.querySelector('#inputNotes').value;
        let time_interval = document.querySelector('#inputTime').value;
        let split_list = chord_list.split(',');
        let flag = true
        for (let item of split_list){
            if(! /^[cdfgaCDFGA]#$|^[cdefgabCDEFGAB]$/.test(item.trim())){
                flag = false
            } 
        }
        if (! /\d/.test(inputTime.value) || inputTime.value <= 0){
            flag = false
        }
        if (flag === true){
            this.startProgressBar(time_interval);
        }
        
    }
    `
    pre_3.appendChild(input_note_code)
    input_note_code_container.appendChild(pre_3)
    body.append(input_note_code_container)

    // css
    const css_title_2 = document.createElement('h4')
    css_title_2.style.marginBottom = "0px"
    css_title_2.textContent = "CSS for 1 & 2"
    body.append(css_title_2)

    const input_css_container = document.createElement('div')
    input_css_container.style.backgroundColor = "#f5f2f0"
    input_css_container.style.borderColor = "black"
    input_css_container.style.width = "80%"
    input_css_container.style.height = "350px"
    const pre_4 = document.createElement('pre')
    pre_4.className = "language-javascript"
    const input_css = document.createElement('code')
    input_css.innerHTML = `
    #inputChords {
        border-color: #44759e2c;
        border-radius: 4px;
        height: 35px;
        width: 250px;
    }
    
    #inputNotes {
        border-color: #44759e2c;
        border-radius: 4px;
        height: 35px;
        width: 250px;
    }
    
    #inputTime {
        border-color: #44759e2c;
        border-radius: 4px;
        height: 35px;
        width: 250px;
    }
    `
    pre_4.appendChild(input_css)
    input_css_container.appendChild(pre_4)
    body.append(input_css_container)




    // create chord buttons =================================================
    const buttons_des_container = document.createElement('div')
    const buttons_des_title = document.createElement('h2')
    buttons_des_title.textContent = "Create chord buttons"
    buttons_des_container.appendChild(buttons_des_title)

    const buttons_des = document.createElement('p')
    buttons_des.innerHTML = `
    &ensp; - Generate several chord buttons with customized chords <br>
    &ensp; - Each chord button refers to a chord (ex: C) <br>
    &ensp; - Click the chord button to play the indicated chord <br>
    &ensp; - Click the "edit" button and the pop up window that allows modification of the chord would show up <br>
    &ensp; - Click the buttons on the pop up window to modify the chord indicated on the chord button <br>
    &ensp; - Click "x" or click anywhere outside of the pop up window to close it <br>
    `
    buttons_des_container.appendChild(buttons_des)
    body.append(buttons_des_container)

    // actual code -----------------------------------------------
    piano_4.makeKeyboard(2);
    chord_buttons.makeButtonList(['C', 'B', 'G', 'F']);
    let chooseChordBind = chooseSpecificChord.bind(piano_4);
    const selected_chord = document.querySelectorAll('.chord_button');
    for (let item of selected_chord){
        item.addEventListener('click', chooseChordBind);
    }
    // ---------------------------------------------------------------
    const js_title_4 = document.createElement('h4')
    js_title_4.style.marginBotom = "0px"
    js_title_4.textContent = "JavaScript"
    body.append(js_title_4)

    const chord_buttons_code_container = document.createElement('div')
    chord_buttons_code_container.style.backgroundColor = "#f5f2f0"
    chord_buttons_code_container.style.borderColor = "black"
    chord_buttons_code_container.style.width = "80%"
    chord_buttons_code_container.style.height = "520px"
    const pre_5 = document.createElement('pre')
    pre_5.className = "language-javascript"
    const chord_buttons_code = document.createElement('code')
    chord_buttons_code.innerHTML = `
    // generate a piano keyboard
    const piano = new PianoComponentGenerator();
    piano.makeKeyboard(2);

    // generate 4 chord buttons
    // provide the customized initial chords for the chord buttons
    const chord_buttons = new selectChordButtonGenerator();
    chord_buttons.makeButtonList(['C', 'B', 'G', 'F']);

    // bind a piano keyboard to chooseSpecificChord (function defined below)
    let chooseChordBind = chooseSpecificChord.bind(piano);
    const selected_chord = document.querySelectorAll('.chord_button');
    for (let item of selected_chord){
        item.addEventListener('click', chooseChordBind);
    }

    function chooseSpecificChord(e){
        e.preventDefault();

        if (e.target.className === 'chord_name'){
            this.selectChord(e.target.innerHTML);
            this.playChord(e.target.innerHTML)  
        }else if(e.target.className === 'edit_button'){
            // pass
        }else{
            const chord = e.target.innerHTML.split('"chord_name">')[1].split('<')[0];
            // play a chord
            this.selectChord(chord);
            this.playChord(chord);
        }
    }
    `
    pre_5.appendChild(chord_buttons_code)
    chord_buttons_code_container.appendChild(pre_5)
    body.append(chord_buttons_code_container)

    
    // listener functions ======================================================
    function startChord(e){
        e.preventDefault();
        const chord_list = document.querySelector('#inputChords').value;
        let time_interval = document.querySelector('#inputTime1').value;
        if(time_interval != ""){
            this.playChords(chord_list, time_interval, "inputChords",  "inputTime1");
        }
    }

    function startMelody(e){
        e.preventDefault();
        const notes_list = document.querySelector('#inputNotes').value;
        let time_interval = document.querySelector('#inputTime2').value;
        if(time_interval != ""){
            this.playMelody(notes_list, time_interval, "inputNotes", "inputTime2")
        }
    }

    function startProgress1(e){
        e.preventDefault();
        const chord_list = document.querySelector('#inputChords').value;
        let time_interval = document.querySelector('#inputTime1').value;
        let split_list = chord_list.split(',');
        let flag = true
        for (let item of split_list){
            if(! /^[cdfgaCDFGA]#$|^[cdefgabCDEFGAB]$/.test(item.trim())){
                flag = false
            } 
        }
        if (! /\d/.test(inputTime1.value) || inputTime1.value <= 0){
            flag = false
        }
        if (flag === true){
            this.startProgressBar(time_interval);
        }
        
    }
    function startProgress2(e){
        e.preventDefault();
        const note_list = document.querySelector('#inputNotes').value;
        let time_interval = document.querySelector('#inputTime2').value;
        let split_list = note_list.split(',');
        let flag = true
        for (let item of split_list){
            if(! /^[cdfgaCDFGA]#[12]$|^[cdefgabCDEFGAB][12]$/.test(item.trim())){
                flag = false
            }
        }
        if (! /\d/.test(inputTime2.value) || inputTime2.value <= 0){
            flag = false
        }
        if (flag === true){
            this.startProgressBar(time_interval);
        }
    }

    function chooseSpecificChord(e){
        e.preventDefault();

        if (e.target.className === 'chord_name'){
            this.selectChord(e.target.innerHTML);
            this.playChord(e.target.innerHTML)  
        }else if(e.target.className === 'edit_button'){
            // pass
        }else{
            const chord = e.target.innerHTML.split('"chord_name">')[1].split('<')[0];
            this.selectChord(chord);
            this.playChord(chord);
        }

    }
 }
 examples();
