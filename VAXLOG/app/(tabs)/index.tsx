import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// Mock data for family members
const familyMembers = [
  {
    id: 1,
    name: 'Julian Doe',
    birthdate: '12/06/2001',
    fullyVaccinated: 'Completed',
    nextDose: 'None',
  },
  {
    id: 2,
    name: 'Ryan Doe',
    birthdate: '12/08/2010',
    fullyVaccinated: 'Completed',
    nextDose: 'None',
  },
  {
    id: 3,
    name: 'Alex Graham',
    birthdate: '08/02/2010',
    fullyVaccinated: 'Not Completed',
    nextDose: '10/10/2025',
  },
  {
    id: 4,
    name: 'May Magde',
    birthdate: '07/08/2005',
    fullyVaccinated: 'Completed',
    nextDose: 'None',
  },
  {
    id: 5,
    name: 'Brock Turner',
    birthdate: '01/06/2003',
    fullyVaccinated: 'Not Completed',
    nextDose: '12/08/2025',
  },
  {
    id: 6,
    name: 'Macy Turner',
    birthdate: '07/07/2003',
    fullyVaccinated: 'Not Completed',
    nextDose: '12/08/2025',
  },
  {
    id: 7,
    name: 'Lucy Ambar',
    birthdate: '08/03/2003',
    fullyVaccinated: 'Completed',
    nextDose: 'None',
  },
  {
    id: 8,
    name: 'Jane Ambar',
    birthdate: '18/07/2008',
    fullyVaccinated: 'Completed',
    nextDose: 'None',
  },
];

export default function DashboardScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Ionicons name="shield-checkmark" size={28} color="#FFFFFF" />
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle-outline" size={36} color="#1B4E20" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Family Vaccination Tracker</Text>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Dashboard' && styles.tabActive]}
          onPress={() => setActiveTab('Dashboard')}>
          <Text style={[styles.tabText, activeTab === 'Dashboard' && styles.tabTextActive]}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Family Members' && styles.tabInactive]}
          onPress={() => setActiveTab('Family Members')}>
          <Text style={styles.tabText}>Family Members</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Vaccinations' && styles.tabInactive]}
          onPress={() => setActiveTab('Vaccinations')}>
          <Text style={styles.tabText}>Vaccinations</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Dashboard Title */}
        <Text style={styles.dashboardTitle}>Dashboard</Text>

        {/* Info Cards Container */}
        <View style={styles.cardsContainer}>
          {/* Welcome Card */}
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>Welcome, Marcus Turner</Text>
            <Text style={styles.welcomeSubtitle}>
              Track your family's vaccination records and upcoming doses
            </Text>
          </View>

          {/* Next Dose Card */}
          <View style={styles.nextDoseCard}>
            <Text style={styles.nextDoseTitle}>Next Dose</Text>
            <View style={styles.doseBadge}>
              <Text style={styles.doseBadgeText}>DTP</Text>
            </View>
            <Text style={styles.doseDate}>22/10/2025</Text>
          </View>
        </View>

        {/* Family Vaccination Overview */}
        <View style={styles.overviewContainer}>
          <View style={styles.overviewHeader}>
            <Text style={styles.overviewTitle}>Family Vaccination Overview</Text>
            <View style={styles.progressIndicator}>
              <View style={styles.progressBar} />
            </View>
          </View>

          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Name</Text>
            <Text style={[styles.tableHeaderText, { flex: 1.2 }]}>Birthdate</Text>
            <Text style={[styles.tableHeaderText, { flex: 1.3 }]}>Fully Vaccinated</Text>
            <Text style={[styles.tableHeaderText, { flex: 1 }]}>Next Dose</Text>
          </View>

          {/* Table Rows */}
          {familyMembers.map((member, index) => (
            <View
              key={member.id}
              style={[
                styles.tableRow,
                index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd,
              ]}>
              <Text style={[styles.tableCell, styles.nameCell, { flex: 1.5 }]}>
                {member.name}
              </Text>
              <Text style={[styles.tableCell, { flex: 1.2 }]}>{member.birthdate}</Text>
              <Text
                style={[
                  styles.tableCell,
                  { flex: 1.3 },
                  member.fullyVaccinated === 'Completed'
                    ? styles.completedText
                    : styles.notCompletedText,
                ]}>
                {member.fullyVaccinated}
              </Text>
              <Text style={[styles.tableCell, { flex: 1 }]}>{member.nextDose}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="calendar" size={24} color="#1B4E20" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="information-circle" size={24} color="#1B4E20" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="settings" size={24} color="#1B4E20" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="notifications" size={24} color="#1B4E20" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="#1B4E20" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#2D7A3F',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    padding: 4,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1B4E20',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
  },
  tabActive: {
    backgroundColor: '#10B981',
  },
  tabInactive: {
    backgroundColor: '#D1F4E0',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1B4E20',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B4E20',
    marginBottom: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  welcomeCard: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  welcomeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B4E20',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 12,
    color: '#2D5F3C',
    lineHeight: 18,
  },
  nextDoseCard: {
    backgroundColor: '#D1F4E0',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A5D6A7',
    minWidth: 120,
    alignItems: 'center',
  },
  nextDoseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B4E20',
    marginBottom: 8,
  },
  doseBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  doseBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  doseDate: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1B4E20',
  },
  overviewContainer: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 80,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B4E20',
  },
  progressIndicator: {
    width: 60,
    height: 20,
    backgroundColor: '#10B981',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#10B981',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#A5D6A7',
    marginBottom: 4,
  },
  tableHeaderText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1B4E20',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 2,
  },
  tableRowEven: {
    backgroundColor: '#F1F8F4',
  },
  tableRowOdd: {
    backgroundColor: '#FFFFFF',
  },
  tableCell: {
    fontSize: 10,
    color: '#2D5F3C',
    textAlign: 'left',
  },
  nameCell: {
    fontWeight: '500',
    color: '#1B4E20',
  },
  completedText: {
    color: '#059669',
    fontWeight: '500',
  },
  notCompletedText: {
    color: '#DC2626',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#E8F5E9',
    borderTopWidth: 1,
    borderTopColor: '#C8E6C9',
  },
  navButton: {
    padding: 8,
  },
});
