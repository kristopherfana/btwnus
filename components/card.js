import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function Card({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/*===========
                Card Head
            =============*/}
        <View style={styles.cardHead}>
          <Image
            source={require("../assets/image/profile.jpg")}
            style={styles.crd_user_image}
          />
          <View style={styles.crd_top_info}>
            <Text style={styles.crd_user_name}>Rubinaldo Domingos</Text>
            <Text style={styles.crd_time}>12hrs ago</Text>
          </View>
        </View>
        {/*===========
                Card Image
            =============*/}
        <View style={styles.pst_img}>
          <Image
            style={styles.image}
            source={require("../assets/image/profile.jpg")}
          />
        </View>

        {/*===========
                Card Interactions 
            =============*/}
        <View style={styles.interactionbar}>
          <View style={styles.interactionContent}>
            <TouchableOpacity>
              <FontAwesome
                name="thumbs-o-up"
                size={18}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
            <Text>122K</Text>
          </View>

          <View style={styles.interactionContent}>
            <FontAwesome
              name="commenting-o"
              size={18}
              style={{ marginRight: 8 }}
            />
            <Text>122K</Text>
          </View>

          <View
            style={[
              styles.interactionContent,
              {
                flex: 1,
                flexDirection: "row-reverse",
                alignContent: "flex-end",
              },
            ]}
          >
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <FontAwesome
                name="bookmark-o"
                size={18}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textContet}>
          <Text style={styles.textContetText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHead}>
          <Image
            source={require("../assets/image/profile.jpg")}
            style={styles.crd_user_image}
          />
          <View style={styles.crd_top_info}>
            <Text style={styles.crd_user_name}>Rubinaldo Domingos</Text>
            <Text style={styles.crd_time}>12hrs ago</Text>
          </View>
        </View>

        <View style={styles.pst_img}>
          <Image
            style={styles.image}
            source={require("../assets/image/profile.jpg")}
          />
        </View>

        <View style={styles.interactionbar}>
          <View style={styles.interactionContent}>
            <TouchableOpacity>
              <FontAwesome
                name="thumbs-o-up"
                size={18}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
            <Text>122K</Text>
          </View>

          <View style={styles.interactionContent}>
            <FontAwesome
              name="commenting-o"
              size={18}
              style={{ marginRight: 8 }}
            />
            <Text>122K</Text>
          </View>

          <View
            style={[
              styles.interactionContent,
              {
                flex: 1,
                flexDirection: "row-reverse",
                alignContent: "flex-end",
              },
            ]}
          >
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <FontAwesome
                name="bookmark-o"
                size={18}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textContet}>
          <Text style={styles.textContetText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: undefined,
  },
  cardHead: {
    padding: 10,
    flexDirection: "row",
  },
  crd_user_image: {
    width: 45,
    height: 45,
    borderRadius: 1000,
  },
  crd_user_name: {
    fontWeight: "bold",
  },
  crd_top_info: {
    justifyContent: "center",
    padding: 10,
  },
  crd_time: {
    fontSize: 10,
  },
  pst_img: {
    width: "100%",
    height: undefined,
    alignContent: "center",
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
  interactionbar: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  interactionContent: {
    flexDirection: "row",
    marginRight: 25,
  },
  bookmark: {},
  textContet: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  textContetText: {
    textAlign: "left",
  },
});
