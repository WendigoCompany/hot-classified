export const text_span = (
  txt = "",
  style = {
    color: undefined,
    backgroundColor: undefined,
  }
) => {
  return `<span style={${style}}>${txt}</span>`;
};
