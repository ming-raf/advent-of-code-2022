import * as fs from 'fs';

class Day1 {

    constructor() {

    }

    public doStuff() {
        let file = fs.readFileSync('input.txt', 'utf8')
        let content = file.split('\n\n')
        let c = 
        console.log(content)
    }
}

let day1 = new Day1()
day1.doStuff()


