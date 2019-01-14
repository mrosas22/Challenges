const str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  //split a string into an array of substrings
  const jadenString = this.split(' ');
  for ( let i = 0; i < jadenString.length; i++) {
    jadenString[ i ] = jadenString[ i ].charAt(0).toUpperCase() + jadenString[ i ].substr( 1 );
  }
  //returns a new string by concatenating all of the elements
  const capitalizedString = jadenString.join(' ');
  return capitalizedString
 }
 
 str.toJadenCase();