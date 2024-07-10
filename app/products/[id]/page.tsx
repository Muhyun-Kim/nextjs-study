async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 300000));
}

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct();
  return <h1>product detail{id}</h1>;
}
