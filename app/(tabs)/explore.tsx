
import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/theme';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Toast from 'react-native-toast-message';

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: `${item.title} has been added to your cart.`,
    });
  };

  return (
    <View style={[styles.card, { backgroundColor: item.backgroundColor || Colors.bakery.white }]}>
      <Link href={`/product/${item.id}`} asChild>
        <TouchableOpacity>
          <ImageBackground source={{ uri: item.image }} style={styles.cardImage} imageStyle={{ borderRadius: 15 }}>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>$ {item.price}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Link>
      <View style={styles.cardContent}>
        <Link href={`/product/${item.id}`} asChild>
          <TouchableOpacity>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.cardDescription}>{item.shortDescription}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Breads</Text>
        <View style={styles.grid}>
          {products.breads.map(item => <ProductCard key={item.id} item={item} />)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pastries</Text>
        <View style={styles.grid}>
          {products.pastries.map(item => <ProductCard key={item.id} item={item} />)}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bakery.cream,
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.bakery.darktext,
    marginBottom: 15,
    marginTop: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardImage: {
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  priceTag: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    margin: 8,
  },
  priceText: {
    color: Colors.bakery.white,
    fontWeight: 'bold',
  },
  cardContent: {
    paddingTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.bakery.darktext,
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.bakery.gray,
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: Colors.bakery.orange,
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: Colors.bakery.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
