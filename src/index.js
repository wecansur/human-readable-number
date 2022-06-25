module.exports = function toReadable (number) {
    const numberStr = String(number);
    let result = '';
  
    function whatKind (number) {
       if (numberStr.length === 1) {
          return 'x';
      } else if ((numberStr.length === 2) && (numberStr[0] === '1')) {
          return '1x';
      } else if ((numberStr.length === 2) && (numberStr[0] !== '1')) {
        return 'xx';
      } else if ((numberStr.length === 3) && (numberStr[1] === '0') && (numberStr[2] === '0')) {
        return 'x00';    
      } else if ((numberStr.length === 3) && (numberStr[1] === '0')) {
        return 'x0x';
      } else if ((numberStr.length === 3) && (numberStr[1] === '1')) {
        return 'x1x';
      } else if ((numberStr.length === 3) && (numberStr[1] !== '0') && (numberStr[1] !== '1')) {
        return 'xxx';
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
      
      } else if (whatKind (number) === '1x') {
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

        } else if (whatKind (number) === 'xx') {
            for (let i = 1; i >= 0; i--) {
                
            }
        }
    } 
  
  
 
