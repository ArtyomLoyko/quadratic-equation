module.exports = function solveEquation(equation) {
  var roots = [], arr = equation.split(' ');
  var a = +arr[0], b = +(arr[3] + arr[4]), c = +(arr[7] + arr[8]);
  var discriminant = Math.pow(b, 2) - (4 * a * c);
  var x1 = (-b + Math.sqrt(discriminant)) / (2 * a), x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  x1 = +x1.toFixed(1);
  x2 = +x2.toFixed(1);
  if(x1 < x2) {
    roots.push(x1);
    roots.push(x2);
  } else {
    roots.push(x2);
    roots.push(x1);
  };
  return roots;
}
