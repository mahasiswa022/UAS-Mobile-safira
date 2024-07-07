import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Promo = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-psd/matcha-drink-menu-promotion-social-media-banner-post-template-instagram-post_84443-1002.jpg',
          }}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Grand Opening Specials</Text>
        <View style={styles.cardList}>
          {/* Example of a promo product item */}
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRz5GtlPm6qMjhOVLXKjviQ-pqEuL8Go6QA&s',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Matcha Cookies</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>Rp 10.000</Text>
                <Text style={styles.cardPrice}>Rp 8.000</Text>
              </View>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://lindseyeatsla.com/wp-content/uploads/2020/08/Lindseyeatsla_Matcha_Boba-7-1-scaled-e1707929781828.jpg',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Matcha Boba</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>Rp 15.000</Text>
                <Text style={styles.cardPrice}>Rp 12.000</Text>
              </View>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/05/maxresdefault-6-2847598830.jpg',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Matcha Pudding</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>Rp 15.000</Text>
                <Text style={styles.cardPrice}>Rp 12.000</Text>
              </View>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdY8HwoZYoTVJgUnvD8DgEVxndUzN1_an9w&s',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Matcha Latte</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>Rp 15.000</Text>
                <Text style={styles.cardPrice}>Rp 12.000</Text>
              </View>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Promo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    marginVertical: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  originalPrice: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  cardPrice: {
    fontSize: 14,
    color: 'green',
  },
  cardButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
