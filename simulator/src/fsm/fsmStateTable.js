

export function createStateTableButton(){
   
    const nodes = JSON.parse(localStorage['fsm'])     
    const N = Math.ceil(Math.log2(nodes.length))
    const numFlipFlop= 2**N
    // extend to more inputs later
    const numberOfInput = 1 
    
           

           
            createStatePrompt(nodes,N ,numberOfInput)

           
}


function createStatePrompt(nodes ,N ,numberOfInput, scope = globalScope) {
    
    let numOfBitsPerState = Math.ceil(Math.log2(nodes.length))
    let cols = 2*numOfBitsPerState + 1 + 1 ;

    let s = '<table  class="content-table">';
    s += '<tbody style="display:block; max-height:70vh; overflow-y:scroll" >';
    s += '<tr>';
    for (let i = 0; i < numOfBitsPerState; i++) { s += `<th>Q_${'A'+i}</th>`; }
    s += `<th>I/P</th>`; 
    for (let i = 0; i < numOfBitsPerState; i++) { s += `<th>Q+_${'A'+i}</th>`; }
    s += `<th>O/P</th>`; 
   
    s += '</tr>';

var matrix = [];

    for (var i = 0; i < cols + 1; i++) {
        matrix[i] = new Array((1 <<( numOfBitsPerState + 1)));
    }
    for (var i = 0; i <( numOfBitsPerState + 1); i++) {
        for (var j = 0; j < (1 <<( numOfBitsPerState + 1)); j++) {
            matrix[i][j] = (+((j & (1 << (numOfBitsPerState + 1 - i - 1))) != 0));
        }
    }
    for (var j = 0; j < (1 <<( numOfBitsPerState + 1)); j++) {
        s += '<tr>';
       
        for (var i = 0; i <( numOfBitsPerState + 1); i++) {
            s += `<td>${matrix[i][j]}</td>`;
        }
        for (var i = numOfBitsPerState; i <cols-1 -1 ; i++) {
           
            s += `<td>state</td>`;
        
        }  s += `<td>op</td>`
        // for (var i = 0; i < links.length-numberOfInput; i++) {
        //     if (output == null) {
        //         s += `<td class ="output ${outputListNamesInteger[i]}" id="${j}">` + 'x' + '</td>';
        //     // using hash values as they'll be used in the generateBooleanTableData function
        //     }
        // }
        // if (output != null) {
        //     s += `<td class="${outputListNamesInteger[0]}" id="${j}">` + `${output[j]}` + '</td>';
        // }
        s += '</tr>';
    }

    s += '</tbody>';
    s += '</table>';
    $('#fsmEditor').empty()
    $('#fsmEditor').append(s)
}