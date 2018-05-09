// let fs = require('fs');


class View {

  static viewHelp(isi) {
    console.log(isi)

  }
  static viewCari(isi) {
    console.log(isi)
  }


  static viewDescending(data) {

    for (let i = data.length - 1; i >= 0; i--) {

      if (data[i].status === '[X]') {
        console.log(data[i].Id + '. ' + data[i].task)
      }

    }

  }


  static viewList(dataparse) {

    for (let i = 0; i < dataparse.length; i++) {
      console.log(dataparse[i].Id + '. ' + dataparse[i].task)
    }

  }

  // static viewTag(tag) {
  //
  //   for (let i = 0; i < tag.length; i++) {
  //     console.log('tags')
  //   }
  //
  // }


  static showdes(data) {

    for (let i = data.length - 1; i >= 0; i--) {
      console.log(data[i].Id + '. ' + data[i].task)
    }

  }


  static viewcompleted(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === '[X]') {
        console.log(data[i].Id + '. ' + data[i].task)
      }
    }
  }



}



module.exports = View
