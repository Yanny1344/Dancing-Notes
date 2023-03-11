"use strict";

(function(global, document) { 
    function PianoComponentGenerator() {
        // the constructor function  
        this.height = 150;
        this.width = 280;
        this.white_keys = [];
        this.black_keys = [];
        this.pressed_chord = null;
        this.chord_list = []
        this.start_button = null;
    }

    //private helper function
    function _sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // For funcionality and values common to all KeyboardGenerator,
    //  we can add to the prototype property of the constructor.
    PianoComponentGenerator.prototype = {

        setHeight: function(height) {
            this.height = height;
        },

        setWidth : function(width) {
            this.width = width;
        },

        makeKeyboard: function(oct_num) {
            const keyboard_container = document.createElement('div');
            keyboard_container.className = 'keyboard_container'
            keyboard_container.style = `width: ${this.width * oct_num}px; height: ${this.height}px`;
            
            // white key width + gap
            const white_width = 100 / (7 * oct_num + 6 * oct_num * (1/8))
            const gap = (1/8) * white_width
            const black_width = 7/8 * white_width

            let curr_key = 'white_key';
            
            let white_position = 0;
            let black_position = (10/16) * white_width;

            for (let j = 0; j < oct_num; j++){
                for (let i = 0; i <  7; i++) {
                    const piano_key = document.createElement('div');
                    piano_key.className = "piano_key white_key";
                    piano_key.style = `width:${white_width}%; left:${white_position}%`;

                    if (j === 0 && i === 0){
                        piano_key.dataset.note = 'C1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'C1'
                        note_audio.src = 'Notes/c3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 1){
                        piano_key.dataset.note = 'D1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'D1'
                        note_audio.src = 'Notes/d3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }
                    else if(j === 0 && i === 2){
                        piano_key.dataset.note = 'E1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'E1'
                        note_audio.src = 'Notes/e3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 3){
                        piano_key.dataset.note = 'F1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'F1'
                        note_audio.src = 'Notes/f3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 4){
                        piano_key.dataset.note = 'G1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'G1'
                        note_audio.src = 'Notes/g3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 5){
                        piano_key.dataset.note = 'A1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'A1'
                        note_audio.src = 'Notes/a4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 6){
                        piano_key.dataset.note = 'B1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'B1'
                        note_audio.src = 'Notes/b4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }
                    if (j === 1 && i === 0){
                        piano_key.dataset.note = 'C2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'C2'
                        note_audio.src = 'Notes/c4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 1){
                        piano_key.dataset.note = 'D2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'D2'
                        note_audio.src = 'Notes/d4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }
                    else if(j === 1 && i === 2){
                        piano_key.dataset.note = 'E2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'E2'
                        note_audio.src = 'Notes/e4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 3){
                        piano_key.dataset.note = 'F2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'F2'
                        note_audio.src = 'Notes/f4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 4){
                        piano_key.dataset.note = 'G2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'G2'
                        note_audio.src = 'Notes/g4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 5){
                        piano_key.dataset.note = 'A2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'A2'
                        note_audio.src = 'Notes/a5.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 6){
                        piano_key.dataset.note = 'B2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'B2'
                        note_audio.src = 'Notes/b5.mp3'
                        keyboard_container.appendChild(note_audio);
                    }
                    white_position += (white_width + gap);
                    curr_key = 'black_key';
                    keyboard_container.appendChild(piano_key);
                    this.white_keys.push(piano_key);
                }

                for (let i = 0; i < 5; i++) {
                    if (i === 2){
                        black_position += (white_width + gap);
                    }
                    const piano_key = document.createElement('div');
                    piano_key.className = "piano_key black_key";
                    piano_key.style = `width:${black_width}%; left:${black_position}%`;
                    if (j === 0 && i === 0){
                        piano_key.dataset.note = 'C#1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'C#1'
                        note_audio.src = 'Notes/c-3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 1){
                        piano_key.dataset.note = 'D#1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'D#1'
                        note_audio.src = 'Notes/d-3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }
                    else if(j === 0 && i === 2){
                        piano_key.dataset.note = 'F#1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'F#1'
                        note_audio.src = 'Notes/f-3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 3){
                        piano_key.dataset.note = 'G#1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'G#1'
                        note_audio.src = 'Notes/g-3.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 0 && i === 4){
                        piano_key.dataset.note = 'A#1';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'A#1'
                        note_audio.src = 'Notes/a-4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if (j === 1 && i === 0){
                        piano_key.dataset.note = 'C#2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'C#2'
                        note_audio.src = 'Notes/c-4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 1){
                        piano_key.dataset.note = 'D#2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'D#2'
                        note_audio.src = 'Notes/d-4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 2){
                        piano_key.dataset.note = 'F#2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'F#2'
                        note_audio.src = 'Notes/f-4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 3){
                        piano_key.dataset.note = 'G#2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'G#2'
                        note_audio.src = 'Notes/g-4.mp3'
                        keyboard_container.appendChild(note_audio);
                    }else if(j === 1 && i === 4){
                        piano_key.dataset.note = 'A#2';
                        const note_audio = document.createElement('audio');
                        note_audio.id = 'A#2'
                        note_audio.src = 'Notes/a-5.mp3'
                        keyboard_container.appendChild(note_audio);
                    }
                    black_position += (white_width + gap);
                    curr_key = 'white_key';
                    keyboard_container.appendChild(piano_key);
                    this.black_keys.push(piano_key);
                    if (i === 4){
                        black_position += (white_width + gap);
                    }
                }
            }

            const body = document.querySelector('body')
            body.append(keyboard_container)

            function playNote(key){
                const audio = document.getElementById(key.dataset.note)
                audio.currentTime = 0
                audio.play()
            }
            const keys = document.querySelectorAll(".piano_key")
            keys.forEach(key => {
                key.addEventListener('click', () => playNote(key))
            })

        },

        clearChord: function (chord){
            if (chord.toUpperCase() === "C"){
                this.white_keys[0].classList.remove("selected_key")
                this.white_keys[2].classList.remove("selected_key")
                this.white_keys[4].classList.remove("selected_key")
            }else if (chord.toUpperCase() === "D"){
                this.white_keys[1].classList.remove("selected_key")
                this.black_keys[2].classList.remove("selected_key")
                this.white_keys[5].classList.remove("selected_key")
            }else if (chord.toUpperCase() === "E"){
                this.white_keys[2].classList.remove("selected_key")
                this.black_keys[3].classList.remove("selected_key")
                this.white_keys[6].classList.remove("selected_key")
            }else if (chord.toUpperCase() === "F"){
                this.white_keys[3].classList.remove("selected_key")
                this.white_keys[5].classList.remove("selected_key")
                this.white_keys[7].classList.remove("selected_key")
            }else if (chord.toUpperCase() === "G"){
                this.white_keys[4].classList.remove("selected_key")
                this.white_keys[6].classList.remove("selected_key")
                this.white_keys[8].classList.remove("selected_key")
            }else if (chord.toUpperCase() === "A"){
                this.white_keys[5].classList.remove("selected_key")
                this.black_keys[5].classList.remove("selected_key")
                this.white_keys[9].classList.remove("selected_key")
            }else if (chord.toUpperCase() === "B"){
                this.white_keys[6].classList.remove("selected_key")
                this.black_keys[6].classList.remove("selected_key")
                this.black_keys[7].classList.remove("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'C#'){
                this.black_keys[0].classList.remove("selected_key")
                this.white_keys[3].classList.remove("selected_key")
                this.black_keys[3].classList.remove("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'D#'){
                this.black_keys[1].classList.remove("selected_key")
                this.white_keys[4].classList.remove("selected_key")
                this.black_keys[4].classList.remove("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'F#'){
                this.black_keys[2].classList.remove("selected_key")
                this.black_keys[4].classList.remove("selected_key")
                this.black_keys[5].classList.remove("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'G#'){
                this.black_keys[3].classList.remove("selected_key")
                this.white_keys[7].classList.remove("selected_key")
                this.black_keys[6].classList.remove("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'A#'){
                this.black_keys[4].classList.remove("selected_key")
                this.white_keys[8].classList.remove("selected_key")
                this.white_keys[10].classList.remove("selected_key")
            }
        },

        selectChord: function(chord){
            this.pressed_chord === null ? this.pressed_chord = chord : this.clearChord(this.pressed_chord);
            if (chord.toUpperCase() === "C"){
                this.white_keys[0].classList.add("selected_key")
                this.white_keys[2].classList.add("selected_key")
                this.white_keys[4].classList.add("selected_key")
            }else if (chord.toUpperCase() === "D"){
                this.white_keys[1].classList.add("selected_key")
                this.black_keys[2].classList.add("selected_key")
                this.white_keys[5].classList.add("selected_key")
            }else if (chord.toUpperCase() === "E"){
                this.white_keys[2].classList.add("selected_key")
                this.black_keys[3].classList.add("selected_key")
                this.white_keys[6].classList.add("selected_key")
            }else if (chord.toUpperCase() === "F"){
                this.white_keys[3].classList.add("selected_key")
                this.white_keys[5].classList.add("selected_key")
                this.white_keys[7].classList.add("selected_key")
            }else if (chord.toUpperCase() === "G"){
                this.white_keys[4].classList.add("selected_key")
                this.white_keys[6].classList.add("selected_key")
                this.white_keys[8].classList.add("selected_key")
            }else if (chord.toUpperCase() === "A"){
                this.white_keys[5].classList.add("selected_key")
                this.black_keys[5].classList.add("selected_key")
                this.white_keys[9].classList.add("selected_key")
            }else if (chord.toUpperCase() === "B"){
                this.white_keys[6].classList.add("selected_key")
                this.black_keys[6].classList.add("selected_key")
                this.black_keys[7].classList.add("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'C#'){
                this.black_keys[0].classList.add("selected_key")
                this.white_keys[3].classList.add("selected_key")
                this.black_keys[3].classList.add("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'D#'){
                this.black_keys[1].classList.add("selected_key")
                this.white_keys[4].classList.add("selected_key")
                this.black_keys[4].classList.add("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'F#'){
                this.black_keys[2].classList.add("selected_key")
                this.black_keys[4].classList.add("selected_key")
                this.black_keys[5].classList.add("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'G#'){
                this.black_keys[3].classList.add("selected_key")
                this.white_keys[7].classList.add("selected_key")
                this.black_keys[6].classList.add("selected_key")
            }else if (chord[0].toUpperCase() + "#" === 'A#'){
                this.black_keys[4].classList.add("selected_key")
                this.white_keys[8].classList.add("selected_key")
                this.white_keys[10].classList.add("selected_key")
            }
            this.pressed_chord = chord;

        },

        // sleep: function(ms){
        //     return new Promise(resolve => setTimeout(resolve, ms));
        // },

        makeStartButton: function(){
            const start = document.createElement('button')
            start.textContent = 'start'
            const body = document.querySelector('body')
            body.append(start)
            this.start_button = start
        },

        makeInputField: function(form_id, textField1_id, textField2_id){
            const form_container = document.createElement('div')
            form_container.className = 'form_container'
            const form = document.createElement('form');
            form.id = form_id
            const input = document.createElement('input')
            input.type = "text"
            input.id = textField1_id
            const time = document.createElement('input')
            time.type = "text"
            time.id = textField2_id
            time.placeholder = "please enter a time interval"
            const submit = document.createElement('input')
            submit.className = "start_button"
            submit.type = "submit"
            submit.value = "start" 

            form.appendChild(input)
            form.appendChild(time)
            form.appendChild(submit)
            form_container.appendChild(form)

            const body = document.querySelector('body')
            body.append(form_container)
        },

        playChord: function(key){
            let audio_note_1 = 'C';
            let audio_note_2 = 'E';
            let audio_note_3 = 'G';
            if(key.toUpperCase() === 'C'){
                audio_note_1 = 'C1';
                audio_note_2 = 'E1';
                audio_note_3 = 'G1';
            }else if (key.toUpperCase() === 'D'){
                audio_note_1 = 'D1';
                audio_note_2 = 'F#1';
                audio_note_3 = 'A1';
            }else if (key.toUpperCase() === 'E'){
                audio_note_1 = 'E1';
                audio_note_2 = 'G#1';
                audio_note_3 = 'B1';
            }else if (key.toUpperCase() === 'F'){
                audio_note_1 = 'F1';
                audio_note_2 = 'A1';
                audio_note_3 = 'C1';
            }else if (key.toUpperCase() === 'G'){
                audio_note_1 = 'G1';
                audio_note_2 = 'B1';
                audio_note_3 = 'D2';
            }else if (key.toUpperCase() === 'A'){
                audio_note_1 = 'A1';
                audio_note_2 = 'C#2';
                audio_note_3 = 'E2';
            }else if (key.toUpperCase() === 'B'){
                audio_note_1 = 'B1';
                audio_note_2 = 'D#2';
                audio_note_3 = 'F#2';
            }else if (key[0].toUpperCase() + "#" === 'C#'){
                audio_note_1 = 'C#1';
                audio_note_2 = 'F1';
                audio_note_3 = 'G#1';
            }else if (key[0].toUpperCase() + "#" === 'D#'){
                audio_note_1 = 'D#1';
                audio_note_2 = 'G1';
                audio_note_3 = 'A#1';
            }else if (key[0].toUpperCase() + "#" === 'F#'){
                audio_note_1 = 'F#1';
                audio_note_2 = 'A#1';
                audio_note_3 = 'C#2';
            }else if (key[0].toUpperCase() + "#" === 'G#'){
                audio_note_1 = 'G#1';
                audio_note_2 = 'C2';
                audio_note_3 = 'D#2';
            }else if (key[0].toUpperCase() + "#" === 'A#'){
                audio_note_1 = 'A#1';
                audio_note_2 = 'D2';
                audio_note_3 = 'F2';
            }

            const audio_1 = document.getElementById(`${audio_note_1}`)
            const audio_2 = document.getElementById(`${audio_note_2}`)
            const audio_3 = document.getElementById(`${audio_note_3}`)
            audio_1.currentTime = 0;
            audio_2.currentTime = 0;
            audio_3.currentTime = 0;
            audio_1.play()
            audio_2.play()
            audio_3.play()
        },

        playChords: async function (chords, time_interval, text_field_id_1, text_field_id_2){
                time_interval = time_interval * 1000;
                const chords_list = chords.split(',');

                let input_list = []
                for (let item of chords_list){
                    input_list.push(item.trim())
                }

                const inputChords = document.querySelector('#' + text_field_id_1);
                inputChords.style.borderColor = "#44759e2c"
                const inputTime = document.querySelector('#' + text_field_id_2);
                inputTime.style.borderColor = "#44759e2c"

                if (! /\d/.test(inputTime.value) || inputTime.value <= 0){
                    inputTime.style.borderColor = "red"
                }else{
                    this.chord_list = input_list;
                    const sub_time_interval = time_interval/input_list.length;
                    let flag = true
                    for (let l of input_list) {
                        if(! /^[cdfgaCDFGA]#$|^[cdefgabCDEFGAB]$/.test(l)){
                            flag = false
                        }
                    }
                    if (flag === true){
                        for (let l of input_list) {
                            this.selectChord(l);
                            this.playChord(l);
                            await _sleep(sub_time_interval);
                            this.clearChord(l);
                        }
                    }else{
                        const inputChords = document.querySelector('#' + text_field_id_1);
                        inputChords.style.borderColor = "red"
                    }

                }
                
        
        },

        playMelody: async function (note_list, time_interval, text_field_id_1, text_field_id_2){
            const key_dict = {
                "C1": this.white_keys[0],
                "D1": this.white_keys[1],
                "E1": this.white_keys[2],
                "F1": this.white_keys[3],
                "G1": this.white_keys[4],
                "A1": this.white_keys[5],
                "B1": this.white_keys[6],
                "C2": this.white_keys[7],
                "D2": this.white_keys[8],
                "E2": this.white_keys[9],
                "F2": this.white_keys[10],
                "G2": this.white_keys[11],
                "A2": this.white_keys[12],
                "B2": this.white_keys[13],
                "C#1": this.black_keys[0],
                "D#1": this.black_keys[1],
                "F#1": this.black_keys[2],
                "G#1": this.black_keys[3],
                "A#1": this.black_keys[4],
                "C#2": this.black_keys[5],
                "D#2": this.black_keys[6],
                "F#2": this.black_keys[7],
                "G#2": this.black_keys[8],
                "A#2": this.black_keys[9],

            }
            time_interval = time_interval * 1000;
            const notes_list = note_list.split(',');

            let input_list = []
            for (let item of notes_list){
                input_list.push(item.trim())
            }

            const inputNotes = document.querySelector('#' + text_field_id_1);
            inputNotes.style.borderColor = "#44759e2c"

            for (let i = 0; i < 14; i++){
                this.white_keys[i].classList.remove("selected_key")
            }
            for (let i = 0; i < 10; i++){
                this.black_keys[i].classList.remove("selected_key")
            }

            const inputTime = document.querySelector('#' + text_field_id_2);
            inputTime.style.borderColor = "#44759e2c"

            let flag = true
            if (! /\d/.test(inputTime.value) || inputTime.value <= 0){
                inputTime.style.borderColor = "red"
            }else{
                for (let l of input_list) {
                    if(! /^[cdfgaCDFGA]#[12]$|^[cdefgabCDEFGAB][12]$/.test(l)){
                        flag = false
                    }
                }
                
                if (flag === true){
                    const sub_time_interval = time_interval/input_list.length;
                    for (let l of input_list) {
                        if(l.length === 3){
                            l = l[0].toUpperCase() + l[1] + l[2]
                        }else{
                            l = l[0].toUpperCase() + l[1]
                        }
                        const audio = document.getElementById(l)
                        audio.currentTime = 0
                        audio.play()
                        key_dict[l].classList.add("selected_key")
                        await _sleep(sub_time_interval);
                        key_dict[l].classList.remove("selected_key")
                    }
                }else{
                    const inputNotes = document.querySelector('#' + text_field_id_1);
                    inputNotes.style.borderColor = "red"
                }   
            }

            
        }

    }

    function ProgressBarGenerator() {
        // the constructor function
        this.bars = [];
    }

    ProgressBarGenerator.prototype = {
        makeProgressBar: function(){
            const container = document.createElement('span');
            container.className  = "progress_bar_container";
            const bar = document.createElement('span');
            bar.className = "progress_bar";
            container.appendChild(bar);
            this.bars.push(bar);

            const body = document.querySelector('body')
            body.append(container)
        },

        startProgressBar: function(time_interval){
            time_interval = time_interval * 1000;
            for(let bar of this.bars){
                let progress = 0;
                const sub_time_interval_num = time_interval / 10;
                const time_added = 1 / sub_time_interval_num;
                const sub_interval = setInterval(setProcessHelper, 10);
                function setProcessHelper(){
                    if(progress >= 1){
                        clearInterval(sub_interval);
                    }else{
                        bar.style = `transform: scaleX(${progress});`;
                        progress += time_added;
                    }
                }
            }

        },
    }

    function selectChordButtonGenerator() {
        this.prev_selected_button = null;
        this.prev_main_selected_button = null;
        this.pressed_button = "C";
        
    }

    selectChordButtonGenerator.prototype = {
        createModifyWindow: function(modal_name){
            const container = document.createElement('div');
            container.className = 'modal'
            container.id = modal_name

            //header
            const title_container = document.createElement('div');
            title_container.className = 'title_container'
            const title = document.createElement('div');
            title.textContent = 'Edit Chord'
            const close_button = document.createElement('button');
            close_button.className = 'close_button'
            close_button.innerHTML = "&times;"
            close_button.dataset.close = ''
            title_container.appendChild(title)
            title_container.appendChild(close_button)
            
            //body
            const modal_body_container = document.createElement('div');
            modal_body_container.className = 'switch_chord_container'

            const chord_lst = ['C', 'D', 'E', 'F', 'G', 'A', 'B', "C#", "D#", "F#","G#","A#"]
            for (let item of chord_lst){
                const switch_chord_button_container = document.createElement('div');
                switch_chord_button_container.className = "switch_chord_button_container"
                const chord = document.createElement('button');
                chord.id = 'switch_chord'
                chord.textContent = item

                // add eventListener
                chord.addEventListener('click', (e) => {
                    if (this.prev_selected_button != null){
                        this.prev_selected_button.classList.remove("selected")
                    }
                    const index = modal_name.charAt(modal_name. length-1)
                    const button = document.getElementById(`chord_${index}`)
                    button.innerHTML = chord.textContent
                    this.pressed_chord = chord.textContent
                    e.target.classList.add("selected")
                    this.prev_selected_button = e.target
                })
                switch_chord_button_container.appendChild(chord)
                modal_body_container.appendChild(switch_chord_button_container)
            }

            container.appendChild(title_container)
            container.appendChild(modal_body_container)

            return container;
        },

        makeButtonList: function(buttons){
            //helper functions
            function openModal(modal){
                if (modal == null) return
                modal.classList.add('active')
                const overlay = document.getElementById('overlay')
                overlay.classList.add('active')
            }

            function closeModal(modal){
                if (modal == null) return
                modal.classList.remove('active')
                const overlay = document.getElementById('overlay')
                overlay.classList.remove('active')
                const main_buttons = document.querySelectorAll(".chord_button")
                main_buttons.forEach(button => {
                    button.classList.remove("selected")
                })
            }

            // main function
            const body = document.querySelector('body')
            const container = document.createElement('div');
            container.className = 'chord_button_container';

            for(let i = 0; i < buttons.length; i++){
                const button = document.createElement('div');
                button.className = 'chord_button';
                button.addEventListener("click", () => {
                    if (this.prev_main_selected_button != null){
                        this.prev_main_selected_button.classList.remove("selected")
                    }
                    // button.classList.add("selected")
                    button.className = "chord_button selected"
                    this.prev_main_selected_button = button
                })

                const chord_name = document.createElement('div');
                chord_name.id = `chord_${i + 1}`;
                chord_name.className = 'chord_name';
                chord_name.textContent = buttons[i].toUpperCase();

                const edit_button = document.createElement('button')
                edit_button.className = 'edit_button'
                edit_button.textContent = 'edit'
                edit_button.dataset.modal = `#modal_${i + 1}`;

                // the pop up window
                const modal = this.createModifyWindow(`modal_${i + 1}`)
                body.append(modal)

                button.appendChild(edit_button);
                button.appendChild(chord_name);
                container.appendChild(button);
            }
            body.append(container)

            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            body.append(overlay)

            const openModalButtons = document.querySelectorAll('[data-modal]')
            const closeModalButtons = document.querySelectorAll('[data-close]')
            openModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modal = document.querySelector(button.dataset.modal)
                    openModal(modal)
                })
            })
            closeModalButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modal = button.closest('.modal')
                    closeModal(modal)
                })
            })

            overlay.addEventListener('click', () => {
                openModalButtons.forEach(button => {
                    const modal = document.querySelector(button.dataset.modal)
                    closeModal(modal)
                })
            })
        }
    }
    // After setup:
	// Add the PianoComponentGenerator to the window object if it doesn't already exist.
	global.PianoComponentGenerator = global.PianoComponentGenerator || PianoComponentGenerator
    global.ProgressBarGenerator = global.ProgressBarGenerator || ProgressBarGenerator
    global.selectChordButtonGenerator = global.selectChordButtonGenerator || selectChordButtonGenerator
    

})(window, window.document); 




