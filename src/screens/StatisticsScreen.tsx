import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function StatisticsScreen() {
  // TODO: Fetch statistics from API
  const statistics = {
    totalTeas: 15,
    averageRating: 4.2,
    topTypes: [
      { type: '緑茶', count: 8 },
      { type: '紅茶', count: 4 },
      { type: '烏龍茶', count: 3 },
    ],
    monthlyTastings: [
      { month: '1月', count: 5 },
      { month: '2月', count: 8 },
      { month: '3月', count: 12 },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>概要</Text>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>登録したお茶の数</Text>
          <Text style={styles.statValue}>{statistics.totalTeas}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>平均評価</Text>
          <Text style={styles.statValue}>{statistics.averageRating.toFixed(1)}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>種類別</Text>
        {statistics.topTypes.map((item, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statLabel}>{item.type}</Text>
            <Text style={styles.statValue}>{item.count}種</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>月別テイスティング数</Text>
        {statistics.monthlyTastings.map((item, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statLabel}>{item.month}</Text>
            <Text style={styles.statValue}>{item.count}回</Text>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
}); 