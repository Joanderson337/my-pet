import { ReactComponent as X } from './svg/close-icon.svg';
import { ReactComponent as Close } from './svg/icon-close.svg';
import { ReactComponent as Back } from './svg/voltar.svg';

const IconsTypes = {
  x : X,
  close: Close,
  back : Back
};

export default IconsTypes;

export type IconName =
  | 'x'
  | 'close'
  | 'back'



