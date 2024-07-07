import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/matcha-tea-ads-design-template-3f49b00b72098980c951c9327bb3f1e2_screen.jpg?ts=1637249174',
          }}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>sweet matcha</Text>
        <View style={styles.productList}>
          {/* Example of a product item */}
          <View style={styles.productItem}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRz5GtlPm6qMjhOVLXKjviQ-pqEuL8Go6QA&s',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>matcha cookes</Text>
            <Text style={styles.productPrice}>Rp 10.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productItem}>
            <Image
              source={{
                uri: 'https://lindseyeatsla.com/wp-content/uploads/2020/08/Lindseyeatsla_Matcha_Boba-7-1-scaled-e1707929781828.jpg',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>matcha boba</Text>
            <Text style={styles.productPrice}>Rp 15.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productItem}>
            <Image
              source={{
                uri: 'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/07/05/maxresdefault-6-2847598830.jpg',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>puding matcha</Text>
            <Text style={styles.productPrice}>Rp 15.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productItem}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdY8HwoZYoTVJgUnvD8DgEVxndUzN1_an9w&s',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>matcga latte</Text>
            <Text style={styles.productPrice}>Rp 15.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productItem}>
            <Image
              source={{
                uri: 'https://www.ohhowcivilized.com/wp-content/uploads/2018/06/0618-iced-matcha-tea-8.jpg',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>matcga tea</Text>
            <Text style={styles.productPrice}>Rp 10.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productItem}>
            <Image
              source={{
                uri: 'https://www.dbdpowder.com/wp-content/uploads/2019/09/Catalog-Regular-Tea-Matcha-Tea-min.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>reguler matcha tea</Text>
            <Text style={styles.productPrice}>Rp 15.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
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
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
