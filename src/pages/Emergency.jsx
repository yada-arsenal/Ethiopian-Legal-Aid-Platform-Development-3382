import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiClock, FiMapPin, FiMail, FiAlertTriangle, FiShield, FiUsers, FiHeart, FiHome } = FiIcons;

const Emergency = () => {
  const { t } = useLanguage();

  const emergencyContacts = [
    {
      category: 'General Legal Emergency',
      icon: FiShield,
      color: 'bg-red-500',
      contacts: [
        {
          name: 'KIRKOS Emergency Legal Hotline',
          phone: '911',
          description: '24/7 emergency legal assistance',
          languages: ['Amharic', 'English', 'Oromo'],
          available: '24/7'
        },
        {
          name: 'Legal Aid Emergency Line',
          phone: '+251-11-911-1234',
          description: 'Immediate legal consultation',
          languages: ['Amharic', 'English'],
          available: '24/7'
        }
      ]
    },
    {
      category: 'Domestic Violence',
      icon: FiHeart,
      color: 'bg-pink-500',
      contacts: [
        {
          name: 'Domestic Violence Hotline',
          phone: '+251-11-551-5551',
          description: 'Confidential support for domestic violence victims',
          languages: ['Amharic', 'English', 'Oromo'],
          available: '24/7'
        },
        {
          name: 'Women\'s Legal Support',
          phone: '+251-11-552-5552',
          description: 'Legal assistance for women in crisis',
          languages: ['Amharic', 'English'],
          available: '24/7'
        }
      ]
    },
    {
      category: 'Criminal Defense',
      icon: FiUsers,
      color: 'bg-blue-500',
      contacts: [
        {
          name: 'Criminal Defense Emergency',
          phone: '+251-11-553-5553',
          description: 'Immediate criminal defense assistance',
          languages: ['Amharic', 'English'],
          available: '24/7'
        },
        {
          name: 'Detention Rights Hotline',
          phone: '+251-11-554-5554',
          description: 'Legal support for detained individuals',
          languages: ['Amharic', 'English', 'Oromo'],
          available: '24/7'
        }
      ]
    },
    {
      category: 'Property Disputes',
      icon: FiHome,
      color: 'bg-yellow-500',
      contacts: [
        {
          name: 'Property Emergency Line',
          phone: '+251-11-555-5555',
          description: 'Urgent property and land dispute assistance',
          languages: ['Amharic', 'English'],
          available: '8:00 AM - 10:00 PM'
        }
      ]
    }
  ];

  const regionalOffices = [
    {
      region: 'Addis Ababa',
      address: 'Kirkos Sub-city, Woreda 08, House No. 123',
      phone: '+251-11-123-4567',
      email: 'addisababa@kirkoslegalaid.org',
      hours: '24/7 Emergency Service'
    },
    {
      region: 'Dire Dawa',
      address: 'Sabian District, House No. 456',
      phone: '+251-25-111-2222',
      email: 'diredawa@kirkoslegalaid.org',
      hours: '8:00 AM - 10:00 PM'
    },
    {
      region: 'Bahir Dar',
      address: 'Kebele 12, House No. 789',
      phone: '+251-58-220-3333',
      email: 'bahirdar@kirkoslegalaid.org',
      hours: '8:00 AM - 8:00 PM'
    },
    {
      region: 'Mekelle',
      address: 'Ayder District, House No. 101',
      phone: '+251-34-444-5555',
      email: 'mekelle@kirkoslegalaid.org',
      hours: '8:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <SafeIcon icon={FiAlertTriangle} className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('emergency')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get immediate legal assistance when you need it most. Our emergency services are available 24/7.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <SafeIcon icon={FiAlertTriangle} className="h-6 w-6 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-1">
                In Case of Immediate Emergency
              </h3>
              <p className="text-red-700">
                If you are in immediate danger, call <strong>911</strong> or contact local police first. 
                Our legal emergency services are available to provide legal support after ensuring your safety.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts by Category */}
        <div className="space-y-8 mb-12">
          {emergencyContacts.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className={`${category.color} p-4`}>
                <div className="flex items-center">
                  <SafeIcon icon={category.icon} className="h-6 w-6 text-white mr-3" />
                  <h2 className="text-xl font-semibold text-white">{category.category}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.contacts.map((contact, contactIndex) => (
                    <div key={contactIndex} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{contact.name}</h3>
                      <p className="text-gray-600 mb-3">{contact.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <SafeIcon icon={FiPhone} className="h-4 w-4 text-gray-400 mr-2" />
                          <a 
                            href={`tel:${contact.phone}`}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center">
                          <SafeIcon icon={FiClock} className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{contact.available}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <SafeIcon icon={FiUsers} className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">
                            Languages: {contact.languages.join(', ')}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a
                          href={`tel:${contact.phone}`}
                          className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          <SafeIcon icon={FiPhone} className="h-4 w-4 mr-2" />
                          {t('callNow')}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional Offices */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Emergency Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalOffices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{office.region}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <SafeIcon icon={FiMapPin} className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <SafeIcon icon={FiPhone} className="h-4 w-4 text-gray-400 mr-2" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <SafeIcon icon={FiMail} className="h-4 w-4 text-gray-400 mr-2" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Additional Emergency Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <SafeIcon icon={FiShield} className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Police Emergency: 911</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiHeart} className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Medical Emergency: 907</span>
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiPhone} className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-700">Fire Department: 939</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;