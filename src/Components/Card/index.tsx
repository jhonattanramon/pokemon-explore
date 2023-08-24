import React from "react";
import TW from "../../ReactWind";

interface propsCard {
  backgroundColor?: string;
  name: string;
  image?: string;
  url?: string
}

interface propsHandleNagationPokemon{
  url?: string;
}

const CardPokemon: React.FC<propsCard> = ({
  backgroundColor = "bg-white",
  name = "pokemon",
  image = "https://freepngimg.com/thumb/pokemon/37475-6-pikachu-transparent-image-thumb.png",
  url
}) => {
  function handleNavigationPokemon({url}: propsHandleNagationPokemon) {
    console.log(url);
    
  }

  return (
    <TW.TouchableOpacity
      onPress={() => handleNavigationPokemon({url: url})}
      className={`w-40 h-40 ${backgroundColor} rounded-xl shadow-md`}
    >
      <TW.View className="flex-1 justify-center items-center">
        <TW.Image
          className="w-20 h-20"
          source={{
            uri: `${image}`,
          }}
        />
      </TW.View>
      <TW.View className="items-center">
        <TW.Text className="capitalize">{name}</TW.Text>
      </TW.View>
    </TW.TouchableOpacity>
  );
};
export default CardPokemon;
