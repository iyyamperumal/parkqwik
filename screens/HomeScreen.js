import React from 'react';
import { View, Text,Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import DiscoverCard from '../components/DiscoverCard';


const services = [
  { title: 'Nearby Parking', icon: require('../assets/location.png') },
  { title: 'EV Parking', icon: require('../assets/ev-car.png') },
  { title: 'Car Wash', icon: require('../assets/wash.png') },
  { title: 'Vehicle Insurance', icon: require('../assets/insurance.png') },
  { title: 'Road Assistance', icon: require('../assets/tow.png') },
  { title: 'Pay Challan', icon: require('../assets/challan.png') },
  { title: 'Toll Estimator', icon: require('../assets/toll.png') },
  { title: 'Valet Parking', icon: require('../assets/valet.png') },
];
const discover = [
  { title: 'Buy FASTag', icon: require('../assets/shop.png') },
  { title: 'Replace FASTag', icon: require('../assets/replace.png') },
  { title: 'Active FASTag', icon: require('../assets/active.png') },
  { title: 'Close FASTag', icon: require('../assets/close.png') },
];
const others = [
  { title: 'Rentout Helmet', icon: require('../assets/helmet.png') },
  { title: 'Fuel Price', icon: require('../assets/fuel.png') },
  { title: 'Shop Here', icon: require('../assets/shop.png') },
  { title: 'My Vehicles', icon: require('../assets/vehicles.png') },
];
const travel = [
  { title: 'Car wash', icon: require('../assets/wash.png') },
  { title: 'Estimate Toll', icon: require('../assets/toll.png') },
  { title: 'Shop', icon: require('../assets/shop.png') },
  { title: 'Protocols', icon: require('../assets/traffic.png') },
];

const payments = [
  { title: 'Fastag Recharge', icon: require('../assets/toll-recharge.png') },
  { title: 'Mobile Recharge', icon: require('../assets/mobile-recharge.png') },
  { title: 'Electricity', icon: require('../assets/electricity.png') },
  { title: 'Water', icon: require('../assets/water.png') },
  { title: 'Gas Cylinder', icon: require('../assets/gas.png') },
  { title: 'Loan Repayment', icon: require('../assets/loan.png') },
  { title: 'DTH', icon: require('../assets/dth.png') },
  { title: 'House Rent', icon: require('../assets/house-rent.png') },
];

const center = [
  { title: 'Pay Challans', icon: require('../assets/challan.png') },
  { title: 'Crime Reporter', icon: require('../assets/crime.png') },
  { title: 'RTO Center', icon: require('../assets/office.png') },
  { title: 'PUCC Center', icon: require('../assets/pucc.png') },
];

const offers = [
  { title: 'Rewards', icon: require('../assets/rewards.png') },
  { title: 'Discounts', icon: require('../assets/discounts.png') },
  { title: 'Refer & Win', icon: require('../assets/refer.png') },
];
const HomeScreen = () => {
  const handlePress = () => {
    Linking.openURL('https://youtu.be/J7PcCgTHhWU?si=PIMVh3tVjxFD99WX');
  };
  return (
    <ScrollView>
      <Header/>
    <ScrollView style={styles.container}>
      
      <View style={styles.services}>
        <Text style={styles.title}>Services</Text>
        <View style={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} icon={service.icon} />
          ))}
        </View>
      </View>

      <View style={styles.fastagSection}>
        <View padding={20}>
        <Text style={styles.subtitle}>FASTag Recharge</Text>
        <Text style={styles.subtext}>Get up to 100% cashback on first 3 Fastag recharge</Text>
        <View style={styles.rechargeBox}>
          <TouchableOpacity style={styles.inputBox}>
            <Text>Add vehicle or chassis number</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rechargeButton}>
            <Text style={styles.rechargeText}>Recharge</Text>
          </TouchableOpacity>
        </View>
        <Text>Powered by</Text>
          <Text style={styles.title}>My FASTags</Text>
          <View
            style={{
            height: 2,
            backgroundColor: 'lightgray',
            marginVertical: 10,
            }}
          />
          </View>
        <View style={styles.services}>
          <Text style={styles.title}>Discover</Text>
          <View style={styles.grid}>
            {discover.map((discover, index) => (
            <DiscoverCard key={index} title={discover.title} icon={discover.icon} />
           ))}
          </View>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.card} backgroundColor={'#44bd80'}>
            <Text style={styles.cardtitle}>Recharge Fastag</Text>
            <Text style={styles.cardsubtitle}>Get exciting prizes</Text>
            <TouchableOpacity style={styles.cardbutton}>
              <Text style={styles.cardbuttonText}>Recharge Now</Text>
            </TouchableOpacity>
            <Image source={require('../assets/recharge.png')} style={styles.cardimage} />
          </View>
          <View style={styles.card} backgroundColor={'#44bd80'}>
            <Text style={styles.cardtitle}>Add money to wallet</Text>
            <Text style={styles.cardsubtitle}>Get 2% cashback</Text>
            <TouchableOpacity style={styles.cardbutton}>
              <Text style={styles.cardbuttonText}>Add money</Text>
            </TouchableOpacity>
            <Image source={require('../assets/add-money.png')} style={styles.cardimage} />
          </View>
          <View style={styles.card} backgroundColor={'#44bd80'}>
            <Text style={styles.cardtitle}>Doorstep car wash</Text>
            <Text style={styles.cardsubtitle}>Get 20% off on your first car wash</Text>
            <TouchableOpacity style={styles.cardbutton}>
              <Text style={styles.cardbuttonText}>Book Now</Text>
            </TouchableOpacity>
            <Image source={require('../assets/doorstep-wash.png')} style={styles.cardimage} />
          </View>
     </ScrollView>

      <View style={styles.services}>
        <Text style={styles.title}>Others</Text>
        <View style={styles.grid}>
          {others.map((other, index) => (
            <ServiceCard key={index} title={other.title} icon={other.icon} />
          ))}
        </View>
      </View> 
        <View padding={20}>
         <Text style={styles.title}>Deals For You</Text>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.dealcard} backgroundColor={'#8444bd'}>
             <Text style={styles.dealcardtitle}>Recharge FASTag</Text>
             <Text style={styles.dealcardsubtitle}>& Get petrol worth ₹30</Text>
             <TouchableOpacity style={styles.dealcardbutton}>
              <Text style={styles.dealcardbuttonText}>Recharge Now</Text>
             </TouchableOpacity>
            </View>
            <View style={styles.dealcard} backgroundColor={'#009950'}>
             <Text style={styles.dealcardtitle}>Get 20% off</Text>
             <Text style={styles.dealcardsubtitle}>on your first car wash</Text>
             <TouchableOpacity style={styles.dealcardbutton}>
              <Text style={styles.dealcardbuttonText}>Book Now</Text>
             </TouchableOpacity>
            </View>
            <View style={styles.dealcard} backgroundColor={'#cc45aa'}>
             <Text style={styles.dealcardtitle}>Get 15% off</Text>
             <Text style={styles.dealcardsubtitle}>on your first parking</Text>
             <TouchableOpacity style={styles.dealcardbutton}>
              <Text style={styles.dealcardbuttonText}>Book Now</Text>
             </TouchableOpacity>
            </View>
          </ScrollView>
       </View>
       <View style={styles.services}>
        <Text style={styles.title}>Gonna Travel ?</Text>
        <View style={styles.grid}>
          {travel.map((travel, index) => (
            <ServiceCard key={index} title={travel.title} icon={travel.icon} />
          ))}
        </View>
      </View> 
      <Text style={styles.title} padding={20}>Premium Plans</Text>
      <View padding={20} flexDirection={'row'}> 
         <View style={styles.premiumcard} backgroundColor={'#44bd80'}>
            <Text style={styles.premiumcardtitle}>Monthly Parking</Text>
            <Text style={styles.premiumcardsubtitle}>Dedicated parking available near you.</Text>
            <TouchableOpacity style={styles.premiumcardbutton}> 
              <Text style={styles.premiumcardbuttonText}>Explore Now</Text>
              <MaterialIcons name="arrow-right" size={20} color="black" />
            </TouchableOpacity>
            <Image source={require('../assets/premium-park.png')} style={styles.premiumcardimage} />
          </View>
          <View style={styles.premiumcard} backgroundColor={'#44bd80'}>
            <Text style={styles.premiumcardtitle}>Elite Car Wash</Text>
            <Text style={styles.premiumcardsubtitle}>Elite car grooming at your doorstep</Text>
            <TouchableOpacity style={styles.premiumcardbutton}>
              <Text style={styles.premiumcardbuttonText}>Explore Now</Text>
              <MaterialIcons name="arrow-right" size={20} color="black" />
            </TouchableOpacity>
            <Image source={require('../assets/premium-wash.png')} style={styles.premiumcardimage} />
          </View>
         </View>
         <View style={styles.services}>
        <Text style={styles.title}>Recharge & Bill Payments</Text>
  
     <View style={styles.grid}>
          {payments.map((payment, index) => (
           <ServiceCard key={index} title={payment.title} icon={payment.icon} />
          ))}
        </View>
        <View alignItems={'center'} justifyContent={'center'}>
          <TouchableOpacity>
          <Text style={styles.viewbutton}>View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.othercard} backgroundColor={'#44bd80'}>
            <Text style={{color:'yellow',fontSize: 18}}>Get 15% off on</Text>
             <Text style={styles.othercardtitle}>FASTag Recharge</Text>
             <Text style={styles.othercardsubtitle}>Pay using Axis Bank Credit & Debit Cards</Text>
             <TouchableOpacity style={styles.othercardbutton}>
              <Text style={styles.othercardbuttonText}>Recharge Now</Text>
             </TouchableOpacity>
            </View>
            <View style={styles.othercard} backgroundColor={'#1b50e3'}>
             <Text style={styles.othercardtitle}>Reserve a Parking Slot</Text>
             <Text style={styles.othercardsubtitle}>Win 300ml petrol on your first parking</Text>
             <TouchableOpacity style={styles.othercardbutton}>
              <Text style={styles.othercardbuttonText}>Explore Now</Text>
             </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.services}>
            <Text style={styles.title}>Your Car's Center</Text>
             <View style={styles.grid}>
               {center.map((center, index) => (
               <ServiceCard key={index} title={center.title} icon={center.icon} />
                ))}
             </View>
          </View>
          <Text style={styles.title} padding={20}>Trending</Text>
          <View style={styles.trendingcard} backgroundColor={'#44bd80'}>
            <Text style={{color:'yellow',fontSize: 30}}>Save ₹500</Text>
             <Text style={styles.trendingcardtitle}>On Your First EV Parking</Text>
             <Text style={styles.trendingcardsubtitle}>We provide dedicated monthly parking with surveillance</Text>
            <View style={styles.trendingcount}>
              <Image source={require('../assets/profiles.png')} style={styles.trendingcardimage} />
              <View styles={styles.count}>
              <Text style={{fontSize:18, color:'white'}}>100 +</Text>
              <Text style={{fontSize:14, color:'white'}}>Happy Customers</Text>
            </View>
            </View>
            </View>
            <View style={styles.services}>
            <Text style={styles.title}>Exclusive Offers</Text>
             <View style={styles.grid}>
               {offers.map((offer, index) => (
               <ServiceCard key={index} title={offer.title} icon={offer.icon} />
                ))}
             </View>
          </View>
          <Text style={styles.title} padding={20}>How parkqwik works?</Text>
          <TouchableOpacity onPress={handlePress}>
          <View style={styles.trendingcard} backgroundColor={'#91eb9f'} >
            <Image source={require('../assets/how-it-works.png')} style={styles.workingimage} />
          </View>
          </TouchableOpacity>
     </ScrollView>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, elevation:3, backgroundColor: '#f5f5f5' },
  header:{flexDirection:'row'},
  services: { padding: 20, backgroundColor: 'white', borderRadius: 10, margin: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' },
  fastagSection: { backgroundColor: 'white', borderRadius: 10, margin: 10 },
  subtitle: { fontSize: 16, fontWeight: 'bold' },
  subtext: { color: '#888', marginVertical: 5 },
  rechargeBox: { flexDirection: 'row', marginTop: 10 },
  inputBox: { flex: 1, backgroundColor: '#e0f7e0', padding: 10, borderRadius: 5 },
  rechargeButton: { backgroundColor: '#44bd80', padding: 10, borderRadius: 5, marginLeft: 10 },
  rechargeText: { color: 'white', fontWeight: 'bold' },
  scrollContainer: {paddingHorizontal: 10,},
  card: {width: 380, height:150, borderRadius: 15, padding: 15, marginRight: 10,position: 'relative',justifyContent:'space-between'},
  cardtitle: {fontSize: 18,fontWeight: 'bold',color: 'white',},
  cardsubtitle: {fontSize: 14,color: 'white',marginVertical: 5,},
  cardbutton: {backgroundColor: 'white',padding: 8,borderRadius: 20,alignSelf: 'flex-start',},
  cardbuttonText: {color: '#44bd80',fontWeight: 'bold',},
  cardimage: {width: 100,height: 100,position: 'absolute',right: 20,bottom: 20,},
  dealcard: {width: 180, height:150, borderRadius: 15, padding: 15, marginRight: 10,position: 'relative',justifyContent:'center', alignItems:'center', gap:5},
  dealcardtitle: {fontSize: 18,fontWeight: 'bold',color: 'yellow',}, 
  dealcardsubtitle: {fontSize: 14,color: 'white',marginVertical: 5,},
  dealcardbutton: {backgroundColor: 'white',padding: 8,borderRadius: 20,},
  dealcardbuttonText: {color: 'black',fontWeight: 'bold',},
  premiumcard: {width: 185, height:130, borderRadius: 15, padding: 15, marginRight: 10,position: 'relative',justifyContent:'space-between'},
  premiumcardtitle: {fontSize: 18,fontWeight: 'bold',color: 'yellow',},
  premiumcardsubtitle: {fontSize: 14,color: 'white',marginVertical: 5,},
  premiumcardbutton: {backgroundColor: 'white',padding: 5,borderRadius: 20,alignSelf: 'flex-start',flexDirection:'row'},
  premiumcardbuttonText: {color: 'black',fontWeight: 'bold',},
  premiumcardimage: {width: 50,height: 50,position: 'absolute',right:10,bottom: 10,},
  viewbutton:{width:80, height:30, color:'#44bd80',borderWidth:1,borderColor:'#44bd80',padding: 5,borderRadius: 20,alignItems:'center' ,textAlign:'center',marginTop:10},
  othercard: {width: 300, height:150, borderRadius: 15, padding: 15, marginRight: 10,position: 'relative', justifyContent:'space-between', gap:5},
  othercardtitle: {fontSize: 18,fontWeight: 'bold',color: 'white',}, 
  othercardsubtitle: {fontSize: 14,color: 'white',marginVertical: 5,},
  othercardbutton: {backgroundColor: 'white',padding: 8,borderRadius: 20,alignSelf:'flex-start'},
  othercardbuttonText: {color: 'black',fontWeight: 'bold',},
  trendingcard: {width: 380, height:200, borderRadius: 15, padding: 15, margin: 15,position: 'relative',justifyContent:'space-between'},
  trendingcardtitle: {fontSize: 18,fontWeight: 'bold',color: 'white',},
  trendingcardsubtitle: {fontSize: 14,color: 'white',marginVertical: 5,},
  trendingcount: {flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end', gap:5}, 
  trendingcardimage: {width: 60,height: 60,},
  count: {flexDirection:'column', alignItems:'center', bottom:10, gap:5},
  workingimage:{width:200,height:200, alignSelf:'center', bottom:10} ,
});
export default HomeScreen;
