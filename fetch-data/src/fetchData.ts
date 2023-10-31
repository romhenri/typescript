export default async function fetchData<Interface>(
  url: string
  ): Promise<Interface | null> {
  try {
    const response = await fetch(url);

    if(!response.ok) 
    throw new Error("Error:" + response.status)

    const json = await response.json()
    // await console.log(json);
    return json

  } catch (error) {
    // console.log(error);
    return null
  }
}