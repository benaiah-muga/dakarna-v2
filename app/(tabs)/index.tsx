import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';

const heroImage = { uri: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e" };

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={heroImage} 
        style={styles.heroBanner}
        imageStyle={styles.heroImageStyle}
      >
        <Text style={styles.heroTitle}>Freshly Baked{`\n`}Happiness,{`\n`}Every Day</Text>
      </ImageBackground>

      <View style={styles.ctaContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]}
          onPress={() => router.push('/explore')}
        >
          <Text style={[styles.buttonText, styles.primaryButtonText]}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push('/explore')}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>See Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bakery.cream,
  },
  heroBanner: {
    height: 350,
    width: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  heroImageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.bakery.white,
    lineHeight: 44,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  ctaContainer: {
    padding: 20,
    marginTop: 10,
  },
  button: {
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: Colors.bakery.orange,
  },
  secondaryButton: {
    backgroundColor: Colors.bakery.lightPeach,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: Colors.bakery.white,
  },
  secondaryButtonText: {
    color: Colors.bakery.orange,
  },
});