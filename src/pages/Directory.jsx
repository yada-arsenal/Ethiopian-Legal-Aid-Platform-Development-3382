import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiPhone, FiMail, FiMapPin, FiStar, FiFilter } = FiIcons;

const Directory = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const lawyers = [
    {
      id: 1,
      name: 'Dr. Almaz Tesfaye',
      specialization: 'Family Law',
      location: 'Addis Ababa',
      phone: '+251-11-234-5678',
      email: 'almaz.tesfaye@law.et',
      rating: 4.9,
      experience: '15 years',
      languages: ['Amharic', 'English', 'Oromo'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9be2c4c?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Ato Bekele Mekonen',
      specialization: 'Criminal Law',
      location: 'Addis Ababa',
      phone: '+251-11-345-6789',
      email: 'bekele.mekonen@law.et',
      rating: 4.8,
      experience: '12 years',
      languages: ['Amharic', 'English'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'W/ro Hanan Ahmed',
      specialization: 'Business Law',
      location: 'Dire Dawa',
      phone: '+251-25-111-2222',
      email: 'hanan.ahmed@law.et',
      rating: 4.7,
      experience: '10 years',
      languages: ['Amharic', 'English', 'Arabic'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Ato Girma Wolde',
      specialization: 'Property Law',
      location: 'Bahir Dar',
      phone: '+251-58-220-3333',
      email: 'girma.wolde@law.et',
      rating: 4.6,
      experience: '8 years',
      languages: ['Amharic', 'English'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Dr. Selamawit Tadesse',
      specialization: 'Civil Rights',
      location: 'Addis Ababa',
      phone: '+251-11-456-7890',
      email: 'selamawit.tadesse@law.et',
      rating: 4.9,
      experience: '18 years',
      languages: ['Amharic', 'English', 'Oromo'],
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Ato Dawit Haile',
      specialization: 'Labor Law',
      location: 'Mekelle',
      phone: '+251-34-444-5555',
      email: 'dawit.haile@law.et',
      rating: 4.5,
      experience: '7 years',
      languages: ['Amharic', 'English', 'Tigrinya'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const specializations = [...new Set(lawyers.map(lawyer => lawyer.specialization))];
  const locations = [...new Set(lawyers.map(lawyer => lawyer.location))];

  const filteredLawyers = useMemo(() => {
    return lawyers.filter(lawyer => {
      const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           lawyer.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialization = !selectedSpecialization || lawyer.specialization === selectedSpecialization;
      const matchesLocation = !selectedLocation || lawyer.location === selectedLocation;
      
      return matchesSearch && matchesSpecialization && matchesLocation;
    });
  }, [searchTerm, selectedSpecialization, selectedLocation, lawyers]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('directory')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find qualified legal professionals in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Specialization Filter */}
            <div className="relative">
              <SafeIcon icon={FiFilter} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">{t('allSpecializations')}</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <SafeIcon icon={FiMapPin} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="">{t('allLocations')}</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{lawyer.name}</h3>
                    <p className="text-blue-600 font-medium">{lawyer.specialization}</p>
                    <div className="flex items-center mt-1">
                      <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{lawyer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-2 text-gray-400" />
                    {lawyer.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiPhone} className="h-4 w-4 mr-2 text-gray-400" />
                    {lawyer.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <SafeIcon icon={FiMail} className="h-4 w-4 mr-2 text-gray-400" />
                    {lawyer.email}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Experience:</span> {lawyer.experience}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Languages:</span> {lawyer.languages.join(', ')}
                  </p>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${lawyer.phone}`}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
                  >
                    {t('callNow')}
                  </a>
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-center hover:bg-gray-200 transition-colors"
                  >
                    {t('email')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No lawyers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;