import { View, TouchableOpacity,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const FooterComponent = () =>{
return(

    <View style={styles.footer}>
         {/* Left Part with Centered Icon */}
        <TouchableOpacity style={[styles.footerPart,styles.activeFooterPart]}>
         <MaterialCommunityIcons name="calendar-weekend-outline" size={40} color="#696969" />
        </TouchableOpacity>
         {/* Right Part with Centered Icon */}
        <TouchableOpacity style={styles.footerPart}>
         <FontAwesome5 name="user" size={40} color="#696969" />        
        </TouchableOpacity>
    </View>

)};

const styles = StyleSheet.create({
footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 60,
  },
  footerPart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height:100,
  },
  activeFooterPart: {
    borderTopWidth: 5, 
    borderBottomColor: '#696969', 
  },
});

export default FooterComponent;