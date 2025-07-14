import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiHeart, FiUsers, FiAward, FiGlobe, FiScale, FiShield, FiBookOpen } = FiIcons;

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: FiScale,
      title: 'Justice for All',
      description: 'We believe everyone deserves access to quality legal representation regardless of their economic status.'
    },
    {
      icon: FiGlobe,
      title: 'Cultural Sensitivity',
      description: 'Our multilingual approach ensures that language and cultural barriers do not prevent access to justice.'
    },
    {
      icon: FiUsers,
      title: 'Community Focus',
      description: 'We are deeply rooted in Ethiopian communities and understand the unique challenges they face.'
    },
    {
      icon: FiShield,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of legal practice and ethical conduct in all our services.'
    }
  ];

  const team = [
    {
      name: 'Dr. Meron Teshome',
      position: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9be2c4c?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading legal reform advocate with 20+ years of experience in Ethiopian law.'
    },
    {
      name: 'Ato Tadesse Bekele',
      position: 'Legal Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in constitutional law and human rights with extensive court experience.'
    },
    {
      name: 'W/ro Hiwot Alemayehu',
      position: 'Community Outreach Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Passionate advocate for community legal education and multilingual services.'
    },
    {
      name: 'Ato Girma Assefa',
      position: 'Emergency Services Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Crisis management expert ensuring 24/7 legal emergency response services.'
    }
  ];

  const achievements = [
    {
      icon: FiUsers,
      number: '10,000+',
      label: 'People Served',
      description: 'Legal assistance provided to over 10,000 individuals and families'
    },
    {
      icon: FiGlobe,
      number: '15',
      label: 'Regions Covered',
      description: 'Legal services available across 15 regions of Ethiopia'
    },
    {
      icon: FiBookOpen,
      number: '500+',
      label: 'Legal Resources',
      description: 'Comprehensive legal guides and resources in multiple languages'
    },
    {
      icon: FiAward,
      number: '25',
      label: 'Years of Service',
      description: 'Serving Ethiopian communities since 1999'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            KIRKOS LegalAid Center has been at the forefront of providing accessible legal services 
            to Ethiopian communities for over two decades.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiTarget} className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, comprehensive legal aid services to Ethiopian communities, 
              ensuring that language, cultural, and economic barriers do not prevent anyone from 
              accessing justice and legal protection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiHeart} className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A society where every Ethiopian has equal access to justice, legal protection, 
              and the knowledge needed to understand and exercise their legal rights, 
              regardless of their background or circumstances.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-blue-600 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <SafeIcon icon={achievement.icon} className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-blue-100 mb-2">{achievement.label}</div>
                <p className="text-blue-200 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-blue-600">1999</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Foundation</h3>
                  <p className="text-gray-600">
                    KIRKOS LegalAid Center was established to address the growing need for accessible 
                    legal services in Ethiopian communities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-blue-600">2005</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Expanded services to include multilingual support and opened regional offices 
                    across Ethiopia.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-blue-600">2015</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Innovation</h3>
                  <p className="text-gray-600">
                    Launched digital platforms and 24/7 emergency legal services to better serve 
                    our communities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-bold text-blue-600">2024</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Continued Growth</h3>
                  <p className="text-gray-600">
                    Today, we continue to innovate and expand our services, serving thousands 
                    of clients annually with comprehensive legal support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;