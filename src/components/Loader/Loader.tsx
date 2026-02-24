import type {LoaderProps} from './LoaderCommon';

export function Loader(props : LoaderProps) {
    const {
        percentage = 0,
        label,
        type,
        properties,
        onValueChange
    } = props;

    const loaderPercentageStyle = {
        width: `${percentage}%`,
        backgroundColor: properties?.loader?.progressBarColor || 'var(--primary)'
    }

    const loaderBackgroundColorStyle = {
        backgroundColor: properties?.loader?.progressBarBackgroundColor || 'var(--primary-foreground)'
    }

    const loaderTextColorStyle = {
        color: properties?.loader?.textColor || 'var(--primary)'
    }

    const getSpinnerSvgString = ():string => {
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="${properties?.spinner?.colorStroke || '#e4e4e4'}" stroke-width="4"></circle>
        <path class="opacity-75" fill="${ properties?.spinner?.colorFill || '#0f172b'}" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>`;
      const base64Svg = btoa(svgString);
      return `data:image/svg+xml;base64,${base64Svg}`;
    }

    const spinnerStyle = {
        width: `${properties?.spinner?.size}px`,
        height: `${properties?.spinner?.size}px`
    }

    const spinner = () => {
        return (
            <view className="inline-flex items-center gap-3">
                <image className="animate-spin"src={ getSpinnerSvgString() } style={ spinnerStyle }></image>
                {label ? <text className="font-medium text-gray-700">{label}</text> : <></>} 
            </view>
        );
    }

    const loader = () => {
        return (
            <view className="flex flex-col items-center justify-center gap-1 ">
              <view className='w-full max-w-sm '>
                  <view style={ loaderBackgroundColorStyle } className="h-2 overflow-hidden rounded-full">
                      <view style={ loaderPercentageStyle }
                          className={ properties?.loader?.animate ? "h-full animate-pulse" : "h-full"}>
                      </view>
                  </view>
              </view>
              { label ? <text style={loaderTextColorStyle} className="font-medium">{label}</text> : <></>} 
            </view>
        );
    }

    const render = () => {
        if (type === "spinner") {
            return spinner();
        } else if (type === "loader") {
            return loader();
        }
    }

    return render();
}

