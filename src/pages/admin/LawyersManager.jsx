import React, { useState } from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiPlus, FiEdit2, FiTrash2, FiSearch, FiSave, FiX, FiUpload
} = FiIcons;

const LawyersManager = () => {
  // Mock data
  const initialLawyers = [
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
      image_url: 'https://images.unsplash.com/photo-1494790108755-2616b9be2c4c?w=400&h=400&fit=crop&crop=face'
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
      image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    }
  ];
  
  const [lawyers, setLawyers] = useState(initialLawyers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLawyer, setCurrentLawyer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    location: '',
    phone: '',
    email: '',
    rating: '',
    experience: '',
    languages: [],
    image_url: ''
  });

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Mock file upload
    const mockUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
    setFormData(prev => ({
      ...prev,
      image_url: mockUrl
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentLawyer) {
      // Edit existing lawyer
      setLawyers(prev => 
        prev.map(lawyer => 
          lawyer.id === currentLawyer.id ? { ...formData, id: lawyer.id } : lawyer
        )
      );
    } else {
      // Add new lawyer
      setLawyers(prev => [
        ...prev,
        { ...formData, id: Math.max(...prev.map(l => l.id), 0) + 1 }
      ]);
    }
    
    setIsModalOpen(false);
    setCurrentLawyer(null);
    setFormData({
      name: '',
      specialization: '',
      location: '',
      phone: '',
      email: '',
      rating: '',
      experience: '',
      languages: [],
      image_url: ''
    });
  };

  const handleEdit = (lawyer) => {
    setCurrentLawyer(lawyer);
    setFormData({
      name: lawyer.name,
      specialization: lawyer.specialization,
      location: lawyer.location,
      phone: lawyer.phone,
      email: lawyer.email,
      rating: lawyer.rating,
      experience: lawyer.experience,
      languages: lawyer.languages,
      image_url: lawyer.image_url
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lawyer?')) {
      setLawyers(prev => prev.filter(lawyer => lawyer.id !== id));
    }
  };

  const filteredLawyers = lawyers.filter(lawyer =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lawyers Directory</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <SafeIcon icon={FiPlus} className="mr-2" />
          Add Lawyer
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <SafeIcon
            icon={FiSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search lawyers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Lawyers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLawyers.map(lawyer => (
          <div
            key={lawyer.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={lawyer.image_url}
              alt={lawyer.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{lawyer.name}</h3>
              <p className="text-blue-600">{lawyer.specialization}</p>
              <p className="text-gray-600">{lawyer.location}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(lawyer)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <SafeIcon icon={FiEdit2} />
                </button>
                <button
                  onClick={() => handleDelete(lawyer.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <SafeIcon icon={FiTrash2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {currentLawyer ? 'Edit Lawyer' : 'Add New Lawyer'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentLawyer(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <SafeIcon icon={FiX} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
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
                    Specialization
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
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
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    min="0"
                    max="5"
                    step="0.1"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Languages (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages.join(',')}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-1 block w-full"
                  />
                  {formData.image_url && (
                    <img
                      src={formData.image_url}
                      alt="Preview"
                      className="mt-2 h-32 w-32 object-cover rounded-lg"
                    />
                  )}
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setCurrentLawyer(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    <SafeIcon icon={FiSave} className="mr-2" />
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

export default LawyersManager;