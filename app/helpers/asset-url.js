import { helper } from '@ember/component/helper';

export default helper(function assetUrl(params/*, hash*/) {
  return `https://helenung.github.io/images/${params[0]}`;  
});
