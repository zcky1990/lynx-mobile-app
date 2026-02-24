import {useState} from "@lynx-js/react";
import {TabsContext} from "./TabsContext";

export const Tabs = ({children, defaultValue} : {
    children: React.ReactNode,
    defaultValue: string
}) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <view class="-mb-px">
            <TabsContext.Provider value={
                {activeTab, setActiveTab}
            }>
                <view class="mt-4">
                    {children} </view>
            </TabsContext.Provider>
        </view>
    );
};

