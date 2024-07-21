import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const data = [
  { id: '1', name: 'John Doe', product: 'Laptop', number: '1234567890', address: '123 Main St', status: 'Delivering' },
  { id: '2', name: 'Jane Smith', product: 'Smartphone', number: '0987654321', address: '456 Elm St', status: 'Delivered' },
  // Add more data as needed
];

const SpreadsheetScreen = ({ navigation }) => {
  const [parcelData, setParcelData] = useState(data);

  const handleStatusChange = (id, newStatus) => {
    const newData = parcelData.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setParcelData(newData);
  };

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.product}</Text>
      <Text style={styles.cell}>{item.number}</Text>
      <Text style={styles.cell}>{item.address}</Text>
      <Picker
        selectedValue={item.status}
        style={styles.picker}
        onValueChange={(value) => handleStatusChange(item.id, value)}
      >
        <Picker.Item label="Delivering" value="Delivering" />
        <Picker.Item label="Delivered" value="Delivered" />
        <Picker.Item label="Haitas" value="Haitas" />
      </Picker>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Map', { address: item.address })}
        style={styles.button}
      >
        View Map
      </Button>
    </View>
  );

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.header}>ID</Text>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.header}>Product</Text>
          <Text style={styles.header}>Number</Text>
          <Text style={styles.header}>Address</Text>
          <Text style={styles.header}>Status</Text>
          <Text style={styles.header}></Text>
        </View>
        <FlatList
          data={parcelData}
          renderItem={renderRow}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#BB86FC',
  },
  headerRow: {
    backgroundColor: '#333',
  },
  header: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 120,
    flex: 1,
  },
  cell: {
    color: '#FFF',
    textAlign: 'center',
    minWidth: 120,
    flex: 1,
  },
  picker: {
    color: '#BB86FC',
    minWidth: 150,
    flex: 1,
  },
  button: {
    marginLeft: 10,
    minWidth: 120,
    flex: 1,
  },
});

export default SpreadsheetScreen;
