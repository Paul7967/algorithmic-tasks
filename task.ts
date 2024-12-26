('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

const arh = (str: string) => {
    const l = str.length;

    let resultString = '';
    let substrLength = 1;
    for (let i=1;i<l;i++) {
        let currSimb: string = str[i-1];
        
        if (currSimb!==str[i]) {
            if (substrLength===1) {
                resultString = resultString + currSimb
            }
            
            if (substrLength!==1) {
                resultString = resultString + currSimb + String(substrLength)
            }
            
            substrLength=1;
        }
        
        if (currSimb===str[i]) {
            substrLength++
        }

        if (i===l-1) {
            resultString = resultString + currSimb + String(substrLength);
        }
    }
    return resultString;
}

const result = arh('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD');
console.log(result);
console.log('AV3B3V2XDHJF4D6HA4J3D2SLS3D4');

