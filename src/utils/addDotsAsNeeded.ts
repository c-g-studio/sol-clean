interface IAddDotsAsNeeded {
  (
    text: string,
    maxTextLength: number
  ): { text: string; isTextSliced: boolean };
}

export const addDotsAsNeeded: IAddDotsAsNeeded = (text, maxTextLength) => {
  return {
    text:
      text?.length > maxTextLength
        ? `${text.slice(0, maxTextLength)}...`
        : text,
    isTextSliced: text?.length > maxTextLength
  };
};
