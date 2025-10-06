import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const SettingsItem = ({ icon, iconBg, title, subtitle, isProfile = false }) => (
  <View style={styles.itemContainer}>
    {isProfile ? (
      <Image 
        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
        style={styles.profileAvatar}
      />
    ) : (
      <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
        {icon}
      </View>
    )}
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemSubtitle}>{subtitle}</Text>
    </View>
    <Ionicons name="chevron-forward" size={24} color={Colors.bakery.gray} />
  </View>
);

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Account</ThemedText>
        <View style={styles.card}>
          <SettingsItem
            isProfile
            title="Profile"
            subtitle="Edit your profile information"
          />
        </View>
        <View style={styles.card}>
          <SettingsItem
            icon={<Feather name="bookmark" size={24} color={Colors.bakery.orange} />}
            iconBg={Colors.bakery.lightPeach}
            title="Saved Items"
            subtitle="Manage your saved items"
          />
        </View>
        <View style={styles.card}>
          <SettingsItem
            icon={<MaterialIcons name="history" size={24} color={Colors.bakery.orange} />}
            iconBg={Colors.bakery.lightPeach}
            title="Order History"
            subtitle="View your past orders"
          />
        </View>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Preferences</ThemedText>
        <View style={styles.card}>
          <SettingsItem
            icon={<Ionicons name="notifications-outline" size={24} color={Colors.bakery.orange} />}
            iconBg={Colors.bakery.lightPeach}
            title="Notifications"
            subtitle="Manage your notifications"
          />
        </View>
        <View style={styles.card}>
          <SettingsItem
            icon={<Feather name="mail" size={24} color={Colors.bakery.orange} />}
            iconBg={Colors.bakery.lightPeach}
            title="Newsletter"
            subtitle="Subscribe to our newsletter"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bakery.white,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.bakery.darktext,
    marginBottom: 15,
  },
  card: {
    backgroundColor: Colors.bakery.cream,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.bakery.darktext,
  },
  itemSubtitle: {
    fontSize: 14,
    color: Colors.bakery.gray,
    marginTop: 2,
  },
});