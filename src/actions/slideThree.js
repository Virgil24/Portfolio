export const CHANGE__COLOR__HOVER = 'CHANGE__COLOR__HOVER';
export const LEFT_HOVER = 'LEFT_HOVER';

export const onMouseChangeColor = () => ({
  type: CHANGE__COLOR__HOVER,
});

export const onMouseLeftHover = () => ({
    type: LEFT_HOVER,
  });