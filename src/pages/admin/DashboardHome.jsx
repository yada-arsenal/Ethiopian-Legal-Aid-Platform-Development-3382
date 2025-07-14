import React, { useState, useEffect } from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiUsers, FiBook, FiPhone, FiMapPin, 
  FiActivity, FiMail, FiEye, FiUserCheck 
} = FiIcons;

const DashboardHome = () => {
  const [stats, setStats] = useState({
    lawyers: 12,
    resources: 24,
    emergency: 8,
    offices: 6,
    recentActivity: [
      {
        type: 'lawyer',
        name: 'Dr. Almaz Tesfaye',
        date: '2024-05-01T12:00:00Z',
        icon: FiUsers
      },
      {
        type: 'resource',
        name: 'Family Court Procedures',
        date: '2024-04-30T15:30:00Z',
        icon: FiBook
      },
      {
        type: 'emergency',
        name: 'Domestic Violence Hotline',
        date: '2024-04-29T09:15:00Z',
        icon: FiPhone
      }
    ]
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Mock data is already loaded
    setLoading(false);
  }, []);

  const statCards = [
    { title: 'Lawyers', value: stats.lawyers, icon: FiUsers, color: 'bg-blue-500' },
    { title: 'Legal Resources', value: stats.resources, icon: FiBook, color: 'bg-green-500' },
    { title: 'Emergency Contacts', value: stats.emergency, icon: FiPhone, color: 'bg-red-500' },
    { title: 'Regional Offices', value: stats.offices, icon: FiMapPin, color: 'bg-purple-500' }
  ];

  const quickActions = [
    { title: 'Add Lawyer', icon: FiUserCheck, link: '/admin/dashboard/lawyers', color: 'bg-blue-100 text-blue-600' },
    { title: 'Add Resource', icon: FiBook, link: '/admin/dashboard/resources', color: 'bg-green-100 text-green-600' },
    { title: 'View Website', icon: FiEye, link: '/', color: 'bg-gray-100 text-gray-600', external: true }
  ];

  if (loading) return <div className="flex justify-center items-center h-64">
    <div className="spinner"></div>
  </div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className={`${stat.color} p-4`}>
              <SafeIcon icon={stat.icon} className="h-8 w-8 text-white" />
            </div>
            <div className="p-4">
              <p className="text-gray-600">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <SafeIcon icon={FiActivity} className="mr-2 text-blue-600" />
            Recent Activity
          </h2>
          
          <div className="space-y-4">
            {stats.recentActivity.length > 0 ? (
              stats.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <SafeIcon icon={activity.icon} className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-gray-500">
                      Added {new Date(activity.date).toLocaleDateString()} - {activity.type}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No recent activity found</p>
            )}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <a 
                key={index}
                href={action.link}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-lg mr-3 ${action.color}`}>
                  <SafeIcon icon={action.icon} className="h-5 w-5" />
                </div>
                <span>{action.title}</span>
              </a>
            ))}
          </div>
          
          {/* Contact Support */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-700 mb-2">Need Help?</h3>
            <p className="text-sm text-blue-600 mb-3">
              Contact support for assistance with your admin dashboard.
            </p>
            <div className="flex items-center text-blue-700">
              <SafeIcon icon={FiMail} className="mr-2" />
              <a href="mailto:support@kirkoslegalaid.org">support@kirkoslegalaid.org</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;