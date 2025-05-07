import Exhibition from "@/components/exhibition/exhib";
import { headers } from 'next/headers';

export default async function ExhibitionDetailPage({ params }: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const url = `${protocol}://${host}/api/exhibition/${id}`;
  const res = await fetch(url, { cache: 'no-store' });
  console.log(url)
  if (!res.ok) {
    return <div>找不到展覽資料</div>;
  }

  const data = await res.json();
  return <Exhibition data={data} />;
}