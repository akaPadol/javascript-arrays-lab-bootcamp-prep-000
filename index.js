const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
kittens=[...kittens,name]
}

function destructivelyPrependKitten(name){
  kittens=[name,...kittens]
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var res = kittens
  res=[...res,name]
  return res
}
