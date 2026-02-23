import type { SwitchProps } from "./SwitchCommon";
import { SwitchRoot } from "./SwitchRoot";
import { SwitchThumb } from "./SwitchThumb";
import { SwitchTrack } from "./SwitchTrack";

function SwitchComponent(props: SwitchProps) {
  const { value, onValueChange, interaction } = props;
  return (
    <SwitchRoot value={value} onValueChange={onValueChange} interaction={interaction}>
      <SwitchTrack>
        <SwitchThumb />
      </SwitchTrack>
    </SwitchRoot>
  );
}

/** Compound Switch: use Switch.Root, Switch.Track, Switch.Thumb for custom layout. */
export const Switch = Object.assign(SwitchComponent, {
  Root: SwitchRoot,
  Track: SwitchTrack,
  Thumb: SwitchThumb,
});
