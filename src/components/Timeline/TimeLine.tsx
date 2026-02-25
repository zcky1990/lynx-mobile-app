import type {ReactNode}
from '@lynx-js/react';
import {TimelineItem} from './TimeLineItem';
import type {TimeLineProps}
from './TimeLineCommon';

export const Timeline = (props : TimeLineProps & {
    children?: ReactNode
}) => {
    const {children, ballColor, theme, lineColor} = props;

    const timelineBallColorCSS = () => {
        return theme === 'dark' ? 'absolute size-3 shrink-0 rounded-full top-0 z-10 bg-red-600' : 'absolute size-3 shrink-0 rounded-full top-0 z-10 bg-blue-600';
    }

    return (
        <view className="relative space-y-8">
            {
            children && Array.isArray(children) && children.map((child, index) => (
                <view key={index}
                    className="group relative grid grid-cols-2">
                    <view className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                        <view className="relative flex flex-col h-full items-center justify-center">
                            <view className={
                                    timelineBallColorCSS()
                                }
                                style={
                                    {backgroundColor: ballColor}
                                }/>
                            <view className="h-full"
                                style={
                                    {
                                        borderWidth: "0.5px",
                                        borderColor: lineColor ? lineColor : theme === 'dark' ? 'var(--primary)' : 'var(--border)'
                                    }
                                }/>
                        </view>
                        <view className="-pt-8">
                            {child}</view>
                    </view>
                    <view/>
                </view>
            ))
        } </view>
    )
};

Timeline.Item = TimelineItem;

