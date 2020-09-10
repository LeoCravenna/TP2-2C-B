// Complete the isBalanced function below.

// HECHA POR EL PROFESOR/////////////////////////////////
function isBalanced(s) {
    let aux = -1;

    while (s.length != 0) {
      aux = s.length;

      s = s.replace("()","");
      s = s.replace("[]","");
      s = s.replace("{}","");

      if(aux == s.length) return "NO";
    }

  return "YES";

}

// TEST
console.log(isBalanced('{[') == 'NO');
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
////////////////////////////////////////////////////////

// HECHA POR MI
/*function isBalanced(s) {

    let brackeds = "[]{}()<>"
    let stack = []
  
    for(let bracked of s) {
      let b = brackeds.indexOf(bracked)
  
      if (b === -1){
        continue
      }
  
      if(b % 2 === 0) {
        stack.push(b + 1)
        
      } else {
        if(stack.pop() !== b) {
          return 'NO';
        }
      return 'YES';
      }
    }
    return stack.length === 0
}

// TESTS QUE TRAE "YES" O "NO" DEPENDIENDO SI ES TRUE O FALSE
console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));
console.log(isBalanced('{{[[(())]]}}'));
console.log(isBalanced('{{[[(())]]}}{}()'));

// ESTE TESTS LO DEJO PARA MOSTRAR QUE LAS COMPARACIONES DAN TRUE
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');*/