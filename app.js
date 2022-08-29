class Card {
  constructor(name, cost) {
    this.name = name
    this.cost = cost
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost)
    this.power = power
    this.res = res
  }

  attack(target) {
    if (target instanceof Unit) {
      target.res -= this.power
    } else {
      throw new Error("Invalid target! Can only attack Units.")
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost)
    this.text = text
    this.stat = stat
    this.magnitude = magnitude
  }

  play(target) {
    if (target instanceof Unit) {
      target[this.stat] += this.magnitude
    } else {
      throw new Error("Invalid target! Can only play on Units.")
    }
  }
}

redNinja = new Unit("Red Belt Ninja", 3, 3, 4)
console.log(redNinja)
hardAlgo = new Effect(
  "Hard Algo",
  2,
  "increase target's resilience by 3",
  "res",
  3
)
hardAlgo.play(redNinja)
console.log(redNinja)

blackNinja = new Unit("Black Belt Ninja", 4, 5, 4)
promiseRej = new Effect(
  "Unhandled promise Rejection",
  1,
  "reduce target's resilience by 2",
  "res",
  -2
)
promiseRej.play(redNinja)
console.log(redNinja)
pairProgrmming = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
)
pairProgrmming.play(redNinja)
console.log(redNinja)
redNinja.attack(blackNinja)
console.log(blackNinja)
