import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

/** Attach Group for compound usage (Described with divide). */
const CheckboxWithGroup = Object.assign(Checkbox, { Group: CheckboxGroup });

export { CheckboxWithGroup as Checkbox, CheckboxGroup };
export type { CheckboxProps, CheckboxGroupProps, CheckboxGroupItem } from './CheckboxCommon';
