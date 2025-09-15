import BlogGridWithSidebar from '@/components/BlogGridWithSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Grid Page | Supra Gaming | Online Shop',
  description: 'This is Blog Grid Page for Supra Gaming Template',
  // other metadata
};

const BlogGridWithSidebarPage = () => {
  return (
    <>
      <BlogGridWithSidebar />
    </>
  );
};

export default BlogGridWithSidebarPage;
