import {useState} from "react";
import type {AccordionItemProps}
from "./AccordionCommon";
import {Icon} from '../Icon/Icon';

const AccordionItem = (props : AccordionItemProps) => {
    const {
        title,
        description,
        open = false,
        theme
    } = props;
    const [accordionItemState, setAccordionItemState] = useState < boolean > (open);

    const getChevronIcon = () => {
        if (theme) {
            return theme === 'dark' ? <Icon name="chevronDown" color="white" size={15} /> : <Icon name="chevronDown" color="black" size={15} />;
        }
        return <Icon name="chevronDown" color="black" size={15} />;
    };
    const isOpen = accordionItemState;
    return (
        <view
            className={`AccordionItem flex flex-col ${isOpen ? 'AccordionItem--open' : 'AccordionItem--closed'}`}
            bindtap={() => setAccordionItemState(!accordionItemState)}
        >
            <view className="AccordionItem-header flex flex-row items-center justify-between pt-2 pb-4 sm:mb-1 lg:mb-2">
                <text className="text-foreground font-medium sm:py-1 lg:py-2 lg:text-lg">
                    {title}
                </text>
                <view className="AccordionItem-chevron flex flex-row items-center justify-center">
                    {getChevronIcon()}
                </view>
            </view>
            <view className="AccordionItem-content">
                <text className="text-muted-foreground lg:text-lg">
                    {description}
                </text>
            </view>
        </view>
    );
}

export {
    AccordionItem
};
