import React, { useState } from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiPlus, FiEdit2, FiTrash2, FiMapPin, 
  FiPhone, FiMail, FiSave, FiX 
} = FiIcons;

const OfficesManager = () => {
  // Mock offices data
  const initialOffices = [
    {
      id: 1,
      region: 'Addis Ababa',
      address: 'Kirkos Sub-city, Woreda 08, House No. 123',
      phone: '+251-11-123-4567',
      email: 'addisababa@kirkoslegalaid.org',
      hours: '24/7 Emergency Service'
    },
    {
      id: 2,
      region: 'Dire Dawa',
      address: 'Sabian District, House No. 456',
      phone: '+251-25-111-2222',
      email: 'diredawa@kirkoslegalaid.org',
      hours: '8:00 AM - 10:00 PM'
    }
  ];

  const [offices, setOffices] = useState(initialOffices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOffice, setCurrentOffice] = useState(null);

  const [formData, setFormData] = useState({
    region: '',
    address: '',
    phone: '',
    email: '',
    hours: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentOffice) {
      // Edit existing office
      setOffices(prev => 
        prev.map(office => 
          office.id === currentOffice.id ? { ...formData, id: office.id } : office
        )
      );
    } else {
      // Add new office
      setOffices(prev => [
        ...prev,
        { ...formData, id: Math.max(...prev.map(o => o.id), 0) + 1 }
      ]);
    }
    
    setIsModalOpen(false);
    setCurrentOffice(null);
    setFormData({
      region: '',
      address: '',
      phone: '',
      email: '',
      hours: ''
    });
  };

  const handleEdit = (office) => {
    setCurrentOffice(office);
    setFormData({
      region: office.region,
      address: office.address,
      phone: office.phone,
      email: office.email,
      hours: office.hours
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this office?')) {
      setOffices(prev => prev.filter(office => office.id !== id));
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64">
    <div className="spinner"></div>
  </div>;
  
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded-lg">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Regional Offices</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <SafeIcon icon={FiPlus} className="mr-2" />
          Add Office
        </button>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offices.map((office) => (
          <div
            key={office.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{office.region}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <SafeIcon icon={FiMapPin} className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">{office.address}</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="h-4 w-4 text-gray-400 mr-2" />
                <a href={`tel:${office.phone}`} className="text-sm text-blue-600 hover:text-blue-700">
                  {office.phone}
                </a>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="h-4 w-4 text-gray-400 mr-2" />
                <a href={`mailto:${office.email}`} className="text-sm text-blue-600 hover:text-blue-700">
                  {office.email}
                </a>
              </div>
              <div className="flex items-start">
                <span className="text-sm text-gray-600">Hours: {office.hours}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => handleEdit(office)}
                className="text-blue-600 hover:text-blue-800"
              >
                <SafeIcon icon={FiEdit2} />
              </button>
              <button
                onClick={() => handleDelete(office.id)}
                className="text-red-600 hover:text-red-800"
              >
                <SafeIcon icon={FiTrash2} />
              </button>
            </div>
          </div>
        ))}

        {offices.length === 0 && (
          <div className="col-span-3 bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">No regional offices found. Add your first office using the button above.</p>
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
                  {currentOffice ? 'Edit Regional Office' : 'Add New Regional Office'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentOffice(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <SafeIcon icon={FiX} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Region
                  </label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
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
                    Office Hours
                  </label>
                  <input
                    type="text"
                    name="hours"
                    value={formData.hours}
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
                      setCurrentOffice(null);
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

export default OfficesManager;