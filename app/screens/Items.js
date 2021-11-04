import React from "react";
import { View,StyleSheet,Text,TouchableOpacity, FlatList,Dimensions,ImageBackground} from "react-native";
import { Ionicons,EvilIcons,MaterialCommunityIcons,FontAwesome5,AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../config/Colors";
// import Clothes from "../config/Clothes"


export default function Items(props) {
  const navigation =props.navigation;
    // category
  const categories= ["General","Official","Africa Wear","Casual"];
  const [categoryIndex,setCategoryIndex] = React.useState(0);

  const CategoriesList = () =>{
    return <View style={styles.categoriesContainer}>
      {categories.map((items,index) =>(
        <TouchableOpacity key={index}
        activeOpacity={0.8}
         onPress ={ () => setCategoryIndex(index)}>
          <Text  style={[styles.categoryText, categoryIndex ==index && styles.categoryTextSelected]}>{items}</Text>
        </TouchableOpacity>
      ))}
    </View>;
  };


  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop:55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <Ionicons name="cart-sharp" size={24} color="black" />
        {/* <FontAwesome5 name="user" size={24} color="black" /> */}
        <Ionicons name="notifications-outline" size={20} color="black" />
      </View>

        
        {/* search btn */}
      <View style={{marginTop:30,flexDirection:"row"}}>
        <View style={styles.searchContainer}>
        <EvilIcons name="search" size={24} color="black" style={{paddingLeft:10}} />
        <TextInput placeholder="Search" style={styles.searchText}/>
        </View>

        {/* sortIcon */}
        <View style={styles.sortBtn}>
        <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
        </View>

      </View>

      {/* categories */}
      <CategoriesList />

        {/* Items */}
      {/* <Clothes navigation={this.props.navigation}/> */}
      {/* <Clothes navigation={this.props.navigation}/> */}

      <View style={styles.clothesContainer}>
            
            
            <TouchableOpacity 
            onPress = { () =>{
                navigation.navigate("DetailScreen")
            }}
            style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/pinkT.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = { () =>{
              navigation.navigate("DetailScreenDress")
          }}
             style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/dress.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = { () =>{
              navigation.navigate("DetailScreenBag")
          }}
             style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/bag.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress = { () =>{
              navigation.navigate("DetailScreenAfrican")
          }}
            style={styles.card}>
                <View style={styles.inner}>
                    <ImageBackground resizeMode={"contain"} style={styles.background}
                        source={require("../assets/african.jpg")}>
                            <View style={styles.textContainer}>
                                <Text>$400</Text>
                                <AntDesign name="heart" size={24} color={Colors.primary} />
                            </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            

        </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  searchContainer:{
    flex:1,
    height:50,
    borderRadius:10,
    alignItems:"center",
    backgroundColor:Colors.secondary,
    flexDirection:"row",
  },

  searchText:{
    fontSize:18,
    fontWeight:"bold",
    color:Colors.killed,
    flex:1,
  },

  sortBtn:{
    backgroundColor:Colors.primary,
    marginLeft:10,
    borderRadius:7,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center"
  },

  categoriesContainer:{
    flexDirection:"row",
    marginTop:20,
    marginBottom:20,
    justifyContent:"space-between",
  },

  categoryText:{
    fontSize:16,
    fontWeight:"bold",
    color:"grey",
  },

  categoryTextSelected:{
    color:Colors.secondary,
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:Colors.secondary,
  },

  clothesContainer :{
    flex:1,
    width:"100%",
    // height:"85%",
    padding:5,
    flexDirection:"row",
    flexWrap:"wrap",

},

background:{
    width:"100%",
    height:"100%",
},

card:{
    width:"50%",
    height:"50%",
    padding:5,
    

},
inner:{
    flex:1,
    borderRadius:10,
    backgroundColor:"lightgrey",
    alignItems:"center",
    justifyContent:"center",
},

textContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-end",
    padding:5,
},

innerText:{
    color:Colors.killed,
    fontSize:20,
},
})