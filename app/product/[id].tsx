import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import { allProducts } from '../../data/products';
import { Colors } from '@/constants/theme';
import { useCart } from '../../context/CartContext';

// Using new images from a different provider (Pexels)
const PAIR_IMAGES = {
  coffee: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
  tea: 'https://images.pexels.com/photos/814264/pexels-photo-814264.jpeg',
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product = allProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCartWithQuantity } = useCart();

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log('Adding to cart');
    addToCartWithQuantity(product, quantity);
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: `${quantity} x ${product.title} has been added to your cart.`,
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: product.title,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: Colors.bakery.cream },
          headerTitleStyle: { color: Colors.bakery.darktext, fontWeight: 'bold' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
              <Ionicons name="chevron-back" size={28} color={Colors.bakery.darktext} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: product.image }} style={styles.heroImage} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.subtitle}>Ingredients</Text>
          <Text style={styles.bodyText}>{product.ingredients.join(', ')}</Text>

          <Text style={styles.subtitle}>Allergens</Text>
          <Text style={styles.bodyText}>{product.allergens}</Text>
        </View>

        <View style={styles.pairSection}>
          <Text style={styles.pairTitle}>Pair with...</Text>
          <View style={styles.pairCardsContainer}>
            <View style={styles.pairCard}>
              <Image source={{ uri: PAIR_IMAGES.coffee }} style={styles.pairImage} />
              <Text style={styles.pairLabel}>Coffee</Text>
            </View>
            <View style={styles.pairCard}>
              <Image source={{ uri: PAIR_IMAGES.tea }} style={styles.pairImage} />
              <Text style={styles.pairLabel}>Tea</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.floatingBar}>
        <View style={styles.quantitySelector}>
          <TouchableOpacity onPress={() => handleQuantityChange(-1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={String(quantity)}
            keyboardType="numeric"
            editable={false}
          />
          <TouchableOpacity onPress={() => handleQuantityChange(1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bakery.cream },
  scrollContainer: { paddingBottom: 120 },
  heroImage: { width: '100%', height: 300, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 },
  infoContainer: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: Colors.bakery.darktext, marginBottom: 10 },
  description: { fontSize: 16, color: Colors.bakery.gray, lineHeight: 24 },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: Colors.bakery.darktext, marginTop: 20, marginBottom: 8 },
  bodyText: { fontSize: 16, color: Colors.bakery.gray, lineHeight: 22 },
  pairSection: { marginTop: 30, paddingHorizontal: 20 },
  pairTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.bakery.darktext, marginBottom: 15 },
  pairCardsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  pairCard: { width: '48%' },
  pairImage: { width: '100%', height: 120, borderRadius: 15 },
  pairLabel: { textAlign: 'center', marginTop: 8, fontSize: 16, fontWeight: '500', color: Colors.bakery.darktext },
  floatingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: Colors.bakery.cream,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bakery.lightPeach,
    borderRadius: 50,
    padding: 5,
  },
  quantityButton: { paddingHorizontal: 15 },
  quantityButtonText: { fontSize: 22, fontWeight: 'bold', color: Colors.bakery.orange },
  quantityInput: {
    width: 40,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.bakery.darktext
  },
  addToCartButton: {
    backgroundColor: Colors.bakery.orange,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flex: 1,
    marginLeft: 15,
    alignItems: 'center',
  },
  addToCartButtonText: { color: Colors.bakery.white, fontSize: 16, fontWeight: 'bold' },
});