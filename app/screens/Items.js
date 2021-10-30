import React from "react";
import { View,StyleSheet,Text,TouchableOpacity, FlatList,} from "react-native";
import { Ionicons,EvilIcons,MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../config/Colors";
import {clothes} from "../config/clothes";

export default function Items(props) {
  
    // category
  const categories= ["General","Official","Summer","Winter"];
  const [categoryIndex,setCategoryIndex] = React.useState(0)

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
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <Ionicons name="cart-sharp" size={24} color="black" />
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

      {/* cards  */}
      < FlatList numColumns={2} data={clothes}/>
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
    backgroundColor:"red",
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
})