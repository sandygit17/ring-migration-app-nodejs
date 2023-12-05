const migrateRings = (N, source, target, auxiliary) => {
    const steps = [];
  
    const moveRing = (n, from, to, aux) => {
      if (n === 1) {
        steps.push(`${n}: ${from} to ${to}`);
      } else {
        moveRing(n - 1, from, aux, to);
        steps.push(`${n}: ${from} to ${to}`);
        moveRing(n - 1, aux, to, from);
      }
    };
  
    moveRing(N, source, target, auxiliary);
  
    return steps;
  };
  
  module.exports = { migrateRings };
  