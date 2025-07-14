import React, { useState } from 'react';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiPlus, FiEdit2, FiTrash2, FiSearch, 
  FiSave, FiX, FiUpload, FiBook, FiFile 
} = FiIcons;

const ResourcesManager = () => {
  // Mock resources data
  const initialResources = [
    {
      id: 1,
      title: 'Marriage and Divorce Procedures',
      description: 'Complete guide to marriage registration and divorce proceedings under Ethiopian law',
      category: 'family',
      type: 'Guide',
      languages: ['Amharic', 'English'],
      file_url: '#'
    },
    {
      id: 2,
      title: 'Criminal Court Procedures',
      description: 'Understanding the criminal justice process in Ethiopia',
      category: 'criminal',
      type: 'Manual',
      languages: ['Amharic', 'English'],
      file_url: '#'
    }
  ];

  const [resources, setResources] = useState(initialResources);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentResource, setCurrentResource] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    languages: [],
    file_url: ''
  });

  const categories = [
    { id: 'family', name: 'Family Law' },
    { id: 'criminal', name: 'Criminal Law' },
    { id: 'civil', name: 'Civil Rights' },
    { id: 'business', name: 'Business Law' },
    { id: 'property', name: 'Property Law' },
    { id: 'labor', name: 'Labor Law' }
  ];

  const resourceTypes = [
    'Guide', 'Manual', 'Article', 'Handbook', 'Form'
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

  const handleFileUpload = (e) => {
    // Mock file upload
    setFormData(prev => ({
      ...prev,
      file_url: '#'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (currentResource) {
      // Edit existing resource
      setResources(prev => 
        prev.map(resource => 
          resource.id === currentResource.id ? { ...formData, id: resource.id } : resource
        )
      );
    } else {
      // Add new resource
      setResources(prev => [
        ...prev,
        { ...formData, id: Math.max(...prev.map(r => r.id), 0) + 1 }
      ]);
    }
    
    setIsModalOpen(false);
    setCurrentResource(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      type: '',
      languages: [],
      file_url: ''
    });
  };

  const handleEdit = (resource) => {
    setCurrentResource(resource);
    setFormData({
      title: resource.title,
      description: resource.description,
      category: resource.category,
      type: resource.type,
      languages: resource.languages || [],
      file_url: resource.file_url
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      setResources(prev => prev.filter(resource => resource.id !== id));
    }
  };

  const filteredResources = resources.filter(resource =>
    resource.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="flex justify-center items-center h-64">
    <div className="spinner"></div>
  </div>;
  
  if (error) return <div className="bg-red-50 text-red-600 p-4 rounded-lg">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Legal Resources</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <SafeIcon icon={FiPlus} className="mr-2" />
          Add Resource
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
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Resources List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Languages
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredResources.length > 0 ? filteredResources.map((resource) => (
              <tr key={resource.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 rounded-lg">
                      <SafeIcon icon={FiBook} className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-1">{resource.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {categories.find(c => c.id === resource.category)?.name || resource.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {resource.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {resource.languages?.join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => handleEdit(resource)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <SafeIcon icon={FiEdit2} />
                    </button>
                    <button
                      onClick={() => handleDelete(resource.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <SafeIcon icon={FiTrash2} />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No resources found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {currentResource ? 'Edit Resource' : 'Add New Resource'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentResource(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <SafeIcon icon={FiX} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                    >
                      <option value="">Select Type</option>
                      {resourceTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    Resource File
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="mt-1 block w-full"
                    />
                    {formData.file_url && (
                      <a
                        href={formData.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <SafeIcon icon={FiFile} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setCurrentResource(null);
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

export default ResourcesManager;