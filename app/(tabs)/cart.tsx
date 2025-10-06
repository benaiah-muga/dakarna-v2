import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useCart } from '../../context/CartContext';

const PAYMENT_METHODS = ['Credit Card', 'Mobile Pay', 'Cash on Delivery'];
const DELIVERY_FEE = 2.50;

export default function CartScreen() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const newSubtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + DELIVERY_FEE);
  }, [cart]);

  const CartItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>$ {item.price}</Text>
      </View>
      <View style={styles.quantitySelector}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
          <Ionicons name="remove" size={18} color={Colors.bakery.darktext} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
          <Ionicons name="add" size={18} color={Colors.bakery.darktext} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cart.map(item => <CartItem key={item.id} item={item} />)}

        <Text style={styles.sectionTitle}>Payment Method</Text>
        {PAYMENT_METHODS.map(method => (
          <TouchableOpacity key={method} style={[styles.paymentOption, selectedPayment === method && styles.paymentOptionSelected]} onPress={() => setSelectedPayment(method)}>
            <View style={[styles.radio, selectedPayment === method && styles.radioSelected]}>
              {selectedPayment === method && <View style={styles.radioFill} />}
            </View>
            <Text style={styles.paymentText}>{method}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$ {subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$ {DELIVERY_FEE.toFixed(2)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$ {total.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.floatingBar}>
        <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
          <Text style={styles.primaryButtonText}>Place Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]} onPress={() => router.push('/explore')}>
          <Text style={styles.secondaryButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bakery.cream },
  scrollContainer: { padding: 15, paddingBottom: 180 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bakery.white, borderRadius: 15, padding: 10, marginBottom: 15 },
  itemImage: { width: 60, height: 60, borderRadius: 8 },
  itemDetails: { flex: 1, marginLeft: 15 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: Colors.bakery.darktext },
  itemPrice: { fontSize: 14, color: Colors.bakery.gray, marginTop: 4 },
  quantitySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.bakery.lightPeach, borderRadius: 20, padding: 5 },
  quantityButton: { padding: 5 },
  quantityText: { fontSize: 16, fontWeight: 'bold', color: Colors.bakery.darktext, marginHorizontal: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: Colors.bakery.darktext, marginTop: 20, marginBottom: 10 },
  paymentOption: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#ddd', marginBottom: 10, backgroundColor: 'white' },
  paymentOptionSelected: { borderColor: Colors.bakery.orange, backgroundColor: '#fff9f2' },
  radio: { height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: '#ddd', alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  radioSelected: { borderColor: Colors.bakery.orange },
  radioFill: { height: 10, width: 10, borderRadius: 5, backgroundColor: Colors.bakery.orange },
  paymentText: { fontSize: 16, color: Colors.bakery.darktext },
  summaryContainer: { backgroundColor: 'white', padding: 20, borderRadius: 15 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  summaryLabel: { fontSize: 16, color: Colors.bakery.gray },
  summaryValue: { fontSize: 16, color: Colors.bakery.darktext },
  totalRow: { borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 10, marginTop: 5 },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: Colors.bakery.darktext },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: Colors.bakery.darktext },
  floatingBar: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: Colors.bakery.cream, borderTopColor: '#eee', borderTopWidth: 1 },
  actionButton: { borderRadius: 50, paddingVertical: 18, alignItems: 'center', marginBottom: 10 },
  primaryButton: { backgroundColor: Colors.bakery.orange },
  primaryButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: Colors.bakery.lightPeach },
  secondaryButtonText: { color: Colors.bakery.orange, fontSize: 16, fontWeight: 'bold' },
});