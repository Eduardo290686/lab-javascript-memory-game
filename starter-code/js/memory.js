class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (this.cards != undefined) {
      let count = this.cards.length;
      while (count) {
        this.cards.push(this.cards.splice(Math.floor(Math.random() * count), 1)[0]);
        count -= 1;
      }
    }
    return undefined;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    } else{
      return false;
    }
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    } else {
      return false;
    }
  }
}
