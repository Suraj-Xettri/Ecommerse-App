import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 relative">
      {/* Background Image */}
      <ImageBackground
        source={{ uri: "https://your-image-url.com/background.jpg" }} // Add your own image URL
        resizeMode="cover"
        className="absolute w-full h-full"
      >
        {/* Centered Content */}
        <View className="flex-1 justify-center items-center bg-black/30">
          <Link href={'/startScreen'} className="p-4 bg-white/20 rounded-lg">
            <Text
              className="text-white text-4xl font-bold tracking-wider shadow-lg"
            >
              Let's Gooooo!
            </Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}
