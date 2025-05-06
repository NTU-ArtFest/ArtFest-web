import Exhibition from "@/components/exhibition/exhib";
import { useParams, useSearchParams } from 'next/navigation';

export default function ExhibitionDetailpPage() {
    const { puzzle } = useParams();              // 動態路由拿到 puzzle
    const params = useSearchParams();
    return (
    //   <Exhibition puzzle={puzzle}/>
    <div>nice</div>
    );
  }

  