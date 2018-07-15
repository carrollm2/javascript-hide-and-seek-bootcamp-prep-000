function getFirstSelector(selector){

  return document.querySelector(selector)
}

function nestedTarget(){

<<<<<<< HEAD
  return document.querySelector("#nested .target")
=======
  return document.querySelector(".target")
>>>>>>> c15c79cc9864f67d7b01419704752c7c2123dbd1
}

function increaseRankBy(n){

  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (parseInt(rank[i]) + n).toString()
  }
  return rank
}

function deepestChild(){
<<<<<<< HEAD
=======
  //const lis = document.getElementById('app').querySelectorAll('div.grand-node')

>>>>>>> c15c79cc9864f67d7b01419704752c7c2123dbd1

  /*
  const main = document.getElementsByTagName('main')[0]
  const grandnode = main.children[4]

  const div = grandnode.children[0]
  const div1 = div.children[0]
  const div2 = div1.children[0]
  const div3 = div2.children[0]

  return div3
  */

  return document.querySelector('#grand-node div div div div')

}
