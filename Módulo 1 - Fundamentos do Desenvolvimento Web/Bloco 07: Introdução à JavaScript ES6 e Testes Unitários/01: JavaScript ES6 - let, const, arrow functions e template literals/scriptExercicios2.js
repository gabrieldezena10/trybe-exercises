//Ex 1
const fatorial = number => {
    let result = 1;
    
        for (let index = 2; index <= number; index += 1) {
            result *= index;
        }
    
        return result;
    }

    
    console.log(fatorial(6))

//Ex 2
const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

//Ex 3
<!DOCTYPE html>
<body>
  <div>
    <span id ="text"></span>
  </div>
  <button id="button_test">click aqui!</button>
</body>
<script>
  let clickCount = 0;
  let textToDisplay = document.getElementById("text");

  document.getElementById("button_test")
          .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);
</script>
</html>




    //Ex 4
    const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

    function buildSkillsPhrase (paramOne) {
        const fun1 = paramInner => (
          `Tryber ${paramInner} aqui!
    
          Tudo bem?`
        );
    
        let result = `${fun1(paramOne)}
    
        Minhas cinco principais habilidades são:`;
    
        array.forEach((skill, index) =>
        result = `${result}
    
        - ${skill}`);
    
        result = `
    {result}
    
        #goTrybe
        `;
    
        return result;
    }
    
    console.log(buildSkillsPhrase("Lucas"));