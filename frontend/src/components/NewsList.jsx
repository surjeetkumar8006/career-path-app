import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NewsList({ stories }) {
  if (!stories || stories.length === 0) {
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Latest Tech News</CardTitle>
        </CardHeader>
        <CardContent>No news available.</CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Latest Tech News</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {stories.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg bg-gray-50 space-y-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline text-lg"
            >
              {item.title}
            </a>

            <p className="text-sm text-gray-600">
              By <span className="font-medium">{item.by}</span> | Score: {item.score}
            </p>

            <p className="text-xs text-gray-500">
              Type: {item.type}  
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
