import { useState } from "react";
import type { AccordionItemProps } from "./common";
import arrowUp from "./../../assets/arrow-up.svg";
import arrowDown from "./../../assets/arrow-down.svg";

const AccordionItem = (props: AccordionItemProps) => {
    const { title, description, open = false } = props;
    const [accordionItemState, setAccordionItemState] = useState<boolean>(open);

    return <view className="flex flex-col" bindtap={() => setAccordionItemState(!accordionItemState)}>
            <view className="flex flex-row items-center justify-between pt-0 pb-4 sm:mb-1 lg:mb-2">
                <text className="text-foreground font-medium sm:py-1 lg:py-2 lg:text-lg">{title}</text>
                <view className="flex flex-row items-center justify-center">
                    {accordionItemState ? <image src={arrowUp}/> : <image src={arrowDown}/>}
                </view>
            </view>
            {accordionItemState ? 
                <view className="pt-0 pb-4 sm:mb-1 lg:mb-2">
                    <text className="text-muted-foreground lg:text-lg">{description}</text>
                </view> : 
                <></>
            }
          </view>;
}

export { AccordionItem };