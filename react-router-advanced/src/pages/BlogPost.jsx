import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams(); 
  return (
    <div>
      <h1>Blog Post Detail Page</h1>
      <p>Currently viewing blog post with ID: {id}</p>
    </div>
  );
}
