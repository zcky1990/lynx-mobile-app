import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const AvatarWithGroup = Object.assign(Avatar, { Group: AvatarGroup });

export { AvatarWithGroup as Avatar, AvatarGroup };
export type { AvatarProps, AvatarGroupProps, AvatarGroupItem, AvatarSize } from './AvatarCommon';
