const numberFormat = (value: number) => {
  return value.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default numberFormat;
