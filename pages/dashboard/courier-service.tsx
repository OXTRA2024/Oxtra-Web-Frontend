import React from 'react';
import Dashboard from '@/components/Dashboard/Dashboard';
import DashboardLayout from '@/components/Layouts/DashboardLayout';
import Typography from '@/components/Typography';
import Button from '@/components/Button';

const CourierService = () => {
  const activePage = 'Courier service';
  return (
    <DashboardLayout activePage={activePage}>
      <div className='bg-brandGray-200 p-8 rounded-xl w-[840px]'>
        <div className='mb-8'>
          <Typography as='p' font='font-gordita-medium'>
            Courier service
          </Typography>
        </div>
        <div className='flex mb-8 gap-[91px] pl-[59px] pb-[10px] font-gordita-regular text-sm border-b border-[#D4D6D8]'>
          <span>Pending</span>
          <span className='text-brandGray-100'>Completed</span>
        </div>
        <div className='bg-white p-4 rounded-lg inline-flex'>
          courier service
        </div>
      </div>
      <div className='mt-8 max-w-[480px] mx-auto'>
        <Button
          bg='bg-brandGreen-300'
          hover='hover:bg-brandGray-200'
          textColor='text-white'
          width={true}
          size='text-sm'
        >
          Send a package
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default CourierService;
