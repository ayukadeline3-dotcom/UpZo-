import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
export default function App(){
 return(
  <View style={s.container}>
   <Text style={s.logo}>UpZo</Text>
   <Text style={s.sub}>Affordable finds in Buea - Delivery</Text>
   <View style={s.search}><TextInput placeholder="Search..." /></View>
   <ScrollView>
    <View style={s.card}><Text style={s.emoji}>📱</Text><View><Text style={s.name}>Phone Pouch</Text><Text style={s.price}>2,500 FCFA</Text></View></View>
    <View style={s.card}><Text style={s.emoji}>🔊</Text><View><Text style={s.name}>Mini Speaker</Text><Text style={s.price}>6,000 FCFA</Text></View></View>
    <View style={s.card}><Text style={s.emoji}>💡</Text><View><Text style={s.name}>LED Lights</Text><Text style={s.price}>4,500 FCFA</Text></View></View>
    <View style={s.card}><Text style={s.emoji}>🔋</Text><View><Text style={s.name}>Power Bank</Text><Text style={s.price}>8,500 FCFA</Text></View></View>
    <TouchableOpacity style={s.btn}><Text style={s.btnT}>Order on WhatsApp</Text></TouchableOpacity>
   </ScrollView>
  </View>
 )
}
const s=StyleSheet.create({
 container:{flex:1,backgroundColor:'#F8F7FF',paddingTop:50,padding:20},
 logo:{fontSize:32,fontWeight:'800',color:'#6C5CE7'},
 sub:{color:'#636e72',marginBottom:15},
 search:{backgroundColor:'#fff',borderRadius:12,padding:12,marginBottom:15},
 card:{flexDirection:'row',backgroundColor:'#fff',padding:15,borderRadius:14,marginBottom:10,alignItems:'center'},
 emoji:{fontSize:28,marginRight:10},
 name:{fontWeight:'700',fontSize:16},
 price:{color:'#6C5CE7',fontWeight:'700'},
 btn:{backgroundColor:'#00b894',padding:16,borderRadius:12,alignItems:'center',marginTop:20},
 btnT:{color:'#fff',fontWeight:'800'}
})
