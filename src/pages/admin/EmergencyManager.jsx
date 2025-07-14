import React, { useState } from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiPlus, FiEdit2, FiTrash2, FiPhone, 
  FiSave, FiX, FiAlertTriangle, FiUsers 
} = FiIcons;

const EmergencyManager = () => {
  // Mock contacts data
  const initialContacts = [
    {
      id: 1,
      name: 'KIRKOS Emergency Legal Hotline',
      phone: '911',
      description: '24/7 emergency legal assistance',
      category: 'General Legal Emergency',
      languages: ['Amharic', 'English', 'Oromo'],
      available: '24/7'
    },
    {
      id: 2,
      name: 'Domestic Violence Hotline',
      phone: '+251-11-551-5551',
      description: 'Confidential support for domestic violence victims',
      category: 'Domestic Violence',
      languages: ['Amharic', 'English', 'Oromo'],
      available: '24/7'
    }
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    category: '',
    languages: [],
    available: ''
  });

  const categories = [
    'General Legal Emergency',
    'Domestic Violence',
    'Criminal Defense',
    'Property Disputes'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'languages') {
      setFormData(prev => ({
        ...prev,
        [name]: value.split(',').map(lang => lang.trim())
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentContact) {
      // Edit existing contact
      setContacts(prev => 
        prev.map(contact => 
          contact.id === currentContact.id ? { ...formData, id: contact.id } : contact
        )
      );
    } else {
      // Add new contact
      setContacts(prev => [
        ...prev,
        { ...formData, id: Math.max(...prev.map(c => c.id), 0) + 1 }
      ]);
    }
    
    setIsModalOpen(false);
    setCurrentContact(null);
    setFormData({
      name: '',
      phone: '',
      description: '',
      category: '',
      languages: [],
      available: ''
    });
  };

  const handleEdit = (contact) => {
    setCurrentContact(contact);
    setFormData({
      name: contact.name,
      phone: contact.phone,
      description: contact.description,
      category: contact.category,
      languages: contact.languages || [],
      available: contact.available
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this emergency contact?')) {
      setContacts(prev => prev.filter(contact => contact.id !== id));
    }
  };

  // Group contacts by category
  const groupedContacts = contacts.reduce((acc, contact) => {
    if (!acc[contact.category]) {
      acc[contact.category] = [];
    }
    acc[contact.category].push(contact);
    return acc;
  }, {});

  if (loading) return <div className="flex justify-center items-center h-64">
    <div className="spinner"></div>
  </div>;
  
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded-lg">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Emergency Contacts</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <SafeIcon icon={FiPlus} className="mr-2" />
          Add Contact
        </button>
      </div>

      {/* Emergency Contacts by Category */}
      <div className="space-y-8">
        {Object.keys(groupedContacts).map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-4">
              <div className="flex items-center">
                <SafeIcon icon={FiAlertTriangle} className="h-6 w-6 text-white mr-3" />
                <h2 className="text-xl font-semibold text-white">{category}</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groupedContacts[category].map((contact) => (
                  <div key={contact.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{contact.name}</h3>
                    <p className="text-gray-600 mb-3">{contact.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <SafeIcon icon={FiPhone} className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={`tel:${contact.phone}`} className="text-blue-600 hover:text-blue-700 font-medium">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600">Available: {contact.available}</span>
                      </div>
                      <div className="flex items-center">
                        <SafeIcon icon={FiUsers} className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          Languages: {contact.languages?.join(', ')}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(contact)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <SafeIcon icon={FiEdit2} />
                      </button>
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <SafeIcon icon={FiTrash2} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {Object.keys(groupedContacts).length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">No emergency contacts found. Add your first contact using the button above.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {currentContact ? 'Edit Emergency Contact' : 'Add New Emergency Contact'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentContact(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <SafeIcon icon={FiX} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Languages (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages.join(', ')}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Amharic, English, Oromo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Availability
                  </label>
                  <input
                    type="text"
                    name="available"
                    value={formData.available}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="24/7, 8:00 AM - 6:00 PM"
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setCurrentContact(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    <SafeIcon icon={FiSave} className="mr-2 inline" />
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyManager;