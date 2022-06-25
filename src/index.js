module.exports = function toReadable (number) {
    const numberStr = String(number);
    
    const whatKind = (numberStr) => {
        if (numberStr === '0') {
          return '0'
        } else if (numberStr.length === 1) {
           return 'x';
       } else if ((numberStr.length === 2) && (numberStr[0] === '1')) {
           return '1x';
       } else if ((numberStr.length === 2) && (numberStr[0] !== '0') && (numberStr[0] !== '1') && (numberStr[1] === '0')) {
         return 'x0'; 
       } else if ((numberStr.length === 2) && (numberStr[0] !== '1')) {
         return 'xx';
       } else if ((numberStr.length === 3) && (numberStr[1] === '0') && (numberStr[2] === '0')) {
         return 'x00';    
       } else if ((numberStr.length === 3) && (numberStr[1] === '0')) {
         return 'x0x';
       } else if ((numberStr.length === 3) && (numberStr[1] === '1')) {
         return 'x1x';
       } else if ((numberStr.length === 3) && (numberStr[1] !== '0') && (numberStr[1] !== '1') && (numberStr[2] === '0')) {
          return 'xx0';
       } else if ((numberStr.length === 3) && (numberStr[1] !== '0') && (numberStr[1] !== '1')) {
         return 'xxx';
       }
     }

    const digit = (str) => {
      switch (str) {
        case '1':
         return 'one';
        case '2':
         return 'two';
        case '3':
         return 'three';
        case '4':
         return 'four';
        case '5':
         return 'five';
        case '6':
         return 'six';
        case '7':
         return 'seven';
        case '8':
         return 'eight';
        case '9':
         return 'nine';
        default:
         return undefined; 
      }
    }

    const teen = (str) => {
      switch (str) {
        case '10':
         return 'ten';
        case '11':
         return 'eleven';
        case '12':
         return 'twelve';
        case '13':
         return 'thirteen';
        case '14':
         return 'fourteen';
        case '15':
         return 'fifteen';
        case '16':
         return 'sixteen';
        case '17':
         return 'seventeen';
        case '18':
         return 'eighteen';
        case '19':
         return 'nineteen';
        default:
         return undefined; 
      }
    }

    const dozens = (str) => {
      switch (str) {
        case '2':
          return 'twenty';
        case '3':
          return 'thirty';
        case '4':
          return 'forty';
        case '5':
          return 'fifty';
        case '6':
          return 'sixty';
        case '7':
          return 'seventy';
        case '8':
          return 'eighty';
        case '9':
          return 'ninety';
        default:
          return undefined;
      }
    }

    

 
    if (whatKind(numberStr) === '0') {
      return 'zero';
    } else if (whatKind(numberStr) === 'x') {
      return digit(numberStr);
    } else if (whatKind(numberStr) === '1x') {
      return teen(numberStr);
    } else if (whatKind(numberStr) === 'x0') {
      return `${dozens(numberStr[0])}`; 
    } else if (whatKind(numberStr) === 'xx') {
      return `${dozens(numberStr[0])} ${digit(numberStr[1])}`;
    } else if (whatKind(numberStr) === 'x00') {
      return `${digit(numberStr[0])} hundred`;
    }else if (whatKind(numberStr) === 'x0x') {
      return `${digit(numberStr[0])} hundred ${digit(numberStr[2])}`;
    } else if (whatKind(numberStr) === 'x1x') {
      return `${digit(numberStr[0])} hundred ${teen(numberStr.slice(1))}`;
    }else if (whatKind(numberStr) === 'xx0') {
      return `${digit(numberStr[0])} hundred ${dozens(numberStr[1])}`
    } else if (whatKind(numberStr) === 'xxx') {
      return `${digit(numberStr[0])} hundred ${dozens(numberStr[1])} ${digit(numberStr[2])}`;
    }
  }
  
   
   
   
   
   
   

 
