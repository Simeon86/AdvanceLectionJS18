function marka(model) {
    this.model = model;
    this.bipbip = function () {
        alert (`${this.model} - bip bip`);

        alert (this.model + ' - Bip bip')

        alert (([this.model, 'Bip Bip']).join(' - '))
    }
    return this
}

var car = new marka('Renault')
var car2 = new marka('Hunday')
car.bipbip()
car2.bipbip()



function useBind() {

    this.next = function() {
        alert (this.model)
    } 
    return this;
}
var car = useBind.bind({
    model: 'Tesla'
})()

var car2 = useBind.bind({
    model: 'Lada'
})()

car2.next()
car.next()

// useBind()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// new useBind()
// useBind {next: ƒ}next: ƒ ()[[Prototype]]: Object
// useBind.bind({
//     model: 'Tesla'
// })
// ƒ useBind() {

//     this.next = function() {
//         alert (this.model)
//     } 
//     return this;
// }
// useBind.bind({
//     model: 'Tesla'
// })()
// {model: 'Tesla', next: ƒ}

function useBind1(param) {

    this.parametur = param;

    this.next = function() {
        alert (this.model)
    } 
    return this;
}

var car3 = useBind1.bind({model: 'Opel', type: 'Casoline'})(150)

var car4 = useBind1.call({model: 'Varburg'}, 123)

var car5 = useBind1.apply({model: 'Moskvich'}, [234])

