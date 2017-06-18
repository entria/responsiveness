import config from './config';

export function responsiveStyle(styles = {}) {
  styles.large = styles.large || null;
  styles.medium = styles.medium || null;
  styles.small = styles.small || null;

  if(window.innerWidth >= config.breakpoints.large) {
    return styles.large;
  }
  if(window.innerWidth >= config.breakpoints.medium) {
    return styles.medium;
  }
  return styles.small;
};