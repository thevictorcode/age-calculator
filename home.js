function ageinMonths() {
    let birthYear = prompt ('What is your birth year?');
    let result1 = (2021 - birthYear) * 12 ;
    let result2 = (2021 - birthYear) * 365 ;
    let h2 = document.createElement('h2');
    let answer = document.createTextNode('You are ' + result1 + ' months ' + 'or ' + result2 + ' days old.');
    h2.setAttribute('id', 'ageinMonths');
    h2.appendChild(answer);
    document.getElementById('answer-field').appendChild(h2);
}

function reset() {
    document.getElementById('ageinMonths').remove();
}