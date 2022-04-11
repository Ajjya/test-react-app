import Blog from 'components/Blog';
import withSubscription from 'components/withSubscription';
import {getBlog} from 'services/api/blogApi';

const BlogWithSubscription = withSubscription(
  Blog,
  async () => await getBlog()
);

export default BlogWithSubscription;