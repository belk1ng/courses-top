const declinationByNumber = (
  count: number,
  textForms: [string, string, string]
) => {
  count = Math.abs(count) % 100;
  const remainder = count % 10;

  if (count > 10 && count < 20) {
    return textForms[2];
  }

  if (remainder > 1 && remainder < 5) {
    return textForms[1];
  }

  if (remainder === 1) {
    return textForms[0];
  }

  return textForms[2];
};

export default declinationByNumber;
