import Exhibition from "@/components/exhibition/exhib";
import { headers } from 'next/headers';

export default async function ExhibitionDetailPage({ params }: {params: {id:string}}) {
  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${protocol}://${host}/api/exhibition/${params.id}`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return <Exhibition data={data} />;
}