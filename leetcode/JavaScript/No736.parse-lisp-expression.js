/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You are given a string expression representing a Lisp-like expression to return the integer value of.
 * The syntax for these expressions is given as follows.
 *
 * An expression is either an integer, a let-expression, an add-expression, a mult-expression, or an assigned variable. Expressions always evaluate to a single integer.
 * (An integer could be positive or negative.)
 * A let-expression takes the form (let v1 e1 v2 e2 ... vn en expr), where let is always the string "let", then there are 1 or more pairs of alternating variables and expressions, meaning that the first variable v1 is assigned the value of the expression e1, the second variable v2 is assigned the value of the expression e2, and so on sequentially; and then the value of this let-expression is the value of the expression expr.
 * An add-expression takes the form (add e1 e2) where add is always the string "add", there are always two expressions e1, e2, and this expression evaluates to the addition of the evaluation of e1 and the evaluation of e2.
 * A mult-expression takes the form (mult e1 e2) where mult is always the string "mult", there are always two expressions e1, e2, and this expression evaluates to the multiplication of the evaluation of e1 and the evaluation of e2.
 * For the purposes of this question, we will use a smaller subset of variable names. A variable starts with a lowercase letter, then zero or more lowercase letters or digits. Additionally for your convenience, the names "add", "let", or "mult" are protected and will never be used as variable names.
 * Finally, there is the concept of scope. When an expression of a variable name is evaluated, within the context of that evaluation, the innermost scope (in terms of parentheses) is checked first for the value of that variable, and then outer scopes are checked sequentially. It is guaranteed that every expression is legal. Please see the examples for more details on scope.
 *
 * Evaluation Examples:
 * Input: (add 1 2)
 * Output: 3
 *
 * Input: (mult 3 (add 2 3))
 * Output: 15
 *
 * Input: (let x 2 (mult x 5))
 * Output: 10
 *
 * Input: (let x 2 (mult x (let x 3 y 4 (add x y))))
 * Output: 14
 * Explanation:
 * In the expression (add x y), when checking for the value of the variable x,
 * we check from the innermost scope to the outermost in the context of the variable we are trying to evaluate.
 * Since x = 3 is found first, the value of x is 3.
 *
 * Input: (let x 3 x 2 x)
 * Output: 2
 * Explanation: Assignment in let statements is processed sequentially.
 *
 * Input: (let x 1 y 2 x (add x y) (add x y))
 * Output: 5
 * Explanation:
 * The first (add x y) evaluates as 3, and is assigned to x.
 * The second (add x y) evaluates as 3+2 = 5.
 *
 * Input: (let x 2 (add (let x 3 (let x 4 x)) x))
 * Output: 6
 * Explanation:
 * Even though (let x 4 x) has a deeper scope, it is outside the context
 * of the final x in the add-expression.  That final x will equal 2.
 *
 * Input: (let a1 3 b2 (add a1 1) b2)
 * Output 4
 * Explanation:
 * Variable names can contain digits after the first character.
 *
 * Note:
 * The given string expression is well formatted: There are no leading or trailing spaces,
 * there is only a single space separating different components of the string, and no space between adjacent parentheses.
 * The expression is guaranteed to be legal and evaluate to an integer.
 * The length of expression is at most 2000. (It is also non-empty, as that would not be a legal expression.)
 * The answer and all intermediate calculations of that answer are guaranteed to fit in a 32-bit integer.
 *
 * 给定一个类似 Lisp 语句的表达式 expression，求出其计算结果。
 * 表达式语法如下所示:
 *
 * 表达式可以为整数，let 语法，add 语法，mult 语法，或赋值的变量。表达式的结果总是一个整数。(整数可以是正整数、负整数、0)
 * 1. let 语法表示为 (let v1 e1 v2 e2 ... vn en expr), 其中 let语法总是以字符串 "let"来表示，接下来会跟随一个或多个交替变量或表达式，也就是说，第一个变量 v1被分配为表达式 e1 的值，第二个变量 v2 被分配为表达式 e2 的值，以此类推；最终 let 语法的值为 expr表达式的值。
 * 2. add 语法表示为 (add e1 e2)，其中 add 语法总是以字符串 "add"来表示，该语法总是有两个表达式e1、e2, 该语法的最终结果是 e1 表达式的值与 e2 表达式的值之和。
 * 3. mult 语法表示为 (mult e1 e2) ，其中 mult 语法总是以字符串"mult"表示， 该语法总是有两个表达式 e1、e2，该语法的最终结果是 e1 表达式的值与 e2 表达式的值之积。
 *
 * 在该题目中，变量的命名以小写字符开始，之后跟随0个或多个小写字符或数字。为了方便，"add"，"let"，"mult"会被定义为"关键字"，不会在表达式的变量命名中出现。
 * 最后，要说一下作用域的概念。计算变量名所对应的表达式时，在计算上下文中，首先检查最内层作用域（按括号计），然后按顺序依次检查外部作用域。
 * 我们将保证每一个测试的表达式都是合法的。有关作用域的更多详细信息，请参阅示例。
 */

/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function(expression) {
  const contexts = [{}]
  const operations = [[]]

  let i = 0
  let status = null

  while (i < expression.length) {
      if (expression[i] === ' ') {
        i += 1
        continue
      }
      if (expression[i] === '(') {
        contexts.push(
          Object.assign({}, contexts.slice(-1)[0])
        )
        i += 1
        const j = i
        while (i < expression.length && expression[i] !== ' ') i += 1
        status = expression.slice(j, i)
        operations.push([status])
        continue
      } else if (expression[i] === ')') {
        const operation = operations.pop()
        const context = contexts.pop()

        const op = operation.shift()
        switch (op) {
          case 'mult':
          case 'add':
            const n1 = context[operation[0]] === undefined
              ? Number(operation[0])
              : context[operation[0]]
            const n2 = context[operation[1]] === undefined
              ? Number(operation[1])
              : context[operation[1]]

            if (op === 'mult') {
              operations[operations.length - 1].push(n1 * n2)
            } else {
              operations[operations.length - 1].push(n1 + n2)
            }
            break
          case 'let':
            while (operation.length) {
              let val = operation.pop()
              if (Number.isNaN(parseInt(val))) val = context[val]
              if (val !== undefined) {
                operations[operations.length - 1].push(val)
                break
              }
            }
            break
        }

        const preOp = operations[operations.length - 1]
        if (
          preOp[0] === 'let' &&
          preOp.length > 1 &&
          Number.isNaN(parseInt(preOp[preOp.length - 2])) &&
          !Number.isNaN(parseInt(preOp[preOp.length - 1]))
        ) {
          const num = preOp.pop()
          const variable = preOp.pop()
          contexts[contexts.length - 1][variable] = Number(num)
          preOp.push(Number(num))
        }
        i += 1
        continue
      }

      const j = i
      while (i < expression.length && expression[i] !== ' ' && expression[i] !== ')') i += 1
      const variable = expression.slice(j, i)

      const curContext = contexts[contexts.length - 1]
      const curOperation = operations[operations.length - 1]
      switch (status) {
        case 'let':
          if (
            curOperation.length > 1 &&
            Number.isNaN(parseInt(curOperation.slice(-1)[0])) &&
            !Number.isNaN(parseInt(variable))
          ) {
            curContext[curOperation.pop()] = Number(variable)
          }
          curOperation.push(variable)
          break
        case 'mult':
        case 'add':
          curOperation.push(variable)
          break
      }
  }

  return operations.pop().pop()
}
