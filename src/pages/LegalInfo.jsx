import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiChevronRight, FiDownload, FiExternalLink, FiHeart, FiShield, FiBriefcase, FiHome, FiUsers, FiGavel } = FiIcons;

const LegalInfo = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('family');

  const categories = [
    {
      id: 'family',
      name: t('familyLaw'),
      icon: FiHeart,
      color: 'bg-pink-500',
      description: 'Marriage, divorce, child custody, and family-related legal matters'
    },
    {
      id: 'criminal',
      name: t('criminalLaw'),
      icon: FiShield,
      color: 'bg-red-500',
      description: 'Criminal defense, rights of the accused, and legal procedures'
    },
    {
      id: 'civil',
      name: t('civilRights'),
      icon: FiUsers,
      color: 'bg-blue-500',
      description: 'Human rights, discrimination, and civil liberties'
    },
    {
      id: 'business',
      name: t('businessLaw'),
      icon: FiBriefcase,
      color: 'bg-green-500',
      description: 'Business formation, contracts, and commercial law'
    },
    {
      id: 'property',
      name: t('propertyLaw'),
      icon: FiHome,
      color: 'bg-yellow-500',
      description: 'Real estate, property rights, and land disputes'
    },
    {
      id: 'labor',
      name: t('laborLaw'),
      icon: FiGavel,
      color: 'bg-purple-500',
      description: 'Employment rights, workplace disputes, and labor relations'
    }
  ];

  const legalResources = {
    family: [
      {
        title: 'Marriage and Divorce Procedures in Ethiopia',
        description: 'Complete guide to marriage registration and divorce proceedings under Ethiopian law',
        type: 'Guide',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Child Custody Rights',
        description: 'Understanding parental rights and child custody arrangements',
        type: 'Article',
        downloadUrl: '#',
        language: 'Amharic/English/Oromo'
      },
      {
        title: 'Family Court Procedures',
        description: 'Step-by-step guide to family court proceedings',
        type: 'Manual',
        downloadUrl: '#',
        language: 'Amharic/English'
      }
    ],
    criminal: [
      {
        title: 'Rights of the Accused',
        description: 'Know your rights when facing criminal charges',
        type: 'Guide',
        downloadUrl: '#',
        language: 'Amharic/English/Oromo'
      },
      {
        title: 'Criminal Court Procedures',
        description: 'Understanding the criminal justice process in Ethiopia',
        type: 'Manual',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Bail and Detention Rights',
        description: 'Legal rights regarding bail and detention',
        type: 'Article',
        downloadUrl: '#',
        language: 'Amharic/English'
      }
    ],
    civil: [
      {
        title: 'Human Rights in Ethiopia',
        description: 'Overview of fundamental human rights and freedoms',
        type: 'Guide',
        downloadUrl: '#',
        language: 'Amharic/English/Oromo'
      },
      {
        title: 'Anti-Discrimination Laws',
        description: 'Understanding discrimination laws and remedies',
        type: 'Article',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Civil Liberties Handbook',
        description: 'Comprehensive guide to civil rights and liberties',
        type: 'Handbook',
        downloadUrl: '#',
        language: 'Amharic/English'
      }
    ],
    business: [
      {
        title: 'Business Registration Guide',
        description: 'Step-by-step process for registering a business in Ethiopia',
        type: 'Guide',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Contract Law Basics',
        description: 'Understanding contracts and commercial agreements',
        type: 'Article',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Tax Obligations for Businesses',
        description: 'Business tax requirements and compliance',
        type: 'Manual',
        downloadUrl: '#',
        language: 'Amharic/English'
      }
    ],
    property: [
      {
        title: 'Property Rights in Ethiopia',
        description: 'Understanding property ownership and rights',
        type: 'Guide',
        downloadUrl: '#',
        language: 'Amharic/English/Oromo'
      },
      {
        title: 'Land Dispute Resolution',
        description: 'Resolving land and property disputes',
        type: 'Article',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Real Estate Transactions',
        description: 'Legal aspects of buying and selling property',
        type: 'Manual',
        downloadUrl: '#',
        language: 'Amharic/English'
      }
    ],
    labor: [
      {
        title: 'Employee Rights and Protections',
        description: 'Understanding your rights as an employee',
        type: 'Guide',
        downloadUrl: '#',
        language: 'Amharic/English/Oromo'
      },
      {
        title: 'Workplace Discrimination',
        description: 'Addressing discrimination in the workplace',
        type: 'Article',
        downloadUrl: '#',
        language: 'Amharic/English'
      },
      {
        title: 'Labor Dispute Resolution',
        description: 'Resolving workplace conflicts and disputes',
        type: 'Manual',
        downloadUrl: '#',
        language: 'Amharic/English'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('legalInfo')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive legal guides and resources in multiple languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('legalGuides')}
              </h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${category.color} flex items-center justify-center mr-3`}>
                      <SafeIcon icon={category.icon} className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg ${categories.find(c => c.id === selectedCategory)?.color} flex items-center justify-center mr-4`}>
                  <SafeIcon icon={categories.find(c => c.id === selectedCategory)?.icon} className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {categories.find(c => c.id === selectedCategory)?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              {legalResources[selectedCategory]?.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <SafeIcon icon={FiBook} className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">
                          <strong>Languages:</strong> {resource.language}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <SafeIcon icon={FiDownload} className="h-4 w-4 mr-1" />
                        Download
                      </a>
                      <button className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <SafeIcon icon={FiExternalLink} className="h-4 w-4 mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Need More Help?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">Consult with our legal experts</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiBook} className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">Access additional resources</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Legal Advisor
                  <SafeIcon icon={FiChevronRight} className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;