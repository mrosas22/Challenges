//Given a year, return the century it is in
function century(year){
    centuryFromYear = year /100;
    return Math.ceil(centuryFromYear);
  
}
  
century(1705)//===>18
// century(1900)//===>19
// century(1601)//===>17
// century(2000)//===>20
// century(89)//===>1