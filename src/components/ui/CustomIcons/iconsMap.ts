import type { SvgProps } from 'react-native-svg';

import BackIcon from './BackIcon';
import BehaviorIcon from './BehaviorIcon';
import ClimatIcon from './ClimatIcon';
import LearnIcon from './LearnIcon';
import LikeIcon from './LikeIcon';
import LiveIcon from './LiveIcon';
import QuizIcon from './QuizIcon';
import RefreshIcon from './RefreshIcon';
import ShareIcon from './ShareIcon';
import SurvivalIcon from './SurvivalIcon';
import WorldIcon from './WorldIcon';

import type { MainStackParamList } from 'src/types';

export const ICON_NAMES = [
  'back',
  'behavior',
  'climate',
  'refresh',
  'share',
  'survival',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export const ICONS_MAP: Record<IconName, React.FC<SvgProps>> = {
  back: BackIcon,
  behavior: BehaviorIcon,
  climate: ClimatIcon,
  refresh: RefreshIcon,
  share: ShareIcon,
  survival: SurvivalIcon,
};

export const TAB_BAR_ICONS_MAP: Record<
  keyof MainStackParamList,
  React.FC<SvgProps>
> = {
  LiveScreen: LiveIcon,
  LearnScreen: LearnIcon,
  QuizScreen: QuizIcon,
  SavedScreen: LikeIcon,
  WorldScreen: WorldIcon,
};
