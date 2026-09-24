/**
 * Test
 *  */
export const test_1 = async () => {
  console.log('>')

  /*/
  try {
    const url = ""
    const postBody = {
      page: 1,
    }
    // console.log("body:", JSON.stringify(postBody))
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(postBody),
    });

    const jsonData = await response.json()
    console.log(JSON.stringify(jsonData))
  } catch (err: unknown) {
    const e = err as Error
    console.log(e.message)
  } finally {}
  /*/
}
