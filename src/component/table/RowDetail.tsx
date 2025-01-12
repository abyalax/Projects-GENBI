import { News } from "@/services/news";
import { formatDate } from "@/utils/convert-date";
import Image from "next/image";

export default function RowDetailView({ news }: { news: News }) {
  return (
    <div className="flex justify-center items-center h-40 gap-4 p-2">

      <div className="w-40">
        {news.image && (
            <Image src={news.image} alt="" height={100} width={100} />
        )}
      </div>
      <div className="w-1/2 text-center items-center">
        <div>
          <p>Name: {news.title}</p>
          <p>Age : {news.description}</p>
          <p>DOB: {formatDate(news.date)}</p>
        </div>
      </div>
    </div>

  );
}
