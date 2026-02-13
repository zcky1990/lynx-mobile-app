import { AccordionItem } from "./AccordionItem";
import type { AccordionProps } from "./AccordionCommon";

export const Accordion = (props: AccordionProps) => {
    const { title = "title", description = "description", items = [] } = props;

    return <view className="w-full">
        <view className="flex flex-col gap-1 container">
            <text className="text-foreground mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">{title}</text>
            <text className="text-muted-foreground lg:text-lg">{description}</text>
        </view>
        <view className="py-4">
        {items.map((item, index) => (
            <view className={ index < items.length-1 ? 'py-2 border-b border-gray-300':'py-4 border-b-0' }>
                <AccordionItem key={index} {...item} />
            </view>
        ))}
        </view>
    </view>;
}
