const isObjectAndNotNull = (data) => typeof data === 'object'
  && !Array.isArray(data)
  && data !== null;

export default isObjectAndNotNull;
