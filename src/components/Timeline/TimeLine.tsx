import type {ReactNode}
from '@lynx-js/react';
import {TimelineItem} from './TimeLineItem';

export const Timeline = ({children} : {
    children: ReactNode
}) => {
    return (
        <view className="relative space-y-8">
            {
            children && Array.isArray(children) && children.map((child, index) => (
                <view key={index}
                    className="group relative grid grid-cols-2">
                    <view className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                        <view className="relative flex flex-col h-full items-center justify-center">
                            <view className="absolute size-3 shrink-0 rounded-full bg-blue-600 top-0 z-10"/>
                            <view className="h-full"
                                style={
                                    {
                                        borderWidth: "1px",
                                        borderColor: 'var(--border)'
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

