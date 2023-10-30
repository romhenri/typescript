export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);

    if(!response.ok) 
    throw new Error("Error:" + response.status)

    const json = await response.json()
    await console.log(json);
    return json

  } catch (error) {
    console.log(error);
    return null
  }
}