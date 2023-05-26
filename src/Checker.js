const fs = require('fs');
const path = require('path');

const config = require('../config/');

class Checker {
    constructor() {
        const fileContent = fs.readFileSync(path.join(__dirname, '..', config.STATS_PATH), "utf8");
        this.numbers = fileContent.split(',');
    }

    async getFavoritesNumsByNum(num) {
        const tempArr = [];
        for(let i = 0; i < this.numbers.length - 1; i++) {
            if (this.numbers[i] === `${num}`)
                tempArr.push(this.numbers[i + 1]);
        }
        return this.sortByFrequencyAndFilter(tempArr).slice(0, 6);
    }

   sortByFrequencyAndFilter(myArray) {
        var newArray = [];
        var freq = {};

        var i=myArray.length-1;
        for (var i;i>-1;i--)
        {
            var value = myArray[i];
            freq[value]==null?freq[value]=1:freq[value]++;
        }

        for (var value in freq)
        {
            newArray.push(value);
        }

        function compareFreq(a,b)
        {
            return freq[b]-freq[a];
        }

        return newArray.sort(compareFreq);
    }
}

module.exports = Checker;