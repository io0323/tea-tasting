import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../App';

type TeaDetailScreenRouteProp = RouteProp<RootStackParamList, 'TeaDetail'>;

export default function TeaDetailScreen() {
  const route = useRoute<TeaDetailScreenRouteProp>();
  const { teaId } = route.params;

  // TODO: Fetch tea details from API
  const teaDetails = {
    name: 'サンプル茶',
    type: '緑茶',
    origin: '静岡県',
    description: 'この茶葉は...',
    rating: 4.5,
    tastingNotes: [
      { date: '2024-03-21', note: '香りが良い' },
      { date: '2024-03-20', note: '渋みが程よい' },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>{teaDetails.name}</Text>
        <Text style={styles.subtitle}>{teaDetails.type}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>産地</Text>
        <Text style={styles.text}>{teaDetails.origin}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>説明</Text>
        <Text style={styles.text}>{teaDetails.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>評価</Text>
        <Text style={styles.rating}>{teaDetails.rating} / 5.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>テイスティングノート</Text>
        {teaDetails.tastingNotes.map((note, index) => (
          <View key={index} style={styles.noteItem}>
            <Text style={styles.noteDate}>{note.date}</Text>
            <Text style={styles.noteText}>{note.note}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  rating: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  noteItem: {
    marginBottom: 15,
  },
  noteDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  noteText: {
    fontSize: 16,
 