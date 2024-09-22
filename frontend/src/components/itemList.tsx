import { useEffect, useState } from "react";
import image1 from '../../img/1.png';

interface Guide {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
}

export const GuideList = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/guide/findAll")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setGuides(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="p-4">
      {error && <div className="text-red-500">{error}</div>}
      {guides.map((guide) => (
        <div
          key={guide.id}
          className="flex items-center p-2 border-b border-gray-700"
        >
          <img
            src={image1}
            alt={guide.title}
            className="mr-4 h-20 w-16"
          />
          <div>
            <h2 className="font-bold">{guide.title}</h2>
            <p className="text-sm">{guide.subtitle}</p>
            <span className="text-xs text-gray-500">{guide.tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
