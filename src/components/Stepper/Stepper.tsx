import type {
  IconType,
  StepIconConfig,
  StepperProps,
} from "./StepperCommon";
import { Icon } from "../Icon/Icon";

const DEFAULT_STEP_ICON_SIZE = 18;

/** Hex colors for Icon (SVG stroke); CSS vars may not resolve in Lynx data-URL SVGs. */
const ICON_COLORS = {
  /** On primary bg (filled): light theme */
  filledLight: "#ffffff",
  /** On primary bg (filled): dark theme */
  filledDark: "#081a1b",
  /** On muted bg: light theme */
  mutedLight: "#202020",
  /** On muted bg: dark theme */
  mutedDark: "#eeeeee",
} as const;

/** Resolve step icon by theme: dark theme → dark icon, light theme → light icon. */
function getStepIconByTheme(
  stepIcon: StepIconConfig,
  theme: "light" | "dark" | undefined
): IconType | undefined {
  if (theme === "dark") {
    return stepIcon.dark ?? stepIcon.default ?? stepIcon.light;
  }
  if (theme === "light") {
    return stepIcon.light ?? stepIcon.default ?? stepIcon.dark;
  }
  return stepIcon.default ?? stepIcon.dark ?? stepIcon.light;
}

function getResolvedIconColor(
  filled: boolean | undefined,
  theme: "light" | "dark" | undefined,
  overrideColor: string | undefined
): string {
  if (overrideColor) return overrideColor;
  if (filled === true) {
    return theme === "dark" ? ICON_COLORS.filledDark : ICON_COLORS.filledLight;
  }
  return theme === "dark" ? ICON_COLORS.mutedDark : ICON_COLORS.mutedLight;
}

function StepIconRender({
  iconConfig,
  theme,
  isCompleted,
  stepNumber,
  filled,
}: {
  iconConfig: StepIconConfig | undefined;
  theme: "light" | "dark" | undefined;
  isCompleted: boolean;
  stepNumber?: number;
  /** When true, container has bg-primary; use primary-foreground for contrast */
  filled?: boolean;
}) {
  const textClass = filled
    ? "text-xs font-semibold text-primary-foreground"
    : "text-xs font-semibold text-foreground";

  if (isCompleted) {
    const color = getResolvedIconColor(filled ?? true, theme, undefined);
    return (
      <Icon
        name="check"
        size={DEFAULT_STEP_ICON_SIZE}
        color={color}
      />
    );
  }
  if (iconConfig) {
    const icon = getStepIconByTheme(iconConfig, theme);
    if (icon) {
      const color = getResolvedIconColor(filled, theme, icon.color);
      return (
        <Icon
          name={icon.name}
          size={icon.size ?? DEFAULT_STEP_ICON_SIZE}
          color={color}
        />
      );
    }
  }
  if (stepNumber != null) {
    return <text className={textClass}>{stepNumber}</text>;
  }
  return null;
}

export function Stepper(props: StepperProps) {
  const {
    steps,
    currentStep,
    variant = "progress",
    theme,
    showProgressBar = true,
    className = "",
  } = props;

  if (steps.length === 0) return null;

  const total = steps.length;
  const progressPercent =
    total <= 1 ? 100 : Math.min(100, (currentStep / (total - 1)) * 100);

  const isDark = theme === "dark";

  const baseTrackClass =
    "h-2 rounded-full bg-muted overflow-hidden";
  const baseFillClass = isDark
    ? "h-full bg-primary transition-all duration-300"
    : "h-full bg-primary transition-all duration-300";

  if (variant === "stepCounter") {
    return (
      <view className={`flex flex-col gap-2 ${className}`.trim()}>
        <view className="flex flex-row items-center justify-between text-sm">
          <text className="font-medium text-foreground">
            Step {currentStep + 1} of {total}
          </text>
        </view>
        {showProgressBar && (
          <view className={baseTrackClass}>
            <view
              className={baseFillClass}
              style={`width: ${progressPercent}%`}
            />
          </view>
        )}
      </view>
    );
  }

  if (variant === "grouped") {
    return (
      <view className={`flex flex-col gap-4 ${className}`.trim()}>
        {steps.map((step, index) => {
          const isCurrent = index === currentStep;
          const isCompleted = index < currentStep;
          const stepIcon = step.icon;
          return (
            <view
              key={index}
              className={`flex flex-row gap-3 rounded-lg border p-3 ${
                isCurrent
                  ? "border-primary bg-primary/5"
                  : isDark
                    ? "border-border bg-card"
                    : "border-border bg-card"
              }`}
            >
              <view
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                  isCompleted
                    ? "bg-primary"
                    : isCurrent
                      ? "bg-primary"
                      : "bg-muted"
                }`}
              >
                <StepIconRender
                  iconConfig={stepIcon}
                  theme={theme}
                  isCompleted={isCompleted}
                  stepNumber={index + 1}
                  filled={isCompleted || isCurrent}
                />
              </view>
              <view className="flex flex-1 flex-col gap-0.5">
                {step.title != null && (
                  <text
                    className={`text-sm font-medium ${
                      isCurrent ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </text>
                )}
                {step.description != null && (
                  <text className="text-xs text-muted-foreground">
                    {step.description}
                  </text>
                )}
              </view>
            </view>
          );
        })}
      </view>
    );
  }

  if (variant === "timeline") {
    return (
      <view className={`flex flex-col ${className}`.trim()}>
        {steps.map((step, index) => {
          const isCurrent = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === steps.length - 1;
          const stepIcon = step.icon;
          return (
            <view key={index} className="flex flex-row gap-3">
              <view className="flex flex-col items-center">
                <view
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    isCompleted
                      ? "bg-primary"
                      : isCurrent
                        ? "bg-primary"
                        : "bg-muted"
                  }`}
                >
                  <StepIconRender
                    iconConfig={stepIcon}
                    theme={theme}
                    isCompleted={isCompleted}
                    stepNumber={index + 1}
                    filled={isCompleted || isCurrent}
                  />
                </view>
                {!isLast && (
                  <view
                    className={`w-0.5 flex-1 min-h-4 ${
                      isCompleted ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </view>
              <view className="flex flex-1 flex-col gap-0.5 pb-6">
                {step.title != null && (
                  <text
                    className={`text-sm font-medium ${
                      isCurrent ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </text>
                )}
                {step.description != null && (
                  <text className="text-xs text-muted-foreground">
                    {step.description}
                  </text>
                )}
              </view>
            </view>
          );
        })}
      </view>
    );
  }

  // variant === "progress" (default): title + icon + progress bar
  const current = steps[currentStep];
  const currentIcon = current?.icon;
  return (
    <view className={`flex flex-col gap-2 ${className}`.trim()}>
      {current?.title != null && (
        <view className="flex flex-row items-center gap-2">
          {currentIcon != null && (
            <view
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                isDark ? "bg-muted" : "bg-muted"
              }`}
            >
              <StepIconRender
                iconConfig={currentIcon}
                theme={theme}
                isCompleted={false}
              />
            </view>
          )}
          <text className="text-sm font-medium text-foreground">
            {current.title}
          </text>
        </view>
      )}
      {showProgressBar && (
        <view className={baseTrackClass}>
          <view
            className={baseFillClass}
            style={`width: ${progressPercent}%`}
          />
        </view>
      )}
    </view>
  );
}
