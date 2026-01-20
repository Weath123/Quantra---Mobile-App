import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl, ActivityIndicator, Button } from 'react-native';
import { pullAllInformation } from './src/services/dataService';
import { saveData, getData, isFresh } from './src/utils/storage';
import DataCard from './src/components/DataCard';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // Function to pull/fetch information from API
  const pullInformation = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    
    try {
      // Check if we have fresh cached data (unless force refresh)
      if (!forceRefresh && isFresh('allData', 5)) {
        const cached = getData('allData');
        if (cached) {
          setData(cached.data.slice(0, 10));
          console.log('Loaded data from cache');
          setLoading(false);
          setRefreshing(false);
          return;
        }
      }

      // Pull fresh data from server
      const result = await pullAllInformation();
      
      if (result.success) {
        const fetchedData = result.data.slice(0, 10); // Get first 10 items
        setData(fetchedData);
        saveData('allData', result.data); // Cache the data
        console.log('Successfully pulled information from server');
      } else {
        setError('Failed to pull information: ' + result.error);
      }
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
    pullInformation(true); // Force refresh
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quantra Mobile App</Text>
      <Text style={styles.subtitle}>Business Management for Contractors & SMB</Text>
      
      <Button 
        title="Pull Latest Information" 
        onPress={() => pullInformation(false)}
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
          <DataCard
            key={item.id}
            title={item.title}
            body={item.body}
            onPress={() => console.log('Tapped item:', item.id)}
          />
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
});
