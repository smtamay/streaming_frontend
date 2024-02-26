'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import DailyActivity from '@/app/(DashboardLayout)/components/dashboard/DailyActivity';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import BlogCard from '@/app/(DashboardLayout)/components/dashboard/Blog';


import { useGetListStreamingPlataformsQuery } from '@/graphql/__generated__/graphql';

const Dashboard = () => {
  const { data, loading, error } = useGetListStreamingPlataformsQuery();

  
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={3}>
    <div>{
      data && data.getListStreamingPlataforms && data.getListStreamingPlataforms.map(
        (item:any)=>(
          <div key={item.id}>{item.name}</div>
        )
      )
      }</div>


      {/* <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
      
        <Grid item xs={12} lg={4}>
          <DailyActivity />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={12}>
          <BlogCard />
        </Grid>
      </Grid> */}
    </Box>
  </PageContainer>
  )
}

export default Dashboard;
