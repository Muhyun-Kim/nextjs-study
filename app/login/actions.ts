export async function login(data: FormData) {
  "use server";
  console.log(data.get("email"), data.get("password"));
  console.log("hello server");
}
