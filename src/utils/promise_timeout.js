const promiseTimeout = doAfterTime => {
  return new Promise(resolve => {
    setTimeout(() => {
      doAfterTime(resolve);
    }, 700);
  });
};

export default promiseTimeout;
