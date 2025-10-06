
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import * as Linking from 'expo-linking';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const MapPlaceholder = () => (
  <View style={styles.mapPlaceholder}>
    <View style={styles.mapStreet} />
    <View style={[styles.mapStreet, styles.mapStreet2]} />
    <Entypo name="location-pin" size={40} color={Colors.bakery.orange} style={styles.mapPin} />
  </View>
);

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.heroImageCard}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.heroImage}
            />
      </View>
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.heading}>Our Story</ThemedText>
        <ThemedText style={styles.bodyText}>
          Welcome to Dakarna Bakery, where the aroma of freshly baked goods fills the air and warms the heart. Our journey began in a small home kitchen, fueled by a passion for traditional baking and a desire to share our creations with the community. We believe in the power of simple, high-quality ingredients and time-honored techniques to create exceptional breads, pastries, and cakes.
        </ThemedText>
        <ThemedText style={styles.bodyText}>
          Our mission is to be a cornerstone of the neighborhood, a place where people can gather, connect, and enjoy the simple pleasure of a delicious treat. We are committed to sourcing our ingredients locally, supporting nearby farms and producers, and minimizing our environmental footprint. Every item we bake is crafted with love, care, and a dedication to quality that you can taste in every bite.
        </ThemedText>

        <ThemedText style={styles.heading}>Our Ingredients</ThemedText>
        <ThemedText style={styles.bodyText}>
          We pride ourselves on using only the finest ingredients. Our flour is sourced from a local mill that has been grinding wheat for generations, our dairy comes from a family-owned farm just a few miles away, and our eggs are delivered fresh from a nearby free-range chicken farm. We believe that the quality of our ingredients is the foundation of our success, and we are passionate about supporting our local food ecosystem.
        </ThemedText>

        <ThemedText style={styles.heading}>Visit Us</ThemedText>
        <MapPlaceholder />
        <ThemedText style={styles.bodyText}>
          Find us along Kaleerwe, Kampala, Uganda. We're open Tuesday through Sunday from 7:00 AM to 6:00 PM. We can't wait to welcome you!
        </ThemedText>

        <ThemedText style={styles.heading}>Contact Us</ThemedText>
        <ThemedText style={styles.bodyText}>
          Have a question or a special request? We'd love to hear from you! 
        </ThemedText>
        <View style={styles.contactContainer}>
            <Text style={styles.contactLink} onPress={() => Linking.openURL('mailto:contact@dakarnabakery.com')}>
                contact@dakarnabakery.com
            </Text>
            <Text style={styles.contactLink} onPress={() => Linking.openURL('tel:+256745632033')}>
                0745632033
            </Text>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bakery.cream,
  },
  heroImageCard: {
    borderRadius: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.bakery.cream,
  },
  heroImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: Colors.bakery.cream,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.bakery.orange,
    marginBottom: 15,
    marginTop: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: Colors.bakery.darktext,
  },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E5E3DF',
    marginBottom: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contactContainer: {
    marginTop: 10,
  },
  contactLink: {
    fontSize: 16,
    color: Colors.bakery.orange,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  mapStreet: {
    position: 'absolute',
    width: '150%',
    height: 25,
    backgroundColor: '#D4D1CC',
    transform: [{ rotate: '45deg' }],
  },
  mapStreet2: {
    transform: [{ rotate: '-45deg' }],
  },
  mapPin: {
    zIndex: 1,
  },
});
