const answersContent = "<li><input type='radio' name='question'+i+''>" + "a)" + "  " + myQuestions[index].answers.a + "</li>" 
+ "<li><input type='radio' name='question' + index +'' >" + "b)" + "  " + myQuestions[index].answers.b + "</li>"
+ "<li><input type='radio' name='question'+i+''>" + "c)" + "  " + myQuestions[index].answers.c + "</li>"
  + "<li><input type='radio' name='question'+i+''>" + "d)" + "  " + myQuestions[index].answers.d + "</li>"


const answersContent = `"<li> <input type='radio' name=${myQuestions[index]} />" a) ${myQuestions[index].answers.a} "</li>"` +
  `"<li> <input type='radio' name='${myQuestions[index]}' />" b) ${myQuestions[index].answers.b} "</li>"` +
  `"<li> <input type='radio' name='${myQuestions[index]}' />" c) ${myQuestions[index].answers.c} "</li>"` +
  `"<li> <input type='radio' name='${myQuestions[index]}' />" d) ${myQuestions[index].answers.d} "</li>"`;