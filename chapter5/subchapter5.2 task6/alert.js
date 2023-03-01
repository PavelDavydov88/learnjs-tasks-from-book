function random(min, max) {
  let a = min -0.5 + Math.random() * (max - min +1);
  return (Math.round(a));
}

alert(random(1, 3));
