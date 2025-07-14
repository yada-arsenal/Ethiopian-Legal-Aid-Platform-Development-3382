import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    directory: 'Legal Directory',
    legalInfo: 'Legal Information',
    emergency: 'Emergency Contacts',
    about: 'About Us',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'KIRKOS LegalAid Center',
    heroSubtitle: 'Comprehensive Legal Aid Services for Ethiopian Communities',
    heroDescription: 'Access legal resources, find qualified attorneys, and get emergency legal assistance in multiple languages.',
    getStarted: 'Get Started',
    
    // Services
    services: 'Our Services',
    legalDirectoryTitle: 'Legal Directory',
    legalDirectoryDesc: 'Find qualified lawyers and legal service providers in your area',
    legalInfoTitle: 'Legal Information',
    legalInfoDesc: 'Access comprehensive legal guides and resources',
    emergencyTitle: 'Emergency Contacts',
    emergencyDesc: '24/7 emergency legal assistance and hotlines',
    
    // Directory
    searchLawyers: 'Search Lawyers',
    searchPlaceholder: 'Search by name, specialization, or location...',
    allSpecializations: 'All Specializations',
    allLocations: 'All Locations',
    
    // Legal Info
    legalGuides: 'Legal Guides',
    familyLaw: 'Family Law',
    criminalLaw: 'Criminal Law',
    civilRights: 'Civil Rights',
    businessLaw: 'Business Law',
    propertyLaw: 'Property Law',
    laborLaw: 'Labor Law',
    
    // Emergency
    emergencyContacts: 'Emergency Legal Contacts',
    emergencyHotline: 'Emergency Legal Hotline',
    available24: 'Available 24/7',
    
    // Common
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    specialization: 'Specialization',
    location: 'Location',
    readMore: 'Read More',
    callNow: 'Call Now',
    
    // Footer
    footerDescription: 'Providing accessible legal aid services to Ethiopian communities with multilingual support and comprehensive resources.',
    quickLinks: 'Quick Links',
    legalResources: 'Legal Resources',
    connectWithUs: 'Connect With Us',
    allRightsReserved: 'All rights reserved.'
  },
  am: {
    // Navigation
    home: 'መነሻ',
    directory: 'የሕግ ዳይሬክተሪ',
    legalInfo: 'የሕግ መረጃ',
    emergency: 'የአስቸኳይ ግንኙነት',
    about: 'ስለ እኛ',
    contact: 'ግንኙነት',
    
    // Home page
    heroTitle: 'ኪርኮስ የሕግ እርዳታ ማዕከል',
    heroSubtitle: 'ለኢትዮጵያ ማህበረሰቦች ሁሉንም አቀፍ የሕግ እርዳታ አገልግሎቶች',
    heroDescription: 'የሕግ ሀብቶችን ያግኙ፣ የተመረጡ ጠበቆችን ያግኙ፣ እና በብዙ ቋንቋዎች የአስቸኳይ ሕግ እርዳታ ያግኙ።',
    getStarted: 'ጀምር',
    
    // Services
    services: 'አገልግሎቶቻችን',
    legalDirectoryTitle: 'የሕግ ዳይሬክተሪ',
    legalDirectoryDesc: 'በአካባቢዎ ያሉ የተመረጡ ጠበቆች እና የሕግ አገልግሎት ሰጪዎችን ያግኙ',
    legalInfoTitle: 'የሕግ መረጃ',
    legalInfoDesc: 'ሁሉንም አቀፍ የሕግ መመሪያዎች እና ሀብቶች ያግኙ',
    emergencyTitle: 'የአስቸኳይ ግንኙነት',
    emergencyDesc: '24/7 የአስቸኳይ ሕግ እርዳታ እና ሆትላይኖች',
    
    // Directory
    searchLawyers: 'ጠበቆችን ፈልግ',
    searchPlaceholder: 'በስም፣ ስፔሻላይዜሽን፣ ወይም ቦታ ፈልግ...',
    allSpecializations: 'ሁሉም ስፔሻላይዜሽኖች',
    allLocations: 'ሁሉም ቦታዎች',
    
    // Legal Info
    legalGuides: 'የሕግ መመሪያዎች',
    familyLaw: 'የቤተሰብ ሕግ',
    criminalLaw: 'የወንጀል ሕግ',
    civilRights: 'የሲቪል መብቶች',
    businessLaw: 'የንግድ ሕግ',
    propertyLaw: 'የንብረት ሕግ',
    laborLaw: 'የሰራተኛ ሕግ',
    
    // Emergency
    emergencyContacts: 'የአስቸኳይ የሕግ ግንኙነቶች',
    emergencyHotline: 'የአስቸኳይ የሕግ ሆትላይን',
    available24: '24/7 ይገኛል',
    
    // Common
    phone: 'ስልክ',
    email: 'ኢሜይል',
    address: 'አድራሻ',
    specialization: 'ስፔሻላይዜሽን',
    location: 'ቦታ',
    readMore: 'ተጨማሪ አንብብ',
    callNow: 'አሁን ደውል',
    
    // Footer
    footerDescription: 'ለኢትዮጵያ ማህበረሰቦች ተደራሽ የሕግ እርዳታ አገልግሎቶችን በብዙ ቋንቋ ድጋፍ እና ሁሉንም አቀፍ ሀብቶች ይሰጣል።',
    quickLinks: 'ፈጣን ማገናኛዎች',
    legalResources: 'የሕግ ሀብቶች',
    connectWithUs: 'ከእኛ ጋር ተገናኝ',
    allRightsReserved: 'ሁሉም መብቶች የተጠበቁ ናቸው።'
  },
  or: {
    // Navigation
    home: 'Mana',
    directory: 'Galmee Seeraa',
    legalInfo: 'Odeeffannoo Seeraa',
    emergency: 'Qunnamtii Ariifataa',
    about: 'Waaʼee Keenya',
    contact: 'Qunnamtii',
    
    // Home page
    heroTitle: 'Buufata Gargaarsa Seeraa KIRKOS',
    heroSubtitle: 'Tajaajila Gargaarsa Seeraa Guutuu Hawaasa Itoophiyaatiif',
    heroDescription: 'Qabeenya seeraa argadhu, laammiilee filataaman argadhu, akkasumas gargaarsa seeraa ariifataa afaanota hedduudhaan argadhu.',
    getStarted: 'Jalqabi',
    
    // Services
    services: 'Tajaajiloota Keenya',
    legalDirectoryTitle: 'Galmee Seeraa',
    legalDirectoryDesc: 'Laammiilee filataaman fi dhiyeessituu tajaajila seeraa naannoo keessan keessaa argadhu',
    legalInfoTitle: 'Odeeffannoo Seeraa',
    legalInfoDesc: 'Qajeelfama seeraa guutuu fi qabeenya argadhu',
    emergencyTitle: 'Qunnamtii Ariifataa',
    emergencyDesc: 'Gargaarsa seeraa ariifataa 24/7 fi saddeettoota',
    
    // Directory
    searchLawyers: 'Laammiilee Barbaadi',
    searchPlaceholder: 'Maqaa, addabaasuu, ykn bakka...',
    allSpecializations: 'Addabaasuu Hunda',
    allLocations: 'Bakka Hunda',
    
    // Legal Info
    legalGuides: 'Qajeelfama Seeraa',
    familyLaw: 'Seera Maatii',
    criminalLaw: 'Seera Yakka',
    civilRights: 'Mirga Lammataa',
    businessLaw: 'Seera Daldalaa',
    propertyLaw: 'Seera Qabeenya',
    laborLaw: 'Seera Hojjetaa',
    
    // Emergency
    emergencyContacts: 'Qunnamtii Seeraa Ariifataa',
    emergencyHotline: 'Saddeetaa Seeraa Ariifataa',
    available24: 'Sa 24/7 ni jira',
    
    // Common
    phone: 'Bilbila',
    email: 'Imeelii',
    address: 'Teessoo',
    specialization: 'Addabaasuu',
    location: 'Bakka',
    readMore: 'Dabalataan Dubbisi',
    callNow: 'Amma Bilbili',
    
    // Footer
    footerDescription: 'Hawaasa Itoophiyaatiif tajaajila gargaarsa seeraa dhaqqabaa deeggarsa afaan hedduudhaan fi qabeenya guutuudhaan ni kenna.',
    quickLinks: 'Hidhaannoo Saffisaa',
    legalResources: 'Qabeenya Seeraa',
    connectWithUs: 'Nu Wajjin Qunnamaa',
    allRightsReserved: 'Mirgi hundi eegameera.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  
  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};