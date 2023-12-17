function createCounter(init) {
    const start = init;
    return {
      increment() {
        init++;
        return init;
      },
      decrement() {
        init--;
        return init;
      },
      reset() {
        init = start;
        return init;
      }
    };
}
