export default async function Page(props: {
     params: Promise<{ slug: string }>;
    searchParams: { [key: string]: string | string[] | undefined };}) {
        const params = await props.params;
        const searchParams = await props.searchParams;
  return (
    <div>
      <h1>PageDemo avec slug</h1>
      <p><strong>Slug:</strong> {params.slug}</p>
      <p><strong>Search Params:</strong> {JSON.stringify(searchParams)}</p>
      <h1>{searchParams?.greeting || "Hello!"}</h1>
      
    </div>
  );
}