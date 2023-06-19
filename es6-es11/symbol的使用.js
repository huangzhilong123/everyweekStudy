let game = {}
let methods = {
    up:Symbol(),
    down:Symbol()
}
game[methods.up] = function (){
    console.log('我可以改变自己')
}
game[methods.down] = function (){
    console.log('我可以改变自己')
}
console.log(game)
let youxi = {
    name:'lanrensha',
    [Symbol('say')]:function (){
        console.log('shouhua')
    },
    [Symbol('zibao')]:function (){
        console.log('ohuo')
    }
}
console.log(youxi)
