import CreateProductAction from "./products.action";

export default function Page() {
  return (
    <div>
      <h1>New Product</h1>
      <form action={CreateProductAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />
        <br />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description"/>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}