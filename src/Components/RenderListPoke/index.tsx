import React from "react"
import { FlashList } from "@shopify/flash-list"
import { NamedAPIResource, NamedAPIResourceList } from "pokenode-ts"
import { Text, View } from "react-native"

interface PropsRenderListPoke{
    data: NamedAPIResource[]
}

const RenderListPoke: React.FC<PropsRenderListPoke> = ({data}) => {
    return(
    <FlashList 
        data={data}
        renderItem={({item,target,index}) => (
            <View>
                <Text> 
                    {item.name}
                </Text>
            </View>
        )}  
        estimatedItemSize={10000}
    />
    )
}

export default RenderListPoke 