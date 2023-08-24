import React, { ReactElement, useState } from "react";
import TW from "../../ReactWind";
import { ScrollView } from "react-native-gesture-handler";
import { NativeScrollEvent } from "react-native";


interface handleRenderMorePokemon {
    url: string | null
  }
interface ScrollViewRender {
  children: ReactElement;
  functionRenderMorePokemon: () => void;
}

const ScrollViewRender: React.FC<ScrollViewRender> = ({ children, functionRenderMorePokemon }) => {

    const [ reachedEnd, setreachedEnd ] = useState(false)

    const handleEndReached = () => {    
        functionRenderMorePokemon()
        setreachedEnd(!reachedEnd)
    }

    const isCloseToBottom = ({contentOffset, layoutMeasurement, contentSize }: NativeScrollEvent) => {
        const paddingToBottom = 20
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
    }
    return (
    <TW.ScrollView scrollEventThrottle={20} onScroll={({ nativeEvent }) => {
        if(isCloseToBottom(nativeEvent)){
            handleEndReached()
        }
    }}>{children}</TW.ScrollView>
  );
};

export default ScrollViewRender
