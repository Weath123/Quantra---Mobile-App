import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // Function to pull/fetch information from API
  const pullInformation = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Example API endpoint - replace with your actual backend
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data.slice(0, 10)); // Get first 10 items
      console.log('Successfully pulled information from server');
    } catch (err) {
      setError('Failed to pull information: ' + err.message);
      console.error('Error pulling information:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Pull information when app loads
  useEffect(() => {
    pullInformation();
  }, []);

  // Handle pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true);
    pullInformation();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quantra Mobile App</Text>
      <Text style={styles.subtitle}>Business Management for Contractors & SMB</Text>
      
      <Button 
        title="Pull Latest Information" 
        onPress={pullInformation}
        disabled={loading}
      />

      {loading && !refreshing && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}

      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardBody}>{item.body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardBody: {
    fontSize: 14,
    color: '#333',
  },
});
