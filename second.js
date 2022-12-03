class Render {
    render() {
        console.log('где имплетация?');
    }
}
class ConsoleRenderer extends Render {
    render(data) {
        console.table(data);
    }
}

class WebRenderer extends Render {
    render(data) {
        const keys = Object.keys(data[0]);
        const line = (row) => '<tr>' +
        keys.map((key) => `<td>${row[key]}</td>`).join('') +
        '</tr>';
        const output = [
            '<table><tr>',
            keys.map((key) => `<th>${key}</th>`).join(''),
            '</tr>',
            data.map(line).join(''),
            '</table>',
        ];
        console.log(output.join(''));
    }
}
class MarkdownRenderer extends Render {
    render(data) {
    const keys = Object.keys(data[0]);
    const line = (row) => '|' +
    keys.map((key) => `${row[key]}`).join('|') + '|\n';
    const output = [
'|', keys.map((key) => `${key}`).join('|'), '|\n',
'|',  keys.map(() => '---').join('|'), '|\n',
data.map(line).join(''),
    ];
    console.log(output.join(''));
    }
}
class Context {
    constructor(renderer) {
        this.renderer = renderer;
    }
    process(data) {
        return this.renderer.render(data);
    }
}



const non = new Context(new Render());
const con = new Context(new ConsoleRenderer());
const web = new Context(new WebRenderer());
const mkd = new Context(new MarkdownRenderer());

const persons = [
    {name:'oleg', city:'sterlitamak', born:'2015'},
    {name:'peter', city:'sterlitamak', born:'1989'},
    {name:'sanek', city:'sterlitamak', born:'2005'},
];
console.group('Abstract Strategy:');
non.process(persons);
console.groupEnd();

console.group('\nConsoleRenderer:');
non.process(persons);
console.groupEnd();

console.group('\nWebRenderer');
non.process(persons);
console.groupEnd();

console.group('\nMarkDownRenderer');
non.process(persons);
console.groupEnd();