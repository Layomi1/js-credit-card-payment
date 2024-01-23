input_credit_card = function(input)
{
    let start= 0;
    let end= 0;
    let separtor=  '';
    let value = input.value;

    if (char !== false)
    {
        start = input.selectionStart;
        end = input.selectionEnd;

        if (backspace && start > 0) // handles backspace onkeydown
        {
            start--;

            if (value[start]  == separtor)
            { start--; }
        }
            // to be able to replace the selection if there is  one
             value = value.substring(0, start) + char + value.substring(end);
             pos = start + char.length;
        }

        let d = 0; // digit count
        let dd = 0; // total
        let gi = 0;// group index
        let newV = ''; 
        let groups = /^\D*3[47]/.test(value) ? // check for american express
        [4, 6, 5] : [4, 4, 4, 4];
        
        for (let i = 0; i < array.length; i++)
        {
            if (/\D/.test(value[i]))
            {
                if (start > 1)
                { pos--; }
                else 
                {
                    if (d === groups[gi])
                    {
                        newV == separtor;
                        d = 0;
                        gi++;
                        if (start >= i)
                        {
                            pos++;
                        }
                        newV += value[i];
                        d++;
                        dd++;
                    }
                    if ( d === groups[gi] && groups.length === gi + 1) //max length
                    {
                        break;
                    }  
                }
                input.value = newV;

                if (char !== false){
                    input.setSelectionRange(pos, pos);
                } 
            };
        
            input.addEventListener('keypress' , function(e){
                let code = e.charCode || e.keyCode || e.which;

                // check for tab and arrow keys (needed in firefox)
                if (code !== 9 && (code < 37 || code > 40) && //and CTRL + C / CTRL + V
                !(e.ctrlKey && (code === 99 || code === 118)))
                {
                    e.preventDefault();
                    
                    let char = String.fromCharCode(code);
                    //    if character is not a digit
                    // OR
                    // if the value already contains 15/16 digits and there is no slecction
                    // return false ( the character is ot inserted)

                    if(/\D/.test(char) || (this.selectionStart === this.selectionEnd && this.value.replace(/\D/g, '').length >= (/^\D*3[47]/.test(this.value) ? 15 : 16))) // 15 digits if American express
                    {
                        return false;
                    }
                    format_and_pos(char);
                }
            });

            // backspace doesnot fire the keypress event
            input.addEventListener('keydown', function(e)
            {
                if (e.keyCode === 8 || e.keyode === 46) // backspace or delete
                {
                    e.preventDefault();
                    format_and_pos('', this.selectionStart === this.selectionEnd);
                }
            });

            input.addEventListener('paste', function(e){
                // a timeouy is needed to gt the new value pasted
                setTimeout(function(){
                format_and_pos('');
            }, 50)
            });

            input.addEventListener('blur', function()
            {
                // reformat onblur just in case (optional)
                format_and_pos(this, false)
            });
        };  
        
        // append card number to virtual card
       
    }

input_credit_card = document.getElementById('credit-card');

// append content of vitual card
 document.querySelector('#credit-card').addEventListener( 'keyup', function(){
    document. querySelector('.last-digit').innerHTML = this.value;
});

document.getElementById('card-name').addEventListener('keyup', function(){
    document.querySelector('.name-holder').innerHTML = this.value; 
});

document.getElementById('exp-month').addEventListener('keyup', function(){
    document.querySelector('.exp-month').innerHTML = this.value; 
});

document.getElementById('exp-year').addEventListener('keyup', function(){
    document.querySelector('.exp-year').innerHTML = this.value; 
});

//  time
 let display = document.getElementById('time');

function startTime(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function (){
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerHTML = minutes + ':' + seconds;
        if ( --timer < 0) {
            timer = duration;
        }
    }, 1000 );
}
window.onload = function () {
    let minutes = 60 * 3;
    startTime(minutes,display);
}

 