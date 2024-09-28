import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACEID,
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const tmpProjects = response.items.map((item) => {
        const id = item.sys.id;
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });
      setProjects(tmpProjects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

//.then((response) => console.log(response));
