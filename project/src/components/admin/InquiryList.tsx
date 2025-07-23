import React, { useState } from 'react';
import { Eye, EyeOff, Calendar, Mail, Phone } from 'lucide-react';
import { Inquiry } from '../../types';
import { markInquiryAsRead } from '../../data/inquiryData';
import Button from '../common/Button';

interface InquiryListProps {
  inquiries: Inquiry[];
  onRefresh: () => void;
}

const InquiryList: React.FC<InquiryListProps> = ({ inquiries, onRefresh }) => {
  const [expandedInquiry, setExpandedInquiry] = useState<string | null>(null);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const toggleExpand = (id: string) => {
    if (expandedInquiry === id) {
      setExpandedInquiry(null);
    } else {
      setExpandedInquiry(id);
      
      // If inquiry is unread, mark it as read
      const inquiry = inquiries.find(inq => inq.id === id);
      if (inquiry && !inquiry.read) {
        markInquiryAsRead(id);
        onRefresh();
      }
    }
  };
  
  if (inquiries.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-500 text-lg">No inquiries found.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Material Interest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <React.Fragment key={inquiry.id}>
                <tr className={`${inquiry.read ? 'bg-white' : 'bg-blue-50'} hover:bg-gray-50`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {inquiry.read ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <EyeOff className="mr-1 h-3 w-3" /> Read
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Eye className="mr-1 h-3 w-3" /> New
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{inquiry.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-500 mb-1">
                      <Mail className="h-4 w-4 mr-1" /> {inquiry.email}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Phone className="h-4 w-4 mr-1" /> {inquiry.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {inquiry.materialInterest ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {inquiry.materialInterest}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(inquiry.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExpand(inquiry.id)}
                    >
                      {expandedInquiry === inquiry.id ? 'Hide' : 'View'}
                    </Button>
                  </td>
                </tr>
                {expandedInquiry === inquiry.id && (
                  <tr className="bg-gray-50">
                    <td colSpan={6} className="px-6 py-4">
                      <div className="text-sm text-gray-900 whitespace-pre-wrap">
                        <h4 className="font-medium mb-2">Message:</h4>
                        <p className="bg-white p-3 rounded border border-gray-200">
                          {inquiry.message}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryList;