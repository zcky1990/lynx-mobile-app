import {Button} from "../Button/Button";
import {useContext} from "@lynx-js/react";
import {TabsContext} from "./TabsContext";

export const TabTrigger = ({id, children} : {
    id: string,
    children: React.ReactNode
}) => {
    const context = useContext(TabsContext);
    const isActive = context ?. activeTab === id;

    return (
        <Button variant="ghost" size="md" className={isActive ? "text-info-foreground" : "text-gray-600"}
            onPress={
                () => context ?. setActiveTab(id)
        }>
            {children} </Button>
    );
};
