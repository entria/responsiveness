import { SMALL, MEDIUM, LARGE } from '../constants';
import config from '../config';

export default function getViewport(width) {
  if (width >= config.breakpoints[LARGE]) {
    return LARGE;
  }

  if (width >= config.breakpoints[MEDIUM]) {
    return MEDIUM;
  }

  return SMALL;
}
