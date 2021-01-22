module.exports = function toReadable (number = 0) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dec = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let hun = 'hundred';
    let txtHun = '';
    let txtDec = '';
    let txtUn = '';
  
    let numHun = Math.floor((number / 100));
    let numDec = Math.floor((number % 100) / 10);
    let numUn = number % 10;
  
    if (number == 0) return 'zero';

    if (numHun < 1) {
      txtHun = '';
    } else {
      txtHun = units[numHun] + ' hundred';
    };
  
    if (numDec< 1) {
      txtDec = '';
    } else if (numDec > 1) {
      txtDec = dec[numDec-2];
    } else {
      txtDec = units[10+numUn];
      txtUn = '';
    }
    
    if (numDec != 1) {
        if (numUn != 0) {
            txtUn = units[numUn];
        }
    }
  
    let result = txtHun + ' '+ txtDec + txtUn;
    return result.trim()
}
