module.exports = function toReadable (number) {
    const numberStr = String(number);
    let result = '';
  
    function whatKind (number) {
      if (number < 10) {
          return 'x';
      } else if ((number >= 10) && (number < 20)) {
          return 'xx'
      }
    }
  
    if (whatKind (number) === 'x') {
      switch (number) {
        case 0:
         return 'zero';
        case 1:
         return 'one';
        case 2:
         return 'two';
        case 3:
         return 'three';
        case 4:
         return 'four';
        case 5:
         return 'five';
        case 6:
         return 'six';
        case 7:
         return 'seven';
        case 8:
         return 'eight';
        case 9:
         return 'nine';
        default:
         return undefined; 
      }
      return result;
      } else if (whatKind (number) === 'xx') {
          switch (number) {
              case 10:
               return 'ten';
              case 11:
               return 'eleven';
              case 12:
               return 'twelve';
              case 13:
               return 'thirteen';
              case 14:
               return 'fourteen';
              case 15:
               return 'fifteen';
              case 16:
               return 'sixteen';
              case 17:
               return 'seventeen';
              case 18:
               return 'eighteen';
              case 19:
               return 'nineteen';
              default:
               return undefined; 
            }
            return result; 
      }
    } 
  
  
  console.log(toReadable (5));
