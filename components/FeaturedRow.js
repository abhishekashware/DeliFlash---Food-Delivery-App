import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import CategoryCard from "./CategoryCard";
import RestaurantCard from "./RestaurantCard";
 import { urlFor } from "../sanity";
const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {restaurants?.map((r, i) => {
          return (
            <RestaurantCard
              key={i}
              imgUrl={urlFor(r.image).url()}
              title={r.name}
              rating={r.rating}
              genre={r.type.name}
              address={r.address}
              short_description={r.short_description}
              dishes={r.dishes}
              long={r.lat}
              lat={r.long}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
