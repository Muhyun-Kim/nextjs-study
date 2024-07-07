async function getProduct() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Product");
    }, 2000);
  });
}

export default async function Product() {
  const product = await getProduct();
  return (
    <div>
      <h1 className="text-white text-4xl">Product!</h1>
    </div>
  );
}
