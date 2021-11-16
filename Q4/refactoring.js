// 4. Refactor the code below.
// (do not create functions or constants, code refactor is required only)

if (province == "ONTARIO") {
  getOntarioRate();
} else if (province == "QUEBEC") {
  getQuebecRate();
} else if (province == "ALBERTA") {
  getAlbertaRate();
} else {
  getOtherRate();
}

function getOntarioRate() {
  rate = ONTARIO_RATE;
  amt = base * ONTARIO_RATE;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}

function getQuebecRate() {
  rate = QUEBEC_RATE;
  amt = base * QUEBEC_RATE;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
  points = 2;
}

function getAlbertaRate() {
  rate = ALBERTA_RATE;
  amt = base * ALBERTA_RATE;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}

function getOtherRate() {
  rate = 1;
  amt = base;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}
